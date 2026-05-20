# Windows API 调用笔记：AllocADsMem

AllocADsMem 多见于 ADSI 目录对象绑定和属性访问场景。ADSI 接口用于绑定 Active Directory、LDAP、WinNT provider 或其他目录对象，并读取属性、枚举对象或执行目录操作。记录时保留 ADsPath、绑定身份、认证标志、对象类、属性名和错误扩展信息。

## 入口

```text
DLL: activeds.dll; Header: activeds.h
```

```cpp
auto result = AllocADsMem(...);
```

```powershell
dumpbin /exports C:\Windows\System32\activeds.dll | findstr /i AllocADsMem
```

## 参数与上下文

绑定类接口要记录路径、用户名形式、认证标志和 provider。枚举类接口要记录枚举器来源、批次大小和结束状态。内存辅助函数要确认分配和释放来源一致。

这类记录按生命周期写最清楚：先看对象如何取得，再看执行了什么操作，最后看清理和错误码是否闭合。

## 返回与错误

ADSI 大量接口返回 HRESULT，扩展错误可通过 ADsGetLastError 获取。HRESULT 只能说明 COM/ADSI 层状态，目录服务返回码也要保存。

```cpp
HRESULT hr = result;
```

## 复核点

回看记录时，把 ADsPath、域控、LDAP 查询、绑定身份、对象 DN、属性列表和网络连接对齐。涉及跨域或信任关系时，记录域名解析和 DC 选择结果。
