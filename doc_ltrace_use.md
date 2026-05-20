# ltrace 使用

ltrace 用于跟踪动态库函数调用，适合观察程序输入处理和库函数行为。

## 常用命令

```bash
ltrace ./app
```

```bash
ltrace -f ./app
```

```bash
ltrace -o ltrace.log ./app
```

```bash
ltrace -e malloc,free ./app
```

```bash
ltrace -s 200 ./app
```

小记录：适合快速看 strcmp、system、fopen 等调用，静态链接程序效果会差很多。
