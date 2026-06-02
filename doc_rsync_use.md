# rsync 使用笔记

`rsync` 最适合做目录同步、增量备份、静态站部署和服务器迁移。它真正好用的地方不是“能复制文件”，而是能只传差异、保留元数据、排除不需要的内容，并且可以先演练再执行。只要涉及 `--delete`，我都会先跑一次 `--dry-run`。

先把源路径末尾的斜杠搞清楚，这是 rsync 最容易误删或同步错层级的地方。

```bash
rsync -av ./dist/ user@example.com:/var/www/site/
rsync -av ./dist  user@example.com:/var/www/
```

第一条表示把 `dist` 里面的内容同步到远端 `site` 目录。第二条表示把 `dist` 这个目录本身放到远端 `/var/www/` 下面。看起来只差一个 `/`，结果完全不同。

常用参数里，`-a` 是 archive，包含递归、权限、时间等一组行为；`-v` 输出过程；`-z` 压缩传输，公网或慢链路有用，内网大文件不一定划算；`--progress` 适合人工看进度，脚本里可以换成 `--info=progress2`。

```bash
rsync -avz --progress ./data/ user@example.com:/backup/data/
rsync -a --info=progress2 ./data/ user@example.com:/backup/data/
```

部署静态站时，常见需求是让远端和本地构建产物完全一致。这个时候会用 `--delete`，但必须先演练。演练输出里看到要删除的文件后，再决定是否真正执行。

```bash
rsync -av --delete --dry-run ./dist/ user@example.com:/var/www/site/
rsync -av --delete ./dist/ user@example.com:/var/www/site/
```

如果担心远端有误删，可以让被删除或覆盖的文件先进入备份目录。备份目录最好不要放在同步目录内部，否则下一轮同步又会被规则影响。

```bash
rsync -av --delete --backup --backup-dir=/var/backups/site-$(date +%F) ./dist/ user@example.com:/var/www/site/
```

排除规则要尽量写清楚。一次性排几个常见目录可以直接用多个 `--exclude`，项目长期使用时建议放进 `.rsyncignore`。

```bash
rsync -av --exclude .git --exclude node_modules --exclude dist ./project/ user@example.com:/srv/project/
rsync -av --exclude-from .rsyncignore ./project/ user@example.com:/srv/project/
```

只同步某类文件时，include/exclude 的顺序很关键。目录要先 include，否则 rsync 没法继续往下遍历。

```bash
rsync -av --include '*/' --include '*.md' --exclude '*' ./docs/ ./backup/docs/
```

远程传输默认走 SSH。需要指定端口、私钥、跳板参数时，用 `-e`。复杂 SSH 选项多了以后，更推荐写进 `~/.ssh/config`，rsync 命令会短很多。

```bash
rsync -av -e "ssh -p 2222 -i ~/.ssh/id_ed25519" ./dist/ deploy@example.com:/var/www/site/
rsync -av ./dist/ web-prod:/var/www/site/
```

本地备份也很好用。比如把照片、日志、数据库导出目录同步到另一块盘，rsync 能保留时间戳，后续增量会很快。

```bash
rsync -av ./data/ /mnt/backup/data/
rsync -av --delete ./data/ /mnt/backup/data/
```

权限和所有者要按场景处理。跨机器部署静态文件时，保留原始 UID/GID 未必是好事，可能导致 Web 服务读不了。可以用 `--chown` 或 `--chmod` 在传输时统一。

```bash
rsync -av --chown=www-data:www-data --chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r ./dist/ user@example.com:/var/www/site/
```

排错时加 `-n`、`-i` 很有用。`-n` 是演练，`-i` 会显示每个文件为什么被更新。看到大量文件都被重传时，通常要检查时间戳、权限、换行转换、构建产物是否每次都变。

```bash
rsync -avni ./dist/ user@example.com:/var/www/site/
```

一个稳妥流程是：先确认源路径斜杠，再写排除规则，然后 `--dry-run -i` 看变化，最后执行正式同步。rsync 很可靠，但它会严格按你写的命令执行，错的命令也会执行得很彻底。
