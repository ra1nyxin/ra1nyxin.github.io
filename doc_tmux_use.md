# tmux 常用用法

这篇记录 tmux 的常用命令。远程机器上跑长任务、保留终端现场、分屏看日志，都很适合用 tmux。

## 会话管理

新建会话。

```bash
tmux new -s work
```

查看会话列表。

```bash
tmux ls
```

接回会话。

```bash
tmux attach -t work
```

杀掉会话。

```bash
tmux kill-session -t work
```

重命名会话。

```bash
tmux rename-session -t old new
```

## 窗口管理

新建窗口。

```bash
tmux new-window -n logs
```

切换到指定窗口。

```bash
tmux select-window -t work:1
```

重命名当前窗口。

```bash
tmux rename-window app
```

关闭当前窗口。

```bash
tmux kill-window
```

## 面板管理

左右分屏。

```bash
tmux split-window -h
```

上下分屏。

```bash
tmux split-window -v
```

在指定目录打开新面板。

```bash
tmux split-window -h -c "#{pane_current_path}"
```

关闭当前面板。

```bash
tmux kill-pane
```

## 发送命令

给会话发送命令。

```bash
tmux send-keys -t work "uptime" Enter
```

给指定窗口发送命令。

```bash
tmux send-keys -t work:logs "tail -f /var/log/syslog" Enter
```

## 日志和复制

保存当前面板内容。

```bash
tmux capture-pane -p -S -2000 > pane.log
```

查看当前 tmux 选项。

```bash
tmux show-options -g
```

重载配置。

```bash
tmux source-file ~/.tmux.conf
```

## 小记录

tmux 最常用的场景是远程长任务。任务跑起来后断开 SSH，晚点再 attach 回去看结果。遇到网络不稳的机器，先开 tmux 再做操作，现场会保住很多。
