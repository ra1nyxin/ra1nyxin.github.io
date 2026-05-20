# Windows API 调用笔记：CryptUnprotectData

CryptUnprotectData 用于解开 DPAPI 保护的数据。常见落点包括正常软件读取配置，也会出现在取证、迁移、备份恢复和安全审计中。能否解密取决于用户或机器上下文、可选熵、配置文件状态和 DPAPI 主密钥。

## 入口

```text
DLL: crypt32.dll; Header: dpapi.h
```

```cpp
BOOL ok = CryptUnprotectData(&cipher, &descr, &entropy, nullptr, nullptr, flags, &plain);
```

```powershell
dumpbin /exports C:\Windows\System32\crypt32.dll | findstr /i CryptUnprotectData
```

## 参数关注

输入 DATA_BLOB 要保留长度、来源文件、偏移和摘要。`pOptionalEntropy` 必须和加密时一致，缺失时会导致解密失败。`dwFlags` 里的 UI 限制会影响服务或计划任务环境。

## 返回与清理

成功后输出明文由系统分配，需要 LocalFree 释放。失败常见于上下文不匹配、熵错误、用户配置文件未加载、密文损坏或主密钥不可用。

```cpp
DWORD err = ok ? ERROR_SUCCESS : GetLastError();
```

## 复核点

记录调用用户、登录会话、是否机器范围、熵状态、密文来源、描述字段、返回码和输出长度。涉及凭据、令牌、Cookie、连接串等敏感内容时，普通文档只写结构和摘要，原始明文不进入页面。
