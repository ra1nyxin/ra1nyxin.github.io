# git-secrets 常用用法

git-secrets 适合在 git 钩子里阻止敏感信息提交。常用命令：安装、添加模式、扫描仓库。

```bash
git secrets --install
```

```bash
git secrets --register-aws
```

```bash
git secrets --add 'API_KEY'
```

```bash
git secrets --scan
```

git-secrets 适合做提交前的最低防线。模式别写太宽，不然正常文本也会被误拦。
