# Windows API 调用笔记：WNetGetNetworkInformationW

WNetGetNetworkInformationW 常见于无线网络枚举、拨号连接、网络配置文件和资源访问场景。分析时先分清它处理的是接口状态、配置文件、连接会话还是资源枚举结果。
## 入口

```text
DLL: mpr.dll; Header: winnetwk.h
```

```cpp
auto result = WNetGetNetworkInformationW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\mpr.dll | findstr /i WNetGetNetworkInformationW
```

## 参数与上下文

WLAN、RAS 和 WNet 相关接口要记录接口 GUID、profile 名称、连接状态、资源范围、认证方式、电话号码或远端名称，以及输入输出缓冲区长度。涉及用户凭据时，只保留账号标识和来源，不直接写入敏感值。

这类查询接口要把目标对象、信息类别、输入输出长度、返回结构和状态码写完整。第一次因为缓冲区不足返回，通常只是探测长度，最终结论以后续读取结果为准。

## 返回与错误

这组接口常返回 DWORD、句柄或布尔状态。枚举类调用要把索引、返回条目和释放函数记全，连接类调用则要记录发起时间、状态变化和断开原因。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

复核时保存接口 GUID、SSID 或远端资源名、认证方式、profile 来源、调用身份和连接时间线。涉及失败重试时，再把错误码和状态切换顺序一起对照。
