# DumpIt 使用

DumpIt 用于快速采集 Windows 内存，常见于应急响应和实验环境。内存采集会改变现场状态，操作前要确认授权、保存位置和磁盘空间。

## 采集

```bash
DumpIt.exe
```

```bash
DumpIt.exe /Q
```

```bash
DumpIt.exe /OUTPUT C:\Temp\memory.raw
```

```bash
DumpIt.exe /TYPE RAW
```

输出路径尽量写到空间充足的磁盘。`/Q` 适合减少交互，现场操作时能降低误操作概率。

## 初步验证

```bash
certutil -hashfile C:\Temp\memory.raw SHA256
```

```bash
volatility3 -f memory.raw windows.info
```

```bash
volatility3 -f memory.raw windows.pslist
```

采集完成后先算哈希，再转入分析机。先跑 `windows.info` 看镜像是否能识别，再看进程列表、网络连接和可疑模块。

## 习惯

记录采集时间、主机名、登录用户、工具版本、输出路径和哈希。内存镜像体积大，传输和保存都要按敏感证据处理。
