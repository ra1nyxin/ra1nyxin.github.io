# svn-dumper 常用用法

svn-dumper 适合从暴露的 Subversion 仓库恢复文件。常用参数：目标 URL 和输出目录。

```bash
svn-dumper http://192.168.1.10/.svn/ dumped/
```

```bash
svn-dumper https://example.com/.svn/ repo/
```

```bash
svn checkout http://192.168.1.10/svnrepo
```

```bash
svn log http://192.168.1.10/svnrepo
```

SVN 泄露不如 Git 常见，但一旦存在，内容往往很完整。先恢复，再看历史修订和删除文件。
