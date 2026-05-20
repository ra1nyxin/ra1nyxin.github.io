# angr 使用

angr 用于符号执行和路径求解，适合逆向题、输入约束和复杂分支分析。

## 常用命令

```bash
python3 -c "import angr; p=angr.Project(\"./crackme\", auto_load_libs=False); print(p)"
```

```bash
python3 solve.py
```

```bash
python3 -c "import claripy; print(claripy.BVS(\"x\",32))"
```

```bash
python3 -c "import angr; p=angr.Project(\"./crackme\"); print(p.loader.main_object.entry)"
```

```bash
python3 -m pip install angr
```

小记录：angr 适合处理分支和约束，外部库和系统调用复杂时要写 hook。
