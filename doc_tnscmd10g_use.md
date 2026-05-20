# tnscmd10g 使用

tnscmd10g 用于测试 Oracle TNS Listener，适合老 Oracle 环境枚举。

## 常用命令

```bash
tnscmd10g version -h 192.168.1.10
```

```bash
tnscmd10g status -h 192.168.1.10
```

```bash
tnscmd10g ping -h 192.168.1.10
```

```bash
tnscmd10g services -h 192.168.1.10
```

```bash
tnscmd10g status -h 192.168.1.10 -p 1521
```

适合快速看 listener 状态，后续再用 ODAT 或 sqlplus 验证。
