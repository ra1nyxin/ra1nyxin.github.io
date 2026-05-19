# Mona 和 Immunity Debugger 常用命令

这篇记录 OSCP 经典栈溢出练习里常用的 Mona 命令。命令在 Immunity Debugger 的命令栏里执行。

## 基础配置

设置工作目录。

```text
!mona config -set workingfolder c:\mona\%p
```

查看模块。

```text
!mona modules
```

生成 cyclic pattern。

```text
!mona pattern_create 3000
```

查找偏移。

```text
!mona pattern_offset EIP_VALUE
```

## 坏字符

生成 bytearray。

```text
!mona bytearray -b "\x00"
```

比较坏字符。

```text
!mona compare -f c:\mona\app\bytearray.bin -a ESP_ADDRESS
```

查找跳转地址。

```text
!mona jmp -r esp -cpb "\x00\x0a\x0d"
```

查看 SEH。

```text
!mona seh -cpb "\x00\x0a\x0d"
```

## 小记录

Mona 的重点是把偏移、坏字符和跳转地址记录清楚。每一步都保存输入和截图，后面回看时能很快定位哪里变了。
