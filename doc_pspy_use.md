# pspy 常用用法

pspy 适合 Linux 上无 root 观察进程和定时任务。常用参数：`-f` 文件事件，`-i` 间隔，`-c` 关闭颜色。

```bash
./pspy64
```

```bash
./pspy64 -f
```

```bash
./pspy64 -i 1000
```

```bash
./pspy64 -c | tee pspy.txt
```

小记录：pspy 适合等 cron、脚本和服务动作。比赛里跑几分钟往往能看到自动任务和敏感脚本路径。
