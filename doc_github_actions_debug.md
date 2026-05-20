# GitHub Actions 排错

这篇记录 GitHub Actions 出问题时常用的排查方式。静态站点、自动生成文件、部署 GitHub Pages、跑测试，都经常会碰到路径、权限、触发条件和缓存问题。

## 先看触发条件

查看本地 workflow 文件。

```bash
git ls-files ".github/workflows/*.yml"
```

确认最近一次提交改了哪些文件。

```bash
git show --stat --oneline HEAD
```

查看最近几次提交。

```bash
git log --oneline -5
```

## 用 gh 查看运行记录

列出最近的 workflow run。

```bash
gh run list
```

查看某次运行详情。

```bash
gh run view RUN_ID
```

查看失败日志。

```bash
gh run view RUN_ID --log-failed
```

重新运行失败任务。

```bash
gh run rerun RUN_ID --failed
```

## 本地先做轻量检查

检查 YAML 文件是否能被 git 跟踪到。

```bash
git status --short .github/workflows
```

检查仓库当前分支。

```bash
git branch --show-current
```

确认远端地址。

```bash
git remote -v
```

查看当前提交是否已经推到远端。

```bash
git status -sb
```

## Pages 部署相关

确认 Pages workflow 里是否使用了正确分支。

```bash
git grep -n "branches" .github/workflows
```

确认是否引用了 GitHub Pages 相关 action。

```bash
git grep -n "configure-pages\\|upload-pages-artifact\\|deploy-pages" .github/workflows
```

查看是否有权限配置。

```bash
git grep -n "permissions" .github/workflows
```

## 路径和文件生成问题

确认图片数据文件是否存在。

```bash
git ls-files gallery_data.js
```

确认图片目录里有哪些文件被 git 跟踪。

```bash
git ls-files img
```

看某个生成脚本最近有没有改动。

```bash
git log --oneline -- generate_gallery_data.py
```

## 缓存问题

查看 workflow 里是否用了 cache。

```bash
git grep -n "cache" .github/workflows
```

排查 npm 缓存时先看 lock 文件是否存在。

```bash
git ls-files package-lock.json pnpm-lock.yaml yarn.lock
```

## 常见处理节奏

排查时先看失败 job 的第一处报错，再回到 workflow 里确认触发条件、工作目录、权限和路径。静态站点最常见的是生成文件没有提交、路径大小写不一致、Pages 权限没开、workflow 只监听了某些路径。

```bash
gh run view --log-failed
```

```bash
git diff --name-status HEAD~1..HEAD
```

```bash
git grep -n "working-directory\\|path\\|permissions\\|branches" .github/workflows
```

## 备注

Actions 排错要保留失败 run 的 ID、失败 job 名称和第一段报错。很多问题看起来像 action 本身异常，最后会落到仓库路径、权限、分支条件或生成文件没有进入提交。
