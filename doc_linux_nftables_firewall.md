# Linux nftables 防火墙笔记

`nftables` 是现代 Linux 上更推荐的包过滤框架，很多发行版已经用它替代 iptables。它的核心对象是 table、chain、rule。排障时不要只看一条规则，要把 hook、priority、policy、counter 和实际命中顺序放在一起看。

先看当前 ruleset。`-a` 会显示 handle，后面删除单条规则时很有用。

```bash
sudo nft list ruleset
sudo nft -a list ruleset
sudo nft list tables
sudo nft list table inet filter
sudo nft list chain inet filter input
```

一个最小的 inet filter 表大概长这样。`inet` 同时覆盖 IPv4 和 IPv6，适合大多数主机防火墙。默认策略先用 accept 更安全，确认规则没问题后再改成 drop。

```bash
sudo nft add table inet filter
sudo nft add chain inet filter input '{ type filter hook input priority 0; policy accept; }'
sudo nft add chain inet filter forward '{ type filter hook forward priority 0; policy accept; }'
sudo nft add chain inet filter output '{ type filter hook output priority 0; policy accept; }'
```

远程机器上改 input 链时，先允许 loopback、已建立连接和当前管理端口，再加限制规则。不要先把 policy 改成 drop，然后才想起来放 SSH。

```bash
sudo nft add rule inet filter input iif lo accept
sudo nft add rule inet filter input ct state established,related accept
sudo nft add rule inet filter input tcp dport 22 accept
sudo nft add rule inet filter input icmp type echo-request accept
```

规则计数器能帮助判断有没有命中。写规则时可以加 `counter`，也可以通过 `nft list ruleset` 看已有 counter 的增长。

```bash
sudo nft add rule inet filter input tcp dport 443 counter accept
sudo nft list chain inet filter input
```

按 handle 删除规则最稳。先 `-a` 找 handle，再删对应项。

```bash
sudo nft -a list chain inet filter input
sudo nft delete rule inet filter input handle 12
```

临时清空和删除要非常小心，尤其是远程维护。清链只清规则，删表会把整张表都移除。

```bash
sudo nft flush chain inet filter input
sudo nft delete table inet filter
```

NAT 通常放在 `ip nat` 或 `inet` 表里。最常见的是出口 masquerade 和端口转发。端口转发需要 prerouting，回程还要有正确路由，必要时还要配 forward 允许。

```bash
sudo nft add table ip nat
sudo nft add chain ip nat postrouting '{ type nat hook postrouting priority 100; }'
sudo nft add rule ip nat postrouting oifname "eth0" masquerade
```

DNAT 示例：

```bash
sudo nft add chain ip nat prerouting '{ type nat hook prerouting priority -100; }'
sudo nft add rule ip nat prerouting tcp dport 8080 dnat to 192.168.1.10:80
sudo nft add rule inet filter forward ip daddr 192.168.1.10 tcp dport 80 accept
```

集合适合管理一组地址或端口，比复制很多条规则清晰。

```bash
sudo nft add set inet filter blocked '{ type ipv4_addr; flags interval; }'
sudo nft add element inet filter blocked '{ 192.0.2.10, 198.51.100.0/24 }'
sudo nft add rule inet filter input ip saddr @blocked drop
```

规则文件要先检查语法，再加载。远程变更时，可以配合 `at` 或另一个会话准备回滚，防止误封管理链路。

```bash
sudo nft -c -f nftables.conf
sudo nft -f nftables.conf
sudo nft list ruleset > nftables.conf
```

系统持久化方式和发行版有关。Debian/Ubuntu 常见是 `nftables.service` 读取 `/etc/nftables.conf`，RHEL 系列也有自己的服务和 firewalld 集成。确认生效方式前，不要以为手工 `nft add rule` 会在重启后保留。

排障顺序可以这样走：先看 hook 和默认 policy，再看规则顺序和 counter，然后确认 conntrack 状态，最后用 tcpdump 抓 ingress/egress 验证。nftables 本身很清楚，最常见的问题反而是规则加在了错误的 family、table、chain 或接口名上。
