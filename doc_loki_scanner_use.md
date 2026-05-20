# Loki Scanner 使用

Loki 用于基于 IOC 和 YARA 的主机妥协检查。

## 常用命令

```bash
python3 loki.py
```

```bash
python3 loki.py -p /var/www
```

```bash
python3 loki.py --update
```

```bash
python3 loki.py --printall
```

```bash
python3 loki.py -l loki.log
```

小记录：适合应急初筛，命中后要保存样本路径、哈希和上下文。
