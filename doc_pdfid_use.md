# pdfid 使用

pdfid 用于快速统计 PDF 可疑关键字，适合 PDF 样本初筛。

## 常用命令

```bash
pdfid.py sample.pdf
```

```bash
pdfid.py -e sample.pdf
```

```bash
pdfid.py -a sample.pdf
```

```bash
pdfid.py -s sample.pdf
```

```bash
pdfid.py samples/*.pdf
```

小记录：看到 JavaScript、OpenAction、Launch、EmbeddedFile 后继续用 pdf-parser 深挖。
