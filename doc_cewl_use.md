# CeWL 常用用法

这篇记录 CeWL 的常用命令。它适合从目标站点公开内容里生成词表，常用于授权实验里的口令字典和内容关键词整理。

## 基础生成

从站点生成词表。

```bash
cewl http://192.168.1.10 -w words.txt
```

指定爬取深度。

```bash
cewl http://192.168.1.10 -d 3 -w words.txt
```

设置最短词长。

```bash
cewl http://192.168.1.10 -m 6 -w words.txt
```

显示邮箱。

```bash
cewl http://192.168.1.10 -e
```

## 请求设置

指定 User-Agent。

```bash
cewl http://192.168.1.10 --ua "Mozilla/5.0" -w words.txt
```

走代理。

```bash
cewl http://192.168.1.10 --proxy_host 127.0.0.1 --proxy_port 8080 -w words.txt
```

基础认证。

```bash
cewl http://192.168.1.10 --auth_type basic --auth_user USER --auth_pass PASSWORD -w words.txt
```

## 整理词表

排序去重。

```bash
sort -u words.txt -o words.txt
```

统计词条数量。

```bash
wc -l words.txt
```

## 备注

CeWL 生成的词表很贴近站点内容。拿到词表后通常还会手动加年份、组织缩写、项目名和常见变体，再交给后续工具使用。
