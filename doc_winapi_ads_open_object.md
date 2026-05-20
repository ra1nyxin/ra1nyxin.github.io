# Windows API 调用笔记：ADsOpenObject

ADsOpenObject 经常落在ADSI 目录对象绑定和属性访问这类位置。ADSI 接口用于绑定 Active Directory、LDAP、WinNT provider 或其他目录对象，并读取属性、枚举对象或执行目录操作。记录时保留 ADsPath、绑定身份、认证标志、对象类、属性名和错误扩展信息。

## 入口

```text
DLL: activeds.dll; Header: activeds.h
```

```cpp
auto result = ADsOpenObject(...);
```

```powershell
dumpbin /exports C:\Windows\System32\activeds.dll | findstr /i ADsOpenObject
```

## 参数与上下文

绑定类接口要记录路径、用户名形式、认证标志和 provider。枚举类接口要记录枚举器来源、批次大小和结束状态。内存辅助函数要确认分配和释放来源一致。

这是建立句柄、连接、映射或上下文的入口，重点记录目标对象、访问掩码、创建标志、命名空间和后续释放接口。句柄生命周期经常比单次返回值更能解释问题。

## 返回与错误

ADSI 大量接口返回 HRESULT，扩展错误可通过 ADsGetLastError 获取。HRESULT 只能说明 COM/ADSI 层状态，目录服务返回码也要保存。

```cpp
HRESULT hr = result;
```

## 复核点

复核时，将 ADsPath、域控、LDAP 查询、绑定身份、对象 DN、属性列表和网络连接对齐。涉及跨域或信任关系时，记录域名解析和 DC 选择结果。
