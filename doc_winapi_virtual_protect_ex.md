# Windows API 调用笔记：VirtualProtectEx

VirtualProtectEx 用于修改指定进程地址空间中一段内存的保护属性。常见落点包括调试、热补丁、JIT、兼容层和安全研究工具。单次改保护不等同于恶意行为，但从可写变可执行的转换需要重点复核。

## 入口

```text
DLL: kernel32.dll; Header: memoryapi.h
```

```cpp
BOOL ok = VirtualProtectEx(process, base, size, PAGE_EXECUTE_READ, &oldProtect);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i VirtualProtectEx
```

## 参数关注

`hProcess` 通常需要 `PROCESS_VM_OPERATION`。`lpAddress` 和 `dwSize` 要按页边界理解，实际影响范围可能覆盖更多字节。`flNewProtect` 要和旧保护一起记录，单独保存新保护会丢失行为变化。

常见敏感变化包括 `PAGE_READWRITE` 到 `PAGE_EXECUTE_READ`、`PAGE_EXECUTE_READWRITE`、去掉 guard page、修改映像段保护。对 JIT 和浏览器进程，需要结合模块、线程栈和调用栈判断。

## 返回与错误

成功后 `lpflOldProtect` 保存旧保护。失败常见原因是地址无效、区域未提交、权限不足或跨越了不兼容的内存区域。

```cpp
DWORD err = ok ? ERROR_SUCCESS : GetLastError();
```

## 复核点

记录目标 PID、基址、大小、旧保护、新保护、内存类型、关联模块和调用栈。若改保护前后出现写内存、解密、解压、线程恢复或异常处理器注册，要在同一段时间线中分析。
