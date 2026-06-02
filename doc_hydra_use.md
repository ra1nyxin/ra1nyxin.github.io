# Hydra 使用笔记

Hydra 适合在授权范围内验证弱口令、默认口令和账号密码组合。它不是“越快越好”的工具，速度开太高只会制造锁号、告警和大量噪声。真正好用的方式是先确认协议、失败特征和速率，再跑一个可解释的小范围任务。

最基础的 SSH 验证如下。`-l` 是单个用户名，`-L` 是用户字典；`-p` 是单个密码，`-P` 是密码字典。

```bash
hydra -l alice -p 'Password123' ssh://192.168.1.10
hydra -l alice -P passwords.txt ssh://192.168.1.10
hydra -L users.txt -P passwords.txt ssh://192.168.1.10
```

服务端口不是默认值时，用 `-s` 或 URL 里带端口都可以。排查时我更喜欢 URL 写法，因为协议、主机、端口更直观。

```bash
hydra -L users.txt -P passwords.txt -s 2222 192.168.1.10 ssh
hydra -L users.txt -P passwords.txt ssh://192.168.1.10:2222
```

常见协议模块直接写协议名即可。不同模块对错误信息和并发的耐受程度不一样，RDP、SMB、数据库这类服务不要默认开很高线程。

```bash
hydra -L users.txt -P passwords.txt ftp://192.168.1.10
hydra -L users.txt -P passwords.txt smb://192.168.1.10
hydra -L users.txt -P passwords.txt rdp://192.168.1.10
hydra -L users.txt -P passwords.txt mysql://192.168.1.10
```

Web 表单是 Hydra 最容易写错的地方。先用浏览器或代理抓一次真实登录请求，确认路径、方法、字段名、Cookie、CSRF 和失败文本。`^USER^`、`^PASS^` 是替换点，最后一段通常写失败响应里的稳定字符串。

```bash
hydra -L users.txt -P passwords.txt 192.168.1.10 http-post-form "/login:username=^USER^&password=^PASS^:Invalid password"
```

如果站点需要固定 Cookie 或自定义 Host 头，把它们放进参数里。失败文本不要选太泛的词，比如 `error`，否则误报会很多。

```bash
hydra -L users.txt -P passwords.txt example.com https-post-form "/login:user=^USER^&pass=^PASS^:F=Login failed:H=Cookie: session=test"
```

HTTP Basic 和 Digest 比表单简单，但也要确认路径是否真的触发认证。很多后台路径会先 302 到登录页，直接打错模块会得到一堆无意义结果。

```bash
hydra -L users.txt -P passwords.txt 192.168.1.10 http-get /admin
hydra -L users.txt -P passwords.txt 192.168.1.10 http-head /admin
```

节奏控制很重要。`-t` 控制线程，`-W` 和 `-w` 控制等待，`-f` 找到一个结果后停止，`-F` 在任意主机找到后停止。账号锁定策略不清楚时，先用很小的线程和很少的候选跑探测。

```bash
hydra -L users.txt -P passwords.txt -t 4 -W 5 ssh://192.168.1.10
hydra -L users.txt -P passwords.txt -f ssh://192.168.1.10
```

输出建议保存。`-V` 会显示每次尝试，适合调试但不适合长任务；`-o` 保存结果，`-b json` 方便后续处理。

```bash
hydra -L users.txt -P passwords.txt -o hydra-result.txt ssh://192.168.1.10
hydra -L users.txt -P passwords.txt -b json -o hydra-result.json ssh://192.168.1.10
```

恢复中断任务可以用 `hydra.restore`，但恢复前确认目标范围和字典没有变。字典变了还强行恢复，结果不一定可信。

```bash
hydra -R
```

我一般把 Hydra 当成“验证工具”，不是发现工具。先用枚举、配置审计或资产清单确认账号范围，再用小字典验证高概率组合。跑完后把成功、失败、锁定、超时和误报分开记录，后续修复才有依据。
