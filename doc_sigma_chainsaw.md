# Sigma 和 Chainsaw 常用用法

这篇记录 Sigma 规则和 Chainsaw 的常用命令。它们适合在蓝队比赛里快速筛 Windows 事件日志。

## Chainsaw 基础

扫描 EVTX。

```bash
chainsaw hunt logs/ -s sigma/ --mapping mappings/sigma-event-logs-all.yml
```

输出 CSV。

```bash
chainsaw hunt logs/ -s sigma/ --mapping mappings/sigma-event-logs-all.yml --csv --output chainsaw-out
```

输出 JSON。

```bash
chainsaw hunt logs/ -s sigma/ --mapping mappings/sigma-event-logs-all.yml --json --output chainsaw.json
```

指定规则目录。

```bash
chainsaw hunt Security.evtx -s rules/windows/
```

## 搜索事件

按关键词搜索。

```bash
chainsaw search "PowerShell" logs/
```

按事件 ID 搜索。

```bash
chainsaw search "EventID: 4624" logs/
```

## Sigma 规则检查

查看规则文件。

```bash
ls sigma/rules/windows
```

搜索规则关键字。

```bash
rg "powershell" sigma/rules/windows
```

## 备注

Sigma 适合做检测逻辑沉淀，Chainsaw 适合快速把 EVTX 跑出命中结果。比赛里先用规则扫一轮，再按时间线和主机名回看细节。
