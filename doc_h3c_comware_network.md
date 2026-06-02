# H3C Comware 排障笔记

H3C Comware 和华为 VRP 很像，但输出字段、接口命名、聚合和配置保存细节并不完全一样。排障时不要只凭“看起来像华为”去套命令。先确认系统版本和设备角色，再决定从二层、三层还是安全策略方向往下查。

Comware 的视图层级比较清楚。普通查看大多用 `display`，配置从 `system-view` 进去。远程设备上我会先把分页关掉，避免复制输出时漏掉中间内容。

```text
screen-length disable
display version
display device
display environment
display clock
display logbuffer
display cpu-usage
display memory
```

配置分当前配置和保存配置。当前配置代表现在正在跑的状态，保存配置代表重启后会加载什么。排查“重启后配置丢了”时，这两个输出一定要对比。

```text
display current-configuration
display saved-configuration
display current-configuration | include vlan
display current-configuration interface GigabitEthernet1/0/1
```

接口先看简表，再看具体端口。接口是否 up、速率双工、错误包、丢包、光模块状态、描述信息都要连起来看。很多接入问题通过描述和 LLDP 就能定位到对端。

```text
display interface brief
display ip interface brief
display interface description
display interface GigabitEthernet1/0/1
display transceiver interface GigabitEthernet1/0/1
display lldp neighbor-information interface GigabitEthernet1/0/1 verbose
```

二层问题不要只看 VLAN 是否存在。还要看端口类型、PVID、trunk 允许列表、MAC 学习位置和 STP 状态。接入口被误配成 trunk，或者 trunk 漏放某个 VLAN，都很常见。

```text
display vlan brief
display vlan 10
display port
display mac-address
display mac-address vlan 10
display stp brief
display stp interface GigabitEthernet1/0/1
```

链路聚合在 Comware 里经常用 Bridge-Aggregation。排障时先看聚合口，再看成员口是否 selected。成员口速率、双工、VLAN、LACP 模式不一致，会导致流量只走一部分链路或直接不转发。

```text
display link-aggregation summary
display link-aggregation verbose
display interface Bridge-Aggregation1
display current-configuration interface Bridge-Aggregation1
```

三层排障先看路由表和 ARP。多 VRF 或 VPN 实例环境里，要确认查询的是正确实例，否则结果会完全不相关。

```text
display ip routing-table
display ip routing-table 192.0.2.10
display arp
display arp interface Vlan-interface10
display ip interface Vlan-interface10
```

如果跑动态路由，再看邻居和协议状态。OSPF 邻居卡在 Init、2-Way、ExStart，原因会完全不同，不能只看有没有 peer。

```text
display ospf peer
display ospf interface
display bgp peer
display ip routing-table protocol ospf
```

做配置修改时，先进入系统视图，再进对应接口或协议视图。改完后用 `display this` 看当前视图下配置，确认没有改偏。

```text
system-view
interface GigabitEthernet1/0/1
description uplink-to-core
undo shutdown
display this
quit
```

保存配置时 Comware 会交互确认，自动化脚本里要注意这个点。生产设备上改完不要马上离开，至少重新跑一遍接口、路由或 VLAN 相关的 display 命令。

```text
save
display saved-configuration
```

一个稳妥的排障路线是：日志和设备状态，接口物理层，VLAN 和聚合，MAC/STP，ARP 和路由，最后再看协议邻居。按这个顺序走，比直接翻完整配置快得多。
