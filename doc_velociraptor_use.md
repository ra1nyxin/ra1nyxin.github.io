# Velociraptor 常用用法

这篇记录 Velociraptor 的基础命令。它适合蓝队比赛和应急响应中的主机采集、查询和集中化狩猎。

## 基础命令

查看版本。

```bash
velociraptor version
```

生成配置。

```bash
velociraptor config generate -i
```

启动单机 GUI。

```bash
velociraptor gui
```

启动前端。

```bash
velociraptor --config server.config.yaml frontend
```

## 客户端

运行客户端。

```bash
velociraptor --config client.config.yaml client
```

收集离线证据。

```bash
velociraptor artifacts collect Windows.KapeFiles.Targets --output collection.zip
```

查看 artifact。

```bash
velociraptor artifacts list
```

## 小记录

Velociraptor 适合多主机采集和查询。比赛里先准备常用 artifacts，再按主机、用户、进程、文件路径进行快速收敛。
