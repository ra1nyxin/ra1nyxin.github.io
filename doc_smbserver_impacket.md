# Impacket smbserver 使用

Impacket 的 smbserver 适合在 Windows 目标和 Linux 测试机之间传文件，也常用于验证 NTLM 认证和共享访问。它比临时 HTTP 服务更贴近 Windows 使用习惯。

## 启动共享

```bash
impacket-smbserver share ./share -smb2support
```

```bash
impacket-smbserver share ./share -smb2support -username user -password pass
```

```bash
impacket-smbserver tools /opt/tools -smb2support
```

## Windows 访问

```bash
net use \\\\192.168.1.50\\share
```

```bash
copy \\\\192.168.1.50\\share\\tool.exe C:\\Windows\\Temp\\tool.exe
```

```bash
dir \\\\192.168.1.50\\share
```

## 凭据验证

```bash
net use \\\\192.168.1.50\\share /user:user pass
```

Windows 到 Linux 传文件时，SMB 经常比 HTTP 顺手。开启认证能减少误访问，也方便记录哪个账号完成了访问。
