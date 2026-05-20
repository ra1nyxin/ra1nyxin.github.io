# patchelf 使用

patchelf 用于修改 ELF 的解释器、RPATH 和依赖，适合二进制复现环境。

## 常用命令

```bash
patchelf --print-interpreter ./app
```

```bash
patchelf --set-interpreter ./ld-linux-x86-64.so.2 ./app
```

```bash
patchelf --print-rpath ./app
```

```bash
patchelf --set-rpath ./lib ./app
```

```bash
patchelf --replace-needed libc.so.6 ./libc.so.6 ./app
```

修改前先复制原文件，记录 libc、ld 和 RPATH，避免把样本改乱。
