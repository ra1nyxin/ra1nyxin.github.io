# Make 常用用法

这篇记录 make 的常用命令。项目里有 Makefile 时，它通常会把构建、测试、格式化、发布这些动作收成固定入口。

## 基础命令

执行默认目标。

```bash
make
```

执行指定目标。

```bash
make test
```

列出数据库里的规则。

```bash
make -pRrq -f Makefile : 2>/dev/null
```

演练命令但不执行。

```bash
make -n build
```

## 并行和变量

并行构建。

```bash
make -j4
```

使用 CPU 核心数并行。

```bash
make -j$(nproc)
```

传变量。

```bash
make build VERSION=1.2.3
```

打印变量来源。

```bash
make -p | grep "^CC"
```

## 调试 Makefile

显示执行命令。

```bash
make --debug=b build
```

显示为什么目标需要重建。

```bash
make --debug=v build
```

忽略内置规则。

```bash
make -r build
```

## 常见目标

构建。

```bash
make build
```

测试。

```bash
make test
```

格式化。

```bash
make fmt
```

清理。

```bash
make clean
```

## 小记录

Makefile 好用的地方是把复杂命令固定成少数几个目标。排查时先用 `make -n target` 看实际会执行什么，再决定是否真正运行。
