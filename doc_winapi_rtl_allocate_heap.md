# Windows API 调用笔记：RtlAllocateHeap

RtlAllocateHeap 常用于 RTL 字符串、路径、SID、堆和版本辅助函数复核。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: ntdll.dll; Header: winternl.h / phnt headers
```

```cpp
auto result = RtlAllocateHeap(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ntdll.dll | findstr /i RtlAllocateHeap
```

## 记录字段

```text
UNICODE_STRING, NT path, heap handle, flags, status, converted value
```

## 复核点

```text
RTL 辅助函数常见于逆向和底层工具，输入输出结构要比返回值更重要
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
