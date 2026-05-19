# LinEnum 常用用法

这篇记录 LinEnum 的常用命令。它适合在授权 Linux 环境里做本地枚举，快速整理系统、用户、权限、服务、计划任务和可写路径。

## 基础运行

赋予执行权限。

```bash
chmod +x LinEnum.sh
```

运行脚本。

```bash
./LinEnum.sh
```

保存输出。

```bash
./LinEnum.sh | tee linenum.txt
```

详细模式。

```bash
./LinEnum.sh -t
```

## 常见搭配

查看当前用户。

```bash
id
```

查看 sudo 权限。

```bash
sudo -l
```

查看内核版本。

```bash
uname -a
```

查看可写目录。

```bash
find / -writable -type d 2>/dev/null
```

## 小记录

LinEnum 输出适合当线索清单。真正要验证时，重点看 sudo、SUID、计划任务、服务配置、可写目录和凭据文件。
