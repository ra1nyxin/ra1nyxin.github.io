# ike-scan 使用

ike-scan 用来检查 VPN 网关和 IKE 配置。OSCP、内网评估和边界资产梳理里，它能帮你快速判断是否存在 Aggressive Mode、厂商指纹和弱配置。

## 基础扫描

```bash
ike-scan 192.168.1.10
```

```bash
ike-scan -M 192.168.1.10
```

```bash
ike-scan -M -A 192.168.1.10
```

## 网段扫描

```bash
ike-scan -M -f targets.txt
```

```bash
ike-scan --sport=500 --dport=500 -M 192.168.1.0/24
```

## 指纹和 PSK 哈希

```bash
ike-scan -M --showbackoff 192.168.1.10
```

```bash
ike-scan -M -A --id=test 192.168.1.10
```

```bash
psk-crack -d wordlist.txt ike_hash.txt
```

VPN 网关的风险要结合可达范围、账号策略和日志情况判断。Aggressive Mode 命中后，把抓到的哈希、组名和网关地址分开保存。
