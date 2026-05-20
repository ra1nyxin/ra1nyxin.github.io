# systemctl 和 journalctl

这篇记录 Linux 服务排查常用命令。服务起不来、重启循环、日志太多、启动参数不对时，基本都绕不开 systemctl 和 journalctl。

## systemctl 基础

查看服务状态。

```bash
systemctl status nginx
```

启动服务。

```bash
sudo systemctl start nginx
```

停止服务。

```bash
sudo systemctl stop nginx
```

重启服务。

```bash
sudo systemctl restart nginx
```

重新加载配置。

```bash
sudo systemctl reload nginx
```

## 开机自启

启用开机自启。

```bash
sudo systemctl enable nginx
```

关闭开机自启。

```bash
sudo systemctl disable nginx
```

查看是否启用。

```bash
systemctl is-enabled nginx
```

查看是否运行。

```bash
systemctl is-active nginx
```

## 查看 unit

查看 unit 文件内容。

```bash
systemctl cat nginx
```

查看服务依赖。

```bash
systemctl list-dependencies nginx
```

重载 systemd 配置。

```bash
sudo systemctl daemon-reload
```

## journalctl 日志

查看某个服务日志。

```bash
journalctl -u nginx
```

跟随日志。

```bash
journalctl -u nginx -f
```

查看最近 100 行。

```bash
journalctl -u nginx -n 100
```

查看本次启动后的日志。

```bash
journalctl -u nginx -b
```

按时间查看。

```bash
journalctl -u nginx --since "1 hour ago"
```

## 系统日志

查看本次启动的所有日志。

```bash
journalctl -b
```

查看错误级别日志。

```bash
journalctl -p err -b
```

查看磁盘占用。

```bash
journalctl --disk-usage
```

清理旧日志。

```bash
sudo journalctl --vacuum-time=7d
```

## 备注

服务排错时先看 `systemctl status` 的退出码和最近日志，再用 `journalctl -u` 展开。改 unit 文件后记得 `daemon-reload`，否则 systemd 还会用旧配置。
