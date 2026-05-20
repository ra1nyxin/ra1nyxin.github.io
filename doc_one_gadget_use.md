# one_gadget 使用

one_gadget 用于从 libc 中查找可用 execve gadget，适合 ret2libc 场景。

## 常用命令

```bash
one_gadget libc.so.6
```

```bash
one_gadget --level 1 libc.so.6
```

```bash
one_gadget --raw libc.so.6
```

```bash
one_gadget --near exit,malloc libc.so.6
```

```bash
ldd ./vuln
```

小记录：one_gadget 有约束条件，使用前要确认寄存器和栈上的条件能满足。
