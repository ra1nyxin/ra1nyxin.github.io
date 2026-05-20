# waymore 使用

waymore 用于从多个历史来源收集 URL、响应和参数线索。它适合补充 gau、waybackurls 的结果，尤其适合大站历史接口整理。

## 基础收集

```bash
waymore -i example.com
```

```bash
waymore -i example.com -mode U
```

```bash
waymore -i example.com -mode R
```

## 输出和过滤

```bash
waymore -i example.com -oU urls.txt
```

```bash
waymore -i example.com -f -mc 200,403
```

```bash
waymore -i example.com -from 202001 -to 202612
```

## 后续处理

```bash
cat urls.txt | uro | sort -u > urls_clean.txt
```

```bash
cat urls_clean.txt | grep '=' | qsreplace FUZZ > params.txt
```

小记录：历史 URL 噪声很大，先去重、归一化、筛参数，再送给探测工具。旧接口命中 403 或 500 时很值得复核。
