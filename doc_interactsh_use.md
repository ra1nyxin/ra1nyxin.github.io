# interactsh 常用用法

interactsh 适合 OAST 回连测试。常用参数：`-server` 指定服务器，`-o` 记录输出，`-d` 指定域名配置。

```bash
interactsh-client
```

```bash
interactsh-client -o interactsh.txt
```

```bash
interactsh-client -server interact.sh
```

```bash
interactsh-client -dns
```

小记录：interactsh 适合验证 SSRF、命令执行、模板注入、DNS 回连等场景。URL 一旦被外部触发，日志要及时保存。
