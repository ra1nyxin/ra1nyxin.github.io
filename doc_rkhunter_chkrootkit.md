# rkhunter 和 chkrootkit 常用用法

这篇记录 Linux 主机排查里常见的 rootkit 检查工具。它们适合做快速体检，结果需要人工确认。

## rkhunter

更新属性库。

```bash
sudo rkhunter --propupd
```

执行检查。

```bash
sudo rkhunter --check --sk
```

查看日志。

```bash
sudo less /var/log/rkhunter.log
```

只看告警。

```bash
sudo grep -i warning /var/log/rkhunter.log
```

## chkrootkit

运行检查。

```bash
sudo chkrootkit
```

保存结果。

```bash
sudo chkrootkit | tee chkrootkit.txt
```

查看帮助。

```bash
chkrootkit -h
```

## 备注

这类工具容易出现误报。比赛里可以作为初筛，命中后要回到进程、文件、启动项、内核模块和网络连接做人工复核。
