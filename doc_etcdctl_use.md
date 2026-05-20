# etcdctl 安全检查

etcd 保存 Kubernetes 和分布式系统的关键状态。检查重点是是否暴露、是否需要证书、能否读取 key、快照是否泄露。

## 端口和健康检查

```bash
nmap -sV -p 2379,2380 192.168.1.10
```

```bash
ETCDCTL_API=3 etcdctl --endpoints=http://192.168.1.10:2379 endpoint health
```

```bash
ETCDCTL_API=3 etcdctl --endpoints=https://192.168.1.10:2379 endpoint status -w table
```

## 证书连接

```bash
ETCDCTL_API=3 etcdctl --endpoints=https://192.168.1.10:2379 --cacert ca.crt --cert client.crt --key client.key endpoint health
```

```bash
ETCDCTL_API=3 etcdctl --endpoints=https://192.168.1.10:2379 --cacert ca.crt --cert client.crt --key client.key get / --prefix --keys-only
```

## 快照

```bash
ETCDCTL_API=3 etcdctl --endpoints=https://192.168.1.10:2379 --cacert ca.crt --cert client.crt --key client.key snapshot save etcd.db
```

小记录：etcd 风险极高，能读 key 基本等于能看到集群核心状态。只读验证也要控制输出，避免泄露 secret 内容。
