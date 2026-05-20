# firefox_decrypt 使用

firefox_decrypt 用于在授权取证或靶场环境中读取 Firefox 配置文件里的保存密码。它适合本机权限复核和用户侧风险验证。

## 查找配置目录

```bash
find ~/.mozilla/firefox -maxdepth 2 -name logins.json -print
```

```bash
ls -la ~/.mozilla/firefox/*.default*
```

```bash
dir %APPDATA%\\Mozilla\\Firefox\\Profiles
```

## 解密保存密码

```bash
python3 firefox_decrypt.py ~/.mozilla/firefox/xxxx.default-release
```

```bash
python3 firefox_decrypt.py --format csv ~/.mozilla/firefox/xxxx.default-release
```

```bash
python3 firefox_decrypt.py --format json ~/.mozilla/firefox/xxxx.default-release
```

## 结果保存

```bash
python3 firefox_decrypt.py --format json ~/.mozilla/firefox/xxxx.default-release > firefox_passwords.json
```

浏览器保存密码属于高敏感数据。做授权验证时只记录风险结论和必要证据，避免把完整明文扩散到报告之外。
