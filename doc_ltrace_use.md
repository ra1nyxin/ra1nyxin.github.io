# ltrace 使用

ltrace 用于跟踪动态库函数调用，适合观察程序输入处理、字符串比较、文件访问和外部命令调用。做逆向或调试小程序时，它能很快给出运行时线索。

## 基础跟踪

```bash
ltrace ./app
```

```bash
ltrace -f ./app
```

```bash
ltrace -o ltrace.log ./app
```

`-f` 会跟踪子进程，`-o` 适合留日志。程序会 fork 或拉起 helper 时，别漏掉子进程。

## 过滤和字符串

```bash
ltrace -e malloc,free ./app
```

```bash
ltrace -e strcmp,strncmp,memcmp ./app
```

```bash
ltrace -s 200 ./app
```

看输入校验时，`strcmp`、`memcmp`、`strstr` 这类函数很有用。`-s` 调大后能看到更完整的字符串参数。

## 注意点

静态链接程序、直接系统调用、反调试逻辑都会让 ltrace 效果变差。结果最好和 `strace`、调试器、静态反汇编一起对照。
