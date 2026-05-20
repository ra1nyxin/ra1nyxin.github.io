# Windows API 调用笔记：VariantInit

VariantInit 我会放在 BSTR、VARIANT 和 COM 参数生命周期检查 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: oleaut32.dll; Header: oleauto.h
```

```cpp
auto result = VariantInit(...);
```

```powershell
dumpbin /exports C:\Windows\System32\oleaut32.dll | findstr /i VariantInit
```

## 我会记录

```text
字段: variant type, allocation owner, string length, HRESULT, cleanup path
```

```text
复核: COM 参数问题很多来自生命周期，分配和释放要写在同一段记录里
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
