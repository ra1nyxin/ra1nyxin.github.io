# netdiscover 使用

netdiscover 用于被动或主动发现局域网主机。

## 常用命令

```bash
sudo netdiscover -i eth0
```

```bash
sudo netdiscover -r 192.168.1.0/24
```

```bash
sudo netdiscover -p
```

```bash
sudo netdiscover -i eth0 -r 192.168.1.0/24
```

```bash
sudo netdiscover -s 10 -r 192.168.1.0/24
```

小记录：适合刚接入内网时观察网段，结果要和 DHCP、ARP 表交叉确认。
