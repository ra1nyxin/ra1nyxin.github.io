# comsvcs.dll MiniDump

comsvcs.dll 可用于生成进程转储，常用于授权取证和本机调试。

## 常用命令

```bash
tasklist /fi "imagename eq lsass.exe"
```

```bash
rundll32.exe C:\Windows\System32\comsvcs.dll, MiniDump 1234 C:\Temp\proc.dmp full
```

```bash
procdump.exe -ma 1234 C:\Temp\proc.dmp
```

```bash
Get-Process lsass
```

```bash
certutil -hashfile C:\Temp\proc.dmp SHA256
```

转储文件通常极敏感，测试机和生产机要严格区分处理流程。
