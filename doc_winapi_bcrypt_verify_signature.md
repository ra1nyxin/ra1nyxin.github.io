# Windows API 调用笔记：BCryptVerifySignature

BCryptVerifySignature 多见于 CNG、CryptoAPI 和密钥材料处理场景。这类接口通常处在加密、签名、摘要、密钥派生或密钥存储链路里。排查时不要只写算法名，还要保存 Provider、算法标识、链模式、密钥长度、IV 或 nonce、认证标签、输入输出长度和返回状态。密钥、明文、派生材料、熵值等内容不进入普通文档，只保留长度、摘要和来源。

## 入口

```text
DLL: bcrypt.dll; Header: bcrypt.h
```

```cpp
auto result = BCryptVerifySignature(...);
```

```powershell
dumpbin /exports C:\Windows\System32\bcrypt.dll | findstr /i BCryptVerifySignature
```

## 参数与上下文

参数里最容易漏掉的是缓冲区长度和属性名称。CNG 很多接口会先查询所需长度，再分配缓冲区读取；CryptoAPI 还要区分旧 CSP、证书库和消息对象。涉及持久化密钥时，需要记录 KSP 名称、密钥名、导出策略、机器范围或用户范围。

看到这类接口时，别只记成功或失败。查询对象、输出结构、ReturnLength、错误码和二次调用结果都要放在一起看。

## 返回与错误

CNG 常返回 NTSTATUS，CryptoAPI 多数通过 BOOL 配合 GetLastError。两套错误体系不要混写，记录时保留原始状态值和转换后的可读含义。

```cpp
NTSTATUS status = result;
```

## 复核点

最后核对时，把算法、模式、密钥来源、调用身份、系统版本和数据流向放在一起看。遇到签名、证书、DPAPI、密钥导入导出相关接口，要额外记录证书链状态、用途、时间戳和私钥访问边界。
