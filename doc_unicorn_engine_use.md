# Unicorn Engine 使用

Unicorn 是 CPU 仿真引擎，适合 shellcode、解密逻辑和指令级实验。

## 常用命令

```bash
python3 -c "import unicorn; print(unicorn.__version__)"
```

```bash
python3 emulate.py
```

```bash
python3 -m pip install unicorn
```

```bash
python3 -c "from unicorn import *; print(UC_ARCH_X86)"
```

```bash
python3 trace_shellcode.py
```

小记录：适合小段代码仿真，遇到系统调用和外部依赖要自己模拟。
