# LaZagne 常用用法

LaZagne 适合授权环境里检查本机保存的凭据痕迹。常用参数：`all` 全量，具体模块可单独跑，`-oN` 输出普通文本。

```bash
laZagne all
```

```bash
laZagne browsers
```

```bash
laZagne wifi
```

```bash
laZagne all -oN
```

LaZagne 的结果要注意来源和有效性。比赛里拿到结果后先做分类，浏览器、WiFi、系统凭据分开整理。
