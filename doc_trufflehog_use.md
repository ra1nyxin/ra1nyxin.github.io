# TruffleHog 常用用法

这篇记录 TruffleHog 的常用命令。它适合在比赛或代码审计里查 Git 仓库、目录和提交历史里的密钥痕迹。

## 扫描 Git 仓库

扫描远端仓库。

```bash
trufflehog git https://github.com/example/repo.git
```

扫描本地仓库。

```bash
trufflehog git file://$PWD
```

只输出已验证结果。

```bash
trufflehog git https://github.com/example/repo.git --only-verified
```

输出 JSON。

```bash
trufflehog git https://github.com/example/repo.git --json
```

## 扫描文件系统

扫描当前目录。

```bash
trufflehog filesystem .
```

扫描指定目录。

```bash
trufflehog filesystem ./src --json
```

## 备注

TruffleHog 适合发现密钥线索，结果要确认是否仍有效。比赛里如果拿到源码或备份目录，先扫一遍密钥会很省时间。
