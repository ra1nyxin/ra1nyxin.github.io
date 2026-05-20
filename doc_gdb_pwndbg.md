# GDB 和 pwndbg 常用命令

这篇记录 GDB、pwndbg 的常用命令。Linux 本地调试、崩溃定位、寄存器查看和简单栈分析时会用到。

## 启动和运行

打开程序。

```bash
gdb ./app
```

带参数运行。

```gdb
run arg1 arg2
```

附加进程。

```bash
gdb -p 1234
```

加载 core。

```bash
gdb ./app core
```

## 断点和执行

下断点。

```gdb
break main
```

继续执行。

```gdb
continue
```

单步进入。

```gdb
step
```

单步跳过。

```gdb
next
```

## 查看现场

查看寄存器。

```gdb
info registers
```

查看栈。

```gdb
x/32gx $rsp
```

查看反汇编。

```gdb
disassemble main
```

查看调用栈。

```gdb
bt
```

## pwndbg 常用

查看上下文。

```gdb
context
```

查看保护。

```gdb
checksec
```

查找字符串。

```gdb
search -t string "/bin/sh"
```

## 备注

调试时先确认架构、保护、崩溃点和寄存器状态。GDB 命令不用一开始记太多，能稳定看寄存器、栈、反汇编和断点就够用了。
