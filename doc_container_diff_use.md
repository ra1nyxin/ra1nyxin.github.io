# container-diff 使用

container-diff 用于比较镜像之间的文件、包和历史差异，适合版本升级复核。

## 常用命令

```bash
container-diff analyze nginx:latest
```

```bash
container-diff diff daemon://app:old daemon://app:new
```

```bash
container-diff diff remote://nginx:1.24 remote://nginx:1.25 --type=file
```

```bash
container-diff analyze daemon://app:latest --type=apt
```

```bash
container-diff analyze daemon://app:latest --json
```

小记录：适合回答新旧镜像究竟改了哪些包和文件，方便定位引入风险。
