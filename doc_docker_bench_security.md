# Docker Bench Security 使用

Docker Bench Security 用于检查 Docker 主机与 daemon 安全配置。

## 常用命令

```bash
sudo sh docker-bench-security.sh
```

```bash
sudo sh docker-bench-security.sh -c container_images
```

```bash
sudo sh docker-bench-security.sh -c docker_daemon_configuration
```

```bash
sudo sh docker-bench-security.sh -l docker-bench.log
```

```bash
sudo sh docker-bench-security.sh -x 1.1.1
```

小记录：它更适合检查宿主机和 daemon，容器内问题要配合镜像扫描。
