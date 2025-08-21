# PowerShell 常用命令

PowerShell 是一个跨平台的命令行 shell 和脚本语言，主要用于自动化任务和配置管理。以下是一些常用的 PowerShell 命令及其参数示例：

## 基础概念与帮助

-   **`Get-Command`**
    查找 PowerShell 命令（cmdlet、函数、别名等）。
    ```powershell
    Get-Command # 列出所有可用命令
    Get-Command -Verb Get # 列出所有以 Get 开头的命令
    Get-Command -Noun Service # 列出所有与 Service 相关的命令
    Get-Command -Name *Item* # 查找名称中包含 Item 的命令
    ```

-   **`Get-Help`**
    获取命令的帮助信息。这是学习 PowerShell 最重要的方法之一。
    ```powershell
    Get-Help Get-ChildItem # 获取 Get-ChildItem 的帮助
    Get-Help Get-ChildItem -Full # 获取完整帮助信息
    Get-Help Get-ChildItem -Examples # 获取示例
    Get-Help Get-ChildItem -Online # 在浏览器中打开在线帮助
    Update-Help # 更新本地帮助文件 (首次使用或定期更新)
    ```

-   **`Get-Member`**
    查看对象的属性和方法。PowerShell 的核心是对象，理解对象的成员非常重要。
    ```powershell
    Get-Service | Get-Member # 查看 Get-Service 返回的对象的成员
    "Hello World" | Get-Member # 查看字符串对象的成员
    ```

## 文件和目录管理

-   **`Get-ChildItem` (ls, dir)**
    获取文件和目录。
    ```powershell
    Get-ChildItem # 列出当前目录内容
    Get-ChildItem -Path C:\Windows -Recurse # 递归列出指定目录内容
    Get-ChildItem -Path . -File # 只列出文件
    Get-ChildItem -Path . -Directory # 只列出目录
    Get-ChildItem -Path C:\Logs -Filter "*.log" # 过滤特定文件
    Get-ChildItem -Path C:\Users\* -Exclude *Admin* # 排除特定目录
    ```

-   **`Set-Location` (cd)**
    更改当前工作目录。
    ```powershell
    Set-Location C:\Users\YourUser\Documents
    cd .. # 返回上一级目录
    cd ~ # 返回用户主目录
    ```

-   **`New-Item` (mkdir)**
    创建新的文件或目录。
    ```powershell
    New-Item -Path C:\Temp\NewFolder -ItemType Directory # 创建目录
    New-Item -Path C:\Temp\NewFile.txt -ItemType File # 创建文件
    New-Item -Path C:\Temp\Log.txt -ItemType File -Force # 如果文件存在则覆盖
    ```

-   **`Copy-Item` (cp)**
    复制文件或目录。
    ```powershell
    Copy-Item -Path C:\Source\file.txt -Destination C:\Destination\ # 复制文件
    Copy-Item -Path C:\SourceFolder -Destination C:\DestinationFolder -Recurse # 复制目录及其内容
    Copy-Item -Path C:\Source\* -Destination C:\Backup\ -Force # 复制所有文件并覆盖
    ```

-   **`Move-Item` (mv)**
    移动文件或目录。
    ```powershell
    Move-Item -Path C:\Source\file.txt -Destination C:\Destination\ # 移动文件
    Move-Item -Path C:\SourceFolder -Destination C:\DestinationFolder # 移动目录
    ```

-   **`Remove-Item` (rm, del)**
    删除文件或目录。
    ```powershell
    Remove-Item -Path C:\Temp\OldFile.txt # 删除文件
    Remove-Item -Path C:\Temp\OldFolder -Recurse -Force # 强制删除非空目录
    ```

-   **`Get-Content` (cat, type)**
    获取文件内容。
    ```powershell
    Get-Content C:\Logs\app.log # 获取整个文件内容
    Get-Content C:\Logs\app.log -Tail 10 # 获取文件末尾10行
    Get-Content C:\Logs\app.log -TotalCount 5 # 获取文件开头5行
    ```

-   **`Set-Content`**
    设置文件内容或创建文件并写入内容。
    ```powershell
    Set-Content -Path C:\Temp\NewFile.txt -Value "Hello, PowerShell!"
    Set-Content -Path C:\Temp\ExistingFile.txt -Value "New content" # 覆盖现有内容
    ```

-   **`Add-Content`**
    向文件追加内容。
    ```powershell
    Add-Content -Path C:\Temp\Log.txt -Value "$(Get-Date): Log entry."
    ```

## 网络和下载

