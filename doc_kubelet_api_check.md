# Kubelet API 检查

Kubelet API 暴露会带来容器、日志和执行接口风险。检查时重点看 10250、10255、认证方式和是否能读取 pod 信息。

## 端口确认

```bash
nmap -sV -p 10250,10255 192.168.1.10
```

```bash
curl -k https://192.168.1.10:10250/pods
```

```bash
curl http://192.168.1.10:10255/pods
```

## API 访问

```bash
curl -k https://192.168.1.10:10250/runningpods/
```

```bash
curl -k https://192.168.1.10:10250/metrics
```

```bash
curl -k https://192.168.1.10:10250/stats/summary
```

## 带 token 访问

```bash
curl -k -H "Authorization: Bearer $TOKEN" https://192.168.1.10:10250/pods
```

10255 只读端口在老集群里很关键。10250 如果需要认证，也要检查节点证书、Webhook 鉴权和 anonymous-auth 配置。
