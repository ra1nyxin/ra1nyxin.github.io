# Hydra 常用用法

这篇记录 Hydra 的常用命令。它适合在授权实验环境里验证弱口令、默认口令和账号密码组合，使用时要控制速率和范围。

## 基础格式

单用户单密码验证 SSH。

```bash
hydra -l USER -p 'PASSWORD' ssh://192.168.1.10
```

单用户密码字典。

```bash
hydra -l USER -P passwords.txt ssh://192.168.1.10
```

用户字典单密码。

```bash
hydra -L users.txt -p 'PASSWORD' ssh://192.168.1.10
```

用户字典和密码字典。

```bash
hydra -L users.txt -P passwords.txt ssh://192.168.1.10
```

## 常见服务

SSH。

```bash
hydra -L users.txt -P passwords.txt -s 22 192.168.1.10 ssh
```

FTP。

```bash
hydra -L users.txt -P passwords.txt 192.168.1.10 ftp
```

RDP。

```bash
hydra -L users.txt -P passwords.txt rdp://192.168.1.10
```

SMB。

```bash
hydra -L users.txt -P passwords.txt smb://192.168.1.10
```

## Web 表单

HTTP Basic。

```bash
hydra -L users.txt -P passwords.txt 192.168.1.10 http-get /admin
```

POST 登录表单。

```bash
hydra -L users.txt -P passwords.txt 192.168.1.10 http-post-form "/login:username=^USER^&password=^PASS^:Invalid"
```

HTTPS POST 登录表单。

```bash
hydra -L users.txt -P passwords.txt 192.168.1.10 https-post-form "/login:username=^USER^&password=^PASS^:Invalid"
```

## 控制节奏

限制线程。

```bash
hydra -L users.txt -P passwords.txt -t 4 ssh://192.168.1.10
```

找到一个结果后停止。

```bash
hydra -L users.txt -P passwords.txt -f ssh://192.168.1.10
```

显示详细过程。

```bash
hydra -L users.txt -P passwords.txt -V ssh://192.168.1.10
```

保存结果。

```bash
hydra -L users.txt -P passwords.txt -o hydra-result.txt ssh://192.168.1.10
```

## 小记录

Hydra 最关键的是确认失败提示、服务协议和速率。Web 表单要先抓一次真实请求，确认字段名、路径和失败文本，再把它改成 Hydra 的格式。
