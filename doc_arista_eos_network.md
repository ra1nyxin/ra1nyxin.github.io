# Arista EOS 常用命令

这篇记录 Arista EOS 的常用命令。EOS 风格接近 Cisco，但也有自己的 show 命令和 Linux shell 能力，适合数据中心交换环境。

## 基础查看

查看版本。

```text
show version
```

查看运行配置。

```text
show running-config
```

查看日志。

```text
show logging
```

查看环境。

```text
show environment all
```

查看 CPU。

```text
show processes top once
```

## 接口

查看接口简表。

```text
show interfaces status
```

查看接口详细信息。

```text
show interfaces Ethernet1
```

查看接口错误。

```text
show interfaces counters errors
```

查看接口描述。

```text
show interfaces description
```

查看收发光。

```text
show interfaces transceiver
```

## VLAN 和二层

查看 VLAN。

```text
show vlan
```

查看 trunk。

```text
show interfaces trunk
```

查看 MAC 地址表。

```text
show mac address-table
```

查看 MLAG。

```text
show mlag
```

查看 STP。

```text
show spanning-tree
```

## 路由和邻居

查看路由表。

```text
show ip route
```

查看 ARP。

```text
show ip arp
```

查看 LLDP 邻居。

```text
show lldp neighbors detail
```

查看 BGP 概览。

```text
show ip bgp summary
```

查看 VXLAN VTEP。

```text
show vxlan vtep
```

## 配置和保存

进入配置模式。

```text
configure terminal
```

查看配置差异。

```text
show session-config diffs
```

保存配置。

```text
write memory
```

进入 bash。

```text
bash
```

## 小记录

EOS 常见排查入口是接口、MLAG、VLAN、MAC、路由和 BGP。数据中心里遇到东西向流量异常时，MLAG 和 VXLAN 状态也要一起看。
