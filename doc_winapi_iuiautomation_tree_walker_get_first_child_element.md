# Windows API 调用笔记：IUIAutomationTreeWalker::GetFirstChildElement

IUIAutomationTreeWalker::GetFirstChildElement 常用于 UI Automation 元素树、控件属性和可访问性接口观察。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: uiautomationcore.dll; Header: uiautomationclient.h
```

```cpp
// COM method: IUIAutomationTreeWalker::GetFirstChildElement(...)
```

```powershell
oleview.exe
```

## 记录字段

```text
element runtime id, control type, name, automation id, process id
```

## 复核点

```text
UIA 读取到的 Name 可能带业务数据，记录时要控制敏感字段
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
