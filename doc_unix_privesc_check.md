# unix-privesc-check 常用用法

unix-privesc-check 适合 Unix/Linux 提权线索枚举。常用参数：`standard` 标准检查，`detailed` 详细检查。

```bash
./unix-privesc-check standard
```

```bash
./unix-privesc-check detailed
```

```bash
./unix-privesc-check standard | tee upc.txt
```

```bash
./unix-privesc-check detailed | tee upc-detailed.txt
```

这个工具偏老，但在一些基础环境里仍然能补线索。输出适合和 LinEnum、linPEAS 交叉看。
