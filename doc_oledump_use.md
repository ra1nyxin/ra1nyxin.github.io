# oledump 使用

oledump 用于查看 OLE 文件流、提取宏内容和检查可疑插件结果。分析 Office 样本时，它适合补充 `olevba`，特别是要精确引用流编号的时候。

## 查看流

```bash
oledump.py sample.doc
```

```bash
oledump.py -s 8 sample.doc
```

```bash
oledump.py -s A sample.doc
```

先列出所有 stream，再按编号看内容。带 `M` 标记的流通常和宏相关，`A` 可以一次性处理全部流。

## 提取和解码

```bash
oledump.py -s 8 -v sample.doc
```

```bash
oledump.py -s A -v sample.doc
```

```bash
oledump.py -p plugin_http_heuristics.py sample.doc
```

`-v` 用来展开 VBA 内容，插件适合快速找 URL 和网络痕迹。遇到混淆宏时，把原始流和解码后的文本都保存下来。

## 记录重点

流编号、宏内容、可疑字符串、插件命中和提取物哈希要一起保存。报告里引用流编号，别人复现时会清楚很多。
