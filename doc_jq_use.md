# jq 使用笔记

`jq` 是处理 JSON 的命令行工具。它最适合接在 `curl`、日志查询、云厂商 CLI、Kubernetes 输出后面，把一大坨 JSON 变成可读、可筛选、可继续给脚本处理的数据。写 jq 不要一开始就追求一行解决，先格式化看结构，再逐层取字段，最后再做筛选和输出格式。

最基础的是格式化。`.` 表示当前输入。

```bash
jq "." data.json
```

取字段用 `.name`，嵌套字段继续点下去。输出字符串时默认带 JSON 引号，脚本里通常用 `-r` 输出原始字符串。

```bash
jq ".name" data.json
jq ".owner.login" repo.json
jq -r ".owner.login" repo.json
```

数组用 `[]` 展开。很多 API 返回结构都是 `{ "items": [...] }`，先展开 `.items[]`，再取每个对象的字段。

```bash
jq ".items[]" data.json
jq -r ".items[].name" data.json
jq ".items[0]" data.json
jq ".items | length" data.json
```

字段可能不存在时，不要让脚本直接报错。`//` 可以给默认值，`?` 可以让缺失字段或空数组安静跳过。

```bash
jq -r ".description // \"\"" repo.json
jq -r ".items[]? | .name" data.json
jq -r ".owner?.login // \"unknown\"" repo.json
```

筛选用 `select()`。条件可以是布尔值、字符串比较、数字比较、正则测试。筛完后只输出需要的字段，结果会清楚很多。

```bash
jq ".items[] | select(.archived == false)" repos.json
jq -r ".items[] | select(.private == false) | .name" repos.json
jq -r ".items[] | select(.language == \"JavaScript\") | .full_name" repos.json
jq -r ".items[] | select(.name | test(\"^doc_\")) | .name" files.json
```

排序和截取也常用。`sort_by()` 默认升序，倒序可以接 `reverse`，取前 10 个用切片。

```bash
jq ".items | sort_by(.stargazers_count)" repos.json
jq ".items | sort_by(.stargazers_count) | reverse | .[:10]" repos.json
```

重组对象时，可以把原字段挑出来，也可以改名。对象字段名和变量同名时，`{name}` 是 `{name: .name}` 的短写。

```bash
jq ".items[] | {name, url: .html_url, stars: .stargazers_count}" repos.json
```

输出给表格或 shell 管道时，TSV 比 JSON 更方便。字段里可能有逗号时，CSV 要让 jq 来做转义，不要手拼字符串。

```bash
jq -r ".items[] | [.name, .language, .stargazers_count] | @tsv" repos.json
jq -r ".items[] | [.name, .language, .stargazers_count] | @csv" repos.json
```

和 `curl` 配合时，先用 `-s` 关闭进度条。比如看 GitHub 仓库信息：

```bash
curl -s https://api.github.com/repos/ra1nyxin/ra1nyxin.github.io \
  | jq "{name, description, stars: .stargazers_count, default_branch}"
```

列仓库根目录文件名：

```bash
curl -s https://api.github.com/repos/ra1nyxin/ra1nyxin.github.io/contents/ \
  | jq -r ".[].name"
```

只看 `doc_` 开头的 Markdown 文件：

```bash
curl -s https://api.github.com/repos/ra1nyxin/ra1nyxin.github.io/contents/ \
  | jq -r ".[].name | select(test(\"^doc_.*\\\\.md$\"))"
```

变量传入不要用 shell 拼 JSON，容易出引号问题。字符串用 `--arg`，数字或 JSON 片段用 `--argjson`。

```bash
jq --arg name "demo" '.items[] | select(.name == $name)' data.json
jq --argjson min 100 '.items[] | select(.stargazers_count >= $min)' repos.json
```

处理多行 JSON 日志时，`jq -c` 可以保持一行一个对象，方便继续 grep、sort 或写入日志文件。

```bash
jq -c 'select(.level == "error") | {time, message, trace_id}' app.log
```

如果输入不是一个完整 JSON 数组，而是一行一个 JSON 对象，jq 会逐个处理。云日志、容器日志经常是这种格式。

```bash
jq -r 'select(.status >= 500) | [.time, .path, .status] | @tsv' access.jsonl
```

写复杂表达式时，我会先保存一个小样本，然后每次只加一段：先 `.items[]`，再 `select()`，再 `{...}`，最后 `@tsv` 或 `@csv`。jq 的表达式像管道，拆开调试比盯着一长串括号省时间。
