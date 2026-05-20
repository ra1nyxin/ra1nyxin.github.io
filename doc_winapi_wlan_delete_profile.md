# Windows API 调用笔记：WlanDeleteProfile

WlanDeleteProfile 我会放在 无线网卡、配置文件、BSS 列表和连接状态复核 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: wlanapi.dll; Header: wlanapi.h
```

```cpp
auto result = WlanDeleteProfile(...);
```

```powershell
dumpbin /exports C:\Windows\System32\wlanapi.dll | findstr /i WlanDeleteProfile
```

## 记录字段

```text
interface GUID, profile name, SSID, BSSID, signal quality, auth algorithm
```

## 复核点

```text
无线接口结果要记录网卡 GUID、SSID/BSSID 和认证算法，避免只看显示名称
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
