# snmpwalk 使用

SNMP 能快速暴露设备型号、接口、路由、进程、挂载点和部分配置。检查时先确认 community，再按 MIB 范围分层枚举。

## 服务发现

```bash
nmap -sU -p 161 --script snmp-info 192.168.1.10
```

```bash
onesixtyone -c communities.txt 192.168.1.10
```

```bash
snmpwalk -v2c -c public 192.168.1.10
```

## 常用 OID

```bash
snmpwalk -v2c -c public 192.168.1.10 1.3.6.1.2.1.1
```

```bash
snmpwalk -v2c -c public 192.168.1.10 1.3.6.1.2.1.2.2.1.2
```

```bash
snmpwalk -v2c -c public 192.168.1.10 1.3.6.1.2.1.25.4.2.1.2
```

## 输出保存

```bash
snmpwalk -v2c -c public -On 192.168.1.10 > snmp_192.168.1.10.txt
```

```bash
snmpbulkwalk -v2c -c public -On 192.168.1.10 > snmp_bulk.txt
```

小记录：SNMP 结果里接口描述、路由表和进程列表很有用。看到 `private` 或可写 community 时，要单独标注风险级别。
