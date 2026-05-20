# git worktree 常用用法

这篇记录 git worktree 的常用命令。它适合同一个仓库同时处理多个分支，避免频繁 stash，也适合临时开一个干净目录做验证。

## 查看 worktree

列出当前 worktree。

```bash
git worktree list
```

显示更详细信息。

```bash
git worktree list --porcelain
```

## 新建 worktree

基于已有分支创建目录。

```bash
git worktree add ../repo-feature feature-branch
```

创建新分支和目录。

```bash
git worktree add -b feature-branch ../repo-feature main
```

基于当前 HEAD 创建临时目录。

```bash
git worktree add ../repo-test HEAD
```

## 删除 worktree

移除 worktree。

```bash
git worktree remove ../repo-feature
```

强制移除。

```bash
git worktree remove --force ../repo-feature
```

清理已经不存在的 worktree 记录。

```bash
git worktree prune
```

## 常见检查

查看每个 worktree 所在分支。

```bash
git worktree list
```

查看当前目录状态。

```bash
git status --short
```

确认当前分支。

```bash
git branch --show-current
```

## 适合的场景

临时查看另一个分支。

```bash
git worktree add ../repo-main main
```

同时修两个互不相关的问题。

```bash
git worktree add -b fix-docs ../repo-fix-docs main
```

开一个目录跑破坏性实验。

```bash
git worktree add -b experiment ../repo-experiment HEAD
```

## 备注

worktree 的好处是每个目录都有自己的工作区，但共用同一个仓库对象库。切分任务时很舒服，不过要记得一个分支通常只能被一个 worktree 检出。
