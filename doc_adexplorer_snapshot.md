# AD Explorer Snapshot

AD Explorer 可生成 AD 快照，适合离线审计对象、属性和权限。

## 常用命令

```bash
ADExplorer.exe
```

```bash
ADExplorer.exe -snapshot "" snapshot.dat
```

```bash
ADExplorer.exe -snapshot "" snapshot.dat -server dc01.domain.local
```

```bash
ADExplorer.exe -snapshot "" snapshot.dat -user domain\user -password pass
```

```bash
strings snapshot.dat | findstr /i admin
```

快照文件含大量敏感目录信息，保存和传输要按高敏感资料处理。
