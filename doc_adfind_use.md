# ADFind 常用用法

ADFind 的特点是快，输出也干净。很多时候不用把环境铺得很复杂，先拿一个 LDAP 过滤器直接试，结果就知道这条线值不值得继续挖。

## 对象类型

```bash
adfind -b dc=example,dc=local -f "(objectcategory=person)" -csv
```

```bash
adfind -b dc=example,dc=local -f "(objectcategory=computer)" -csv
```

```bash
adfind -b dc=example,dc=local -f "(objectcategory=group)" -csv
```

这几条通常先跑。用户、计算机、组这三类对象一旦拿到，后面很多枚举就能顺着对象往下拆。

## 过滤条件

```bash
adfind -b dc=example,dc=local -f "(servicePrincipalName=*)" -csv
```

```bash
adfind -b dc=example,dc=local -f "(adminCount=1)" -csv
```

```bash
adfind -b dc=example,dc=local -f "(userAccountControl:1.2.840.113556.1.4.803:=524288)" -csv
```

SPN、`adminCount`、委派标志这几个字段都很常见，但意义要放在上下文里看。看结果时最好顺手把所属组、继承标志和对象创建时间也记下来。

## 输出

```bash
adfind -b dc=example,dc=local -f "(objectcategory=person)" -csv > users.csv
```

```bash
adfind -h
```

输出一旦落到 CSV，后面和 Excel、脚本、BloodHound 对起来都方便。ADFind 更适合快速验证，也适合补一眼目录里的全局轮廓。

## 习惯

过滤条件先从最简单的开始，别一上来就堆很长。命令写得太重，反而把 ADFind 本来那种快读目录的节奏弄丢了。
