# Huawei VRP 常用命令

这篇记录华为交换机、路由器、防火墙类 VRP 设备常用命令。不同型号命令会有细节差异，日常排查接口、路由、VLAN、日志时大体思路一致。

## 基础查看

查看版本。

```text
display version
```

查看当前配置。

```text
display current-configuration
```

查看保存配置。

```text
display saved-configuration
```

查看设备告警。

```text
display alarm active
```

查看日志。

```text
display logbuffer
```

查看 CPU。

```text
display cpu-usage
```

查看内存。

```text
display memory-usage
```

## 接口

查看接口简表。

```text
display ip interface brief
```

查看接口状态。

```text
display interface GigabitEthernet 0/0/1
```

查看接口描述。

```text
display interface description
```

查看接口错误。

```text
display interface GigabitEthernet 0/0/1 | include error
```

进入接口视图。

```text
interface GigabitEthernet 0/0/1
```

配置接口描述。

```text
description uplink-to-core
```

## VLAN 和交换

查看 VLAN。

```text
display vlan
```

查看 VLAN 简表。

```text
display vlan summary
```

查看 MAC 地址表。

```text
display mac-address
```

查看 trunk 允许 VLAN。

```text
display port vlan
```

查看 STP。

```text
display stp brief
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
display lldp neighbor brief
```

查看 OSPF 邻居。

```text
display ospf peer
```

## 保存和对比

保存配置。

```text
save
```

查看当前配置里的关键字。

```text
display current-configuration | include route-static
```

查看接口相关配置。

```text
display current-configuration interface GigabitEthernet 0/0/1
```

## 备注

华为 VRP 的视图层级很重要。排查时先在用户视图用 `display` 看状态，确认要改的对象后再进系统视图和接口视图处理。
