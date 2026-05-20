# rpcinfo 使用

rpcinfo 适合检查 RPC 服务、NFS 依赖和老 Unix 服务暴露情况。它输出的信息很短，但能快速指向 mountd、nlockmgr、rstatd 等后续入口。

## 基础枚举

```bash
rpcinfo -p 192.168.1.10
```

```bash
rpcinfo -T tcp 192.168.1.10
```

```bash
rpcinfo -T udp 192.168.1.10
```

## 和 Nmap 配合

```bash
nmap -sV -p 111 --script rpcinfo 192.168.1.10
```

```bash
nmap -sU -p 111 --script rpcinfo 192.168.1.10
```

## NFS 后续确认

```bash
showmount -e 192.168.1.10
```

```bash
nmap -p 111,2049 --script nfs-showmount 192.168.1.10
```

小记录：RPC 端口经常动态分配，扫描结果要结合 `rpcinfo -p` 看。发现 mountd 后直接进入 NFS 检查流程。
