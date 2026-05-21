# oletools 使用

oletools 是一组 Office 文档分析工具。处理可疑文档时，可以先用它判断文件结构，再分别看宏、嵌入对象、RTF 对象和自动执行痕迹。

## 初筛

```bash
oleid sample.doc
```

```bash
mraptor sample.doc
```

`oleid` 适合先看文件里有没有宏、嵌入对象、加密、外部关系等特征。`mraptor` 可以快速扫宏风险，适合批量样本里先挑可疑文件。

## 宏和对象

```bash
olevba sample.doc
```

```bash
oleobj sample.doc
```

```bash
rtfobj sample.rtf
```

宏里重点看自动执行函数、外部命令和字符串拼接。嵌入对象要看文件名、MIME 类型、保存路径和提取出来后的哈希。

## 批量处理

```bash
oleid samples/*
```

```bash
olevba -a -r samples/ > office-macro-report.txt
```

批量跑时要把结果落文件，方便后面和沙箱、邮件网关、代理日志对照。只在终端里看，很容易漏掉少量高价值样本。

## 习惯

Office 样本先保留原件，再提取对象和宏代码。提取物单独放目录，文件名里带上样本哈希，后面回看不会乱。
