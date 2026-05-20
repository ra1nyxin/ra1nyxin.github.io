# onesixtyone 使用

onesixtyone 专门用于快速验证 SNMP community。它速度快，适合在授权网段里先跑一轮，之后再用 snmpwalk 深挖。

## 单目标测试

```bash
onesixtyone -c communities.txt 192.168.1.10
```

```bash
onesixtyone -c communities.txt -w 100 192.168.1.10
```

```bash
onesixtyone -d -c communities.txt 192.168.1.10
```

## 网段测试

```bash
onesixtyone -c communities.txt -i targets.txt
```

```bash
onesixtyone -c /usr/share/seclists/Discovery/SNMP/snmp.txt -i live_hosts.txt -o snmp_hits.txt
```

## 后续衔接

```bash
cut -d' ' -f1 snmp_hits.txt | sort -u > snmp_hosts.txt
```

```bash
while read h; do snmpwalk -v2c -c public -On "$h" 1.3.6.1.2.1.1; done < snmp_hosts.txt
```

community 字典别只放 `public`。设备厂商默认值、项目名、区域名和运维习惯词经常能提高命中率。
