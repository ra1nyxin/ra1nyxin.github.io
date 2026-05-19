# xfreerdp 常用用法

这篇记录 xfreerdp 的常用命令。它适合在授权环境里连接 Windows 远程桌面，带上证书忽略、动态分辨率和 hash 登录都很常见。

## 基础连接

用户名密码连接。

```bash
xfreerdp /u:USER /p:'PASSWORD' /v:192.168.1.10 /cert:ignore
```

域用户连接。

```bash
xfreerdp /u:DOMAIN\\USER /p:'PASSWORD' /v:192.168.1.10 /cert:ignore
```

使用 NTLM hash。

```bash
xfreerdp /u:USER /pth:NTLM_HASH /v:192.168.1.10 /cert:ignore
```

## 常用选项

动态分辨率。

```bash
xfreerdp /u:USER /p:'PASSWORD' /v:192.168.1.10 /dynamic-resolution /cert:ignore
```

共享剪贴板。

```bash
xfreerdp /u:USER /p:'PASSWORD' /v:192.168.1.10 /clipboard /cert:ignore
```

共享本地目录。

```bash
xfreerdp /u:USER /p:'PASSWORD' /v:192.168.1.10 /drive:share,/home/user/share /cert:ignore
```

窗口模式。

```bash
xfreerdp /u:USER /p:'PASSWORD' /v:192.168.1.10 /cert:ignore /size:1440x900
```

## 连接排查

调试连接。

```bash
xfreerdp /u:USER /p:'PASSWORD' /v:192.168.1.10 /cert:ignore /log-level:TRACE
```

测试网路连通。

```bash
nc -vz 192.168.1.10 3389
```

## 小记录

RDP 连接里最常见的是证书提示、账号格式和分辨率问题。先确认 3389 可达，再处理用户名格式和证书忽略参数，连接成功率会高很多。
