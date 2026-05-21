# anew 常用用法

anew 是个很顺手的去重追加器。管道里一接，重复结果就不会一直刷屏，适合跑多轮枚举，也适合把多个来源的结果汇总到一个文件里。

## 追加

```bash
cat urls.txt | anew all-urls.txt
```

```bash
cat subdomains.txt | anew all-subs.txt
```

```bash
cat urls.txt | sort | anew all-urls.txt
```

排序后再追加，结果会更稳定，尤其是后面还要拿同一个文件继续喂给别的工具时。

## 串联

```bash
cat urls.txt | anew all-urls.txt | httpx -silent
```

这个写法在资产收集里很实用。前面负责统一结果，后面负责验证可用性，整个流就不会被重复项弄得太乱。

## 结果池

anew 很适合长期维护一个结果池。当天跑出来的新资产可以先进去，过一轮再统一清洗，比每次都手动合并省事得多。

## 习惯

文件名尽量稳定，别今天一个名字、明天又换一个。结果池一旦养起来，命名混乱会比重复项本身更烦。
