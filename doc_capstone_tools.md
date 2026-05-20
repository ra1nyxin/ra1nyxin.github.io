# Capstone 使用

Capstone 用于反汇编，适合写脚本批量解析 shellcode 或二进制片段。

## 常用命令

```bash
python3 -c "from capstone import *; print(Cs(CS_ARCH_X86, CS_MODE_64))"
```

```bash
python3 disasm.py
```

```bash
python3 -m pip install capstone
```

```bash
rasm2 -d 4889e5
```

```bash
xxd -p shellcode.bin | tr -d "\n"
```

它适合做自动化反汇编，复杂函数分析仍然要用 Ghidra、IDA 或 radare2。
