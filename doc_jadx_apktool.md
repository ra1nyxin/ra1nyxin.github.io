# jadx 和 apktool 常用用法

这篇记录 jadx、apktool 的常用命令。它们适合移动安全题、APK 分析和配置提取。

## jadx

反编译 APK 到目录。

```bash
jadx -d jadx-out app.apk
```

打开 GUI。

```bash
jadx-gui app.apk
```

只反编译资源和源码。

```bash
jadx --show-bad-code -d jadx-out app.apk
```

搜索关键字。

```bash
rg -i "token|secret|api" jadx-out
```

## apktool

解包 APK。

```bash
apktool d app.apk -o apk-out
```

重新打包。

```bash
apktool b apk-out -o rebuilt.apk
```

查看清单。

```bash
cat apk-out/AndroidManifest.xml
```

## 小记录

APK 分析先看 Manifest、网络配置、硬编码字符串和接口地址。jadx 看 Java/Kotlin 逻辑，apktool 看资源和 smali 更方便。
