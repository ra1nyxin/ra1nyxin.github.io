# ClamAV 常用用法

这篇记录 ClamAV 的常用命令。它适合蓝队比赛里做基础恶意文件扫描，也能配合自定义规则做简单查杀。

## 更新和扫描

更新病毒库。

```bash
sudo freshclam
```

扫描文件。

```bash
clamscan sample.bin
```

递归扫描目录。

```bash
clamscan -r evidence/
```

只显示感染文件。

```bash
clamscan -r --infected evidence/
```

## 输出和隔离

保存日志。

```bash
clamscan -r evidence/ -l clamav.log
```

移动命中文件。

```bash
clamscan -r evidence/ --move quarantine/
```

使用自定义库。

```bash
clamscan -d custom.ndb sample.bin
```

## 小记录

ClamAV 适合基础扫面，不适合替代人工分析。比赛里可以先跑一轮找明显样本，再用 capa、FLOSS、strings 和沙箱结果交叉验证。
