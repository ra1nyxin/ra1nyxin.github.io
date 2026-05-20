# Docker Compose 常用用法

这篇记录 Docker Compose 的常用命令。平时拉起本地开发环境、看日志、重建服务、清理容器和排查网络问题都会用到。

## 启动和停止

启动服务。

```bash
docker compose up
```

后台启动。

```bash
docker compose up -d
```

停止并删除容器。

```bash
docker compose down
```

停止但保留容器。

```bash
docker compose stop
```

重新启动。

```bash
docker compose restart
```

## 构建和拉取

构建镜像。

```bash
docker compose build
```

不使用缓存构建。

```bash
docker compose build --no-cache
```

拉取镜像。

```bash
docker compose pull
```

拉取后重建容器。

```bash
docker compose up -d --pull always
```

## 查看状态和日志

查看服务状态。

```bash
docker compose ps
```

查看日志。

```bash
docker compose logs
```

跟随日志。

```bash
docker compose logs -f
```

只看某个服务日志。

```bash
docker compose logs -f web
```

## 进入容器

进入服务容器。

```bash
docker compose exec web sh
```

用 bash 进入。

```bash
docker compose exec web bash
```

临时运行一次命令。

```bash
docker compose run --rm web npm test
```

## 配置检查

展开最终配置。

```bash
docker compose config
```

只列服务名。

```bash
docker compose config --services
```

只列镜像名。

```bash
docker compose config --images
```

## 清理

删除容器和默认网络。

```bash
docker compose down
```

同时删除匿名卷。

```bash
docker compose down -v
```

删除本项目构建镜像。

```bash
docker compose down --rmi local
```

## 备注

Compose 排错先看 `docker compose config`，确认环境变量和路径展开后的结果。容器起不来时看日志，服务互相连不上时看网络名、服务名和端口暴露方向。
