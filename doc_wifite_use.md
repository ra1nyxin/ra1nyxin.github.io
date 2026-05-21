# Wifite 使用

Wifite 用于自动化无线测试流程，适合实验环境里快速验证抓包、PMKID、握手和字典流程。它会调用底层无线工具，正式记录里要写清实际发生了什么。

## 基础运行

```bash
sudo wifite
```

```bash
sudo wifite --kill
```

```bash
sudo wifite --bssid AA:BB:CC:DD:EE:FF
```

`--kill` 会处理可能干扰监听模式的进程。指定 BSSID 能降低误选目标的概率，实验时也更容易复盘。

## 字典和 PMKID

```bash
sudo wifite --dict wordlist.txt
```

```bash
sudo wifite --pmkid
```

```bash
sudo wifite --bssid AA:BB:CC:DD:EE:FF --dict wordlist.txt
```

字典质量和目标环境比命令本身更关键。PMKID 流程是否有效，要看 AP 支持情况和抓包结果。

## 记录习惯

自动化工具方便但噪声大。记录里要写清授权范围、BSSID、信道、字典、抓到的文件名和底层工具输出，避免只留下一个“跑过 Wifite”的结论。
