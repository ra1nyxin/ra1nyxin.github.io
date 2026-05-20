# CyberChef 本地使用

CyberChef 适合处理编码、压缩、哈希、JWT、证书和日志字段转换。比赛和日常分析里，把常用 recipe 保存下来会很省时间。

## 本地打开

```bash
python3 -m http.server 8080
```

```bash
open http://127.0.0.1:8080/CyberChef.html
```

```bash
xdg-open http://127.0.0.1:8080/CyberChef.html
```

## 常见命令行配合

```bash
echo 'SGVsbG8=' | base64 -d
```

```bash
echo 'hello' | xxd -p
```

```bash
jq -r '.token' response.json
```

## 数据准备

```bash
cat access.log | cut -d' ' -f7 | sort | uniq -c | sort -nr | head
```

```bash
cat jwt.txt | cut -d'.' -f2 | base64 -d
```

小记录：CyberChef 适合交互式分析，命令行适合批量处理。复杂 recipe 要保存名称和输入样本，方便报告复现。
