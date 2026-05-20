# Windows API 调用笔记：DeviceIoControl

DeviceIoControl 用于向设备、驱动、卷、文件系统和部分系统组件发送控制码。安全分析里看到这个接口时，重点不在函数名，而在目标句柄、IOCTL 控制码、输入输出缓冲区和调用者权限。

## 入口

```text
DLL: kernel32.dll; Header: ioapiset.h
```

```cpp
BOOL ok = DeviceIoControl(device, ioctl, inBuf, inLen, outBuf, outLen, &bytesReturned, nullptr);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i DeviceIoControl
```

## 参数关注

`hDevice` 通常来自 CreateFileW。需要记录打开的设备路径、访问掩码和共享模式。`dwIoControlCode` 需要拆出设备类型、功能号、传输方式和访问要求，单独保存十六进制值。

输入输出缓冲区要记录长度、结构体版本、关键字段和返回字节数。涉及内核驱动或厂商驱动时，结构体定义可能来自 SDK、符号、样本逆向或驱动头文件，来源必须写清楚。

```cpp
DWORD method = ioctl & 0x3;
```

## 返回与错误

同步调用失败时读取 `GetLastError()`；异步调用配合 OVERLAPPED 时，`ERROR_IO_PENDING` 代表请求已经提交。`bytesReturned` 只说明输出字节数，不能代替结构体字段校验。

## 复核点

记录设备路径、驱动文件、签名状态、IOCTL、输入长度、输出长度、调用身份和错误码。排查漏洞或异常行为时，要额外确认访问控制、缓冲区边界、内核返回状态和同一进程后续调用序列。
