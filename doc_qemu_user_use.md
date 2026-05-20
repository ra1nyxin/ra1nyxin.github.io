# qemu-user 使用

qemu-user 用于运行不同架构的 Linux 用户态程序，适合 IoT 和嵌入式样本分析。

## 常用命令

```bash
qemu-arm ./busybox
```

```bash
qemu-mipsel ./app
```

```bash
qemu-aarch64 -L /usr/aarch64-linux-gnu ./app
```

```bash
qemu-mips -strace ./app
```

```bash
file ./app
```

跨架构运行时先确认大小端、动态链接器和 rootfs，否则错误信息会很迷惑。
