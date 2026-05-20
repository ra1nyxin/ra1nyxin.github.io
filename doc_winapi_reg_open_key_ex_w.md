# Windows API 调用笔记：RegOpenKeyExW

RegOpenKeyExW 用于打开注册表项。它常见于配置读取、持久化排查、策略检查、软件清单、服务配置和 COM 注册信息分析。注册表路径需要同时考虑根键、视图重定向和调用身份。

## 入口

```text
DLL: advapi32.dll; Header: winreg.h
```

```cpp
LSTATUS st = RegOpenKeyExW(HKEY_LOCAL_MACHINE, subKey, 0, KEY_READ, &key);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i RegOpenKeyExW
```

## 参数关注

`hKey` 和 `lpSubKey` 要拼成完整路径保存。`samDesired` 决定访问权限和 32/64 位视图，`KEY_WOW64_32KEY`、`KEY_WOW64_64KEY` 会影响实际打开位置。服务进程和普通用户进程看到的 HKCU 也可能不同。

## 返回与错误

返回值是 `LSTATUS`，不用 GetLastError 作为主要来源。`ERROR_FILE_NOT_FOUND` 表示项不存在，`ERROR_ACCESS_DENIED` 表示权限不足，二者含义差别很大。

```cpp
LSTATUS st = RegOpenKeyExW(root, subKey, 0, access, &key);
```

## 复核点

记录完整路径、根键、访问掩码、WOW64 视图、调用身份、完整性级别和返回码。排查持久化时，需要继续查看 Run、Services、Winlogon、IFEO、AppInit_DLLs、COM、Shell Extensions、Policies 等相关位置。
