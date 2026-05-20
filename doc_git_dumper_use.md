# git-dumper 常用用法

git-dumper 适合从泄露的 `.git` 目录恢复源码。常用参数：目标 URL、本地目录、递归拉取。

```bash
git-dumper http://192.168.1.10/.git/ dumped/
```

```bash
git-dumper https://example.com/.git/ repo/
```

```bash
git-dumper http://192.168.1.10/.git/ repo/ --progress
```

```bash
git-dumper http://192.168.1.10/.git/ repo/ --max-threads 8
```

小记录：拿到 `.git` 泄露后先恢复分支、看提交历史、查配置和密钥。很多比赛里的源码泄露都在这一步被补齐。
