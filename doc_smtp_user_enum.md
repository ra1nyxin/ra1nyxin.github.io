# SMTP 用户枚举

SMTP 枚举适合确认邮件网关、老 Exchange、Postfix 和内部通知系统的账号暴露情况。先判断 VRFY、EXPN、RCPT TO 的响应差异，再决定是否继续做密码策略验证。

## 端口与服务确认

```bash
nmap -sV -p 25,465,587 192.168.1.10
```

```bash
nc -nv 192.168.1.10 25
```

```bash
openssl s_client -connect mail.example.local:587 -starttls smtp
```

## 常见枚举方式

```bash
smtp-user-enum -M VRFY -U users.txt -t 192.168.1.10
```

```bash
smtp-user-enum -M EXPN -U users.txt -t 192.168.1.10
```

```bash
smtp-user-enum -M RCPT -U users.txt -t 192.168.1.10 -D example.local
```

## Nmap 脚本

```bash
nmap -p 25 --script smtp-commands 192.168.1.10
```

```bash
nmap -p 25 --script smtp-enum-users --script-args smtp-enum-users.methods={VRFY,EXPN,RCPT},userdb=users.txt 192.168.1.10
```

SMTP 的响应容易被网关统一处理，建议保存原始 banner 和几组成功、失败样本。响应时间差有时也会暴露账号是否存在。
