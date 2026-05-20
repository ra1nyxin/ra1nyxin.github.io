# Linux 原生命令枚举

这篇记录 Linux 里常用的原生命令。没有脚本时，靠这些命令也能完成一轮基础本地枚举。

## 身份和系统

查看当前用户。

```bash
id
```

查看主机名。

```bash
hostname
```

查看内核。

```bash
uname -a
```

查看发行版。

```bash
cat /etc/os-release
```

查看 sudo 权限。

```bash
sudo -l
```

## 用户和文件

查看用户列表。

```bash
cat /etc/passwd
```

查看当前目录权限。

```bash
ls -la
```

查 SUID 文件。

```bash
find / -perm -4000 -type f 2>/dev/null
```

查可写目录。

```bash
find / -writable -type d 2>/dev/null
```

查最近修改文件。

```bash
find / -type f -mtime -2 2>/dev/null
```

## 进程和网络

查看进程。

```bash
ps aux
```

查看监听端口。

```bash
ss -lntup
```

查看路由。

```bash
ip route
```

查看定时任务。

```bash
cat /etc/crontab
```

查看 systemd timer。

```bash
systemctl list-timers
```

## 备注

Linux 本地枚举先看身份、sudo、内核、SUID、可写路径、计划任务和监听服务。脚本能加速，但手工命令能让你更清楚线索从哪里来。
