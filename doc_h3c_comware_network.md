# H3C Comware 常用命令

这篇记录 H3C Comware 设备的常用命令。交换、路由、接口和日志排查场景里，很多命令和华为 VRP 接近，但输出字段和细节会有差异。

## 基础查看

查看版本。

```text
display version
```

查看当前配置。

```text
display current-configuration
```

查看启动配置。

```text
display saved-configuration
```

查看日志。

```text
display logbuffer
```

查看设备运行状态。

```text
display device
```

查看环境状态。

```text
display environment
```

## 接口

查看接口简表。

```text
display interface brief
```

查看三层接口简表。

```text
display ip interface brief
```

查看接口详细信息。

```text
display interface GigabitEthernet1/0/1
```

查看接口描述。

```text
display interface description
```

进入接口。

```text
interface GigabitEthernet1/0/1
```

配置接口描述。

```text
description uplink-to-core
```

## VLAN 和二层

查看 VLAN。

```text
display vlan brief
```

查看端口 VLAN。

```text
display port
```

查看 MAC 地址表。

```text
display mac-address
```

查看 STP。

```text
display stp brief
```

查看链路聚合。

```text
display link-aggregation summary
```

## 路由和邻居

查看路由表。

```text
display ip routing-table
```

查看 ARP。

```text
display arp
```

查看 LLDP 邻居。

```text
display lldp neighbor-information brief
```

查看 OSPF 邻居。

```text
display ospf peer
```

## 保存和维护

保存配置。

```text
save
```

查看启动文件。

```text
display boot-loader
```

查看配置里某个关键字。

```text
display current-configuration | include vlan
```

## 小记录

Comware 排查交换问题时，接口、VLAN、MAC、STP、聚合状态要连着看。端口状态正常但业务不通时，优先确认 VLAN 透传和链路聚合成员是否一致。
