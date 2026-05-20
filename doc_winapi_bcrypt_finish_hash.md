# Windows API 调用笔记：BCryptFinishHash

BCryptFinishHash 我会放在 CNG 算法、哈希和随机数调用链确认 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: bcrypt.dll; Header: bcrypt.h
```

```cpp
auto result = BCryptFinishHash(...);
```

```powershell
dumpbin /exports C:\Windows\System32\bcrypt.dll | findstr /i BCryptFinishHash
```

## 我会记录

```text
字段: algorithm, provider handle, object length, status, hash length
```

```text
复核: 算法名、Provider 和输入长度要一起记，方便复现同一组结果
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
