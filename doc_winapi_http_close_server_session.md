# Windows API 调用笔记：HttpCloseServerSession

HttpCloseServerSession 常用于 HTTP Server API URL 监听、请求队列和内核态 HTTP 配置复核。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: httpapi.dll; Header: http.h
```

```cpp
auto result = HttpCloseServerSession(...);
```

```powershell
dumpbin /exports C:\Windows\System32\httpapi.dll | findstr /i HttpCloseServerSession
```

## 记录字段

```text
server session, url group, request queue, URL prefix, status code
```

## 复核点

```text
HTTP.sys 配置要记录 URL prefix 和 request queue，端口监听只能说明一部分
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
