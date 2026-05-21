# pdfid 使用

pdfid 用于快速统计 PDF 里的可疑关键字。它适合 PDF 样本初筛，先看有没有 JavaScript、自动打开动作、嵌入文件、Launch 动作和异常对象数量。

## 单文件

```bash
pdfid.py sample.pdf
```

```bash
pdfid.py -e sample.pdf
```

```bash
pdfid.py -a sample.pdf
```

`-e` 会展开额外信息，`-a` 适合看所有关键字。看到 `/JS`、`/JavaScript`、`/OpenAction`、`/AA`、`/Launch`、`/EmbeddedFile` 时，后面要继续深挖。

## 批量

```bash
pdfid.py -s sample.pdf
```

```bash
pdfid.py samples/*.pdf
```

批量初筛时先按命中关键字分组。关键字数量高不一定代表恶意，但能帮你决定先分析哪一批。

## 后续分析

```bash
pdf-parser.py --search JavaScript sample.pdf
```

```bash
peepdf -i sample.pdf
```

pdfid 只做统计，具体对象内容还要用 pdf-parser 或 peepdf 看。记录里写清关键字、对象编号和后续提取结果。
