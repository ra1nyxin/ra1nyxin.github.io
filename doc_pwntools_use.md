# pwntools 使用

pwntools 用于二进制利用脚本编写、交互和调试，适合 CTF、OSCP 类缓冲区题和实验。

## 常用命令

```bash
python3 -c "from pwn import *; print(cyclic(100))"
```

```bash
python3 -c "from pwn import *; print(cyclic_find(0x6161616c))"
```

```bash
python3 -c "from pwn import *; e=ELF(\"./vuln\"); print(e.checksec())"
```

```bash
python3 exploit.py
```

```bash
python3 -c "from pwn import *; io=remote(\"127.0.0.1\",31337); io.interactive()"
```

小记录：脚本里记录 offset、架构、保护和 libc 版本，后续复现会更稳。
