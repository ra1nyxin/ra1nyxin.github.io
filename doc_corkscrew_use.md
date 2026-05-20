# corkscrew 使用

corkscrew 用于让 SSH 通过 HTTP 代理连接，适合受限网络里的管理通道验证。

## 常用命令

```bash
corkscrew proxy.local 8080 target.local 22
```

```bash
ssh -o "ProxyCommand corkscrew proxy.local 8080 %h %p" user@target.local
```

```bash
ssh -o "ProxyCommand corkscrew proxy.local 8080 %h %p ~/.ssh/proxyauth" user@target.local
```

```bash
corkscrew proxy.local 8080 target.local 22 ~/.ssh/proxyauth
```

```bash
ssh -vvv -o "ProxyCommand corkscrew proxy.local 8080 %h %p" user@target.local
```

小记录：适合排查代理链路，认证文件权限要收紧。
