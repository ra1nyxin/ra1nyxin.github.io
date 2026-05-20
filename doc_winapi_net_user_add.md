# Windows API 调用笔记：NetUserAdd

NetUserAdd 我会放在 域和本机账号、共享、会话、时间和策略信息复核 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: netapi32.dll; Header: lmaccess.h / lmshare.h / lmserver.h
```

```cpp
auto result = NetUserAdd(...);
```

```powershell
dumpbin /exports C:\Windows\System32\netapi32.dll | findstr /i NetUserAdd
```

## 记录字段

```text
server, domain, account, info level, resume handle, NET_API_STATUS
```

## 复核点

```text
NetAPI 的 info level 很关键，同一个函数不同 level 返回的信息差异很大
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
