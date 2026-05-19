# Responder 常用用法

这篇记录 Responder 的常用命令。它适合在授权实验环境里观察 LLMNR、NBT-NS、mDNS 请求，顺手收集一些会话和哈希相关信息。

## 基础启动

监听指定网卡。

```bash
sudo responder -I eth0
```

开更详细的日志。

```bash
sudo responder -I eth0 -v
```

启用 HTTP 和 SMB。

```bash
sudo responder -I eth0 -dwPv
```

只看发现阶段。

```bash
sudo responder -I eth0 -A
```

## 常用开关

启用 WPAD。

```bash
sudo responder -I eth0 -w
```

启用代理认证收集。

```bash
sudo responder -I eth0 -P
```

启用毒化模式。

```bash
sudo responder -I eth0 -r
```

禁用单个协议模块时，改 `Responder.conf` 会更直接。

```bash
sudo nano /etc/responder/Responder.conf
```

## 结果查看

查看捕获到的哈希通常会在 Responder 输出目录里。

```bash
ls -lah /usr/share/responder/logs
```

查看配置文件。

```bash
cat /etc/responder/Responder.conf
```

## 小记录

Responder 适合放在内网里观察名字解析和认证回退。跑之前先确认实验范围，跑完后把日志和哈希文件单独归档，后面跟其他枚举结果一起整理会更清楚。
