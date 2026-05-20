# Windows API 调用笔记：CryptProtectData

CryptProtectData 是 DPAPI 的常用封装接口，用于把数据绑定到当前用户或本机上下文中加密保存。常见落点包括浏览器、客户端软件、凭据缓存、配置文件和内部工具。分析时重点关注保护范围、描述字段、可选熵和调用身份。

## 入口

```text
DLL: crypt32.dll; Header: dpapi.h
```

```cpp
BOOL ok = CryptProtectData(&plain, L"description", &entropy, nullptr, nullptr, flags, &cipher);
```

```powershell
dumpbin /exports C:\Windows\System32\crypt32.dll | findstr /i CryptProtectData
```

## 参数关注

`DATA_BLOB` 里的长度和数据来源要记录。`szDataDescr` 只是描述信息，不能当成安全边界。`pOptionalEntropy` 会影响解密条件，存在时要记录长度和来源，但原始值应单独保护。

`dwFlags` 决定行为。`CRYPTPROTECT_LOCAL_MACHINE` 会把数据绑定到机器上下文，任何具备合适权限的本机账户都可能解开；默认用户上下文更适合用户级秘密。UI 相关标志会影响无人值守场景。

## 返回与清理

成功后输出 DATA_BLOB 需要 LocalFree 释放。失败时记录错误码和调用身份，DPAPI 问题常和用户配置文件、域备份密钥、服务账号上下文有关。

```cpp
LocalFree(cipher.pbData);
```

## 复核点

记录调用用户、登录会话、保护范围、描述、熵是否存在、明文长度、密文长度、配置文件加载状态和存储位置。文档里只保存摘要和字段信息，敏感原始数据单独隔离。
