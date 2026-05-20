# Windows API 调用笔记：WebAuthNFreePlatformCredentialList

WebAuthNFreePlatformCredentialList 我会放在 WebAuthn 平台认证器、Passkey 能力和凭据元数据确认 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: webauthn.dll; Header: webauthn.h
```

```cpp
auto result = WebAuthNFreePlatformCredentialList(...);
```

```powershell
dumpbin /exports C:\Windows\System32\webauthn.dll | findstr /i WebAuthNFreePlatformCredentialList
```

## 记录字段

```text
relying party id, user id, credential id, authenticator attachment, HRESULT
```

## 复核点

```text
WebAuthn 结果要写 RP ID 和用户验证策略，不要只写认证成功
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
