# Sysinternals 工具常用用法

这篇记录几个常用 Sysinternals 工具。OSCP 和 Windows 排查里经常会碰到 PsExec、AccessChk、Sigcheck、ProcDump。

## PsExec

远程启动命令。

```bash
PsExec64.exe \\192.168.1.10 -u USER -p 'PASSWORD' cmd.exe
```

以 SYSTEM 运行本地命令。

```bash
PsExec64.exe -s -i cmd.exe
```

接受许可协议。

```bash
PsExec64.exe -accepteula \\192.168.1.10 -u USER -p 'PASSWORD' cmd.exe
```

## AccessChk

查看目录权限。

```bash
accesschk64.exe -uwcqv Everyone "C:\Program Files"
```

查看服务权限。

```bash
accesschk64.exe -ucqv "NT AUTHORITY\Authenticated Users" scmanager
```

查看注册表权限。

```bash
accesschk64.exe -kqv "HKLM\Software"
```

## Sigcheck

查看文件签名。

```bash
sigcheck64.exe -m -i C:\Windows\System32\notepad.exe
```

查看哈希。

```bash
sigcheck64.exe -h C:\Windows\System32\notepad.exe
```

## ProcDump

转储进程。

```bash
procdump64.exe -ma 1234 proc.dmp
```

查看参数。

```bash
procdump64.exe -h
```

## 小记录

Sysinternals 工具很适合做本地排查和权限确认。它们不会替代 PowerView、PEAS 或 BloodHound，但能很快把目录权限、服务权限和文件签名这些基础信息补齐。
