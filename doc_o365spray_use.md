# o365spray 使用

o365spray 用于 Microsoft 365 账号枚举和授权范围内的喷洒验证。

## 常用命令

```bash
o365spray --enum -U users.txt --domain example.com
```

```bash
o365spray --spray -U users.txt -p "Password123!" --count 1 --lockout 5 --domain example.com
```

```bash
o365spray --validate --domain example.com
```

```bash
o365spray --enum -U users.txt --rate 5 --domain example.com
```

```bash
o365spray --spray -U users.txt -P passwords.txt --domain example.com
```

测试前要确认锁定策略、窗口期和排除账号，结果要和登录日志交叉验证。
