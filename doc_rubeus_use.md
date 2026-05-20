# Rubeus 常用用法

Rubeus 适合 Windows AD Kerberos 相关操作和验证。常用参数：`triage` 看票据，`asktgt` 请求 TGT，`kerberoast` 做 SPN 相关检查。

```powershell
.\Rubeus.exe triage
```

```powershell
.\Rubeus.exe klist
```

```powershell
.\Rubeus.exe asktgt /user:USER /password:PASSWORD /domain:example.local
```

```powershell
.\Rubeus.exe kerberoast /outfile:hashes.txt
```

Rubeus 输出要结合域名、时间同步和当前登录上下文看。票据操作前先确认机器时间和 KDC 可达。
