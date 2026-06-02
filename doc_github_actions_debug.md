# GitHub Actions 排错笔记

GitHub Actions 出问题时，先别急着改 workflow。最有效的是抓住失败 run 的 ID、失败 job、第一处真正报错，然后再回到 YAML 里看触发条件、权限、工作目录、缓存和产物路径。很多问题表面像 action 坏了，最后其实是分支条件、路径大小写、token 权限或生成文件没提交。

先确认本地有哪些 workflow。GitHub 只会识别 `.github/workflows/` 下面的 YAML 文件。

```bash
git ls-files ".github/workflows/*.yml" ".github/workflows/*.yaml"
git status --short .github/workflows
```

看最近一次提交改了什么，确认 workflow 文件、生成脚本或站点文件是否真的进入提交。

```bash
git show --stat --oneline HEAD
git diff --name-status HEAD~1..HEAD
git log --oneline -5
```

用 GitHub CLI 看运行记录最方便。先列 run，再看失败日志。`--log-failed` 比完整日志短，适合第一轮定位。

```bash
gh run list
gh run view RUN_ID
gh run view RUN_ID --log-failed
```

需要重新跑时，优先只重跑失败任务，避免无意义消耗时间。

```bash
gh run rerun RUN_ID --failed
```

触发条件是常见坑。workflow 可能只监听 `main`，或者只在某些路径变化时触发。路径过滤写得太窄时，提交已经推了但 workflow 不跑。

```bash
git grep -n "on:" .github/workflows
git grep -n "branches\\|paths\\|paths-ignore" .github/workflows
```

权限问题在 Pages、release、comment、security upload 里很常见。默认 token 权限不够时，日志会出现 403 或 resource not accessible。

```bash
git grep -n "permissions" .github/workflows
git grep -n "contents:\\|pages:\\|id-token:\\|actions:" .github/workflows
```

GitHub Pages 相关 workflow 要看三件事：是否 configure pages，是否 upload artifact，是否 deploy pages，以及 permissions 是否包含 `pages: write` 和 `id-token: write`。

```bash
git grep -n "configure-pages\\|upload-pages-artifact\\|deploy-pages" .github/workflows
git grep -n "pages: write\\|id-token: write" .github/workflows
```

静态站点常见问题是构建产物路径不对。比如生成到了 `dist/`，上传却写了 `public/`；或者生成文件存在于工作区但没有被提交到仓库。

```bash
git ls-files gallery_data.js
git ls-files img
git grep -n "path:" .github/workflows
git grep -n "upload-pages-artifact" -n .github/workflows
```

Node、Python、Go 这类项目要看 lockfile 和缓存键。缓存命中不一定是好事，坏缓存会把旧依赖带回来。

```bash
git ls-files package-lock.json pnpm-lock.yaml yarn.lock requirements.txt poetry.lock go.sum
git grep -n "cache\\|actions/cache" .github/workflows
```

工作目录也经常出错。单仓库根目录没问题，monorepo 或静态站生成脚本放在子目录时，要确认每一步的 `working-directory`。

```bash
git grep -n "working-directory" .github/workflows
git grep -n "run:" .github/workflows
```

本地复现时，先跑 workflow 里同一条命令，不要凭印象跑另一个命令。尤其是大小写敏感路径，Windows 本地能过，Linux runner 可能失败。

```bash
git status -sb
git branch --show-current
git remote -v
```

如果 workflow 依赖 secrets，本地无法直接复现，但可以确认变量名是否一致。日志里 secrets 会被 mask，看到 `***` 不代表值一定正确。

```bash
git grep -n "secrets\\." .github/workflows
git grep -n "vars\\." .github/workflows
```

我排 Actions 的顺序是：先看失败 run 的第一处错误，再看触发条件和分支，再看 permissions，然后看工作目录、路径和缓存。不要一看到红叉就升级 action 版本，升级可能只是把原问题藏到另一个地方。
