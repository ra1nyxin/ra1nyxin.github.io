# ROPgadget 使用

ROPgadget 用于查找 ROP/JOP gadget 和字符串。

## 常用命令

```bash
ROPgadget --binary ./vuln
```

```bash
ROPgadget --binary ./vuln --only "pop|ret"
```

```bash
ROPgadget --binary ./vuln --string "/bin/sh"
```

```bash
ROPgadget --binary ./libc.so.6 --ropchain
```

```bash
ROPgadget --binary ./vuln --depth 5
```

小记录：ROP 结果要结合坏字符、栈对齐和可写段一起看。
