# FortiGate CLI 常用命令

这篇记录 FortiGate 防火墙常用 CLI。日常排查接口、路由、会话、策略命中、VPN 和系统资源时会用到。

## 基础状态

查看系统状态。

```text
get system status
```

查看性能状态。

```text
get system performance status
```

查看管理员登录。

```text
get system admin
```

查看当前配置。

```text
show full-configuration
```

查看系统时间。

```text
execute time
```

## 接口和路由

查看接口。

```text
get system interface
```

查看接口配置。

```text
show system interface
```

查看路由表。

```text
get router info routing-table all
```

查看某个目的路由。

```text
get router info routing-table details 8.8.8.8
```

查看 ARP。

```text
get system arp
```

## 会话和策略

查看会话列表。

```text
diagnose sys session list
```

按源地址过滤会话。

```text
diagnose sys session filter src 192.168.1.10
```

清除会话过滤器。

```text
diagnose sys session filter clear
```

查看策略列表。

```text
show firewall policy
```

查看策略命中计数。

```text
diagnose firewall iprope show 100004
```

## 抓包和调试

抓接口包。

```text
diagnose sniffer packet any "host 8.8.8.8" 4 0 a
```

抓某个端口。

```text
diagnose sniffer packet any "port 53" 4 0 a
```

开启 debug 输出。

```text
diagnose debug enable
```

关闭 debug 输出。

```text
diagnose debug disable
```

重置 debug。

```text
diagnose debug reset
```

## VPN

查看 IPsec 隧道。

```text
get vpn ipsec tunnel summary
```

查看 IKE 网关。

```text
diagnose vpn ike gateway list
```

查看 SSL VPN 用户。

```text
get vpn ssl monitor
```

## 备注

FortiGate 排查流量时先看路由、策略、NAT、会话，再抓包确认流量走向。debug 命令用完及时关闭，避免终端输出刷屏。
