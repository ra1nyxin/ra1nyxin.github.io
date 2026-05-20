# ODAT 使用

ODAT 用于 Oracle 数据库安全测试，适合 SID、账号和权限枚举。

## 常用命令

```bash
odat sidguesser -s 192.168.1.10 -p 1521
```

```bash
odat passwordguesser -s 192.168.1.10 -p 1521 -d ORCL
```

```bash
odat tnspoison -s 192.168.1.10 -p 1521
```

```bash
odat all -s 192.168.1.10 -p 1521 -d ORCL -U user -P pass
```

```bash
odat utlfile -s 192.168.1.10 -d ORCL -U user -P pass --test-module
```

Oracle 测试先确认 SID/Service Name 和账号权限，写文件类模块只在明确授权下使用。
