# Windows API 调用笔记：SamConnect

SamConnect 常用于 SAMR 本地账号、组、域对象和 RID 信息复核。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: samlib.dll; Header: ntsam.h / phnt headers
```

```cpp
auto result = SamConnect(...);
```

```powershell
dumpbin /exports C:\Windows\System32\samlib.dll | findstr /i SamConnect
```

## 记录字段

```text
server handle, domain SID, RID, account name, access mask, NTSTATUS
```

## 复核点

```text
SAM 接口偏底层，记录时要把域 SID、RID 和访问掩码写全
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
