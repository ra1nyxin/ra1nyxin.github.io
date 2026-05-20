# linPEAS 常用用法

linPEAS 适合 Linux 本地提权枚举。常用参数：输出到文件、无颜色、安静模式。

```bash
chmod +x linpeas.sh
```

```bash
./linpeas.sh | tee linpeas.txt
```

```bash
./linpeas.sh -a | tee linpeas-ansi.txt
```

```bash
./linpeas.sh -q | tee linpeas-quiet.txt
```

linPEAS 输出很长，建议按用户权限、SUID、服务、cron、文件权限和网络分区段记录。
