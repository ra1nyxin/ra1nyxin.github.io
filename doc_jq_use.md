# jq 常用用法

这篇记录 jq 的常见写法。它适合处理 API 返回、日志里的 JSON、配置文件和命令行管道输出。很多时候 curl 拿到结果后，接一个 jq 就能把数据整理清楚。

## 基础查看

格式化 JSON。

```bash
jq "." data.json
```

读取字段。

```bash
jq ".name" data.json
```

读取嵌套字段。

```bash
jq ".owner.login" repo.json
```

输出原始字符串，去掉 JSON 引号。

```bash
jq -r ".name" data.json
```

## 数组处理

读取数组里的所有元素。

```bash
jq ".items[]" data.json
```

读取数组里每个对象的字段。

```bash
jq -r ".items[].name" data.json
```

取第一个元素。

```bash
jq ".items[0]" data.json
```

取数组长度。

```bash
jq ".items | length" data.json
```

## 筛选和排序

按字段筛选。

```bash
jq ".items[] | select(.archived == false)" repos.json
```

筛选后只输出名字。

```bash
jq -r ".items[] | select(.private == false) | .name" repos.json
```

按数字字段排序。

```bash
jq ".items | sort_by(.stargazers_count)" repos.json
```

倒序排序后取前 10 个。

```bash
jq ".items | sort_by(.stargazers_count) | reverse | .[:10]" repos.json
```

## 重新组织输出

把对象改成自己需要的结构。

```bash
jq ".items[] | {name, url: .html_url, stars: .stargazers_count}" repos.json
```

输出 TSV，适合贴进表格或继续用 awk 处理。

```bash
jq -r ".items[] | [.name, .language, .stargazers_count] | @tsv" repos.json
```

输出 CSV。

```bash
jq -r ".items[] | [.name, .language, .stargazers_count] | @csv" repos.json
```

## 和 curl 配合

查看 GitHub 仓库基本信息。

```bash
curl -s https://api.github.com/repos/ra1nyxin/ra1nyxin.github.io | jq "{name, description, stars: .stargazers_count}"
```

列出仓库根目录文件名。

```bash
curl -s https://api.github.com/repos/ra1nyxin/ra1nyxin.github.io/contents/ | jq -r ".[].name"
```

只看 doc_ 开头的 Markdown 文件。

```bash
curl -s https://api.github.com/repos/ra1nyxin/ra1nyxin.github.io/contents/ | jq -r ".[].name | select(test(\"^doc_.*\\\\.md$\"))"
```

## 安全一点的读取

字段可能不存在时给默认值。

```bash
jq -r ".description // \"\"" repo.json
```

数组可能为空时避免报错。

```bash
jq -r ".items[]? | .name" data.json
```

嵌套字段可能为空时继续读。

```bash
jq -r ".owner?.login // \"unknown\"" repo.json
```

## 备注

jq 的写法很像一条数据流。先把原始 JSON 格式化看清楚，再一层层加筛选和输出格式，通常比一开始就写复杂表达式更稳。
