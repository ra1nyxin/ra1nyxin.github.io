# Windows API 调用笔记：InternetReadFile

InternetReadFile 我会放在 用户态 HTTP 会话、代理配置和下载链路排查 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: wininet.dll; Header: wininet.h
```

```cpp
auto result = InternetReadFile(...);
```

```powershell
dumpbin /exports C:\Windows\System32\wininet.dll | findstr /i InternetReadFile
```

## 我会记录

```text
字段: agent, proxy, host, request flags, status code, bytes read
```

```text
复核: WinINet 受用户配置影响更明显，适合看桌面应用的网络行为
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
