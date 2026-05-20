# Hayabusa 常用用法

这篇记录 Hayabusa 的常用命令。它适合 Windows 事件日志威胁狩猎，输出表格、CSV、JSON 都很方便。

## 基础扫描

扫描 EVTX 目录。

```bash
hayabusa csv-timeline -d logs/ -o timeline.csv
```

扫描单个文件。

```bash
hayabusa csv-timeline -f Security.evtx -o security.csv
```

输出 JSON 时间线。

```bash
hayabusa json-timeline -d logs/ -o timeline.json
```

输出 HTML 报告。

```bash
hayabusa html-report -d logs/ -o report.html
```

## 规则和更新

更新规则。

```bash
hayabusa update-rules
```

查看帮助。

```bash
hayabusa -h
```

## 结果过滤

查看高危项。

```bash
csvtk grep -f Level -p critical,high timeline.csv
```

搜索 PowerShell。

```bash
rg -i "powershell" timeline.csv
```

## 备注

Hayabusa 适合把 Windows 日志直接变成时间线。比赛中先看 critical/high，再按主机、用户、进程和时间段缩小范围。
