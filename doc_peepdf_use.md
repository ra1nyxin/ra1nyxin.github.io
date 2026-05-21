# peepdf 使用

peepdf 用来交互式查看 PDF 结构。遇到可疑 PDF 时，它适合拿来拆对象、看 stream、找 JavaScript、检查嵌入文件和异常引用。

## 打开样本

```bash
peepdf sample.pdf
```

```bash
peepdf -i sample.pdf
```

```bash
peepdf -f sample.pdf
```

`-i` 会进入交互模式，适合慢慢看对象树。`-f` 可以强制解析一些结构不太标准的文件，处理被故意弄坏的 PDF 时会用到。

## 批量和帮助

```bash
peepdf -l samples/
```

```bash
peepdf --help
```

批量列表适合先看样本是否有 JavaScript、OpenAction、AA、Launch、EmbeddedFile 等特征。真正要分析，还是要回到单文件交互模式里逐个对象看。

## 记录重点

复杂 PDF 要保存命令历史和提取出来的对象。对象编号、stream 解码结果、脚本片段、嵌入文件哈希都要记清楚，后面写样本分析时会用得上。
