# capa 和 FLOSS 常用用法

这篇记录 capa、FLOSS 的常用命令。它们适合样本初筛，capa 看能力，FLOSS 提取混淆字符串。

## capa

分析样本。

```bash
capa sample.exe
```

输出 JSON。

```bash
capa sample.exe -j > capa.json
```

查看 ATT&CK 映射。

```bash
capa sample.exe --attack
```

指定规则目录。

```bash
capa sample.exe -r rules/
```

## FLOSS

提取字符串。

```bash
floss sample.exe
```

输出到文件。

```bash
floss sample.exe > floss.txt
```

限制最小长度。

```bash
floss -n 6 sample.exe
```

输出 JSON。

```bash
floss -j sample.exe > floss.json
```

## 备注

capa 和 FLOSS 适合快速判断样本大概做什么。先看能力和字符串，再决定是否进入动态分析或反汇编。
