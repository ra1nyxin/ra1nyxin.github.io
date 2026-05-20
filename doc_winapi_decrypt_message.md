# Windows API 调用笔记：DecryptMessage

DecryptMessage 常出现在SSPI、Schannel 和认证上下文场景。SSPI 接口处理认证包、凭据句柄、安全上下文、消息保护和模拟。常见落点包括 Kerberos、NTLM、Negotiate、Schannel、RPC、HTTP 认证和自定义客户端服务端协议里。记录时要明确认证包、目标 SPN、上下文属性、缓冲区方向和状态码。

## 入口

```text
DLL: secur32.dll; Header: sspi.h / schannel.h
```

```cpp
auto result = DecryptMessage(...);
```

```powershell
dumpbin /exports C:\Windows\System32\secur32.dll | findstr /i DecryptMessage
```

## 参数与上下文

凭据类接口要记录 principal、package、credential use 和过期时间。上下文类接口要记录输入 token、输出 token、target name、context flags、sequence、buffer type 和是否需要继续握手。消息保护类接口要记录签名、加密、序列号和 trailer/header 长度。

这是解密或解保护类接口，重点记录算法上下文、密文来源、输入长度、输出长度、IV/nonce、认证标签和密钥句柄来源。解出的明文不放进普通页面，只保留类型、长度、摘要和保存位置。

## 返回与错误

SSPI 返回 SECURITY_STATUS，常见值包括 SEC_E_OK、SEC_I_CONTINUE_NEEDED、SEC_E_LOGON_DENIED、SEC_E_TARGET_UNKNOWN。继续握手状态不应按失败处理。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

回看记录时，把认证包、SPN、客户端和服务端 token、上下文属性、模拟状态和网络连接放在同一条链路里。Schannel 还要保存证书链、协议版本和加密套件。
