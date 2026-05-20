# pdf-parser 使用

pdf-parser 用于解析 PDF 对象和流，适合分析可疑 PDF。

## 常用命令

```bash
pdf-parser.py sample.pdf
```

```bash
pdf-parser.py -a sample.pdf
```

```bash
pdf-parser.py -s /JavaScript sample.pdf
```

```bash
pdf-parser.py -o 5 -f sample.pdf
```

```bash
pdf-parser.py -o 5 -d stream.bin sample.pdf
```

小记录：PDF 分析要按对象编号记录，提取流后再看编码和脚本内容。
