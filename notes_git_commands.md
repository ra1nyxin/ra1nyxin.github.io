# Git常用命令教程

## 配置用户信息

```bash
git config --global user.name "Your Name"
```
设置全局用户名。

```bash
git config --global user.email "your_email@example.com"
```
设置全局用户邮箱。

## 初始化仓库

```bash
git init
```
在当前目录初始化一个新的Git仓库。

## 添加文件到暂存区

```bash
git add <file>
```
添加指定文件到暂存区。

```bash
git add .
```
添加所有修改过的文件到暂存区。

## 提交更改

```bash
git commit -m "Your commit message"
```
提交暂存区的文件到本地仓库，并附带提交信息。

## 查看状态

```bash
git status
```
查看工作区和暂存区的状态。

## 查看提交历史

```bash
git log
```
查看提交历史。

```bash
git log --oneline
```
以简洁的方式查看提交历史。

## 远程仓库操作

```bash
git remote add origin <remote_repository_url>
```
添加远程仓库。

```bash
git push -u origin <branch_name>
```
将本地分支推送到远程仓库（首次推送使用-u）。

```bash
git pull origin <branch_name>
```
从远程仓库拉取最新代码。

## 分支操作

```bash
git branch
```
列出所有本地分支。

```bash
git branch <new_branch_name>
```
创建新分支。

```bash
git checkout <branch_name>
```
切换到指定分支。

```bash
git merge <branch_to_merge>
```
合并指定分支到当前分支。

## 代理设置

```bash
git config --global http.proxy socks5://127.0.0.1:7890
```

```bash
git config --global https.proxy socks5://127.0.0.1:7890
```
设置Git的HTTP和HTTPS代理。

## 标签操作

```bash
git tag v1.0.2
```
创建轻量标签。

```bash
git push --tags
```
推送所有标签到远程仓库。

## 同步上游仓库

```bash
git remote -v
```
检查远程仓库列表。

```bash
git remote add upstream https://github.com/xionglongztz/DeepSeekPlugin
```
添加上游远程仓库。

```
origin  https://github.com/ra1nyxin/DeepSeekPlugin_bak-8-13 (fetch)
origin  https://github.com/ra1nyxin/DeepSeekPlugin_bak-8-13 (push)
upstream        https://github.com/xionglongztz/DeepSeekPlugin (fetch)
upstream        https://github.com/xionglongztz/DeepSeekPlugin (push)
```
示例输出，显示已添加的远程仓库。

```bash
git checkout main # 或master
```
切换到目标分支。

```bash
git fetch upstream
```
获取上游仓库的最新更改。

```bash
git merge upstream/main # 或master
```
合并指定分支到当前分支。