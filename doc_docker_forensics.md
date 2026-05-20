# Docker 应急排查常用命令

这篇记录容器场景下的应急排查命令。蓝队比赛里经常要看容器、镜像、挂载、网络和日志。

## 容器状态

查看容器。

```bash
docker ps -a
```

查看镜像。

```bash
docker images
```

查看容器详情。

```bash
docker inspect CONTAINER_ID
```

查看容器日志。

```bash
docker logs CONTAINER_ID
```

## 进入和取证

进入容器。

```bash
docker exec -it CONTAINER_ID sh
```

导出容器文件系统。

```bash
docker export CONTAINER_ID -o container.tar
```

拷贝文件出来。

```bash
docker cp CONTAINER_ID:/path/file ./file
```

查看挂载。

```bash
docker inspect CONTAINER_ID | jq '.[0].Mounts'
```

## 网络

查看网络。

```bash
docker network ls
```

查看网络详情。

```bash
docker network inspect bridge
```

查看端口映射。

```bash
docker port CONTAINER_ID
```

## 备注

容器排查要看镜像来源、启动命令、挂载目录、环境变量和网络。不要只看容器内部，宿主机上的 Docker 配置和卷目录同样重要。
