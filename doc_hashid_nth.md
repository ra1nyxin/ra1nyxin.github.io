# hashid 和 Name-That-Hash

这篇记录哈希类型识别工具的常用命令。离线破解前先确认格式，能少走很多弯路。

## hashid

识别单个 hash。

```bash
hashid '5f4dcc3b5aa765d61d8327deb882cf99'
```

从文件读取。

```bash
hashid -f hashes.txt
```

显示 Hashcat 模式。

```bash
hashid -m '5f4dcc3b5aa765d61d8327deb882cf99'
```

显示 John 格式。

```bash
hashid -j '5f4dcc3b5aa765d61d8327deb882cf99'
```

## Name-That-Hash

识别单个 hash。

```bash
nth -t '5f4dcc3b5aa765d61d8327deb882cf99'
```

从文件读取。

```bash
nth -f hashes.txt
```

输出 JSON。

```bash
nth -f hashes.txt -j
```

## 小记录

哈希识别工具给的是候选类型。真正开跑前，要结合来源、长度、字符集和上下文确认一次，比如 Windows hash、Web 应用 hash、数据库 dump 的格式差异都很明显。
