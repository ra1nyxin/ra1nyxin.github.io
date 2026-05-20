# Timesketch 使用

Timesketch 用于取证时间线协作分析，适合团队复盘复杂事件。

## 常用命令

```bash
timesketch_importer timeline.csv
```

```bash
timesketch_importer --timeline-name host01 timeline.csv
```

```bash
tsctl list
```

```bash
tsctl search --query "*"
```

```bash
plaso2timesketch --sketch_id 1 timeline.plaso
```

小记录：时间线平台的价值在标注和协作，导入前统一时区和主机名很关键。
