# aclpwn 使用

aclpwn 用于基于 BloodHound 路径执行 ACL 权限链验证，适合实验和授权测试。

## 常用命令

```bash
aclpwn -f path.json -d domain.local -u user -p pass
```

```bash
aclpwn -f path.json -d domain.local -u user -p pass --dry
```

```bash
aclpwn -f path.json -d domain.local -u user -p pass --restore restore.json
```

```bash
aclpwn -f path.json -d domain.local -u user -p pass --server dc01.domain.local
```

```bash
aclpwn -f path.json -d domain.local -u user -p pass --no-color
```

小记录：执行前先 dry-run，变更类动作必须准备 restore 文件。
