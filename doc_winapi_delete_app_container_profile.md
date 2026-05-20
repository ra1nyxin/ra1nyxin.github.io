# Windows API 调用笔记：DeleteAppContainerProfile

DeleteAppContainerProfile 我会放在 用户配置文件、环境块和 AppContainer 边界检查 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: userenv.dll; Header: userenv.h / userenvapiset.h
```

```cpp
auto result = DeleteAppContainerProfile(...);
```

```powershell
dumpbin /exports C:\Windows\System32\userenv.dll | findstr /i DeleteAppContainerProfile
```

## 我会记录

```text
字段: user token, profile path, environment size, AppContainer SID, HRESULT
```

```text
复核: 这类接口受用户上下文影响很明显，必须记录调用 token
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