-   **`Invoke-WebRequest` (wget, curl)**
    从 Web 下载内容，可以用于下载文件。支持 HTTP, HTTPS, FTP。
    ```powershell
    Invoke-WebRequest -Uri "https://example.com/path/to/file.zip" -OutFile "C:\Downloads\file.zip"
    Invoke-WebRequest -Uri "https://example.com/api/data" | Select-Object -ExpandProperty Content # 获取网页内容
    ```

-   **`Invoke-RestMethod`**
    发送 HTTP/HTTPS 请求并返回响应对象，常用于与 RESTful API 交互。自动解析 JSON/XML。
    ```powershell
    Invoke-RestMethod -Uri "https://api.github.com/users/ra1nyxin" # 获取GitHub用户信息
    Invoke-RestMethod -Uri "https://api.example.com/items" -Method Post -Body '{"name":"New Item"}' -ContentType "application/json"
    ```

-   **`Test-Connection` (ping)**
    测试网络连接。
    ```powershell
    Test-Connection -ComputerName google.com
    Test-Connection -ComputerName 192.168.1.1 -Count 4 # 发送4个 ping 包
    ```

-   **`Resolve-DnsName` (nslookup)**
    解析 DNS 名称。
    ```powershell
    Resolve-DnsName -Name example.com
    ```

## 系统管理

-   **`Get-Service`**
    获取系统服务信息。
    ```powershell
    Get-Service # 列出所有服务
    Get-Service -Name "BITS" # 获取指定服务
    Get-Service | Where-Object {$_.Status -eq "Running"} # 获取所有正在运行的服务
    ```

-   **`Start-Service`, `Stop-Service`, `Restart-Service`**
    启动、停止、重启系统服务。
    ```powershell
    Stop-Service -Name "BITS"
    Start-Service -Name "BITS"
    Restart-Service -Name "Spooler" -Force # 强制重启
    ```

-   **`Get-Process` (ps)**
    获取正在运行的进程信息。
    ```powershell
    Get-Process # 列出所有进程
    Get-Process -Name "chrome" # 获取指定名称的进程
    Get-Process | Where-Object {$_.WorkingSet -gt 100MB} # 查找内存占用大于100MB的进程
    ```

-   **`Stop-Process` (kill)**
    停止一个或多个正在运行的进程。
    ```powershell
    Stop-Process -Name "notepad" # 停止所有 Notepad 进程
    Stop-Process -Id 1234 # 停止指定 ID 的进程
    ```

-   **`Get-WmiObject` (gwmi)**
    获取 WMI (Windows Management Instrumentation) 对象，用于查询系统信息。
    ```powershell
    Get-WmiObject -Class Win32_OperatingSystem # 获取操作系统信息
    Get-WmiObject -Class Win32_LogicalDisk | Select-Object DeviceID, Size, FreeSpace # 获取磁盘信息
    ```

-   **`Get-CimInstance`**
    获取 CIM (Common Information Model) 实例，是 `Get-WmiObject` 的替代品，更现代化。
    ```powershell
    Get-CimInstance -ClassName Win32_ComputerSystem
    ```

## 防火墙管理

-   **`Get-NetFirewallRule`**
    获取防火墙规则。
    ```powershell
    Get-NetFirewallRule -DisplayName "File and Printer Sharing (Echo Request - ICMPv4-In)"
    Get-NetFirewallRule -Action Block # 获取所有阻止规则
    ```

-   **`New-NetFirewallRule`**
    创建新的防火墙规则。
    ```powershell
    New-NetFirewallRule -DisplayName "Allow HTTP In" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 80
    New-NetFirewallRule -DisplayName "Block Outbound FTP" -Direction Outbound -Action Block -Protocol TCP -RemotePort 21
    ```

-   **`Remove-NetFirewallRule`**
    删除防火墙规则。
    ```powershell
    Remove-NetFirewallRule -DisplayName "Allow HTTP In"
    ```

-   **`Enable-NetFirewallRule`, `Disable-NetFirewallRule`**
    启用或禁用防火墙规则。
    ```powershell
    Disable-NetFirewallRule -DisplayName "File and Printer Sharing (SMB-In)"
    Enable-NetFirewallRule -DisplayName "Allow HTTP In"
    ```

## 日志管理

-   **`Get-WinEvent`**
    获取 Windows 事件日志。
    ```powershell
    Get-WinEvent -LogName System -MaxEvents 10 # 获取系统日志中最新的10条事件
    Get-WinEvent -LogName Application | Where-Object {$_.LevelDisplayName -eq "Error"} # 获取应用程序错误日志
    Get-WinEvent -FilterHashtable @{LogName='Security'; ID=4624} # 过滤特定事件ID
    ```

-   **`Clear-WinEventLog`**
    清除事件日志。
    ```powershell
    Clear-WinEventLog -LogName System -Confirm:$false # 清除系统日志不提示
    ```

