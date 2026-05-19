# Binwalk 和 Foremost 常用用法

这篇记录 Binwalk、Foremost 的常用命令。它们适合比赛里处理固件、图片、压缩包和混合文件。

## Binwalk

扫描文件。

```bash
binwalk firmware.bin
```

自动提取。

```bash
binwalk -e firmware.bin
```

递归提取。

```bash
binwalk -Me firmware.bin
```

显示熵。

```bash
binwalk -E firmware.bin
```

## Foremost

恢复文件。

```bash
foremost -i image.dd -o foremost-out
```

指定类型。

```bash
foremost -t jpg,png,pdf -i dump.bin -o foremost-out
```

详细输出。

```bash
foremost -v -i dump.bin -o foremost-out
```

## 小记录

Binwalk 适合看文件里藏了什么结构，Foremost 适合按文件头恢复内容。比赛里遇到奇怪附件，先 `file`、`binwalk`、`strings` 三件套看一遍。
