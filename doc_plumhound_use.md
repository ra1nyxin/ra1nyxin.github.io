# PlumHound 使用

PlumHound 基于 BloodHound 数据生成 AD 风险报告和查询结果。

## 常用命令

```bash
python3 PlumHound.py --easy
```

```bash
python3 PlumHound.py -x tasks/default.tasks
```

```bash
python3 PlumHound.py -s bolt://127.0.0.1:7687 -u neo4j -p pass
```

```bash
python3 PlumHound.py -x tasks/default.tasks -o reports
```

```bash
python3 PlumHound.py --HTML
```

小记录：它适合把 BloodHound 图数据转成更可读的行动清单。
