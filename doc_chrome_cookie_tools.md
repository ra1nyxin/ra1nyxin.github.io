# Chrome Cookie 与本地凭据检查

Chrome 本地数据检查常用于授权取证、终端安全复核和靶场后渗透。重点是 profile 路径、Cookies、Login Data 和系统密钥保护状态。

## 路径定位

```bash
ls -la ~/.config/google-chrome/Default
```

```bash
ls -la ~/.config/chromium/Default
```

```bash
dir "%LOCALAPPDATA%\\Google\\Chrome\\User Data\\Default"
```

## 文件备份

```bash
cp ~/.config/google-chrome/Default/Cookies ./Cookies.copy
```

```bash
cp ~/.config/google-chrome/Default/"Login Data" ./LoginData.copy
```

```bash
sqlite3 Cookies.copy ".tables"
```

## 数据查看

```bash
sqlite3 Cookies.copy "select host_key,name,expires_utc from cookies limit 20;"
```

```bash
sqlite3 LoginData.copy "select origin_url,username_value from logins limit 20;"
```

Chrome 的敏感数据通常受系统密钥链保护。评估时重点写清能否读取、当前权限级别和数据类型，避免无意义地扩散明文。
