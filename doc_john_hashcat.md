# John 和 Hashcat 常用用法

这篇记录 John the Ripper 和 Hashcat 的常用命令。它们适合在授权实验里做离线 hash 验证、格式识别和字典规则测试。

## John 基础

自动识别格式。

```bash
john hashes.txt
```

指定字典。

```bash
john --wordlist=rockyou.txt hashes.txt
```

显示已破解结果。

```bash
john --show hashes.txt
```

指定格式。

```bash
john --format=NT hashes.txt
```

使用规则。

```bash
john --wordlist=rockyou.txt --rules hashes.txt
```

## 常见转换工具

zip 转 John 格式。

```bash
zip2john archive.zip > zip.hash
```

ssh 私钥转 John 格式。

```bash
ssh2john id_rsa > id_rsa.hash
```

keepass 转 John 格式。

```bash
keepass2john database.kdbx > keepass.hash
```

## Hashcat 基础

查看帮助。

```bash
hashcat --help
```

跑 NTLM。

```bash
hashcat -m 1000 -a 0 hashes.txt rockyou.txt
```

跑 bcrypt。

```bash
hashcat -m 3200 -a 0 hashes.txt rockyou.txt
```

显示结果。

```bash
hashcat -m 1000 --show hashes.txt
```

## Hashcat 模式

字典模式。

```bash
hashcat -m 1000 -a 0 hashes.txt rockyou.txt
```

组合字典。

```bash
hashcat -m 1000 -a 1 hashes.txt words1.txt words2.txt
```

掩码模式。

```bash
hashcat -m 1000 -a 3 hashes.txt '?l?l?l?l?d?d'
```

字典加规则。

```bash
hashcat -m 1000 -a 0 hashes.txt rockyou.txt -r rules/best64.rule
```

## 备注

离线破解前先确认 hash 类型。John 上手快，Hashcat 更适合 GPU 和规则组合。结果要记录 hash 来源、格式、字典、规则和耗时，后面复盘会清楚很多。
