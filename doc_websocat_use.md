# websocat 使用

websocat 用于 WebSocket 调试和代理，适合检查实时接口。

## 常用命令

```bash
websocat ws://example.local/socket
```

```bash
websocat -v ws://example.local/socket
```

```bash
websocat ws://example.local/socket -H="Authorization: Bearer TOKEN"
```

```bash
echo ping | websocat ws://example.local/socket
```

```bash
websocat -b ws-l:127.0.0.1:9001 ws://example.local/socket
```

WebSocket 测试要记录握手头、消息格式和服务端关闭原因。
