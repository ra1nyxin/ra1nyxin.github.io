# YARA 常用用法

这篇记录 YARA 的常用命令。它适合做样本归类、文件特征匹配、批量扫目录和把一些经验特征固化成规则。

## 基础扫描

用规则扫描单个文件。

```bash
yara rules.yar sample.bin
```

扫描目录。

```bash
yara -r rules.yar ./samples
```

显示匹配字符串。

```bash
yara -s rules.yar sample.bin
```

显示命名空间和标签。

```bash
yara -n -t rules.yar sample.bin
```

## 规则检查

检查规则语法。

```bash
yarac rules.yar rules.compiled
```

使用编译后的规则扫描。

```bash
yara rules.compiled sample.bin
```

包含外部变量。

```bash
yara -d env=prod rules.yar sample.bin
```

## 批量处理

递归扫描并只输出匹配。

```bash
yara -r rules.yar ./samples
```

扫描时忽略警告。

```bash
yara -w -r rules.yar ./samples
```

限制栈大小，规则复杂时可以临时调整。

```bash
yara -k 1048576 rules.yar sample.bin
```

## 简单规则样例

匹配几个文本特征。

```yara
rule demo_text { strings: $a = "powershell" nocase $b = "cmd.exe" nocase condition: any of them }
```

匹配 PE 文件。

```yara
rule demo_pe { condition: uint16(0) == 0x5A4D }
```

匹配文件大小范围。

```yara
rule demo_size { condition: filesize < 2MB }
```

## 和 find 配合

只扫 exe 文件。

```bash
find ./samples -type f -name "*.exe" -print0 | xargs -0 yara rules.yar
```

把结果保存到文件。

```bash
yara -r rules.yar ./samples > yara-result.txt
```

## 备注

YARA 规则要尽量写得可解释。字符串、偏移、文件类型、大小、组合条件都要服务于同一个判断，规则名和 tag 也要能看出用途。后面维护规则时，清晰比炫技重要。
