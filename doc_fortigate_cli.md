# FortiGate CLI 排障笔记

FortiGate 的 GUI 很适合看策略和对象，但真正排障时 CLI 更直接。CLI 能把路由、策略命中、会话表、NAT、VPN、抓包和 debug 串在一起看。我的习惯是先不要急着改配置，先把设备状态、VDOM、接口、路由和当前会话确认一遍，避免在错误的上下文里追问题。

先确认设备和上下文。开了 VDOM 的环境里，很多命令的结果会跟所在 VDOM 有关，先把这个问题排掉。

```text
get system status
get system performance status
get system admin
execute date
execute time
```

如果设备启用了 VDOM，先列出来，再进入对应 VDOM。

```text
get system vdom-property
config vdom
edit root
```

需要导出当前配置时，`show` 比 `get` 更接近配置视角，`show full-configuration` 会把默认值也展开，输出很长，但适合做基线留存。

```text
show system interface
show firewall policy
show firewall address
show firewall ippool
show full-configuration
```

接口问题先看物理状态，再看地址、MTU、协商、错误包和 ARP。很多“策略不通”最后其实是接口没有 up、VLAN 走错、ARP 不完整，或者回程路由不对。

```text
get system interface
diagnose hardware deviceinfo nic port1
get system arp
diagnose ip arp list
```

路由不要只看默认路由。FortiGate 上策略路由、SD-WAN、静态路由、动态路由和 VPN 路由都可能影响选路。先看总表，再针对目的地址查一次细节。

```text
get router info routing-table all
get router info routing-table details 8.8.8.8
diagnose firewall proute list
diagnose sys sdwan service
```

策略和 NAT 排查建议从会话表入手。只看策略列表容易误判，因为实际流量可能被已有 session、NAT、路由或隐式拒绝影响。先设置 session filter，再看命中的会话和策略 ID。

```text
diagnose sys session filter clear
diagnose sys session filter src 192.168.1.10
diagnose sys session filter dst 8.8.8.8
diagnose sys session list
diagnose sys session filter clear
```

会话里重点看 `policy_id`、`state`、`proto_state`、`npu_state`、源目的 NAT 后地址和出接口。如果策略刚改过但行为没变，可能是旧 session 还在。清 session 要非常克制，最好只清被过滤出来的连接。

```text
diagnose sys session clear
diagnose firewall iprope lookup 192.168.1.10 12345 8.8.8.8 443 6 port1
```

抓包时先用短时间、窄过滤条件确认方向。FortiGate 的 sniffer 输出级别很实用，`4` 能看到接口和方向，`a` 会显示 ASCII，排 HTTP 或 TLS SNI 前置问题时有帮助。

```text
diagnose sniffer packet any "host 8.8.8.8" 4 0 a
diagnose sniffer packet port1 "tcp port 443 and host 192.168.1.10" 4 100 a
diagnose sniffer packet any "icmp" 4 20
```

debug flow 是排策略、NAT 和路由最有价值的工具之一，但它输出很快，必须先过滤，再开启，再及时关闭。不要在生产高峰期无过滤直接开。

```text
diagnose debug reset
diagnose debug flow filter addr 192.168.1.10
diagnose debug flow filter daddr 8.8.8.8
diagnose debug flow show function-name enable
diagnose debug flow trace start 50
diagnose debug enable
diagnose debug disable
diagnose debug reset
```

VPN 先区分 IKE 是否起来、IPsec SA 是否起来、选择器是否匹配，再看路由和策略。隧道 up 不代表业务一定通，业务流量还要过策略、NAT 和回程路由。

```text
get vpn ipsec tunnel summary
diagnose vpn ike gateway list
diagnose vpn tunnel list
diagnose vpn ike log-filter clear
diagnose vpn ike log-filter dst-addr4 203.0.113.10
diagnose debug application ike -1
diagnose debug enable
```

SSL VPN 排查可以先看在线用户、地址池和认证日志。

```text
get vpn ssl monitor
diagnose vpn ssl list
execute log filter category 1
execute log display
```

改配置前最好先导出一份相关片段。FortiGate 的提交是即时生效的，没有传统意义上的 candidate config，所以远程改策略、路由和接口时要特别注意回滚路径。涉及管理口、防火墙策略和默认路由的调整，先准备好 console、备用管理链路或明确的回退命令。

```text
show firewall policy
show router static
execute backup config flash before-change.conf
```

排障顺序可以简单记成：接口是否收发，路由是否选对，策略是否命中，NAT 是否符合预期，会话是否被旧状态影响，最后再用抓包和 debug flow 证明判断。只看某一层很容易绕远路。
