# Windows API 调用笔记：PowerWriteDCValueIndex

PowerWriteDCValueIndex 主要出现在电源状态、电源计划、唤醒策略和系统能力查询场景。分析时先分清它拿到的是当前状态、配置值还是通知订阅，再看调用发生在界面进程、服务还是后台代理里。
## 入口

```text
DLL: powrprof.dll; Header: powrprof.h
```

```cpp
auto result = PowerWriteDCValueIndex(...);
```

```powershell
dumpbin /exports C:\Windows\System32\powrprof.dll | findstr /i PowerWriteDCValueIndex
```

## 参数与上下文

电源相关接口通常要记录 POWER_INFORMATION_LEVEL、Scheme GUID、Subgroup GUID、Setting GUID、输入输出缓冲区长度，以及通知回调或窗口句柄。涉及计划写入时，还要保留 AC/DC 两套取值和当前活动方案。

这是写入或发送类接口，重点记录目标对象、写入长度、返回长度、数据类型和后续状态变化。原始数据按敏感材料单独保存。

## 返回与错误

这组接口常见返回值是 NTSTATUS、DWORD、BOOLEAN 或 Win32 错误码。读取类调用要把返回结构和长度记全，注册通知类调用则要确认后续注销是否闭合。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

复核时保存电源方案 GUID、设置 GUID、AC/DC 配置、当前电源状态、调用身份和系统版本。涉及休眠、唤醒、电池或节能策略时，再关联触发时间和前后状态变化。
