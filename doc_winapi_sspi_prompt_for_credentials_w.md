# Windows API 调用笔记：SspiPromptForCredentialsW

SspiPromptForCredentialsW 经常落在SSPI、Schannel 和认证上下文这类位置。SSPI 接口处理认证包、凭据句柄、安全上下文、消息保护和模拟。常见落点包括 Kerberos、NTLM、Negotiate、Schannel、RPC、HTTP 认证和自定义客户端服务端协议里。记录时要明确认证包、目标 SPN、上下文属性、缓冲区方向和状态码。

## 入口

```text
DLL: secur32.dll; Header: sspi.h / schannel.h
```

```cpp
auto result = SspiPromptForCredentialsW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\secur32.dll | findstr /i SspiPromptForCredentialsW
```

## 参数与上下文

凭据类接口要记录 principal、package、credential use 和过期时间。上下文类接口要记录输入 token、输出 token、target name、context flags、sequence、buffer type 和是否需要继续握手。消息保护类接口要记录签名、加密、序列号和 trailer/header 长度。

上下文比单次调用更重要。记录对象来源、访问权限、返回状态和后续 API，后面复盘时才不容易断线。

## 返回与错误

SSPI 返回 SECURITY_STATUS，常见值包括 SEC_E_OK、SEC_I_CONTINUE_NEEDED、SEC_E_LOGON_DENIED、SEC_E_TARGET_UNKNOWN。继续握手状态不应按失败处理。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

最后核对时，把认证包、SPN、客户端和服务端 token、上下文属性、模拟状态和网络连接放在同一条链路里。Schannel 还要保存证书链、协议版本和加密套件。
