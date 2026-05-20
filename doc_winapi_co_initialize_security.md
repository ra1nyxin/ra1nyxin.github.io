# Windows API 调用笔记：CoInitializeSecurity

CoInitializeSecurity 多见于 COM、WMI、属性系统和自动化对象场景。这类接口通常位于 COM 初始化、对象创建、代理安全、WMI 查询、属性读取和自动化调用链路里。判断时要同时记录 CLSID、IID、ProgID、远程主机、认证级别、模拟级别和调用线程模型。

## 入口

```text
DLL: ole32.dll; Header: objbase.h / combaseapi.h
```

```cpp
auto result = CoInitializeSecurity(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ole32.dll | findstr /i CoInitializeSecurity
```

## 参数与上下文

COM 接口要写清 apartment 模型、CoInitializeEx 标志、CoInitializeSecurity 设置、CoCreateInstance 的 CLSCTX、远程激活参数和代理 blanket。WMI 相关接口要保留 namespace、query、method、class、moniker 和返回枚举状态。

这是建立句柄、上下文、映射或连接的入口，重点记录目标对象、访问掩码、创建标志、命名空间和后续释放接口。句柄生命周期通常比单次返回值更能解释现场问题。

## 返回与错误

COM 返回 HRESULT，不能用 GetLastError 解释主要结果。对象生命周期需要关注 AddRef/Release、CoTaskMemFree、VariantClear 和 BSTR 释放。

```cpp
HRESULT hr = result;
```

## 复核点

复核时，将对象标识、进程身份、RPC 认证、远程端点和查询内容放在同一条记录里。WMI、DCOM、Task Scheduler 相关链路还要关联事件日志和网络连接。
