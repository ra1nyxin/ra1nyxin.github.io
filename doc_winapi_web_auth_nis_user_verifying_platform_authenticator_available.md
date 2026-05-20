# Windows API 调用笔记：WebAuthNIsUserVerifyingPlatformAuthenticatorAvailable

WebAuthNIsUserVerifyingPlatformAuthenticatorAvailable 常见于 FIDO2 凭据注册、断言获取和平台认证器管理场景。分析时先分清它是在创建设备凭据、取断言、列出平台凭据还是清理返回结构。
## 入口

```text
DLL: webauthn.dll; Header: webauthn.h
```

```cpp
auto result = WebAuthNIsUserVerifyingPlatformAuthenticatorAvailable(...);
```

```powershell
dumpbin /exports C:\Windows\System32\webauthn.dll | findstr /i WebAuthNIsUserVerifyingPlatformAuthenticatorAvailable
```

## 参数与上下文

WebAuthn 接口要记录 rpId、user id、challenge、credential 列表、扩展参数、取消句柄和返回结构版本。涉及平台认证器时，还要保留用户验证策略和附件类型。

这是签名或验签类接口，重点记录摘要算法、签名格式、证书或密钥来源、用途限制、时间戳和验证策略。验签成功也要继续核对链状态、撤销状态和策略 OID。

## 返回与错误

这组接口常返回 HRESULT 或布尔状态，并通过输出结构返回 attestation、assertion 或平台凭据信息。分配与释放类调用要确认结构版本和释放函数匹配。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

复核时保存 rpId、credential id、challenge 来源、用户验证策略、调用身份和认证器类型。涉及失败重试时，再把 HRESULT、浏览器或宿主进程和用户交互阶段一起对照。
