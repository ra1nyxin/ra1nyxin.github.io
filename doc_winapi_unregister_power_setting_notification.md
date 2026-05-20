# Windows API 调用笔记：UnregisterPowerSettingNotification

UnregisterPowerSettingNotification 主要出现在电源状态、电源计划、唤醒策略和系统能力查询场景。分析时先分清它拿到的是当前状态、配置值还是通知订阅，再看调用发生在界面进程、服务还是后台代理里。
## 入口

```text
DLL: user32.dll; Header: winuser.h
```

```cpp
auto result = UnregisterPowerSettingNotification(...);
```

```powershell
dumpbin /exports C:\Windows\System32\user32.dll | findstr /i UnregisterPowerSettingNotification
```

## 参数与上下文

电源相关接口通常要记录 POWER_INFORMATION_LEVEL、Scheme GUID、Subgroup GUID、Setting GUID、输入输出缓冲区长度，以及通知回调或窗口句柄。涉及计划写入时，还要保留 AC/DC 两套取值和当前活动方案。

这是建立句柄、连接、映射或上下文的入口，重点记录目标对象、访问掩码、创建标志、命名空间和后续释放接口。句柄生命周期经常比单次返回值更能解释问题。

## 返回与错误

这组接口常见返回值是 NTSTATUS、DWORD、BOOLEAN 或 Win32 错误码。读取类调用要把返回结构和长度记全，注册通知类调用则要确认后续注销是否闭合。

```cpp
LSTATUS status = result;
```

## 复核点

复核时保存电源方案 GUID、设置 GUID、AC/DC 配置、当前电源状态、调用身份和系统版本。涉及休眠、唤醒、电池或节能策略时，再关联触发时间和前后状态变化。
