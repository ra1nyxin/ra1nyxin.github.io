# Windows API 调用笔记：CoCreateInstanceEx

CoCreateInstanceEx 我会放在 COM+ Catalog、组件注册和 COM 安全边界复核 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: comsvcs.dll / ole32.dll; Header: comadmin.h / objbase.h
```

```cpp
auto result = CoCreateInstanceEx(...);
```

```powershell
dumpbin /exports C:\Windows\System32\comsvcs.dll | findstr /i CoCreateInstanceEx
```

## 记录字段

```text
catalog collection, application name, CLSID, AppID, identity, HRESULT
```

## 复核点

```text
COM+ 配置要写 CLSID/AppID 和运行身份，显示名称经常重复
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
