# mitmproxy 常用用法

mitmproxy 适合交互式代理、流量观察和脚本化修改。常用参数：`-p` 端口，`-w` 保存流量，`-s` 加载脚本。

```bash
mitmproxy -p 8080
```

```bash
mitmweb -p 8080
```

```bash
mitmdump -p 8080 -w flows.mitm
```

```bash
mitmdump -p 8080 -s addon.py
```

mitmproxy 适合需要脚本化观察请求的场景。证书安装和代理设置要先确认好。
