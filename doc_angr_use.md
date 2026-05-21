# angr 使用

angr 适合把二进制里的分支摊开看。题目里如果有输入校验、状态机、字符串比较或者多层跳转，单纯跟调试器磨会比较慢，符号执行会更直接一些。

## 入口

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

先把项目对象建起来，再看 entry、main object 和有没有自动加载库。很多分析卡住的时候，问题并不在路径求解本身，而在入口状态和 hook 没设对。

## 实际分析

系统调用多、外部库复杂的时候，hook 往往比算约束更花时间。输入点定好以后，通常先让符号变量穿过几层关键判断，再回头看哪个分支才是真正的成功路径。

## 复盘

做完一次分析，最好把触发条件、避开的分支、最终到达的地址和中间用掉的 hook 单独记下来。angr 的状态树看着很完整，但隔几天不记，就很难迅速复原。

## 习惯

分析脚本别写得太散，项目对象、符号变量、约束和终止条件尽量分开摆。后面换目标时，这种结构最省时间。
