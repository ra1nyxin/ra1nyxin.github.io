# SearchSploit 常用用法

这篇记录 SearchSploit 的常用命令。它用于本地查询 Exploit-DB 数据库，适合根据软件名、版本号和 CVE 做离线检索。

## 基础搜索

按关键字搜索。

```bash
searchsploit apache 2.4
```

按 CVE 搜索。

```bash
searchsploit CVE-2021-41773
```

搜索并去掉颜色。

```bash
searchsploit --colour 0 openssh
```

只显示标题。

```bash
searchsploit -t openssh
```

## 查看和复制

查看 exploit 路径。

```bash
searchsploit -p 49757
```

复制 exploit 到当前目录。

```bash
searchsploit -m 49757
```

复制多个结果。

```bash
searchsploit -m 49757,49758
```

打开本地文件。

```bash
searchsploit -x 49757
```

## 更新和数据库

更新数据库。

```bash
searchsploit -u
```

查看帮助。

```bash
searchsploit -h
```

查看本地 exploitdb 路径。

```bash
searchsploit -p linux/local
```

## 和 Nmap XML 配合

根据 Nmap XML 搜索。

```bash
searchsploit --nmap scan.xml
```

## 备注

SearchSploit 搜到结果后先读代码和说明，确认目标版本、前置条件、认证要求和影响范围。很多条目只是思路或 PoC，真正使用前要在隔离环境里看清楚行为。
