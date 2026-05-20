# Qiling 使用

Qiling 用于跨平台二进制仿真，适合固件、IoT 和恶意样本行为观察。

## 常用命令

```bash
python3 -c "from qiling import Qiling; print(Qiling)"
```

```bash
python3 run_qiling.py
```

```bash
python3 -m pip install qiling
```

```bash
python3 examples/hello_x8664_linux.py
```

```bash
python3 -c "import qiling; print(qiling.__version__)"
```

仿真环境要准备 rootfs，文件系统和系统调用模拟会直接影响结果。
