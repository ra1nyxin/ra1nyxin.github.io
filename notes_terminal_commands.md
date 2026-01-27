# 常用终端命令 (Win / Mac / Linux)

## 1. 系统与进程管理

### Windows (CMD/PowerShell)

列出所有运行中的进程

```cmd
tasklist

```

通过名称结束进程

```cmd
taskkill /f /im node.exe

```

通过 PID 结束进程

```cmd
taskkill /f /pid 1234

```

查看系统详细信息

```cmd
systeminfo

```

### Linux / MacOS

实时查看系统资源占用 (CPU/内存)

```bash
top

```

查看指定进程的详细信息

```bash
ps -ef | grep python

```

强行结束指定 PID 的进程

```bash
kill -9 1234

```

查看内存使用情况 (MB)

```bash
free -m

```

---

## 2. 网络诊断与排查

### 基础连通性

测试目标 IP 是否可达

```bash
ping 8.8.8.8

```

追踪数据包经过的路由节点 (Windows)

```cmd
tracert google.com

```

追踪数据包经过的路由节点 (Linux/Mac)

```bash
traceroute google.com

```

查询域名解析记录

```bash
nslookup github.com

```

### 端口与连接排查

查看所有监听中的端口 (Windows)

```cmd
netstat -ano | findstr LISTENING

```

查看所有监听中的端口 (Linux)

```bash
ss -tunlp

```

检查远程目标特定端口是否开放 (TCP)

```bash
nc -zv 192.168.1.1 80

```

---

## 3. 内网通信质量与性能测试

### 内网质量排查 (需安装 iperf3)

启动服务端 (接收端)

```bash
iperf3 -s

```

测试内网带宽、抖动和丢包率 (发送端)

```bash
iperf3 -c 192.168.x.x -u -b 100M

```

结合 Ping 和路由追踪的诊断工具 (Linux/Mac)

```bash
mtr -rw google.com

```

### 内网设备发现

扫描内网存活的主机 (需安装 nmap)

```bash
nmap -sn 192.168.1.0/24

```

查看本地 ARP 缓存表 (寻找已知内网 IP)

```bash
arp -a

```

---

## 4. 网络安全与加固

### 安全扫描

扫描目标主机开放的端口及服务版本

```bash
nmap -sV 192.168.1.1

```

检测目标是否存在简单的脚本漏洞

```bash
nmap --script vuln 192.168.1.1

```

### 文件指纹校验 (防篡改)

计算文件的 SHA256 哈希值 (Windows)

```powershell
Get-FileHash -Algorithm SHA256 .\file.zip

```

计算文件的 SHA256 哈希值 (Linux)

```bash
sha256sum file.zip

```

---

## 5. 程序开发常用工具

### 日志实时监控

监控日志文件的新增内容 (Linux/Mac)

```bash
tail -f access.log

```

在文件中搜索特定关键词并高亮显示

```bash
grep --color -rn "Error" ./logs

```

### 容器化开发 (Docker)

列出当前运行中的容器

```bash
docker ps

```

查看容器实时日志 (最后 100 行)

```bash
docker logs -f --tail 100 container_id

```

进入容器内部交互式终端

```bash
docker exec -it container_id /bin/bash

```

---

## 6. 缓存清理与系统维护

### 网络缓存清理

清理 Windows DNS 缓存

```cmd
ipconfig /flushdns

```

清理 MacOS DNS 缓存

```bash
sudo killall -HUP mDNSResponder

```

### 软件包管理器清理

清理 Ubuntu/Debian 无用的安装包缓存

```bash
sudo apt clean

```

清理 CentOS/RHEL 缓存

```bash
sudo yum clean all

```

清理 npm 全局缓存

```bash
npm cache clean --force

```

### 临时文件清理

删除 Linux 系统中 7 天前的临时文件

```bash
sudo find /tmp -type f -atime +7 -delete

```

查看当前目录下各文件夹的大小

```bash
du -sh * | sort -h

```

---

## 7. 文件操作与权限

### 快速搜索

在当前目录下查找所有后缀为 .log 的文件

```bash
find . -name "*.log"

```

快速创建一个 100MB 的测试大文件 (Linux)

```bash
dd if=/dev/zero of=testfile bs=1M count=100

```

### 权限管理

递归赋予目录及子目录 755 权限

```bash
chmod -R 755 ./project

```

递归修改目录所有者为当前用户

```bash
sudo chown -R $USER:$USER ./data

```

---

## 8. 压缩与归档 (全平台)

### 压缩目录

Windows (PowerShell) 将文件夹压缩为 Zip

```powershell
Compress-Archive -Path ./myfolder -DestinationPath ./archive.zip

```

