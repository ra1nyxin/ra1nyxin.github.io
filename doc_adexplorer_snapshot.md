# AD Explorer Snapshot

AD Explorer 的快照更像离线目录副本。拿到以后，很多查询就不用每次都连域控，适合慢慢翻对象属性、权限和委派关系，也适合把现场结果留成一份可回看的材料。

## 取快照

```bash
ADExplorer.exe
```

```bash
ADExplorer.exe -snapshot "" snapshot.dat
```

```bash
ADExplorer.exe -snapshot "" snapshot.dat -server dc01.domain.local
```

```bash
ADExplorer.exe -snapshot "" snapshot.dat -user domain\user -password pass
```

空会话和指定账号都能用，差别主要在能看到什么。权限高一点时，目录属性、访问控制和成员关系会完整很多，后面排查也更顺手。

## 离线查看

```bash
strings snapshot.dat | findstr /i admin
```

快照文件能直接搜出不少线索，但别只盯关键词。对象名、属性值、组成员、ACL 和路径变化一起看，信息会比单搜一个词扎实得多。

## 记录方式

建议把快照文件按日期和来源分开存。过几天再看时，命名清楚一点，能省很多重新确认上下文的时间。

## 习惯

快照按高敏感材料处理，存放和同步都别随手放。AD Explorer 的好处是离线查得快，但文件一多，自己也容易把不同批次混起来。
