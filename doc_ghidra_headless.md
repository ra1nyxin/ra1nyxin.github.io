# Ghidra Headless 常用用法

这篇记录 Ghidra headless 的常用命令。它适合批量导入样本、自动分析和跑脚本。

## 导入分析

导入并分析文件。

```bash
analyzeHeadless /tmp/ghidra-project ProjectName -import sample.exe
```

递归导入目录。

```bash
analyzeHeadless /tmp/ghidra-project ProjectName -import samples/ -recursive
```

覆盖已有项目。

```bash
analyzeHeadless /tmp/ghidra-project ProjectName -import sample.exe -overwrite
```

## 跑脚本

运行分析脚本。

```bash
analyzeHeadless /tmp/ghidra-project ProjectName -process sample.exe -postScript script.py
```

指定脚本目录。

```bash
analyzeHeadless /tmp/ghidra-project ProjectName -process sample.exe -scriptPath scripts -postScript script.py
```

## 备注

Headless 适合批量样本初筛。单个样本深入看时，还是 GUI 更舒服；批量提取函数、字符串和导入时 headless 很省时间。