Linux/Mac 将文件夹压缩为 Zip

```bash
zip -r archive.zip myfolder/

```

使用 tar 创建压缩包 (Linux/Mac)

```bash
tar -czvf archive.tar.gz myfolder/

```

### 解压缩

解压 Zip 文件 (Windows PowerShell)

```powershell
Expand-Archive -Path ./archive.zip -DestinationPath ./output

```

解压 Zip 文件 (Linux/Mac)

```bash
unzip archive.zip -d ./output

```

解压 tar.gz 文件 (Linux/Mac)

```bash
tar -xzvf archive.tar.gz

```

---

## 9. 7-Zip (7z) 专用命令

### 压缩与加密

创建 7z 压缩包

```bash
7z a archive.7z ./myfolder

```

创建带密码保护的压缩包

```bash
7z a archive.7z ./myfolder -p"YOUR_PASSWORD"

```

### 解压

解压 7z 文件到当前目录

```bash
7z x archive.7z

```

解压到指定文件夹

```bash
7z x archive.7z -o./target_dir

```

---

## 10. 文件与目录高阶操作

### 复制文件夹

Windows 强力复制 (包含子目录与权限)

```cmd
robocopy ./source ./destination /e

```

Linux/Mac 递归复制文件夹

```bash
cp -r ./source ./destination

```

### 重命名与移动

Windows 重命名文件或目录

```cmd
ren old_name new_name

```

Linux/Mac 重命名或移动

```bash
mv old_name new_name

```

---

## 11. 环境变量与代理设置

### Windows (CMD)

设置当前窗口的临时 HTTP 代理

```cmd
set http_proxy=http://127.0.0.1:7890

```

设置当前窗口的临时 HTTPS 代理

```cmd
set https_proxy=http://127.0.0.1:7890

```

### Linux / Mac / Git Bash

设置当前会话的代理

```bash
export http_proxy=http://127.0.0.1:7890

```

取消代理设置

```bash
unset http_proxy https_proxy

```

---

## 12. 公网 IP 与网络信息查询

查询当前公网 IP (极简版)

```bash
curl ifconfig.me

```

查询详细地理位置与 ISP 信息

```bash
curl ipinfo.io

```

查询详细网络出口信息 (JSON 格式)

```bash
curl ip-api.com/json

```

---

## 13. 目录切换 (cd) 高阶用法

返回上一次所在的目录 (Linux/Mac)

```bash
cd -

```

返回上两级目录

```bash
cd ../..

```

直接跳转到当前用户的家目录

```bash
cd ~

```

---

## 14. 进程查杀 (单行增强版)

### Windows

根据端口号查找占用进程的 PID

```cmd
netstat -ano | findstr :8080

```

根据 PID 强制结束进程

```cmd
taskkill /f /pid 1234

```

### Linux / Mac

查看占用 8080 端口的进程

```bash
lsof -i :8080

```

一键杀掉所有名为 "node" 的进程

```bash
pkill -9 node

```

---

## 15. Docker 常用快速开发命令

### 容器管理

查看所有容器 (包括已停止的)

```bash
docker ps -a

```

一键停止所有运行中的容器

```bash
docker stop $(docker ps -q)

```

一键删除所有已停止的容器

```bash
docker container prune -f

```

### 镜像与清理

查看本地镜像

```bash
docker images

```

清理无用的镜像、网络和数据卷 (释放空间)

```bash
docker system prune -a --volumes

```

---

## 16. 快速开发常用命令

### 前端开发

清理 npm 缓存并强制重新安装

```bash
npm cache clean --force && npm install

```

快速启动本地静态服务器 (需安装 serve)

```bash
serve -s build

```

### 文本搜索

在当前目录所有文件中搜索字符串 "API_KEY"

```bash
grep -rn "API_KEY" .

```

统计当前目录下的代码行数 (需安装 cloc)

```bash
cloc .

```

---

## 17. Rust (Cargo) 开发

### 项目初始化与运行

创建一个新的二进制项目

```bash
cargo new my_project

```

编译并运行当前项目

```bash
cargo run

```

快速检查代码是否有编译错误（不生成可执行文件）

```bash
cargo check

```

### 编译与优化

构建 Release 版本的优化程序

```bash
cargo build --release

```

使用 MUSL 目标进行静态编译（生成无依赖二进制，需安装 target）

```bash
cargo build --release --target x86_64-unknown-linux-musl

```

更新项目依赖包

```bash
cargo update

```

---

## 18. .NET (dotnet) 开发

### 创建项目

创建控制台程序

```bash
dotnet new console -n MyConsoleApp

```

创建 Web API 项目

