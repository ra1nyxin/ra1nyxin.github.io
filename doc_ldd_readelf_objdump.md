# ldd readelf objdump 检查

二进制分析前，先用 `ldd`、`readelf`、`objdump` 看依赖、架构、符号和安全编译选项。它们适合快速判断程序的基本面。

## 依赖和架构

```bash
file ./app
```

```bash
ldd ./app
```

```bash
readelf -h ./app
```

## 安全属性

```bash
readelf -l ./app | grep GNU_STACK
```

```bash
readelf -d ./app | grep -E 'BIND_NOW|RELRO'
```

```bash
checksec --file=./app
```

## 符号和反汇编

```bash
readelf -s ./app | head
```

```bash
objdump -d ./app | less
```

```bash
objdump -R ./app
```

先看架构、PIE、NX、RELRO、Canary，再决定调试路线。动态链接库路径异常时，继续查 RPATH、RUNPATH 和加载顺序。
