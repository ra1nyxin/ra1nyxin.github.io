# Metasploit Framework 部署手册 (Debian 系统)

## 1. 系统准备

在安装之前，必须确保系统内核及基础工具链完整。

### 1.1 更新系统与工具链

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl wget gpg coreutils build-essential \
git libreadline-dev libssl-dev libpq-dev zlib1g-dev \
libsqlite3-dev libxml2-dev libxslt1-dev

```

### 1.2 配置 PostgreSQL 数据库

MSF 使用 PostgreSQL 存储会话、主机数据及扫描结果。

```bash
sudo apt install -y postgresql postgresql-contrib
# 确保数据库服务已启动并设置为开机自启
sudo systemctl start postgresql
sudo systemctl enable postgresql

```

---

## 2. 安装 Metasploit Framework

目前有两种主流安装方式，推荐使用 **官方 Shell 脚本**，因为它能自动处理复杂的 Ruby 依赖环境（Omnibus 封装）。

### 2.1 官方一句话安装 (推荐)

```bash
curl https://raw.githubusercontent.com/rapid7/metasploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb > msfinstall && \
chmod 755 msfinstall && \
./msfinstall

```

### 2.2 验证安装

```bash
msfconsole -v

```

---

## 3. 初始化 msfdb 与后端联动

这是最关键的一步，许多连接超时或模块报错源于数据库未正确关联。

### 3.1 初始配置

执行以下命令，MSF 会自动在 PostgreSQL 中创建用户 `msf` 并生成配置文件：

```bash
msfdb init

```

**[PROCESS_LOG]**:

1. 脚本检测本地 PostgreSQL 状态。
2. 创建名为 `msf` 的数据库角色。
3. 生成 `~/.msf4/database.yml`。

### 3.2 验证数据库连接

进入控制台检查：

```bash
msfconsole
# 进入后输入
db_status

```

*预期输出: `[*] Connected to msf. Connection type: postgresql.*`

---

## 4. 报错与解决方案库

### 4.1 报错：`Failed to connect to the database`

**现象**: `db_status` 显示已断开，或 `msfdb init` 权限拒绝。
**解决**:

1. 检查 PostgreSQL 监听状态：
`ss -ant | grep 5432`
2. 强制重置数据库配置：
```bash
rm ~/.msf4/database.yml
sudo -u postgres dropuser msf
sudo -u postgres dropdb msf
msfdb init

```



### 4.2 报错：`Ruby Gem Dependency Error`

**现象**: 启动 `msfconsole` 时提示特定版本的 gem（如 `nokogiri`）未安装。
**解决**: MSF 封装版自带独立 Ruby 环境。切勿使用系统 `gem install`。

```bash
# 更新 MSF 核心及其依赖环境
msfupdate

```

### 4.3 报错：`Bundler: Failed to load... (Access Denied)`

**现象**: 在某些加固后的 Debian 系统上，`/tmp` 目录被挂载为 `noexec`。
**解决**:

```bash
export TMPDIR=/home/$(whoami)/.tmp
mkdir -p $TMPDIR
msfconsole

```

### 4.4 报错：`Segmentation Fault` (内存溢出或冲突)

**现象**: 启动时直接崩溃。
**解决**: 增加系统文件句柄限制。

```bash
ulimit -n 65535
# 永久生效需修改 /etc/security/limits.conf

```

---

## 5. MSF 与 FRP 联动优化建议

为了确保你在 `frp` 环境下的稳定性，建议修改 `msfconsole` 的全局网络参数。

1. **防止会话因延迟断开**:
在 `msfconsole` 中执行：
```bash
setg CommTimeout 120
setg SessionCommunicationTimeout 120
setg SessionExpirationTimeout 600

```


2. **数据库自动备份**:
建议定期导出数据库，防止 frp 所在 VPS 重装：
```bash
db_export -f xml /root/SSoftwareFiles/msf_backup.xml

```
