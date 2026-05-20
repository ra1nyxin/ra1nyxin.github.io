# Windows API 调用笔记：CryptGenRandom

CryptGenRandom 我会放在 Legacy CryptoAPI Provider 和随机数接口复核 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

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

## 我会记录

```text
字段: provider type, container, flags, acquired handle, last error
```

```text
复核: 老接口仍会出现在旧组件里，记录 Provider 比只写函数名更有用
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
