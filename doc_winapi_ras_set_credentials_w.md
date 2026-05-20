# Windows API 调用笔记：RasSetCredentialsW

RasSetCredentialsW 常用于 拨号/VPN 配置、连接状态和电话簿条目核对。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: rasapi32.dll; Header: ras.h
```

```cpp
auto result = RasSetCredentialsW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\rasapi32.dll | findstr /i RasSetCredentialsW
```

## 记录字段

```text
entry name, phonebook path, connection handle, device type, status
```

## 复核点

```text
RAS 相关结果要区分系统电话簿和用户电话簿，路径不同结论会变
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
