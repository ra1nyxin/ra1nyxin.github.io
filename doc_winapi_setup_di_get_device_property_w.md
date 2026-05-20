# Windows API 调用笔记：SetupDiGetDevicePropertyW

SetupDiGetDevicePropertyW 常用于 设备枚举、驱动信息、接口路径和硬件 ID 核对。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: setupapi.dll; Header: setupapi.h
```

```cpp
auto result = SetupDiGetDevicePropertyW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\setupapi.dll | findstr /i SetupDiGetDevicePropertyW
```

## 记录字段

```text
device instance id, class GUID, interface path, hardware id, error code
```

## 复核点

```text
设备枚举要写 class GUID 和 interface path，显示名经常不足以定位设备
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