## 注册表管理

-   **`Get-ItemProperty`**
    获取注册表项的属性。
    ```powershell
    Get-ItemProperty -Path HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\* | Select-Object DisplayName, DisplayVersion # 列出已安装软件
    ```

-   **`Set-ItemProperty`**
    设置注册表项的属性。
    ```powershell
    Set-ItemProperty -Path HKLM:\SOFTWARE\MyCompany\MyApp -Name "InstallPath" -Value "C:\Program Files\MyApp"
    ```

-   **`New-ItemProperty`**
    创建新的注册表属性。
    ```powershell
    New-ItemProperty -Path HKLM:\SOFTWARE\MyCompany\MyApp -Name "Version" -Value "1.0" -PropertyType String
    ```

-   **`Remove-ItemProperty`**
    删除注册表项的属性。
    ```powershell
    Remove-ItemProperty -Path HKLM:\SOFTWARE\MyCompany\MyApp -Name "Version"
    ```

## 计划任务管理

-   **`Get-ScheduledTask`**
    获取计划任务。
    ```powershell
    Get-ScheduledTask # 列出所有计划任务
    Get-ScheduledTask -TaskName "Microsoft Compatibility Appraiser"
    ```

-   **`Register-ScheduledTask`**
    注册新的计划任务。
    ```powershell
    # 示例：每天上午9点运行一个脚本
    $action = New-ScheduledTaskAction -Execute 'powershell.exe' -Argument '-File "C:\Scripts\MyScript.ps1"'
    $trigger = New-ScheduledTaskTrigger -Daily -At "9 AM"
    Register-ScheduledTask -Action $action -Trigger $trigger -TaskName "RunMyDailyScript" -Description "Runs a daily script."
    ```

-   **`Unregister-ScheduledTask`**
    注销计划任务。
    ```powershell
    Unregister-ScheduledTask -TaskName "RunMyDailyScript" -Confirm:$false
    ```

## 用户和组管理

-   **`Get-LocalUser`**
    获取本地用户账户。
    ```powershell
    Get-LocalUser # 列出所有本地用户
    Get-LocalUser -Name "Guest"
    ```

-   **`New-LocalUser`**
    创建新的本地用户账户。
    ```powershell
    New-LocalUser -Name "NewUser" -Password (Read-Host -AsSecureString "Enter password") -FullName "New Local User" -Description "Test account"
    ```

-   **`Remove-LocalUser`**
    删除本地用户账户。
    ```powershell
    Remove-LocalUser -Name "NewUser"
    ```

-   **`Add-LocalGroupMember`**
    将用户添加到本地组。
    ```powershell
    Add-LocalGroupMember -Group "Administrators" -Member "NewUser"
    ```

## 系统修复和更新

-   **`sfc /scannow` (通过 `cmd.exe` 调用)**
    系统文件检查器，用于扫描并修复损坏的 Windows 系统文件。通常在 PowerShell 中通过 `cmd.exe` 调用。
    ```powershell
    cmd.exe /c sfc /scannow
    ```

-   **`DISM` (通过 `cmd.exe` 调用)**
    部署映像服务和管理工具，用于修复 Windows 映像。通常在 PowerShell 中通过 `cmd.exe` 调用。
    ```powershell
    cmd.exe /c DISM /Online /Cleanup-Image /RestoreHealth
    ```

-   **`Restart-Computer`**
    重启计算机。
    ```powershell
    Restart-Computer -Force # 强制重启
    Restart-Computer -Delay 60 # 延迟60秒重启
    ```

## 环境变量配置

-   **`Get-Item Env:`**
    获取所有环境变量。
    ```powershell
    Get-Item Env:
    Get-Item Env:Path # 获取 Path 环境变量
    ```

-   **`$env:<VariableName> = "Value"` (临时设置)**
    在当前 PowerShell 会话中设置环境变量。只在当前会话有效。
    ```powershell
    $env:MY_VARIABLE = "MyValue"
    ```

-   **`[System.Environment]::SetEnvironmentVariable("VariableName", "Value", "Machine")` (永久设置)**
    永久设置系统或用户环境变量。`Machine` 表示系统变量，`User` 表示用户变量。
    ```powershell
    [System.Environment]::SetEnvironmentVariable("MY_SYSTEM_VAR", "SystemValue", "Machine")
    [System.Environment]::SetEnvironmentVariable("MY_USER_VAR", "UserValue", "User")
    ```

## Windows Defender 排除项

-   **`Add-MpPreference -ExclusionPath`**
    添加文件或目录到 Windows Defender 排除项。
    ```powershell
    Add-MpPreference -ExclusionPath "C:\MyProjectFolder"
    Add-MpPreference -ExclusionPath "C:\MyProjectFolder\my_app.exe"
    ```

