# Aquatone 常用用法

Aquatone 更像一个网页观察器。它不负责深度探测，主要是把大量站点变成能快速扫一眼的截图和标题列表，适合筛异常页面。

## 截图

```bash
cat urls.txt | aquatone -out aquatone-out
```

```bash
cat urls.txt | aquatone -out aquatone-out -screenshot-timeout 10
```

```bash
cat urls.txt | aquatone -out aquatone-out -http-timeout 5
```

```bash
cat urls.txt | aquatone -out aquatone-out -resolution 1440x900
```

先把超时调到能接受的范围，再看截图有没有稳定出。页面多的时候，超时太短会让你误以为站点挂了，其实只是渲染没来得及跑完。

## 看图

和 `httpx` 一起跑会很顺。`httpx` 负责状态码和标题，Aquatone 负责视觉结果，两个结果放一块儿，异常站点很容易跳出来。

## 复核

看截图的时候，标题、登录页样式、重定向后的落点一起看会更稳。只看缩略图容易漏掉一些状态一致但页面内容已经变掉的站点。

## 习惯

输出目录最好按日期分开。看图这个活儿很吃上下文，过几天再回看时，目录名如果不清楚，很容易把不同一轮的结果混在一起。
