# Huawei VRP 网络设备排障笔记

华为 VRP 设备的命令体系很稳定，交换机、路由器、防火墙类产品会有差异，但排障思路基本一致：先看状态，再看转发表，再看配置。不要一上来就改接口或路由，尤其是远程维护时，先确认自己所在的视图和管理链路。

登录后先关分页，再取一组基础信息。`display diagnostic-information` 输出很大，适合需要留档或发给厂商时使用；日常排障可以先用更小的命令定位。

```text
screen-length 0 temporary
display version
display clock
display device
display alarm active
display logbuffer
display cpu-usage
display memory-usage
```

配置查看要区分当前配置和保存配置。当前配置代表正在生效的内容，保存配置代表重启后的内容。远程改完没有保存，短期看没问题，重启后就会回滚。

```text
display current-configuration
display saved-configuration
display current-configuration | include route-static
display current-configuration interface GigabitEthernet 0/0/1
```

接口排障先看简表，再看具体接口。VRP 的接口名中间常有空格，比如 `GigabitEthernet 0/0/1`，复制命令时要注意格式。

```text
display ip interface brief
display interface brief
display interface description
display interface GigabitEthernet 0/0/1
display transceiver interface GigabitEthernet 0/0/1 verbose
```

看接口时重点关注 `current state`、`line protocol current state`、速率双工、错包、丢包、最近 up/down 时间。光模块链路还要看收发光功率，收光太低时，上层配置怎么改都不会稳定。

二层问题通常落在 VLAN、端口类型、trunk 允许列表、MAC 学习和 STP 上。只看 VLAN 存不存在不够，还要确认这个 VLAN 是否真的从正确端口进出。

```text
display vlan
display vlan 10
display port vlan
display mac-address
display mac-address vlan 10
display stp brief
display stp interface GigabitEthernet 0/0/1
```

链路聚合要先看 Eth-Trunk 状态，再看成员口。成员口不一致时，有的设备会把端口踢出聚合，有的会造成单向或间歇性故障。

```text
display eth-trunk
display eth-trunk 1
display interface Eth-Trunk 1
display current-configuration interface Eth-Trunk 1
```

三层排障从路由、ARP 和接口地址开始。VRF/VPN 实例环境里要加实例名，否则查到的是公网或默认实例的表。

```text
display ip routing-table
display ip routing-table 192.0.2.10
display arp
display arp interface Vlanif10
display ip interface Vlanif10
```

动态路由要看邻居状态和路由是否真正进表。OSPF 邻居 Full 只是第一步，还要确认路由有没有被策略过滤。

```text
display ospf peer
display ospf interface
display bgp peer
display ip routing-table protocol ospf
```

进入配置时先 `system-view`，再进接口或协议视图。改完用 `display this` 看当前视图配置，不要只依赖记忆。

```text
system-view
interface GigabitEthernet 0/0/1
description uplink-to-core
undo shutdown
display this
quit
```

保存配置前后都可以确认一次。设备提示是否继续时，生产环境里不要机械回车，先确认没有把管理口、默认路由或上联 trunk 改坏。

```text
save
display saved-configuration
```

我排 VRP 网络问题一般按这个顺序：日志和告警，接口物理状态，VLAN/trunk/聚合，MAC 和 STP，ARP 和路由，最后才看协议策略。顺序固定下来，现场压力大时也不容易漏。
