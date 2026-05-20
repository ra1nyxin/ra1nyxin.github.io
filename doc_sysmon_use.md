# Sysmon 常用用法

Sysmon 适合 Windows 事件增强和日志采集。常用参数：安装、卸载、配置文件和事件 ID 过滤。

```cmd
Sysmon64.exe -i sysmonconfig.xml
```

```cmd
Sysmon64.exe -c
```

```cmd
Sysmon64.exe -u
```

```cmd
Sysmon64.exe -s
```

Sysmon 配置要先选好事件类别，不然日志会很多。比赛里重点关注进程创建、网络连接、文件创建和驱动加载。
