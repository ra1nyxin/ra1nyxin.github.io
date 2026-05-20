# Certify 常用用法

Certify 适合 Windows 环境里的 AD CS 枚举和证书模板检查。常用命令：`find` 枚举，`request` 申请。

```powershell
.\Certify.exe find
```

```powershell
.\Certify.exe find /vulnerable
```

```powershell
.\Certify.exe cas
```

```powershell
.\Certify.exe request /ca:CA\CA-NAME /template:User
```

小记录：Certify 适合和 Certipy 的结果互相印证。Windows 内部看模板时 Certify 很方便，跨平台枚举用 Certipy 更顺手。
