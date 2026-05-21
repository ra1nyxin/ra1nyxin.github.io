# adidnsdump 常用用法

adidnsdump 更像把 AD 里的 DNS 面直接翻开。它能拿到的不止主机记录，子域、别名、服务定位记录也会一起出来，拼起来以后比单看 LDAP 更完整。

## 导出

```bash
adidnsdump -u 'DOMAIN\USER' -p 'PASSWORD' example.local
```

```bash
adidnsdump -u 'DOMAIN\USER' -p 'PASSWORD' -d example.local -s 192.168.1.10
```

```bash
adidnsdump -u 'DOMAIN\USER' -p 'PASSWORD' -o dnsdump example.local
```

有时域控并不是唯一的 DNS 入口，指定服务器会更稳。输出目录最好固定下来，不然多轮导出一多，文件很容易混。

## 看结果

```bash
ls dnsdump
```

```bash
cat dnsdump/dns_records.csv
```

```bash
cut -d, -f1 dnsdump/dns_records.csv
```

先看 A、CNAME、SRV 这几类，再看有没有老旧主机名或者奇怪的别名。DNS 里有时候能捞出 LDAP 里不明显的资产名，尤其是历史包袱重的环境。

## 复核

导出后最好把结果和 BloodHound、LDAP 查询一起比一遍。单看 DNS 记录容易漏上下文，但和其他数据合起来，整个域的轮廓会清楚很多。

## 习惯

输出目录按时间分开存，别直接覆盖。adidnsdump 的信息密度挺高，过几天回头看时，目录结构清楚会省很多时间。
