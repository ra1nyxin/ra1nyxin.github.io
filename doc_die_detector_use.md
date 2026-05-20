# Detect It Easy 使用

Detect It Easy 用于识别文件类型、编译器、壳和 PE/ELF 信息。

## 常用命令

```bash
diec sample.exe
```

```bash
diec -j sample.exe
```

```bash
diec -r samples/
```

```bash
diec -d sample.exe
```

```bash
diec --help
```

小记录：它适合样本初筛，识别到壳后再决定用动态还是静态方式分析。
