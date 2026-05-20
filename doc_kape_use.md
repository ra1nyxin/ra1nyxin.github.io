# KAPE 常用用法

这篇记录 KAPE 的常用命令。KAPE 适合快速收集 Windows 取证证据，也能把采集和处理分成 Targets、Modules 两步。

## 查看配置

列出 Targets。

```cmd
kape.exe --tsource C: --tdest C:\KAPEOut --target !BasicCollection --listTargets
```

列出 Modules。

```cmd
kape.exe --msource C:\KAPEOut --mdest C:\KAPEModules --module !EZParser --listModules
```

## 采集

基础采集。

```cmd
kape.exe --tsource C: --tdest C:\KAPEOut --target !BasicCollection
```

采集浏览器相关。

```cmd
kape.exe --tsource C: --tdest C:\KAPEOut --target Browsers
```

采集事件日志。

```cmd
kape.exe --tsource C: --tdest C:\KAPEOut --target EventLogs
```

## 处理

运行 EZParser。

```cmd
kape.exe --msource C:\KAPEOut --mdest C:\KAPEModules --module !EZParser
```

采集加处理。

```cmd
kape.exe --tsource C: --tdest C:\KAPEOut --target !BasicCollection --msource C:\KAPEOut --mdest C:\KAPEModules --module !EZParser
```

## 备注

KAPE 适合比赛里快速收集标准证据。采集前确认输出盘空间，采集后保留目录结构，后面做时间线和日志分析会更方便。
