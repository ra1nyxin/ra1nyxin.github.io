# Frida 和 Objection 常用用法

这篇记录 Frida、Objection 的常用命令。它们适合移动应用动态分析和运行时观察。

## Frida

查看 USB 设备进程。

```bash
frida-ps -Uai
```

附加到进程。

```bash
frida -U -n com.example.app
```

加载脚本。

```bash
frida -U -n com.example.app -l hook.js
```

spawn 模式启动。

```bash
frida -U -f com.example.app -l hook.js --no-pause
```

## Objection

进入应用。

```bash
objection -g com.example.app explore
```

列活动。

```bash
android hooking list activities
```

关闭 SSL pinning。

```bash
android sslpinning disable
```

查看存储。

```bash
android file ls /
```

## 小记录

移动动态分析前先确认设备、包名、进程和调试环境。Frida 适合写脚本，Objection 适合快速交互式探索。
