# pwninit 使用

pwninit 用于自动整理 pwn 题目的 libc、ld 和 patchelf 环境。

## 常用命令

```bash
pwninit
```

```bash
pwninit --bin ./vuln --libc ./libc.so.6 --ld ./ld-linux-x86-64.so.2
```

```bash
pwninit --no-template
```

```bash
pwninit --template-path template.py
```

```bash
ldd ./vuln
```

适合快速搭本地复现环境，生成后仍要检查保护和 libc 偏移。
