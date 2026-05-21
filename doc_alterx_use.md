# alterx 常用用法

alterx 适合把已有子域名往旁边推一圈。它更多是根据已知名字生成可疑变体，再交给解析工具去验证。

## 生成

```bash
alterx -l subdomains.txt -o alterx.txt
```

```bash
alterx -l subdomains.txt -o alterx.txt -w
```

```bash
alterx -l subdomains.txt -o alterx.txt -include-subs
```

这类变体生成适合命名规律明显的目标，比如部门缩写、环境后缀、编号规则比较统一的站点。输入列表先去重，输出会干净很多。

## 联动

```bash
alterx -l subdomains.txt -o alterx.txt | dnsx -silent
```

生成完不要只看结果文件大小，先看能解析出来多少。很多变体看起来像样，实际根本不存在。

## 结果判断

如果一批变体里只有少数能解析出来，优先看它们的命名规律，往往能反推出目标团队常用的命名习惯。这个信息后面继续补枚举会很值钱。

## 习惯

alterx 的价值在补漏。手里如果已经有一批稳定的子域名，它能帮你把边角料往外再推一点，但最终还是要靠解析验证收口。
