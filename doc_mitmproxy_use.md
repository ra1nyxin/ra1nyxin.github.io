# mitmproxy 常用用法

mitmproxy 适合交互式代理、流量观察和脚本化修改。Web、移动端、API 客户端排查里，经常用它看请求细节和复现异常。

## 交互和 Web 界面

```bash
mitmproxy -p 8080
```

```bash
mitmweb -p 8080
```

```bash
mitmproxy --listen-host 0.0.0.0 -p 8080
```

本机调试用默认监听就够，给手机或其他设备代理时要明确监听地址、防火墙和网络可达性。

## 保存和脚本

```bash
mitmdump -p 8080 -w flows.mitm
```

```bash
mitmdump -p 8080 -s addon.py
```

```bash
mitmdump -nr flows.mitm
```

`-w` 保存流量，`-s` 加载脚本，`-nr` 回放已有流量。需要写报告时，把关键请求单独导出会更清楚。

## 习惯

证书安装和代理设置要先确认好。HTTPS 失败时，先排查证书信任、代理端口和应用是否做了证书绑定，再看请求本身。
