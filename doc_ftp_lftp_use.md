# FTP 与 lftp 检查

FTP 检查适合确认匿名访问、弱口令、可写目录和备份文件泄露。内网设备、老 CMS、NAS 和摄像头经常会留下 FTP 入口。

## 服务识别

```bash
nmap -sV -p 21 --script ftp-anon,ftp-syst 192.168.1.10
```

```bash
nc -nv 192.168.1.10 21
```

```bash
openssl s_client -connect 192.168.1.10:21 -starttls ftp
```

## lftp 使用

```bash
lftp -u anonymous,anonymous 192.168.1.10
```

```bash
lftp -u user,password -e "ls; bye" 192.168.1.10
```

```bash
lftp -u user,password -e "mirror --verbose /backup ./backup; bye" 192.168.1.10
```

## 权限验证

```bash
lftp -u user,password -e "put test.txt; ls; rm test.txt; bye" 192.168.1.10
```

```bash
hydra -L users.txt -P passwords.txt -V 192.168.1.10 ftp
```

FTP 目录里优先找备份包、配置文件、数据库导出和部署脚本。可写目录要谨慎验证，上传测试文件后及时删除。
