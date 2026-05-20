# bulk_extractor 常用用法

bulk_extractor 适合快速从镜像或文件中提取邮箱、URL、信用卡样式和其他特征。常用参数：输入、输出目录、线程。

```bash
bulk_extractor -o out disk.img
```

```bash
bulk_extractor -o out -j 4 disk.img
```

```bash
bulk_extractor -o out sample.bin
```

```bash
ls out
```

bulk_extractor 适合大范围初筛。抽出的邮箱、URL 和关键词常常能直接给出下一步调查方向。
