# Windows API 调用笔记：DsGetDomainControllerInfoW

DsGetDomainControllerInfoW 常用于 域控发现、复制元数据和目录服务辅助操作。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: ntdsapi.dll; Header: ntdsapi.h
```

```cpp
auto result = DsGetDomainControllerInfoW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ntdsapi.dll | findstr /i DsGetDomainControllerInfoW
```

## 记录字段

```text
domain controller, naming context, object DN, invocation id, error code
```

## 复核点

```text
目录服务接口要记录 DC 名称和命名上下文，跨站点环境里差异会很明显
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
