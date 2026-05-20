# wscat 使用

wscat 是 Node 生态常用 WebSocket 客户端，适合快速手工测试。

## 常用命令

```bash
wscat -c ws://example.local/socket
```

```bash
wscat -c wss://example.local/socket -H "Authorization: Bearer TOKEN"
```

```bash
wscat -c ws://example.local/socket --no-check
```

```bash
echo "ping" | wscat -c ws://example.local/socket
```

```bash
wscat -l 9001
```

小记录：适合交互式发送消息，复杂协议最好保存样本消息和响应。
