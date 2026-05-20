# ldapnomnom 使用

ldapnomnom 用于通过 LDAP 验证域用户是否存在，适合从用户名列表里清理有效账号。它速度快，适合喷洒前做低噪声准备。

## 基础验证

```bash
ldapnomnom -input users.txt -server 192.168.1.10 -domain domain.local
```

```bash
ldapnomnom -input users.txt -server dc01.domain.local -domain domain.local -output valid.txt
```

```bash
ldapnomnom -input users.txt -server 192.168.1.10 -domain domain.local -threads 10
```

## 认证参数

```bash
ldapnomnom -input users.txt -server 192.168.1.10 -domain domain.local -user knownuser -pass 'Password123!'
```

```bash
ldapnomnom -input users.txt -server 192.168.1.10 -domain domain.local -port 389
```

```bash
ldapnomnom -input users.txt -server 192.168.1.10 -domain domain.local -ssl
```

用户枚举结果要和锁定策略一起看。喷洒前先去掉管理员、服务账号和明显敏感账号，降低业务影响。