```bash
dotnet new webapi -n MyApi

```

创建 ASP.NET Core MVC 项目

```bash
dotnet new mvc -n MyMvcApp

```

### 编译、运行与发布

编译当前项目

```bash
dotnet build

```

运行当前项目

```bash
dotnet run

```

发布为单文件、自包含的 Windows 执行程序

```bash
dotnet publish -c Release -r win-x64 --self-contained true /p:PublishSingleFile=true

```

使用 AOT (Ahead-of-Time) 模式静态编译为原生二进制文件

```bash
dotnet publish -r linux-x64 -c Release /p:PublishAot=true

```

---

## 19. Go (Golang) 开发

### 模块管理与运行

初始化一个新的 Go 模块

```bash
go mod init example.com/myproject

```

直接运行 Go 程序

```bash
go run main.go

```

下载所有依赖包

```bash
go mod download

```

### 编译与静态化

编译为当前系统的可执行文件

```bash
go build -o myapp

```

跨平台编译：在 Linux 下编译 Windows 执行程序

```bash
GOOS=windows GOARCH=amd64 go build -o myapp.exe

```

完全静态链接编译（不依赖 C 库，适合 Docker 基础镜像）

```bash
CGO_ENABLED=0 go build -a -ldflags '-extldflags "-static"' -o myapp

```

---

## 20. C / C++ (GCC & G++)

### 基本编译

使用 GCC 编译 C 程序

```bash
gcc main.c -o myapp

```

使用 G++ 编译 C++ 程序

```bash
g++ main.cpp -o myapp

```

开启 O3 最高级别优化编译

```bash
g++ -O3 main.cpp -o myapp

```

### 静态链接与调试

完全静态链接编译（将所有库打入二进制文件）

```bash
g++ -static main.cpp -o myapp_static

```

生成带调试信息的程序（用于 gdb 调试）

```bash
g++ -g main.cpp -o myapp_debug

```

指定头文件搜索路径和库路径编译

```bash
g++ main.cpp -I./include -L./lib -lmysqlclient -o myapp

```

---

## 21. Node.js (NPM & Yarn)

### 项目管理

快速初始化项目配置文件

```bash
npm init -y

```

安装所有依赖（根据 package.json）

```bash
npm install

```

安装特定包并保存到开发依赖

```bash
npm install axios --save-dev

```

### 构建与脚本

运行自定义构建脚本

```bash
npm run build

```

检查项目依赖的安全漏洞并尝试修复

```bash
npm audit fix

```

列出全局安装的所有包

```bash
npm list -g --depth=0

```

---

## 22. Java (Maven & Gradle)

### Maven 构建

清理并打包项目（生成 JAR 文件）

```bash
mvn clean package

```

跳过测试直接打包

```bash
mvn clean package -DskipTests

```

将项目安装到本地仓库

```bash
mvn clean install

```

### Gradle 与原生编译

使用 Gradle 进行打包

```bash
./gradlew build

```

运行生成的 JAR 文件

```bash
java -jar target/myapp.jar

```

使用 GraalVM 将 Java 程序编译为原生二进制 (Native Image)

```bash
native-image -jar myapp.jar

```

---

## 23. 数据库常用命令 (SQL & NoSQL)

### MySQL / MariaDB

命令行登录数据库

```bash
mysql -u root -p

```

导出数据库到 SQL 文件（备份）

```bash
mysqldump -u root -p db_name > backup.sql

```

从 SQL 文件导入数据到数据库

```bash
mysql -u root -p db_name < backup.sql

```

### PostgreSQL

登录指定数据库

```bash
psql -U username -d dbname

```

列出所有数据库

```bash
\l

```

### Redis

进入 Redis 交互式命令行

```bash
redis-cli

```

实时监控 Redis 执行的命令

```bash
redis-cli monitor

```

清空当前数据库的所有 Key

```bash
redis-cli flushdb

```

---

## 24. 开发者综合工具

### Python 生产力

创建虚拟环境

```bash
python -m venv venv

```

导出当前环境的所有依赖包列表

```bash
pip freeze > requirements.txt

```

一键安装项目所有依赖

```bash
pip install -r requirements.txt

```

### Git 高阶操作 (单行补充)

强制拉取远程覆盖本地分支

```bash
git fetch --all && git reset --hard origin/main

```

查看精简的提交历史日志

```bash
git log --oneline --graph --all

```

清理未跟踪的文件和目录

```bash
git clean -fd

```

### 其他快捷工具

本地临时生成一个密码强度高的随机字符串

```bash
openssl rand -base64 32

```

将本地文件通过 Python 快速共享为 HTTP 服务

```bash
python -m http.server 8000

```
