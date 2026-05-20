# DIRB 常用用法

DIRB 是老牌目录枚举工具，适合快速验证基础路径。常用参数：目标 URL、字典路径、`-X` 扩展名，`-o` 输出文件。

```bash
dirb http://192.168.1.10
```

```bash
dirb http://192.168.1.10 /usr/share/wordlists/dirb/common.txt
```

```bash
dirb http://192.168.1.10 /usr/share/wordlists/dirb/common.txt -X .php,.txt,.bak
```

```bash
dirb http://192.168.1.10 -o dirb.txt
```

DIRB 简单稳定，适合快速摸底。大型目标还是用 feroxbuster、ffuf 或 dirsearch 会更灵活。
