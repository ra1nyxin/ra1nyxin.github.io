# one_gadget 使用

one_gadget 用于从 libc 中查找可触发 `execve("/bin/sh", ...)` 的 gadget，常放在 ret2libc 后半段。它能节省找链子的时间，但约束条件要认真看。

## 查找 gadget

```bash
one_gadget libc.so.6
```

```bash
one_gadget --level 1 libc.so.6
```

```bash
one_gadget --raw libc.so.6
```

默认输出会带约束说明，`--raw` 适合脚本里取偏移。`--level` 调高后结果会更多，约束也可能更苛刻。

## 结合目标

```bash
one_gadget --near exit,malloc libc.so.6
```

```bash
ldd ./vuln
```

```bash
checksec --file ./vuln
```

先确认本地 libc 是否和远程一致，再看保护和偏移。`--near` 适合找靠近已知符号的 gadget，部分场景能减少覆盖字节要求。

## 复核

使用前要确认寄存器、栈地址、环境变量和内存可写条件能满足。one_gadget 失败时，先在 gdb 里停到跳转前检查约束，而不是反复换偏移。
