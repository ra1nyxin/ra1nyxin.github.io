# Windows API 调用笔记：IRegisteredTask::get::State

IRegisteredTask::get::State 我会放在 计划任务 COM 接口、触发器、动作和运行账号复核 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: taskschd.dll; Header: taskschd.h
```

```cpp
// COM method: IRegisteredTask::get::State(...)
```

```powershell
oleview.exe
```

## 记录字段

```text
task path, author, principal, trigger type, action path, last run result
```

## 复核点

```text
计划任务要保存任务路径、动作和 principal，任务名本身不够定位风险
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
