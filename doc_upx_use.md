# UPX 使用

UPX 用于可执行文件压缩和解包，安全分析里常用于处理被 UPX 打包的样本。

## 常用命令

```bash
upx -l sample
```

```bash
upx -d sample
```

```bash
upx -d sample -o unpacked
```

```bash
upx --best app
```

```bash
file sample
```

解包后再重新计算哈希并检查导入表，部分样本会魔改 UPX 头。
