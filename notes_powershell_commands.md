# PowerShell 常用命令

PowerShell 是一个跨平台的命令行 shell 和脚本语言，主要用于自动化任务和配置管理。以下是一些常用的 PowerShell 命令及其参数示例：

## 文件和目录管理

-   **`Get-ChildItem` (ls, dir)**
    获取文件和目录。
    ```powershell
    Get-ChildItem # 列出当前目录内容
    Get-ChildItem -Path C:\Windows -Recurse # 递归列出指定目录内容
    Get-ChildItem -Path . -File # 只列出文件
    Get-ChildItem -Path . -Directory # 只列出目录
    ```

-   **`Set-Location` (cd)**
    更改当前工作目录。
    ```powershell
    Set-Location C:\Users\YourUser\Documents
    cd .. # 返回上一级目录
    ```

-   **`New-Item` (mkdir)**
    创建新的文件或目录。
    ```powershell
    New-Item -Path C:\Temp\NewFolder -ItemType Directory # 创建目录
    New-Item -Path C:\Temp\NewFile.txt -ItemType File # 创建文件
    ```

-   **`Copy-Item` (cp)**
    复制文件或目录。
    ```powershell
    Copy-Item -Path C:\Source\file.txt -Destination C:\Destination\ # 复制文件
    Copy-Item -Path C:\SourceFolder -Destination C:\DestinationFolder -Recurse # 复制目录及其内容
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
    Get-Content C:\Logs\app.log
    ```

-   **`Set-Content`**
    设置文件内容或创建文件并写入内容。
    ```powershell
    Set-Content -Path C:\Temp\NewFile.txt -Value "Hello, PowerShell!"
    ```

## 网络和下载

-   **`Invoke-WebRequest` (wget, curl)**
    从 Web 下载内容，可以用于下载文件。
    ```powershell
    Invoke-WebRequest -Uri "https://example.com/path/to/file.zip" -OutFile "C:\Downloads\file.zip"
    ```

-   **`Invoke-RestMethod`**
    发送 HTTP/HTTPS 请求并返回响应对象，常用于与 RESTful API 交互。
    ```powershell
    Invoke-RestMethod -Uri "https://api.github.com/users/ra1nyxin" # 获取GitHub用户信息
    ```

## 系统管理

-   **`Get-Service`**
    获取系统服务信息。
    ```powershell
    Get-Service # 列出所有服务
    Get-Service -Name "BITS" # 获取指定服务
    ```

-   **`Start-Service`, `Stop-Service`, `Restart-Service`**
    启动、停止、重启系统服务。
    ```powershell
    Stop-Service -Name "BITS"
    Start-Service -Name "BITS"
    ```

-   **`Get-Process` (ps)**
    获取正在运行的进程信息。
    ```powershell
    Get-Process # 列出所有进程
    Get-Process -Name "chrome" # 获取指定名称的进程
    ```

-   **`Stop-Process` (kill)**
    停止一个或多个正在运行的进程。
    ```powershell
    Stop-Process -Name "notepad" # 停止所有 Notepad 进程
    Stop-Process -Id 1234 # 停止指定 ID 的进程
    ```

## 防火墙管理

-   **`Get-NetFirewallRule`**
    获取防火墙规则。
    ```powershell
    Get-NetFirewallRule -DisplayName "File and Printer Sharing (Echo Request - ICMPv4-In)"
    ```

-   **`New-NetFirewallRule`**
    创建新的防火墙规则。
    ```powershell
    New-NetFirewallRule -DisplayName "Allow HTTP In" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 80
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
    ```

## 日志管理

-   **`Get-WinEvent`**
    获取 Windows 事件日志。
    ```powershell
    Get-WinEvent -LogName System -MaxEvents 10 # 获取系统日志中最新的10条事件
    Get-WinEvent -LogName Application | Where-Object {$_.LevelDisplayName -eq "Error"} # 获取应用程序错误日志
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

-   **`wuauclt.exe /updatenow` (已弃用，但有时仍可见)**
    在旧版 Windows 中用于强制检查更新。在新版 Windows 中，推荐使用 `Windows Update` 设置或 `PSWindowsUpdate` 模块。
    ```powershell
    # 不推荐在现代Windows中使用，仅作了解
    # wuauclt.exe /updatenow
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

这些命令涵盖了 PowerShell 的大部分常用功能，可以帮助你进行 Windows 系统的管理和自动化。