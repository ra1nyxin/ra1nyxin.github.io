# Windows API 调用笔记：PowerGetActiveScheme

PowerGetActiveScheme 常用于 电源计划、休眠策略和系统电源能力复核。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: powrprof.dll; Header: powrprof.h
```

```cpp
auto result = PowerGetActiveScheme(...);
```

```powershell
dumpbin /exports C:\Windows\System32\powrprof.dll | findstr /i PowerGetActiveScheme
```

## 记录字段

```text
power scheme GUID, subgroup GUID, setting GUID, AC value, DC value
```

## 复核点

```text
电源策略会影响采集窗口、睡眠和网络断开，现场排查时值得保存
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
