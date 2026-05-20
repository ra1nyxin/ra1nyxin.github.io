# htmlq 与 pup 使用

htmlq 和 pup 都能从 HTML 里按 CSS selector 提取内容。做 Web 枚举、链接收集和页面差异分析时，它们比正则更稳。

## htmlq

```bash
curl -s http://example.local | htmlq a
```

```bash
curl -s http://example.local | htmlq -a href a
```

```bash
curl -s http://example.local | htmlq 'form input'
```

## pup

```bash
curl -s http://example.local | pup 'a attr{href}'
```

```bash
curl -s http://example.local | pup 'title text{}'
```

```bash
curl -s http://example.local/login | pup 'form json{}'
```

## 批量提取

```bash
while read u; do curl -sk "$u" | htmlq -a href a; done < urls.txt | sort -u
```

小记录：HTML 解析尽量用 selector。链接、表单 action、脚本 src 和隐藏 input 是最常用的提取对象。
