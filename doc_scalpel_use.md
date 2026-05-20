# Scalpel 常用用法

Scalpel 适合基于文件头尾恢复文件。常用参数：配置文件、输入文件、输出目录。

```bash
scalpel image.dd -o scalpel-out
```

```bash
scalpel image.dd -c scalpel.conf -o scalpel-out
```

```bash
grep -n "jpg" /etc/scalpel/scalpel.conf
```

```bash
ls scalpel-out
```

Scalpel 在文件碎片恢复场景里很实用。比赛里遇到删除文件、压缩碎片和混合镜像时可以先跑一遍。
