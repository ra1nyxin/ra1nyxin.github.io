# ropper 使用

ropper 用于查找 ROP gadget，适合二进制利用分析。

## 常用命令

```bash
ropper --file ./vuln
```

```bash
ropper --file ./vuln --search "pop rdi"
```

```bash
ropper --file ./vuln --chain execve
```

```bash
ropper --file ./libc.so.6 --search "syscall"
```

```bash
ropper --file ./vuln --nocolor > gadgets.txt
```

小记录：找 gadget 前先确认架构和 PIE，地址是否固定直接影响利用方式。
