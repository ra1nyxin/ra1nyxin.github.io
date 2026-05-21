# Loki Scanner 使用

Loki Scanner 用于基于 IOC、YARA 和文件特征做主机妥协检查。它适合应急初筛，先把明显异常的文件、路径和命中规则找出来。

## 更新和扫描

```bash
python3 loki.py --update
```

```bash
python3 loki.py
```

```bash
python3 loki.py -p /var/www
```

规则先更新，再按目标目录扫。Web 根目录、临时目录、用户下载目录、启动项目录都适合单独跑一遍。

## 输出控制

```bash
python3 loki.py --printall
```

```bash
python3 loki.py -l loki.log
```

```bash
python3 loki.py -p /var/www -l loki-web.log
```

应急现场要把日志落文件。命中后记录规则名、样本路径、文件哈希、权限、修改时间和周边文件，方便后续做隔离和溯源。

## 复核

Loki 的命中要结合人工复核。YARA 命中、可疑扩展名、异常路径、WebShell 特征放在一起看，优先处理能解释业务风险的结果。
