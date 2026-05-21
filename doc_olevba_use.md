# olevba 使用

olevba 主要用来拆 Office 文档里的 VBA 宏。遇到可疑 doc、xls、ppt 时，它通常放在第一轮分析里，先看有没有自动执行点、外部调用、混淆字符串和解码后的脚本片段。

## 单文件分析

```bash
olevba sample.doc
```

```bash
olevba -a sample.doc
```

```bash
olevba -c sample.doc
```

`-a` 会把分析信息展开得更完整，`-c` 适合只看宏代码。初筛时先看 `AutoOpen`、`Document_Open`、`Workbook_Open`，再往下找 `CreateObject`、`Shell`、`WScript`、`PowerShell` 这些调用点。

## 解码和批量

```bash
olevba --decode sample.doc
```

```bash
olevba -r samples/
```

```bash
olevba -a -r samples/ > olevba-report.txt
```

批量跑的时候输出要保存下来。宏样本很多会把 URL、命令行和 payload 字符串拆开拼接，终端里扫一眼容易漏。

## 记录重点

建议把自动执行点、可疑函数、外联地址、落地文件名、解码后的命令单独摘出来。后面和沙箱日志、代理日志、EDR 告警对照时，这些字段最容易对上。
