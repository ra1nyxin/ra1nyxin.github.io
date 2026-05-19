# auditd 和 ausearch 常用用法

这篇记录 Linux auditd 的常用排查命令。比赛里如果启用了审计日志，可以用它快速查命令执行、文件访问和权限变化。

## 状态和规则

查看 auditd 状态。

```bash
sudo systemctl status auditd
```

查看审计规则。

```bash
sudo auditctl -l
```

添加文件监控。

```bash
sudo auditctl -w /etc/passwd -p wa -k passwd_watch
```

删除所有规则。

```bash
sudo auditctl -D
```

## 查询日志

按 key 查询。

```bash
sudo ausearch -k passwd_watch
```

按用户查询。

```bash
sudo ausearch -ua 1000
```

按时间查询。

```bash
sudo ausearch -ts recent
```

输出可读解释。

```bash
sudo ausearch -k passwd_watch -i
```

## 报告

查看用户报告。

```bash
sudo aureport -u
```

查看执行报告。

```bash
sudo aureport -x
```

## 小记录

auditd 适合事后查关键文件、提权和命令执行痕迹。规则要提前布好，比赛中拿到机器后先看是否已有审计日志。
