# Windows API 调用笔记：RegQueryInfoKeyW

RegQueryInfoKeyW 放到注册表、ACL、SID 和安全描述符处理场景里看并不罕见。这类接口多用于配置读取、权限判断、持久化排查、策略核查和对象安全边界分析。注册表与安全描述符都要保留原始输入和解析结果，单独的显示名或字符串路径不足以支撑结论。

## 入口

```text
DLL: advapi32.dll; Header: winreg.h
```

```cpp
auto result = RegQueryInfoKeyW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i RegQueryInfoKeyW
```

## 参数与上下文

注册表接口要记录根键、子键、WOW64 视图、访问掩码、值类型和数据长度。ACL/SID/SDDL 接口要记录 owner、group、DACL、SACL、ACE 顺序、继承标志和 SID_NAME_USE。涉及转换函数时，需要保存转换前后的字符串和二进制长度。

这类调用经常会先拿长度再取数据，缓冲区不足不一定是异常。记录最终成功读取的内容和前面的探测过程更有价值。

## 返回与错误

注册表 API 常返回 LSTATUS，安全描述符相关 API 多用 BOOL 和 GetLastError。读取类接口遇到缓冲区不足时要再次读取，枚举类接口要记录索引和结束状态。

```cpp
LSTATUS status = result;
```

## 复核点

复核时关注 Run、Services、Winlogon、IFEO、COM、Policies、Shell Extension 等敏感位置，同时核对 NTFS ACL、服务权限、完整性级别和调用身份。
