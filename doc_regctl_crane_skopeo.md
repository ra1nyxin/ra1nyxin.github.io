# regctl crane skopeo 镜像工具

regctl、crane、skopeo 都适合检查和复制容器镜像。它们不依赖 Docker daemon，适合 CI、跳板机和只读审计环境。

## 查看镜像

```bash
crane digest nginx:latest
```

```bash
crane manifest nginx:latest
```

```bash
regctl image inspect nginx:latest
```

## 复制和导出

```bash
skopeo copy docker://nginx:latest docker-archive:nginx.tar
```

```bash
crane pull nginx:latest nginx.tar
```

```bash
regctl image copy nginx:latest registry.local/nginx:latest
```

## 配置查看

```bash
crane config nginx:latest
```

```bash
skopeo inspect docker://nginx:latest
```

无 daemon 工具适合做供应链排查。镜像 digest、创建时间、入口命令和环境变量都值得保存。
