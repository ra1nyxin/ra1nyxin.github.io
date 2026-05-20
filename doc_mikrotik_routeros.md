# MikroTik RouterOS 常用命令

这篇记录 RouterOS 常用命令。MikroTik 命令路径比较清楚，适合按 interface、ip、routing、system 这些模块逐层查。

## 基础状态

查看版本。

```text
/system resource print
```

查看许可证。

```text
/system license print
```

查看日志。

```text
/log print
```

查看配置导出。

```text
/export
```

导出配置到文件。

```text
/export file=config-backup
```

## 接口

查看接口。

```text
/interface print
```

查看接口详细信息。

```text
/interface ethernet print detail
```

查看接口流量。

```text
/interface monitor-traffic ether1
```

查看桥。

```text
/interface bridge print
```

查看桥端口。

```text
/interface bridge port print
```

## IP 和路由

查看 IP 地址。

```text
/ip address print
```

查看路由。

```text
/ip route print
```

查看 ARP。

```text
/ip arp print
```

查看 DNS。

```text
/ip dns print
```

查看 DHCP 租约。

```text
/ip dhcp-server lease print
```

## 防火墙和 NAT

查看 filter 规则。

```text
/ip firewall filter print
```

查看 NAT 规则。

```text
/ip firewall nat print
```

查看连接表。

```text
/ip firewall connection print
```

查看地址列表。

```text
/ip firewall address-list print
```

## 工具

Ping。

```text
/ping 8.8.8.8
```

Traceroute。

```text
/tool traceroute 8.8.8.8
```

抓包。

```text
/tool sniffer quick ip-address=8.8.8.8
```

Torch 看流量。

```text
/tool torch interface=ether1
```

## 备注

RouterOS 排查网络时先看接口、地址、路由、NAT 和 filter。配置导出文件要保护好，里面经常会包含公网地址、隧道配置和账号相关信息。
