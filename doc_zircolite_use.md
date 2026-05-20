# Zircolite 使用

Zircolite 用于用 Sigma 规则扫描 EVTX 日志，适合快速检测 Windows 事件。

## 常用命令

```bash
python3 zircolite.py --evtx Security.evtx --ruleset rules
```

```bash
python3 zircolite.py --evtx logs/ --ruleset rules --json results.json
```

```bash
python3 zircolite.py --evtx logs/ --ruleset rules --csv results.csv
```

```bash
python3 zircolite.py --evtx Security.evtx --ruleset rules --debug
```

```bash
python3 zircolite.py --ruleset rules --evtx logs/ --template templates/exportForTimesketch.tmpl
```

小记录：Sigma 命中要看字段映射和日志源，规则标题只能作为入口。
