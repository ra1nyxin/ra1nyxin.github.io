# Windows API 调用笔记：AccessCheck

AccessCheck 用于判断一个令牌在给定安全描述符和访问掩码下是否具备访问权限。它适合做权限模型复核、服务对象 ACL 检查、文件或注册表访问解释，也适合还原应用内部的授权判断。

## 入口

```text
DLL: advapi32.dll; Header: securitybaseapi.h
```

```cpp
BOOL ok = AccessCheck(sd, token, desiredAccess, &mapping, &privSet, &privSetLen, &grantedAccess, &accessStatus);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i AccessCheck
```

## 参数关注

`SECURITY_DESCRIPTOR` 要确认 owner、group、DACL 和控制位。DACL 为空与 DACL 不存在含义不同，审计时需要分开写。`DesiredAccess` 最好保留原始值和展开后的权限名，通用权限还要经过 `GENERIC_MAPPING` 转换。

令牌需要是可用于访问检查的有效令牌。模拟令牌、主令牌、过滤后的 UAC 令牌、AppContainer 令牌得到的结果可能不同。`PrivilegeSet` 会返回访问判定使用到的特权，这部分经常被忽略。

## 返回与错误

`AccessStatus` 才是访问是否允许的结果。API 返回失败说明检查过程本身出错，常见于安全描述符无效、映射不完整、缓冲区长度不够或令牌类型不合适。

```cpp
BOOL allowed = ok && accessStatus;
```

## 复核点

记录令牌用户、组、完整性级别、目标对象类型、DACL 摘要、请求访问掩码、授予访问掩码和参与判定的特权。涉及 UAC、服务账号、域组、低完整性进程时，要把登录会话和令牌来源写清楚。
