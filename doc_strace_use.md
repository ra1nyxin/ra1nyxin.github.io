# strace 常用用法

这篇记录 strace 的常用命令。进程卡住、文件找不到、权限异常、网络连接失败时，strace 能直接看到系统调用层面的线索。

## 跟踪命令

跟踪一个命令。

```bash
strace ls
```

保存到文件。

```bash
strace -o trace.log ls
```

显示耗时。

```bash
strace -T ls
```

显示时间戳。

```bash
strace -tt ls
```

## 附加到进程

跟踪已有进程。

```bash
sudo strace -p 1234
```

跟踪并保存。

```bash
sudo strace -p 1234 -o trace.log
```

跟踪子进程。

```bash
strace -f ./app
```

跟踪已有进程和子进程。

```bash
sudo strace -f -p 1234
```

## 过滤系统调用

只看文件相关调用。

```bash
strace -e trace=file ./app
```

只看网络相关调用。

```bash
strace -e trace=network ./app
```

只看进程相关调用。

```bash
strace -e trace=process ./app
```

只看 openat。

```bash
strace -e openat ./app
```

## 常见排查

排查配置文件路径。

```bash
strace -e trace=file ./app 2>&1 | grep config
```

排查连接失败。

```bash
strace -e trace=network ./app
```

统计系统调用耗时。

```bash
strace -c ./app
```

## 备注

strace 输出很多，先用 `-e trace=file` 或 `-e trace=network` 收窄范围会清楚很多。排查线上进程时注意输出文件大小，长时间跟踪最好加采样时间或尽快停止。
