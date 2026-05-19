# Procmon 和 ProcFilter 常用用法

这篇记录 Procmon、ProcFilter 的常见使用方式。它们适合 Windows 动态行为观察和进程事件筛选。

## Procmon 命令行

启动 Procmon。

```cmd
Procmon64.exe /AcceptEula
```

静默捕获。

```cmd
Procmon64.exe /AcceptEula /Quiet /BackingFile capture.pml
```

停止捕获。

```cmd
Procmon64.exe /Terminate
```

转换为 CSV。

```cmd
Procmon64.exe /OpenLog capture.pml /SaveAs capture.csv
```

## ProcFilter

启动 ProcFilter。

```cmd
procfilter.exe
```

指定配置。

```cmd
procfilter.exe -c procfilter.yml
```

安装服务。

```cmd
procfilter.exe -i
```

卸载服务。

```cmd
procfilter.exe -u
```

## 小记录

Procmon 适合短时间抓行为，ProcFilter 更适合规则化拦截和记录。抓 Procmon 时控制时间窗口，日志会非常大。
