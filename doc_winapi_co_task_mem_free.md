# Windows API 调用笔记：CoTaskMemFree

CoTaskMemFree 经常落在COM、WMI、属性系统和自动化对象这类位置。这类接口通常位于 COM 初始化、对象创建、代理安全、WMI 查询、属性读取和自动化调用链路里。判断时要同时记录 CLSID、IID、ProgID、远程主机、认证级别、模拟级别和调用线程模型。

## 入口

```text
DLL: comsvcs.dll / ole32.dll; Header: comadmin.h / objbase.h
```

```cpp
auto result = CoTaskMemFree(...);
```

```powershell
dumpbin /exports C:\Windows\System32\comsvcs.dll | findstr /i CoTaskMemFree
```

## 参数与上下文

COM 接口要写清 apartment 模型、CoInitializeEx 标志、CoInitializeSecurity 设置、CoCreateInstance 的 CLSCTX、远程激活参数和代理 blanket。WMI 相关接口要保留 namespace、query、method、class、moniker 和返回枚举状态。

这是清理或释放类接口，重点记录释放对象来源、释放时机、是否重复释放和失败后的补救路径。需要确认释放函数与分配函数匹配。

## 返回与错误

COM 返回 HRESULT，不能用 GetLastError 解释主要结果。对象生命周期需要关注 AddRef/Release、CoTaskMemFree、VariantClear 和 BSTR 释放。

```cpp
HRESULT hr = result;
```

## 复核点

复查时，把对象标识、进程身份、RPC 认证、远程端点和查询内容放在同一条记录里。WMI、DCOM、Task Scheduler 相关链路还要关联事件日志和网络连接。
