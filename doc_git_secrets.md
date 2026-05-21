# git-secrets 常用用法

git-secrets 适合在 Git 钩子里阻止敏感信息提交。它常用于 AWS key、API token、私钥片段和自定义敏感模式的拦截。

## 安装和规则

```bash
git secrets --install
```

```bash
git secrets --register-aws
```

```bash
git secrets --add 'API_KEY'
```

规则要尽量具体。模式写得太宽，会把正常配置和文档也拦下来，最后团队会倾向于跳过钩子。

## 扫描

```bash
git secrets --scan
```

```bash
git secrets --scan-history
```

当前工作区和历史提交都要看。历史里命中的 secret 要按泄露处理，删除提交记录前先吊销密钥。

## 习惯

git-secrets 适合做提交前最低防线，不能替代集中式 secret 扫描。CI、代码托管平台和密钥轮换流程要一起配合。
