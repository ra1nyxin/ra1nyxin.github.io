# Windows API 调用笔记：CredReadW

CredReadW 常用于 Credential Manager 条目、凭据持久化范围和用户上下文确认。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: advapi32.dll; Header: wincred.h
```

```cpp
auto result = CredReadW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i CredReadW
```

## 记录字段

```text
target name, type, persistence, user name, credential blob size, last error
```

## 复核点

```text
凭据内容属于高敏感数据，记录时优先留类型、目标和上下文，原始值单独受控保存
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
