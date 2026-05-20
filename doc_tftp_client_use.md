# TFTP 检查

TFTP 常见于网络设备配置备份、PXE 启动和老旧运维系统。它通常没有认证，测试时要控制动作，避免覆盖业务文件。

## 服务确认

```bash
nmap -sU -p 69 --script tftp-enum 192.168.1.10
```

```bash
nc -uv 192.168.1.10 69
```

```bash
atftp --trace --option "timeout 2" 192.168.1.10
```

## 文件读取

```bash
tftp 192.168.1.10 -c get router.cfg
```

```bash
atftp --get --remote-file startup-config --local-file startup-config 192.168.1.10
```

```bash
for f in startup-config running-config router.cfg switch.cfg; do tftp 192.168.1.10 -c get $f; done
```

## 写入验证

```bash
tftp 192.168.1.10 -c put test.txt test.txt
```

TFTP 枚举经常靠文件名猜测。网络设备配置、PXE 配置和自动化脚本是高价值目标，写入测试要提前确认授权范围。
