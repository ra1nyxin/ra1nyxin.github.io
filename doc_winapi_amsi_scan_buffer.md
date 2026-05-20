# Windows API 调用笔记：AmsiScanBuffer

AmsiScanBuffer 常用于 AMSI 扫描链路、脚本内容检测和防守侧状态确认。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: amsi.dll; Header: amsi.h
```

```cpp
auto result = AmsiScanBuffer(...);
```

```powershell
dumpbin /exports C:\Windows\System32\amsi.dll | findstr /i AmsiScanBuffer
```

## 记录字段

```text
字段: AMSI context, session, content name, scan result, HRESULT
```

```text
复核: 只把它当成扫描接口观察点，重点看调用方、内容类型和返回结果
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
