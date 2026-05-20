# Windows API 调用笔记：CryptGenRandom

CryptGenRandom 常用于 Legacy CryptoAPI Provider 和随机数接口复核。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: advapi32.dll; Header: wincrypt.h
```

```cpp
auto result = CryptGenRandom(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i CryptGenRandom
```

## 记录字段

```text
字段: provider type, container, flags, acquired handle, last error
```

```text
复核: 老接口仍会出现在旧组件里，记录 Provider 比只写函数名更有用
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
