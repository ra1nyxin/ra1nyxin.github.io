# rclone 使用

rclone 适合处理对象存储、网盘和跨云文件同步。在安全评估中常用于复核公开存储、迁移证据文件和检查远端目录权限。

## 配置和查看

```bash
rclone config
```

```bash
rclone listremotes
```

```bash
rclone lsd remote:
```

## 列表与复制

```bash
rclone ls remote:bucket/path
```

```bash
rclone copy remote:bucket/path ./download --progress
```

```bash
rclone sync ./local remote:bucket/path --dry-run
```

## 权限和过滤

```bash
rclone size remote:bucket/path
```

```bash
rclone lsf remote:bucket/path --files-only --recursive
```

```bash
rclone copy remote:bucket/path ./download --include "*.sql" --progress
```

rclone 很强，误操作也很快。涉及生产存储时先用 `ls`、`size`、`--dry-run`，确认路径后再执行复制或同步。
