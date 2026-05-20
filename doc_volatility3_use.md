# Volatility3 常用用法

这篇记录 Volatility3 的常用命令。它适合内存取证，比赛里常用来查进程、网络、命令行、DLL、注册表和可疑注入。

## 基础信息

查看帮助。

```bash
vol -h
```

识别 Windows 信息。

```bash
vol -f memory.raw windows.info
```

查看进程列表。

```bash
vol -f memory.raw windows.pslist
```

查看进程树。

```bash
vol -f memory.raw windows.pstree
```

## 进程和网络

查看命令行。

```bash
vol -f memory.raw windows.cmdline
```

查看网络连接。

```bash
vol -f memory.raw windows.netscan
```

查看 DLL。

```bash
vol -f memory.raw windows.dlllist --pid 1234
```

查看句柄。

```bash
vol -f memory.raw windows.handles --pid 1234
```

## 文件和注册表

扫描文件对象。

```bash
vol -f memory.raw windows.filescan
```

导出文件。

```bash
vol -f memory.raw windows.dumpfiles --virtaddr 0x12345678
```

查看 hivelist。

```bash
vol -f memory.raw windows.registry.hivelist
```

## 备注

Volatility3 排查时先看系统信息、进程树、命令行和网络连接。找到可疑 PID 后再看 DLL、句柄、文件和内存转储。
