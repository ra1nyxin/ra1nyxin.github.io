# Linux nftables 防火墙常用命令

这篇记录 nftables 的常用命令。现代 Linux 上很多发行版已经用 nftables 管理包过滤和 NAT，排查时要看规则、表、链、计数器和实际命中情况。

## 查看规则

查看全部规则。

```bash
sudo nft list ruleset
```

查看表。

```bash
sudo nft list tables
```

查看某个表。

```bash
sudo nft list table inet filter
```

查看某条链。

```bash
sudo nft list chain inet filter input
```

带 handle 查看规则。

```bash
sudo nft -a list ruleset
```

## 临时规则

创建 inet 表。

```bash
sudo nft add table inet filter
```

创建 input 链。

```bash
sudo nft add chain inet filter input '{ type filter hook input priority 0; policy accept; }'
```

允许 SSH。

```bash
sudo nft add rule inet filter input tcp dport 22 accept
```

允许已建立连接。

```bash
sudo nft add rule inet filter input ct state established,related accept
```

丢弃某个源地址。

```bash
sudo nft add rule inet filter input ip saddr 192.0.2.10 drop
```

## 删除规则

按 handle 删除规则。

```bash
sudo nft delete rule inet filter input handle 12
```

清空某条链。

```bash
sudo nft flush chain inet filter input
```

删除表。

```bash
sudo nft delete table inet filter
```

## NAT

创建 nat 表。

```bash
sudo nft add table ip nat
```

创建 postrouting 链。

```bash
sudo nft add chain ip nat postrouting '{ type nat hook postrouting priority 100; }'
```

添加 masquerade。

```bash
sudo nft add rule ip nat postrouting oifname "eth0" masquerade
```

添加端口转发。

```bash
sudo nft add rule ip nat prerouting tcp dport 8080 dnat to 192.168.1.10:80
```

## 保存和加载

导出当前规则。

```bash
sudo nft list ruleset > nftables.conf
```

从文件加载规则。

```bash
sudo nft -f nftables.conf
```

检查规则文件语法。

```bash
sudo nft -c -f nftables.conf
```

## 备注

nftables 临时命令马上生效，远程机器上改默认策略时要特别谨慎。建议先允许当前管理端口和已建立连接，再逐步加限制规则。
