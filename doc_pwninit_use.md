# pwninit 使用

pwninit 用于自动整理 pwn 题目的 libc、ld 和 patchelf 环境。拿到题目二进制、libc、动态链接器以后，它能快速生成本地可复现的运行环境。

## 初始化

```bash
pwninit
```

```bash
pwninit --bin ./vuln --libc ./libc.so.6 --ld ./ld-linux-x86-64.so.2
```

```bash
ldd ./vuln
```

先确认题目依赖和 libc 版本，再让 pwninit patch。生成后的二进制要实际跑一次，确认不会因为链接器路径或权限问题启动失败。

## 模板控制

```bash
pwninit --no-template
```

```bash
pwninit --template-path template.py
```

模板适合快速起 exploit 脚本，但别完全依赖默认内容。不同题目的交互、超时和远程地址都要自己改。

## 复核

跑完后检查保护、libc 偏移、one_gadget 条件和本地远程差异。pwninit 解决的是环境整理，漏洞分析和 exploit 稳定性还要单独确认。
