# Windows / MacOS / Linux 常用终端命令

## Windows 常用命令

```cmd
dir
```
列出当前目录的文件和子目录

```cmd
cd <directory>
```
切换到指定目录

```cmd
mkdir <directory_name>
```
创建新目录

```cmd
del <file_name>
```
删除文件

```cmd
rmdir /s /q <directory_name>
```
删除目录及其所有内容（`/s` 删除所有子目录和文件，`/q` 安静模式，不提示确认）

```cmd
xcopy <source> <destination> /E /I /H /K /Y
```
复制目录及其内容
- `/E`: 复制所有子目录，包括空目录
- `/I`: 如果目标不存在且复制多个文件，则假定目标是目录
- `/H`: 复制隐藏文件和系统文件
- `/K`: 复制属性通常 `xcopy` 会重置只读属性
- `/Y`: 禁止提示确认覆盖现有文件

```cmd
move <source> <destination>
```
移动文件或目录

### 文件和目录权限管理 (Windows)

```cmd
icacls <file_or_directory> /grant <user_or_group>:<permissions>
```
授予用户或组对文件或目录的权限例如：
`icacls myfile.txt /grant Everyone:F` (授予所有人完全控制)
`icacls myfolder /grant Users:(OI)(CI)F` (授予Users组对文件夹及其子项完全控制)

```cmd
icacls <file_or_directory> /remove <user_or_group>
```
移除用户或组的权限

### 系统修复命令 (Windows)

```cmd
sfc /scannow
```
扫描所有受保护的系统文件，并用正确的 Microsoft 版本替换不正确的文件

```cmd
diskpart
```
启动 DiskPart 命令行实用工具，用于管理磁盘、分区或卷

```cmd
chkdsk /f /r
```
检查磁盘错误并尝试修复`/f` 修复磁盘上的错误，`/r` 查找坏扇区并恢复可读信息

## MacOS / Linux 常用命令

```bash
ls
```
列出当前目录的文件和子目录

```bash
cd <directory>
```
切换到指定目录

```bash
mkdir <directory_name>
```
创建新目录

```bash
rm <file_name>
```
删除文件

```bash
rm -rf <directory_name>
```
递归删除目录及其内容（请谨慎使用）

```bash
pwd
```
显示当前工作目录的路径

```bash
cat <file_name>
```
显示文件内容

```bash
cp <source> <destination>
```
复制文件或目录

```bash
mv <source> <destination>
```
移动或重命名文件或目录

```bash
sudo <command>
```
以超级用户权限执行命令

### SSH 相关命令

#### 多条参数连接 SSH 服务器示例

```bash
ssh -p 2222 -l username -i ~/.ssh/id_rsa -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null your_vps_ip
```
- `-p 2222`: 指定端口号（如果不是默认的22）
- `-l username`: 指定登录用户名
- `-i ~/.ssh/id_rsa`: 指定私钥文件路径
- `-o StrictHostKeyChecking=no`: 首次连接时不提示确认主机密钥（不推荐用于生产环境）
- `-o UserKnownHostsFile=/dev/null`: 不记录主机密钥到 `known_hosts` 文件（不推荐用于生产环境）

#### 在 VPS 中安装和部署 SSH 服务端 (Linux)

**1. 安装 OpenSSH Server (Debian/Ubuntu)**

```bash
sudo apt update
sudo apt install openssh-server
```

**2. 启动 SSH 服务并设置开机自启**

```bash
sudo systemctl start ssh
sudo systemctl enable ssh
```

**3. 检查 SSH 服务状态**

```bash
sudo systemctl status ssh
```

**4. 配置 SSH (可选，但推荐)**
编辑 SSH 配置文件 `/etc/ssh/sshd_config`：

```bash
sudo nano /etc/ssh/sshd_config
```

常见的配置项：
- `Port 22`: 更改默认端口以增加安全性
- `PermitRootLogin no`: 禁止 root 用户直接登录
- `PasswordAuthentication no`: 禁用密码认证，只允许密钥认证（更安全）

修改后重启 SSH 服务：

```bash
sudo systemctl restart ssh
```

#### 文件和目录权限管理 (Linux)

```bash
chmod 755 <file_or_directory>
```
更改文件或目录的权限例如 `755` 表示所有者读写执行，组和其他用户只读执行

```bash
chown user:group <file_or_directory>
```
更改文件或目录的所有者和所属组