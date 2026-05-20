# VyOS 常用命令

这篇记录 VyOS 路由器常用命令。VyOS 的配置方式接近 Junos，有 operational mode 和 configuration mode，适合软路由、实验室和边界路由场景。

## 基础查看

查看版本。

```text
show version
```

查看系统信息。

```text
show system
```

查看配置。

```text
show configuration
```

查看日志。

```text
show log
```

查看硬件信息。

```text
show hardware
```

## 接口

查看接口。

```text
show interfaces
```

查看接口详细信息。

```text
show interfaces ethernet eth0
```

查看接口地址。

```text
show interfaces ethernet
```

查看接口流量。

```text
monitor bandwidth interface eth0
```

## 路由和邻居

查看路由。

```text
show ip route
```

查看 BGP summary。

```text
show ip bgp summary
```

查看 OSPF 邻居。

```text
show ip ospf neighbor
```

查看 ARP。

```text
show arp
```

## 配置模式

进入配置模式。

```text
configure
```

查看差异。

```text
compare
```

提交配置。

```text
commit
```

保存配置。

```text
save
```

退出配置模式。

```text
exit
```

## NAT 和防火墙

查看 NAT。

```text
show nat source rules
```

查看防火墙。

```text
show firewall
```

查看连接跟踪。

```text
show conntrack table
```

## 备注

VyOS 改配置时先 `compare`，确认后 `commit`，最后再 `save`。只 commit 没 save 的配置重启后会丢，这点很容易忘。
