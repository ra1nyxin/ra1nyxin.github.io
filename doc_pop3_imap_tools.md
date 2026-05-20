# POP3 和 IMAP 检查

POP3、IMAP 在内网里常见于旧邮件系统和设备告警邮箱。检查重点是明文认证、TLS 支持、弱口令验证和邮箱内容的授权边界。

## 服务识别

```bash
nmap -sV -p 110,143,993,995 192.168.1.10
```

```bash
nmap -p 110,143,993,995 --script pop3-capabilities,imap-capabilities 192.168.1.10
```

```bash
openssl s_client -connect mail.example.local:993
```

## 手工登录验证

```bash
nc -nv 192.168.1.10 110
```

```bash
openssl s_client -connect mail.example.local:995
```

```bash
openssl s_client -connect mail.example.local:143 -starttls imap
```

## 口令验证

```bash
hydra -L users.txt -P passwords.txt -s 110 -V 192.168.1.10 pop3
```

```bash
hydra -L users.txt -P passwords.txt -s 143 -V 192.168.1.10 imap
```

小记录：邮件协议验证要控制频率，避免触发锁定或告警风暴。拿到邮箱访问后，优先确认是否有凭据、VPN 通知、工单系统邮件和内部资产线索。
