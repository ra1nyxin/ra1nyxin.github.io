# LSE 常用用法

LSE（Linux Smart Enumeration）适合做 Linux 本地枚举。它输出比较克制，适合在 linPEAS、LinEnum 之外补一份结构化检查清单。

## 基础运行

```bash
./lse.sh
```

```bash
./lse.sh -l1
```

```bash
./lse.sh -l2
```

`-l1` 更适合快速扫，`-l2` 会展开更多细节。现场时间紧的时候先跑低等级，确认有价值再加深。

## 帮助和留档

```bash
./lse.sh -h
```

```bash
./lse.sh -l2 | tee lse-output.txt
```

输出建议直接保存，后面和 `sudo -l`、SUID 文件、定时任务、可写目录一起对照。LSE 的结果别只看高亮项，普通权限信息有时也能解释后续路径。

## 复核重点

重点看内核版本、sudo 规则、SUID/SGID、可写服务文件、PATH 污染、计划任务和敏感文件权限。工具提示只是入口，真正能不能利用还要回到当前用户权限和目标业务环境里确认。
