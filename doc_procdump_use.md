# ProcDump 使用

ProcDump 用于进程转储、崩溃捕获和性能问题排查。

## 常用命令

```bash
procdump.exe -ma 1234 C:\Temp\proc.dmp
```

```bash
procdump.exe -accepteula -ma notepad.exe C:\Temp\notepad.dmp
```

```bash
procdump.exe -e -ma app.exe C:\Dumps
```

```bash
procdump.exe -n 3 -s 5 -ma app.exe C:\Dumps
```

```bash
procdump.exe -64 -ma 1234 C:\Temp\proc64.dmp
```

小记录：安全分析里常用它保存可疑进程现场，转储后要立即计算哈希和记录 PID。
