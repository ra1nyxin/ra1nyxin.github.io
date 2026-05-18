# rsync 常用用法

这篇记录 rsync 的常用命令。它适合目录同步、增量备份、服务器之间迁移文件，也适合部署静态站点。

## 基础同步

同步目录内容。

```bash
rsync -av ./dist/ user@example.com:/var/www/site/
```

保留源目录本身。

```bash
rsync -av ./dist user@example.com:/var/www/
```

显示进度。

```bash
rsync -av --progress ./dist/ user@example.com:/var/www/site/
```

压缩传输。

```bash
rsync -avz ./dist/ user@example.com:/var/www/site/
```

## 删除远端多余文件

让远端和本地保持一致。

```bash
rsync -av --delete ./dist/ user@example.com:/var/www/site/
```

先演练，不真正改文件。

```bash
rsync -av --delete --dry-run ./dist/ user@example.com:/var/www/site/
```

删除前备份远端旧文件。

```bash
rsync -av --delete --backup --backup-dir=../backup ./dist/ user@example.com:/var/www/site/
```

## 排除文件

排除 node_modules。

```bash
rsync -av --exclude node_modules ./project/ user@example.com:/srv/project/
```

排除多个常见目录。

```bash
rsync -av --exclude node_modules --exclude .git --exclude dist ./project/ user@example.com:/srv/project/
```

从文件读取排除规则。

```bash
rsync -av --exclude-from .rsyncignore ./project/ user@example.com:/srv/project/
```

## 指定 SSH 参数

指定 SSH 端口。

```bash
rsync -av -e "ssh -p 2222" ./dist/ user@example.com:/var/www/site/
```

指定私钥。

```bash
rsync -av -e "ssh -i ~/.ssh/id_ed25519" ./dist/ user@example.com:/var/www/site/
```

## 本地备份

本地目录同步。

```bash
rsync -av ./data/ ./backup/data/
```

本地镜像同步。

```bash
rsync -av --delete ./data/ ./backup/data/
```

只同步特定扩展名。

```bash
rsync -av --include "*/" --include "*.md" --exclude "*" ./docs/ ./backup/docs/
```

## 小记录

rsync 里源路径末尾的 `/` 很关键。`./dist/` 表示同步目录里的内容，`./dist` 表示把 dist 这个目录一起放过去。带 `--delete` 的命令先跑 `--dry-run`，能少很多误删风险。
