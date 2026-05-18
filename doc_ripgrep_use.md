# ripgrep 常用用法

这篇记录 `rg` 的常用命令。它比传统 grep 更适合在代码仓库里查东西，默认会尊重 `.gitignore`，速度也很快。

## 基础搜索

在当前目录搜索关键词。

```bash
rg "TODO"
```

忽略大小写。

```bash
rg -i "token"
```

显示行号。

```bash
rg -n "password"
```

只显示匹配文件名。

```bash
rg -l "initThemeToggle"
```

## 指定文件类型

只搜 JavaScript。

```bash
rg -t js "localStorage"
```

只搜 Markdown。

```bash
rg -t md "Nmap"
```

排除某类文件。

```bash
rg -T min "APlayer"
```

按扩展名过滤。

```bash
rg -g "*.css" "about-particle-orb"
```

## 上下文

显示前后各两行。

```bash
rg -C 2 "function loadContent"
```

显示后面五行。

```bash
rg -A 5 "const docFallbackFiles"
```

显示前面五行。

```bash
rg -B 5 "initStarfield"
```

## 文件列表

列出仓库文件。

```bash
rg --files
```

列出 Markdown 文件。

```bash
rg --files -g "*.md"
```

列出排除 vendor 后的文件。

```bash
rg --files -g "!vendor/**"
```

## 复杂一点的搜索

搜索疑似密钥字段。

```bash
rg -i "api[_-]?key|secret|token|password"
```

搜索中文里的常用关键词。

```bash
rg "边界|长期|网络" *.md
```

搜索函数定义。

```bash
rg "function\\s+\\w+\\("
```

## 替换预览

只预览替换结果。

```bash
rg "oldName" -r "newName"
```

把匹配结果交给编辑器或脚本前，先只列文件。

```bash
rg -l "oldName"
```

## 小记录

查代码时我一般先用 `rg -n` 找入口，再用 `-C` 看上下文。文件很多的项目里，先用 `rg --files` 确认范围，再加 `-g` 收窄目录，能少看很多噪声。
