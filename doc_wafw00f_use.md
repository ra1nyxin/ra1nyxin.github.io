# wafw00f 常用用法

wafw00f 适合识别 Web 应用防火墙。常用参数：目标 URL，`-a` 尝试全部检测，`-o` 输出文件。

```bash
wafw00f https://example.com
```

```bash
wafw00f -a https://example.com
```

```bash
wafw00f -i targets.txt
```

```bash
wafw00f https://example.com -o waf.txt
```

小记录：WAF 识别结果是后续测试节奏参考。命中 WAF 后，先控制请求频率和 payload 噪声。
