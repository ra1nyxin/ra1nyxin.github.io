# dirsearch 常用用法

dirsearch 适合 Web 目录和文件发现。常用参数：`-u` 目标，`-w` 字典，`-e` 扩展名，`-x` 排除状态码。

```bash
dirsearch -u http://192.168.1.10 -w wordlist.txt
```

```bash
dirsearch -u http://192.168.1.10 -e php,txt,bak,zip
```

```bash
dirsearch -u http://192.168.1.10 -x 404,403 --random-agent
```

```bash
dirsearch -l urls.txt -e php,aspx,jsp -o dirsearch.txt
```

dirsearch 的报告适合保存下来和 httpx、Nuclei 结果合并。扫多目标时先控制线程，避免把比赛环境打得太吵。
