# Windows API 调用笔记：EnterCriticalPolicySection

EnterCriticalPolicySection 我会放在 组策略、环境块和用户策略刷新观察 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: userenv.dll; Header: userenv.h
```

```cpp
auto result = EnterCriticalPolicySection(...);
```

```powershell
dumpbin /exports C:\Windows\System32\userenv.dll | findstr /i EnterCriticalPolicySection
```

## 记录字段

```text
token, environment block, policy flags, profile path, HRESULT
```

## 复核点

```text
策略相关接口要记录调用用户和计算机上下文，用户策略和机器策略结果不同
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
