# Windows API 调用笔记：NtNotifyChangeKey

NtNotifyChangeKey 我会放在 NT 注册表、Key 对象和事务性配置变化检查 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: ntdll.dll; Header: winternl.h / phnt headers
```

```cpp
auto result = NtNotifyChangeKey(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ntdll.dll | findstr /i NtNotifyChangeKey
```

## 记录字段

```text
key handle, object attributes, value name, value type, index, NTSTATUS
```

## 复核点

```text
注册表底层接口要记录 Key 路径和 value type，WOW64 视图仍然要额外标注
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
