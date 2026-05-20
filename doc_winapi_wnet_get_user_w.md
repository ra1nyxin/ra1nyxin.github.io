# Windows API 调用笔记：WNetGetUserW

WNetGetUserW 常用于 网络驱动器、UNC 连接和凭据提示链路复核。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: mpr.dll; Header: winnetwk.h
```

```cpp
auto result = WNetGetUserW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\mpr.dll | findstr /i WNetGetUserW
```

## 记录字段

```text
local name, remote name, provider, flags, username, result code
```

## 复核点

```text
网络连接要写清 provider 和 remote name，映射盘符只是表象
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
