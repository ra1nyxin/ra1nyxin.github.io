# Juniper Junos 常用命令

这篇记录 Junos 设备的常用命令。Junos 的配置有 candidate 和 commit 机制，排查和变更时要把 operational mode 和 configuration mode 分清楚。

## 基础查看

查看版本。

```text
show version
```

查看机箱硬件。

```text
show chassis hardware
```

查看系统告警。

```text
show system alarms
```

查看日志。

```text
show log messages
```

查看当前配置。

```text
show configuration
```

## 接口

查看接口简表。

```text
show interfaces terse
```

查看接口详细信息。

```text
show interfaces ge-0/0/0
```

查看接口错误。

```text
show interfaces extensive ge-0/0/0
```

查看接口描述。

```text
show interfaces descriptions
```

查看接口配置。

```text
show configuration interfaces ge-0/0/0
```

## 路由和邻居

查看路由表。

```text
show route
```

查看某个目的路由。

```text
show route 8.8.8.8
```

查看 ARP。

```text
show arp
```

查看 LLDP 邻居。

```text
show lldp neighbors
```

查看 OSPF 邻居。

```text
show ospf neighbor
```

查看 BGP 邻居。

```text
show bgp summary
```

## 配置模式

进入配置模式。

```text
configure
```

查看候选配置差异。

```text
show | compare
```

检查配置。

```text
commit check
```

提交配置。

```text
commit
```

提交并自动回滚保护。

```text
commit confirmed 5
```

回滚上一版配置。

```text
rollback 1
```

## 备注

Junos 变更前后都看 `show | compare`，远程改管理地址或路由时优先用 `commit confirmed`。如果连接断了，设备会自动回滚，现场会安全很多。
