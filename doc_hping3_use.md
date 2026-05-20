# hping3 使用

hping3 用于构造 TCP/UDP/ICMP 探测包，适合网络过滤和防火墙行为验证。

## 常用命令

```bash
sudo hping3 -S -p 80 192.168.1.10
```

```bash
sudo hping3 -S -p 443 -c 3 192.168.1.10
```

```bash
sudo hping3 --udp -p 53 -c 3 192.168.1.10
```

```bash
sudo hping3 -1 -c 3 192.168.1.10
```

```bash
sudo hping3 -S -p 80 --traceroute 192.168.1.10
```

它适合做精细网络验证，发送频率要控制，避免影响设备。
