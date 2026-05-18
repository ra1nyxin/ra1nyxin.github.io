# Python venv 和 pip 常用用法

这篇记录 Python 虚拟环境和 pip 的常用命令。临时跑脚本、维护小工具、隔离依赖和复现环境时会经常用到。

## 创建虚拟环境

创建 venv。

```bash
python -m venv .venv
```

Windows PowerShell 激活。

```powershell
.\.venv\Scripts\Activate.ps1
```

Linux 或 macOS 激活。

```bash
source .venv/bin/activate
```

退出虚拟环境。

```bash
deactivate
```

## pip 基础

升级 pip。

```bash
python -m pip install -U pip
```

安装包。

```bash
python -m pip install requests
```

安装指定版本。

```bash
python -m pip install "requests==2.32.3"
```

卸载包。

```bash
python -m pip uninstall requests
```

## requirements

导出依赖。

```bash
python -m pip freeze > requirements.txt
```

安装依赖。

```bash
python -m pip install -r requirements.txt
```

查看已安装包。

```bash
python -m pip list
```

查看包详情。

```bash
python -m pip show requests
```

## 排查环境

查看 Python 路径。

```bash
python -c "import sys; print(sys.executable)"
```

查看模块路径。

```bash
python -c "import requests; print(requests.__file__)"
```

检查依赖冲突。

```bash
python -m pip check
```

查看 pip 配置。

```bash
python -m pip config list
```

## 常用小习惯

用当前解释器执行 pip，避免 pip 和 python 指到不同环境。

```bash
python -m pip install rich
```

不使用缓存安装。

```bash
python -m pip install --no-cache-dir requests
```

安装本地项目为可编辑模式。

```bash
python -m pip install -e .
```

## 小记录

Python 环境问题大多和解释器路径有关。先确认 `sys.executable`，再看包是否装在同一个环境里，排查速度会快很多。项目根目录放 `.venv` 比使用全局环境清楚。
