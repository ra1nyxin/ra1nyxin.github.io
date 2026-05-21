# Adalanche 使用

Adalanche 的节奏和 BloodHound 不太一样。它更像先把 Active Directory 的关系网铺开，再从图里慢慢找路径。收集、分析、回看这三步分得比较清楚，适合做整理型工作。

## 收集

```bash
adalanche collect activedirectory --domain domain.local
```

```bash
adalanche collect activedirectory --username user --password pass --server dc01.domain.local
```

收集结束后先看对象数量、属性字段和连接是否完整。数据源只要断一截，后面分析出来的路径就会少很多，图看着也会偏。

## 分析

```bash
adalanche analyze
```

```bash
adalanche analyze --datapath data
```

分析阶段更适合盯高权限路径、组嵌套和委派链。结果出来后，最好挑一条具体路径回到对象里核一次，确认不是旧快照或者脏数据把图带歪了。

## 本地服务

```bash
adalanche webservice
```

本地服务适合边看图边改筛选。图一旦铺大，视觉上很容易被枝叶干扰，真正要盯的是对象之间的跳转顺序，以及哪一步开始把风险抬高。

## 习惯

收集目录最好固定下来，别每次换名字。Adalanche 的价值在连续看图，目录一乱，前后两次分析就很难直接对照。
