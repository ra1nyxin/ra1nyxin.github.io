# Palo Alto PAN-OS CLI 排障笔记

PAN-OS 的 CLI 分 operational mode 和 configuration mode。日常排障大多数在 `show`、`test`、`debug` 这类 operational 命令里完成，真正改配置才进 `configure`。如果只是确认策略、会话和路由，不要急着进配置模式。

先看设备整体状态、作业和提交情况。Palo Alto 的配置提交是异步作业，GUI 上点了 Commit，不代表数据面已经按新配置工作。遇到“刚改策略但还不通”，先确认 commit job 有没有成功。

```text
show system info
show system resources
show jobs all
show jobs id <job-id>
show logging-status
```

接口和路由是第一层。接口状态、zone、虚拟路由器、ARP、系统连接要放在一起看。策略再正确，zone 或 virtual router 放错也不会匹配到预期路径。

```text
show interface all
show interface ethernet1/1
show arp all
show routing route
show routing fib
show netstat all
```

会话表是 PAN-OS 排障的核心。它能告诉你流量有没有进来、走了哪条策略、NAT 后变成什么、出接口是什么、应用识别到了什么阶段。先过滤源或目的，再看具体 session。

```text
show session info
show session all filter source 192.168.1.10
show session all filter destination 8.8.8.8
show session id <session-id>
```

策略匹配不要靠肉眼从上往下扫。`test security-policy-match` 和 `test nat-policy-match` 能快速确认同一组五元组会命中哪条规则。排 HTTPS 访问时，protocol 用 `6`，destination-port 写真实端口。

```text
test security-policy-match source 192.168.1.10 destination 8.8.8.8 protocol 6 destination-port 443
test nat-policy-match source 192.168.1.10 destination 8.8.8.8 protocol 6 destination-port 443
show running security-policy
show running nat-policy
```

如果 test 命中正确但真实流量不通，继续看会话细节、路由和日志。日志里要注意 action、rule、app、session end reason。`aged-out`、`tcp-rst-from-client`、`tcp-rst-from-server`、`policy-deny` 指向的问题完全不同。

```text
show log traffic direction equal backward receive_time in last-15-minutes
show log threat direction equal backward receive_time in last-15-minutes
```

全局计数器适合看数据面有没有丢包原因。先设置 packet filter，再看 delta，不然全局计数器噪声太大。

```text
debug dataplane packet-diag set filter match source 192.168.1.10 destination 8.8.8.8
debug dataplane packet-diag set filter on
show counter global filter packet-filter yes delta yes
debug dataplane packet-diag set filter off
```

抓包也建议先用过滤器。PAN-OS 的 packet-diag 能分别看 receive、firewall、transmit、drop 阶段，对判断“包进没进防火墙”和“在哪一步丢了”很有用。

```text
debug dataplane packet-diag clear all
debug dataplane packet-diag set filter match source 192.168.1.10 destination 8.8.8.8
debug dataplane packet-diag set capture stage receive file rx.pcap
debug dataplane packet-diag set capture stage transmit file tx.pcap
debug dataplane packet-diag set capture on
debug dataplane packet-diag set capture off
```

VPN 先看 IKE SA，再看 IPsec SA，然后回到路由、proxy-id、策略和 NAT。隧道起来不代表业务流量一定被正确加密。

```text
show vpn ike-sa
show vpn ipsec-sa
show vpn flow
test vpn ike-sa gateway <gateway-name>
test vpn ipsec-sa tunnel <tunnel-name>
```

GlobalProtect 侧可以看当前用户和网关状态，认证或 HIP 问题再去查相应日志。

```text
show global-protect-gateway current-user
show global-protect-gateway statistics
less mp-log gpsvc.log
less mp-log authd.log
```

PAN-OS 排障的一个实用顺序是：接口和 virtual router，策略和 NAT test，会话表，traffic log，global counter，最后才抓包。每一步都能缩小范围，不需要一开始就把 debug 打满。
