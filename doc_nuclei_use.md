# Nuclei 常用用法

这篇记录 Nuclei 的常用命令。它适合在授权比赛环境里用模板快速验证 Web 暴露面和常见配置问题。

## 基础扫描

扫描单个目标。

```bash
nuclei -u https://example.com
```

扫描目标列表。

```bash
nuclei -l targets.txt
```

指定模板目录。

```bash
nuclei -l targets.txt -t nuclei-templates/
```

只跑指定模板。

```bash
nuclei -u https://example.com -t http/exposures/
```

## 输出和过滤

输出到文件。

```bash
nuclei -l targets.txt -o nuclei.txt
```

输出 JSONL。

```bash
nuclei -l targets.txt -jsonl -o nuclei.jsonl
```

按严重等级。

```bash
nuclei -l targets.txt -severity medium,high,critical
```

限制速率。

```bash
nuclei -l targets.txt -rate-limit 50
```

## 模板更新

更新模板。

```bash
nuclei -update-templates
```

查看模板统计。

```bash
nuclei -tl
```

## 小记录

Nuclei 适合做快速验证，模板命中后还要手工确认。比赛里建议按目标范围和严重等级跑，结果再按系统和业务分组整理。
