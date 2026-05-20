# anew 常用用法

anew 适合去重追加 URL、域名和结果列表。它常放在管道中，避免重复输出污染后续结果。

```bash
cat urls.txt | anew all-urls.txt
```

```bash
cat subdomains.txt | anew all-subs.txt
```

```bash
cat urls.txt | sort | anew all-urls.txt
```

```bash
cat urls.txt | anew all-urls.txt | httpx -silent
```

anew 很适合持续收集资产。比赛里跑多轮发现器时，用它维护统一的结果文件最方便。
