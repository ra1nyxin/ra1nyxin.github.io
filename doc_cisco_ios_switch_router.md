# Cisco IOS 交换机和路由器常用命令

这篇记录 Cisco IOS 设备上常用的查看和配置命令。适合排查接口、VLAN、路由、邻居、日志和基础配置。

## 基础查看

查看版本和设备信息。

```text
show version
```

查看当前配置。

```text
show running-config
```

查看启动配置。

```text
show startup-config
```

查看日志。

```text
show logging
```

查看 CPU。

```text
show processes cpu sorted
```

查看内存。

```text
show memory statistics
```

## 接口状态

查看接口简表。

```text
show ip interface brief
```

查看接口详细状态。

```text
show interfaces GigabitEthernet0/1
```

查看接口错误计数。

```text
show interfaces counters errors
```

查看接口描述。

```text
show interfaces description
```

查看接口速率和双工。

```text
show interfaces status
```

## VLAN 和交换

查看 VLAN。

```text
show vlan brief
```

查看 trunk。

```text
show interfaces trunk
```

查看 MAC 地址表。

```text
show mac address-table
```

查看某个 VLAN 的 MAC。

```text
show mac address-table vlan 10
```

查看 STP 状态。

```text
show spanning-tree
```

## 路由和邻居

查看路由表。

```text
show ip route
```

查看默认路由。

```text
show ip route 0.0.0.0
```

查看 ARP。

```text
show ip arp
```

查看 CDP 邻居。

```text
show cdp neighbors detail
```

查看 LLDP 邻居。

```text
show lldp neighbors detail
```

## 进入配置

进入全局配置。

```text
configure terminal
```

配置接口描述。

```text
description uplink-to-core
```

关闭接口。

```text
shutdown
```

启用接口。

```text
no shutdown
```

保存配置。

```text
write memory
```

## 小记录

Cisco 设备排障时先看接口简表、日志和邻居关系。交换问题看 VLAN、trunk、MAC、STP，路由问题看路由表、ARP 和下一跳。
