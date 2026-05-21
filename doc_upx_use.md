# UPX 使用

UPX 用于可执行文件压缩和解包。安全分析里常见的用法是确认样本是否被 UPX 打包，然后尝试解包，方便继续看导入表、字符串和代码结构。

## 查看和解包

```bash
upx -l sample
```

```bash
upx -d sample
```

```bash
upx -d sample -o unpacked
```

`-l` 先看壳信息，确认像正常 UPX 再解。解包时最好输出到新文件，保留原始样本。

## 压缩

```bash
upx --best app
```

```bash
upx -9 app
```

压缩参数更多用于正常软件体积优化。安全分析里一般关注解包结果，压缩命令只是偶尔用来复现特征。

## 复核

```bash
file sample
```

```bash
file unpacked
```

解包后重新计算哈希，检查导入表和入口点。部分样本会改 UPX 头或破坏节表，普通 `upx -d` 失败时要换动态分析或手工脱壳思路。