-   **`Add-MpPreference -ExclusionExtension`**
    添加文件扩展名到 Windows Defender 排除项。
    ```powershell
    Add-MpPreference -ExclusionExtension ".tmp"
    ```

-   **`Remove-MpPreference -ExclusionPath`**
    从 Windows Defender 排除项中移除文件或目录。
    ```powershell
    Remove-MpPreference -ExclusionPath "C:\MyProjectFolder"
    ```

-   **`Get-MpPreference`**
    查看当前的 Windows Defender 偏好设置，包括排除项。
    ```powershell
    Get-MpPreference | Select-Object ExclusionPath, ExclusionExtension
    ```

## 对象操作和管道

-   **管道 (`|`)**
    将一个命令的输出作为另一个命令的输入。PowerShell 的核心特性。
    ```powershell
    Get-Service | Where-Object {$_.Status -eq "Running"} | Select-Object Name, Status
    ```

-   **`Where-Object` (?)**
    根据条件过滤对象。
    ```powershell
    Get-Process | Where-Object {$_.CPU -gt 100} # 查找 CPU 占用大于 100 的进程
    ```

-   **`Select-Object`**
    选择对象的特定属性。
    ```powershell
    Get-Service | Select-Object Name, Status, StartType
    ```

-   **`ForEach-Object` (%)**
    对管道中的每个对象执行操作。
    ```powershell
    Get-ChildItem -File | ForEach-Object { Write-Host "File: $($_.Name), Size: $($_.Length) bytes" }
    ```

-   **`Sort-Object`**
    根据一个或多个属性对对象进行排序。
    ```powershell
    Get-Process | Sort-Object -Property WorkingSet -Descending | Select-Object -First 5 ProcessName, WorkingSet # 按内存使用降序排列前5个进程
    ```

## 脚本和函数

-   **创建 PowerShell 脚本 (`.ps1`)**
    将一系列 PowerShell 命令保存到 `.ps1` 文件中，然后执行。
    ```powershell
    # MyScript.ps1
    Write-Host "Hello from PowerShell script!"
    Get-Date
    ```
    执行脚本：
    ```powershell
    .\MyScript.ps1 # 在当前目录执行
    ```
    注意：默认情况下，PowerShell 的执行策略可能阻止脚本运行。可以使用 `Set-ExecutionPolicy` 更改。
    ```powershell
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser # 允许运行本地脚本和签名远程脚本
    ```

-   **创建函数**
    在脚本或会话中定义可重用的代码块。
    ```powershell
    function Get-MyProcessInfo {
        param(
            [string]$ProcessName
        )
        Get-Process -Name $ProcessName | Select-Object ProcessName, Id, WorkingSet
    }
    Get-MyProcessInfo -ProcessName "chrome"
    ```

## 安全和权限

-   **`Get-Acl`**
    获取文件或目录的安全描述符 (ACL)。
    ```powershell
    Get-Acl -Path C:\Windows\System32\drivers\etc\hosts
    ```

-   **`Set-Acl`**
    设置文件或目录的安全描述符 (ACL)。
    ```powershell
    # 示例：授予用户对文件夹的完全控制权限
    $acl = Get-Acl -Path "C:\MyData"
    $accessRule = New-Object System.Security.AccessControl.FileSystemAccessRule("YourUser", "FullControl", "Allow")
    $acl.AddAccessRule($accessRule)
    Set-Acl -Path "C:\MyData" -AclObject $acl
    ```

## 杂项

-   **`Get-FileHash`**
    计算文件哈希值。
    ```powershell
    Get-FileHash -Path C:\Path\To\MyFile.zip -Algorithm SHA256
    ```

-   **`ConvertFrom-Json`, `ConvertTo-Json`**
    将 JSON 字符串转换为 PowerShell 对象，或将 PowerShell 对象转换为 JSON 字符串。
    ```powershell
    $jsonString = '{"Name":"Test", "Value":123}'
    $jsonObject = ConvertFrom-Json $jsonString
    $jsonObject.Name # 输出: Test

    $psObject = [PSCustomObject]@{ Property1 = "Value1"; Property2 = 456 }
    ConvertTo-Json $psObject # 输出 JSON 字符串
    ```

-   **`Import-Csv`, `Export-Csv`**
    导入和导出 CSV 文件。
    ```powershell
    Import-Csv -Path C:\Data\users.csv
    Get-Service | Export-Csv -Path C:\Data\services.csv -NoTypeInformation # 导出服务信息到 CSV
    ```

这些命令涵盖了 PowerShell 的广泛功能，从基本的文件操作到复杂的系统管理和自动化任务。