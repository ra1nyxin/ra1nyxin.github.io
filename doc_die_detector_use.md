# Detect It Easy 使用

Detect It Easy 常用来识别文件类型、编译器、壳、PE/ELF 基本信息。做样本初筛时，它能快速告诉你文件大概是什么、有没有打包、后面该走静态还是动态分析。

## 单文件

```bash
diec sample.exe
```

```bash
diec -j sample.exe
```

```bash
diec -d sample.exe
```

默认输出适合人看，`-j` 适合留给脚本处理，`-d` 能展开更细的检测信息。识别到壳以后，再决定是否先脱壳或直接动态跑。

## 批量

```bash
diec -r samples/
```

```bash
diec -r samples/ -j > die-report.json
```

批量目录里可以先按文件类型、架构、壳类型分组。这样后面安排分析顺序会轻很多。

## 复核

```bash
file sample.exe
```

```bash
strings sample.exe | head
```

DIE 的识别结果建议和 `file`、`strings`、导入表一起看。被改过头的样本可能会误报壳或编译器，单个工具结论别直接写死。
