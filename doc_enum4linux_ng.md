# enum4linux-ng 常用用法

这篇记录 enum4linux-ng 的常用命令。它适合在授权环境里对 SMB、RPC、NetBIOS 信息做一轮快速枚举，常用于 Windows 或 Samba 目标的早期信息整理。

## 基础枚举

对目标做默认枚举。

```bash
enum4linux-ng 192.168.1.10
```

输出更详细信息。

```bash
enum4linux-ng -v 192.168.1.10
```

保存 JSON 结果。

```bash
enum4linux-ng -oJ enum4linux-result 192.168.1.10
```

保存 YAML 结果。

```bash
enum4linux-ng -oY enum4linux-result 192.168.1.10
```

## 匿名枚举

尝试匿名会话枚举。

```bash
enum4linux-ng -A 192.168.1.10
```

只枚举共享。

```bash
enum4linux-ng -S 192.168.1.10
```

只枚举用户。

```bash
enum4linux-ng -U 192.168.1.10
```

只枚举组。

```bash
enum4linux-ng -G 192.168.1.10
```

## 带凭据枚举

使用用户名和密码。

```bash
enum4linux-ng -u USER -p 'PASSWORD' 192.168.1.10
```

使用域用户。

```bash
enum4linux-ng -u 'DOMAIN\USER' -p 'PASSWORD' 192.168.1.10
```

使用空密码测试。

```bash
enum4linux-ng -u USER -p '' 192.168.1.10
```

## 常见关注点

查看密码策略。

```bash
enum4linux-ng -P 192.168.1.10
```

查看主机信息。

```bash
enum4linux-ng -O 192.168.1.10
```

查看 RID cycling 结果。

```bash
enum4linux-ng -R 192.168.1.10
```

## 备注

enum4linux-ng 适合做 SMB 第一轮摸底。结果里重点看匿名访问、共享名、用户枚举、密码策略和域信息。后续通常会接 `smbclient`、`rpcclient` 或 NetExec 做更细的确认。
