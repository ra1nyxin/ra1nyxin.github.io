# Plaso 和 log2timeline 常用用法

这篇记录 Plaso/log2timeline 的常用命令。它适合把磁盘镜像、目录或日志文件整理成时间线。

## 生成时间线

从目录生成 plaso 文件。

```bash
log2timeline.py timeline.plaso evidence/
```

从镜像生成时间线。

```bash
log2timeline.py timeline.plaso disk image.E01
```

指定时区。

```bash
log2timeline.py --timezone UTC timeline.plaso evidence/
```

## 导出结果

导出 CSV。

```bash
psort.py -o l2tcsv -w timeline.csv timeline.plaso
```

导出 JSON。

```bash
psort.py -o json -w timeline.json timeline.plaso
```

按时间过滤。

```bash
psort.py -o l2tcsv -w filtered.csv "date > '2026-05-01' AND date < '2026-05-02'" timeline.plaso
```

## 备注

Plaso 适合把大量零散证据变成统一时间线。比赛里先生成完整时间线，再按攻击时间段、用户名、路径和进程名过滤。
