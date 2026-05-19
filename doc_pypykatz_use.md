# pypykatz 常用用法

这篇记录 pypykatz 的常用命令。它适合在授权环境里对离线转储文件做凭据解析，常和 ProcDump、取证镜像或实验样本配合。

## LSASS dump

解析 minidump。

```bash
pypykatz lsa minidump lsass.dmp
```

保存解析结果。

```bash
pypykatz lsa minidump lsass.dmp | tee pypykatz.txt
```

解析多个 dump。

```bash
for f in *.dmp; do pypykatz lsa minidump "$f"; done
```

## 常见搭配

查看 dump 文件。

```bash
file lsass.dmp
```

计算 dump 哈希。

```bash
sha256sum lsass.dmp
```

压缩归档。

```bash
7z a lsass-dump.7z lsass.dmp pypykatz.txt
```

## 小记录

pypykatz 适合做离线分析，输出里要重点看账号名、域名、认证材料类型和会话来源。原始 dump 文件要单独保留，后面复查会用到。
