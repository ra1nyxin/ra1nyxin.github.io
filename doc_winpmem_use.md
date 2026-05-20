# WinPmem 使用

WinPmem 用于采集 Windows 内存镜像，适合取证和恶意行为分析。

## 常用命令

```bash
winpmem_mini_x64.exe C:\Temp\mem.raw
```

```bash
winpmem_mini_x64.exe -o C:\Temp\mem.raw
```

```bash
winpmem_mini_x64.exe --format raw -o C:\Temp\mem.raw
```

```bash
winpmem_mini_x64.exe --format aff4 -o C:\Temp\mem.aff4
```

```bash
volatility3 -f mem.raw windows.info
```

内存采集会占用磁盘和时间，采集前确认空间、时间窗口和证据编号。
