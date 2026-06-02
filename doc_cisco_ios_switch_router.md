# Cisco IOS 交换机和路由器排障笔记

Cisco IOS 排障最重要的是先把现场状态固定下来。接口有没有 up、VLAN 有没有放行、STP 有没有阻塞、路由有没有下一跳、设备有没有刚重启，这些信息比直接进配置模式更有价值。远程设备上尤其要避免“边猜边改”，先看清楚再动。

进设备后我通常先关分页，确认时间、版本、启动方式和最近日志。日志时间不准时，后面做故障时间线会很痛苦。

```text
terminal length 0
show clock
show version
show inventory
show logging
show processes cpu sorted
show memory statistics
```

运行配置和启动配置都要看。`running-config` 是当前生效配置，`startup-config` 是下次重启会加载的配置，两者不一致时要先搞清楚这是故意的还是忘了保存。

```text
show running-config
show startup-config
show archive config differences
show running-config | section line vty
show running-config | include hostname|username|enable secret
```

接口排障先用简表定位，再进入具体接口看错误计数。`up/down`、`administratively down`、双工不匹配、CRC、input error、output drop 都是常见线索。

```text
show ip interface brief
show interfaces description
show interfaces status
show interfaces counters errors
show interfaces GigabitEthernet0/1
show controllers GigabitEthernet0/1
```

交换侧问题要把 VLAN、trunk、MAC 表和 STP 一起看。端口 up 不代表业务通，VLAN 没放行、native VLAN 不一致、STP blocking、MAC 学在错误接口上，都能表现成“网络时通时不通”。

```text
show vlan brief
show interfaces trunk
show interfaces switchport
show mac address-table
show mac address-table vlan 10
show spanning-tree
show spanning-tree vlan 10 detail
```

如果用了链路聚合，先看 bundle 是否正常，再看成员口状态。成员口参数不一致时，单看物理口会误导。

```text
show etherchannel summary
show etherchannel detail
show interfaces port-channel 1
```

三层排障从路由表和 ARP 开始。默认路由在不在、下一跳是否可达、接口是否在正确 VRF 里，这些比 ping 一个公网地址更基础。

```text
show ip route
show ip route 0.0.0.0
show ip route 192.0.2.10
show ip arp
show ip protocols
show ip cef 192.0.2.10 detail
```

邻居发现适合核对拓扑，特别是机柜跳线、上联口和跨楼层链路。CDP 是 Cisco 自家协议，混合厂商环境里也要看 LLDP。

```text
show cdp neighbors detail
show lldp neighbors detail
```

做连通性测试时，不要只从设备默认源地址发包。三层设备有多个接口，源地址不同，回程策略可能完全不同。能指定源就指定源。

```text
ping 8.8.8.8 source Vlan10
traceroute 8.8.8.8 source Vlan10
```

进入配置模式前，先明确要改哪一层。接口描述、VLAN、trunk、静态路由这些改动都很常见，但远程操作时要避免把自己管理链路切掉。

```text
configure terminal
interface GigabitEthernet0/1
description uplink-to-core
no shutdown
end
```

保存配置前先看差异。很多事故不是命令错，而是多改了几行自己忘了。

```text
show running-config | section interface GigabitEthernet0/1
show archive config differences
write memory
```

一个实用顺序是：先设备健康和日志，再接口物理层，再二层 VLAN/STP/MAC，再三层路由/ARP，最后才是配置修改。把顺序稳住，Cisco IOS 的排障会清楚很多。
