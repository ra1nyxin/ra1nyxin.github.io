# Windows API 调用笔记：TdhGetEventMapInformation

TdhGetEventMapInformation 放到事件日志、ETW 和 Trace Session 排查里看，核心语义就是订阅、查询、格式化、写入或消费 Windows 事件。这类调用常出现在检测工具、审计代理、EDR、诊断组件和系统服务里。关键点是 Provider、Channel、Query、Session 名称、事件 ID、Level、Keyword、ActivityId 和返回位置。

## 入口

```text
DLL: tdh.dll; Header: tdh.h
```

```cpp
auto result = TdhGetEventMapInformation(...);
```

```powershell
dumpbin /exports C:\Windows\System32\tdh.dll | findstr /i TdhGetEventMapInformation
```

## 参数与上下文

事件接口的参数通常包含句柄、查询字符串、渲染模式、缓冲区和回调。查询类接口要保留 XPath 或 structured query；订阅类接口要写清起点、书签和回调线程；ETW 控制类接口要记录 session name、provider GUID、enable flags、level 和 match any/all keyword。

这类调用经常会先拿长度再取数据，缓冲区不足不一定是异常。记录最终成功读取的内容和前面的探测过程更有价值。

## 返回与错误

Evt* 接口多用 GetLastError，TDH 接口常返回 Win32 错误码，ETW 控制接口也有自己的状态语义。缓冲区不足是正常流程的一部分，不应被当成最终失败。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

整理证据时，把事件来源、订阅范围、过滤条件、时间窗口和权限放在同一条记录里。涉及安全日志、Sysmon、自定义 Provider 或实时 Trace 时，还要保存丢事件、权限不足和 Provider 未启用的证据。
