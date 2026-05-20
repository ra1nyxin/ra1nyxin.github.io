# DumpIt 使用

DumpIt 用于快速采集 Windows 内存，适合应急响应和实验环境。

## 常用命令

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

```bash
volatility3 -f memory.raw windows.pslist
```

小记录：采集完成后先计算哈希，再把镜像转入分析机处理。
