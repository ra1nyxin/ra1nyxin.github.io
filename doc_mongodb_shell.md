# MongoDB Shell 检查

MongoDB 常见问题集中在未授权访问、默认库泄露、备份库残留和过宽角色。检查时先确认版本和认证状态，再抽样查看库名、集合名和权限。

## 连接与版本

```bash
mongosh mongodb://192.168.1.10:27017
```

```bash
mongosh mongodb://user:pass@192.168.1.10:27017/admin
```

```bash
nmap -sV -p 27017 --script mongodb-info 192.168.1.10
```

## 库和集合

```bash
mongosh mongodb://192.168.1.10:27017 --eval 'show dbs'
```

```bash
mongosh mongodb://192.168.1.10:27017/app --eval 'show collections'
```

```bash
mongosh mongodb://192.168.1.10:27017/app --eval 'db.users.findOne()'
```

## 权限确认

```bash
mongosh mongodb://user:pass@192.168.1.10:27017/admin --eval 'db.runCommand({connectionStatus:1})'
```

```bash
mongosh mongodb://user:pass@192.168.1.10:27017/admin --eval 'db.getUser("user")'
```

小记录：MongoDB 的风险判断要看业务库内容和账号角色。只看到开放端口还不够，能否未授权读集合、是否能写入、是否能管理用户才是关键。
