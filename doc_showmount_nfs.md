# showmount 与 NFS 检查

NFS 常见于 Linux 文件共享、备份目录和容器宿主机挂载。检查重点是导出路径、访问控制、匿名映射和可写权限。

## 导出列表

```bash
showmount -e 192.168.1.10
```

```bash
nmap -p 111,2049 --script nfs-showmount 192.168.1.10
```

```bash
rpcinfo -p 192.168.1.10
```

## 挂载测试

```bash
mkdir -p /tmp/nfs-test
```

```bash
sudo mount -t nfs 192.168.1.10:/export/share /tmp/nfs-test -o nolock
```

```bash
find /tmp/nfs-test -maxdepth 2 -type f -ls
```

## 权限确认

```bash
touch /tmp/nfs-test/write-test.txt
```

```bash
id && ls -lan /tmp/nfs-test
```

```bash
sudo umount /tmp/nfs-test
```

NFS 风险经常来自 `no_root_squash`、过宽网段和备份目录。挂载后先看 UID/GID 映射，再判断是否存在越权写入。
