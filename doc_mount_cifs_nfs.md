# mount.cifs 与共享挂载

文件共享挂载适合在授权环境里做证据收集、配置复核和权限确认。SMB 用 `mount.cifs`，NFS 用 `mount -t nfs`，挂载前要明确只读或读写测试目标。

## SMB 挂载

```bash
mkdir -p /tmp/smb-share
```

```bash
sudo mount -t cifs //192.168.1.10/share /tmp/smb-share -o username=user,password=pass,domain=WORKGROUP
```

```bash
sudo mount -t cifs //192.168.1.10/share /tmp/smb-share -o credentials=creds.txt,ro
```

## NFS 挂载

```bash
mkdir -p /tmp/nfs-share
```

```bash
sudo mount -t nfs 192.168.1.10:/share /tmp/nfs-share -o ro,nolock
```

```bash
sudo mount -t nfs 192.168.1.10:/share /tmp/nfs-share -o vers=3,nolock
```

## 清理

```bash
mount | grep '/tmp/smb-share'
```

```bash
sudo umount /tmp/smb-share
```

```bash
sudo umount /tmp/nfs-share
```

默认先只读挂载，确认授权后再做写入测试。挂载点、认证方式和访问到的敏感路径要写进记录。
