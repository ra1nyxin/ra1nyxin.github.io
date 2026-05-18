# Palo Alto PAN-OS CLI 常用命令

这篇记录 Palo Alto 防火墙常用 CLI。适合查看接口、路由、会话、策略、NAT、VPN 和提交状态。

## 基础状态

查看系统信息。

```text
show system info
```

查看资源。

```text
show system resources
```

查看日志接收状态。

```text
show logging-status
```

查看作业。

```text
show jobs all
```

查看提交状态。

```text
show jobs id JOB_ID
```

## 接口和路由

查看接口。

```text
show interface all
```

查看接口详细信息。

```text
show interface ethernet1/1
```

查看路由。

```text
show routing route
```

查看 ARP。

```text
show arp all
```

查看系统连接。

```text
show netstat all
```

## 会话

查看会话信息。

```text
show session info
```

查看会话列表。

```text
show session all
```

按源地址过滤会话。

```text
show session all filter source 192.168.1.10
```

按目标地址过滤会话。

```text
show session all filter destination 8.8.8.8
```

查看会话详细信息。

```text
show session id SESSION_ID
```

## 策略和 NAT

测试安全策略匹配。

```text
test security-policy-match source 192.168.1.10 destination 8.8.8.8 protocol 6 destination-port 443
```

测试 NAT 策略匹配。

```text
test nat-policy-match source 192.168.1.10 destination 8.8.8.8 protocol 6 destination-port 443
```

查看运行配置里的安全策略。

```text
show running security-policy
```

查看运行配置里的 NAT 策略。

```text
show running nat-policy
```

## VPN

查看 IKE SA。

```text
show vpn ike-sa
```

查看 IPsec SA。

```text
show vpn ipsec-sa
```

查看 GlobalProtect 网关。

```text
show global-protect-gateway current-user
```

## 小记录

PAN-OS 排查策略时，`test security-policy-match` 和 `test nat-policy-match` 很省时间。实际流量仍然要结合会话表、路由、NAT 和日志一起判断。
