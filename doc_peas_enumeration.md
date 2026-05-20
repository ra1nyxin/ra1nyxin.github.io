# PEAS 枚举脚本常用用法

这篇记录 linPEAS、winPEAS 的常用方式。它们适合在授权实验环境里做本地枚举，帮助整理系统、权限、服务、配置、凭据痕迹和提权线索。

## linPEAS 获取和运行

下载 linpeas。

```bash
curl -L https://github.com/peass-ng/PEASS-ng/releases/latest/download/linpeas.sh -o linpeas.sh
```

赋予执行权限。

```bash
chmod +x linpeas.sh
```

运行 linpeas。

```bash
./linpeas.sh
```

保存输出。

```bash
./linpeas.sh | tee linpeas.txt
```

无颜色输出。

```bash
./linpeas.sh -N | tee linpeas.txt
```

## winPEAS 获取和运行

下载 winPEAS x64。

```powershell
iwr -UseBasicParsing -OutFile winPEASx64.exe https://github.com/peass-ng/PEASS-ng/releases/latest/download/winPEASx64.exe
```

运行 winPEAS。

```powershell
.\winPEASx64.exe
```

保存输出。

```powershell
.\winPEASx64.exe | Tee-Object winpeas.txt
```

运行安静模式。

```powershell
.\winPEASx64.exe quiet
```

## 常见搭配

Linux 查看当前用户。

```bash
id
```

Linux 查看 sudo 权限。

```bash
sudo -l
```

Windows 查看当前用户。

```cmd
whoami /all
```

Windows 查看补丁。

```cmd
systeminfo
```

## 备注

PEAS 输出很多，先保存完整结果，再按用户权限、可写目录、服务配置、定时任务、凭据文件和网络连接几类整理。脚本结果是线索清单，具体风险还要手动确认。
