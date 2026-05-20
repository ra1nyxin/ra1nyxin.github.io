# Windows API 调用笔记：InternetOpenW

InternetOpenW 常用于 用户态 HTTP 会话、代理配置和下载链路排查。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: wininet.dll; Header: wininet.h
```

```cpp
auto result = InternetOpenW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\wininet.dll | findstr /i InternetOpenW
```

## 记录字段

```text
字段: agent, proxy, host, request flags, status code, bytes read
```

```text
复核: WinINet 受用户配置影响更明显，适合看桌面应用的网络行为
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
