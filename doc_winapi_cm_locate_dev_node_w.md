# Windows API 调用笔记：CM::Locate::DevNodeW

CM::Locate::DevNodeW 常用于 PnP 设备树、设备状态和设备接口路径追踪。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: cfgmgr32.dll; Header: cfgmgr32.h
```

```cpp
// COM method: CM::Locate::DevNodeW(...)
```

```powershell
oleview.exe
```

## 记录字段

```text
devinst, device id, parent, sibling, child, problem code, status
```

## 复核点

```text
PnP 调试要按设备树记录，单个设备 ID 很难解释上下游关系
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
