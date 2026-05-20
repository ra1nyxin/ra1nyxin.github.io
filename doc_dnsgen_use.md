# dnsgen 常用用法

dnsgen 适合根据已知子域名生成变体。常用参数：输入子域列表，输出候选；配合解析器做二次过滤。

```bash
dnsgen subdomains.txt > generated.txt
```

```bash
dnsgen subdomains.txt | sort -u > generated.txt
```

```bash
dnsgen subdomains.txt | dnsx -silent > resolved.txt
```

```bash
dnsgen subdomains.txt | httpx -silent -title -status-code
```

小记录：dnsgen 适合在已有资产基础上做变体扩展。和被动发现工具一起用时，能补出不少难找的名字。
