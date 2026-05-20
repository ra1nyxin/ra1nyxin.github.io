# Windows API 调用笔记：MapViewOfFileNuma2

MapViewOfFileNuma2 常用于 内存申请、映射、刷新、NUMA 和地址范围排查。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: kernel32.dll; Header: memoryapi.h
```

```cpp
auto result = MapViewOfFileNuma2(...);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i MapViewOfFileNuma2
```

## 记录字段

```text
base address, allocation type, protect, region size, NUMA node, last error
```

## 复核点

```text
内存区域要记录 state、type、protect 和映射来源，后续才能判断这段内存的来历
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
