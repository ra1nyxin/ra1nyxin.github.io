# radare2 和 Rizin 常用用法

这篇记录 radare2、Rizin 的常用命令。它们适合二进制初筛、反汇编、字符串和函数浏览。

## radare2

打开文件。

```bash
r2 sample.bin
```

自动分析。

```text
aaa
```

查看函数。

```text
afl
```

查看字符串。

```text
iz
```

反汇编主函数。

```text
pdf @ main
```

## Rizin

打开文件。

```bash
rizin sample.bin
```

自动分析。

```text
aaa
```

查看入口。

```text
ie
```

查看导入。

```text
iij
```

## 备注

radare2 和 Rizin 适合快速看结构。比赛里先看 strings、imports、functions 和 main，再决定是否上 Ghidra 或动态调试。
