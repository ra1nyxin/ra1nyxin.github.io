# gowitness 常用用法

gowitness 适合批量网页截图和 Web 资产留档。常用参数：`scan` 扫描列表，`single` 单目标，`--db-path` 数据库。

```bash
gowitness single https://example.com
```

```bash
gowitness scan -f urls.txt
```

```bash
gowitness scan -f urls.txt --threads 8
```

```bash
gowitness report --db-path gowitness.sqlite
```

小记录：gowitness 适合做 Web 资产的视觉留档。比赛里先截图，再按标题、状态码和页面布局筛异常。
