# Pretender 使用

Pretender 用于在内网里观察和响应 LLMNR、NBT-NS、mDNS 等名称解析请求。它适合做中继前的信息收集，也适合蓝队验证名称解析治理效果。

## 监听模式

```bash
sudo pretender -i eth0
```

```bash
sudo pretender -i eth0 --dry
```

```bash
sudo pretender -i eth0 --no-ra
```

## 输出和过滤

```bash
sudo pretender -i eth0 --outfile pretender.log
```

```bash
sudo pretender -i eth0 --spoof "fileserver"
```

```bash
sudo pretender -i eth0 --ttl 30
```

## 配合分析

```bash
tcpdump -i eth0 -nn udp port 5355 or udp port 137 or udp port 5353
```

小记录：先用观察模式看请求来源和名称习惯，再决定是否响应。名称解析流量能暴露主机角色、共享命名和脚本硬编码。
