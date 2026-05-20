# Windows API 调用笔记：WinVerifyTrust

WinVerifyTrust 用于让 Windows 信任提供程序验证文件签名、目录签名或其他信任对象。它常用于安装器、安全产品、下载器和文件准入检查。签名验证结果需要结合证书链、撤销状态、时间戳和策略一起看。

## 入口

```text
DLL: wintrust.dll; Header: wintrust.h
```

```cpp
LONG st = WinVerifyTrust(nullptr, &policyGuid, &trustData);
```

```powershell
dumpbin /exports C:\Windows\System32\wintrust.dll | findstr /i WinVerifyTrust
```

## 参数关注

常见策略是 `WINTRUST_ACTION_GENERIC_VERIFY_V2`。`WINTRUST_DATA` 里的 UI 选项、撤销检查、状态动作、文件信息和策略标志都要保存。验证结束后需要用 `WTD_STATEACTION_CLOSE` 关闭状态数据。

签名验证需要同时确认签名者、证书链、EKU、时间戳、目录签名、文件哈希和撤销检查策略，返回零只说明当前策略下验证通过。离线环境可能拿不到撤销信息，需要在结果里写明。

## 返回与错误

返回值是 trust status，不直接使用 GetLastError 解释。常见结果包括 `ERROR_SUCCESS`、`TRUST_E_NOSIGNATURE`、`CERT_E_EXPIRED`、`CERT_E_REVOKED`、`TRUST_E_BAD_DIGEST`。

```cpp
LONG st = WinVerifyTrust(hwnd, &WINTRUST_ACTION_GENERIC_VERIFY_V2, &data);
```

## 复核点

记录文件路径、哈希、签名类型、签名者、证书链状态、时间戳、撤销策略和返回码。对驱动、安装包、更新器、脚本宿主加载的二进制，建议把签名验证结果和文件来源一起保存。
