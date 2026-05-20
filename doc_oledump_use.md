# oledump 使用

oledump 用于查看 OLE 文件流和提取宏内容。

## 常用命令

```bash
oledump.py sample.doc
```

```bash
oledump.py -s 8 sample.doc
```

```bash
oledump.py -s 8 -v sample.doc
```

```bash
oledump.py -s A -v sample.doc
```

```bash
oledump.py -p plugin_http_heuristics.py sample.doc
```

流编号、宏内容和可疑字符串要一起保存，方便报告复现。
