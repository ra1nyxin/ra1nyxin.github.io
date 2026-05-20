# Go 工具链常用用法

这篇记录 Go 项目里常用的命令。构建、测试、格式化、模块整理、交叉编译和依赖排查都放在这里。

## 基础信息

查看 Go 版本。

```bash
go version
```

查看环境。

```bash
go env
```

查看模块信息。

```bash
go list -m all
```

## 构建和运行

运行当前项目。

```bash
go run .
```

构建当前项目。

```bash
go build ./...
```

构建输出指定文件。

```bash
go build -o app .
```

交叉编译 Linux amd64。

```bash
GOOS=linux GOARCH=amd64 go build -o app-linux-amd64 .
```

## 测试

运行全部测试。

```bash
go test ./...
```

显示详细测试输出。

```bash
go test -v ./...
```

运行指定测试。

```bash
go test -run TestName ./...
```

生成覆盖率。

```bash
go test -cover ./...
```

## 格式和检查

格式化代码。

```bash
gofmt -w .
```

整理 import。

```bash
go fmt ./...
```

运行 vet。

```bash
go vet ./...
```

## 模块管理

整理依赖。

```bash
go mod tidy
```

下载依赖。

```bash
go mod download
```

查看为什么需要某个模块。

```bash
go mod why github.com/example/pkg
```

清理模块缓存。

```bash
go clean -modcache
```

## 备注

Go 项目排查依赖时先看 `go.mod` 和 `go.sum`，再用 `go list -m all` 确认最终版本。CI 里一般跑 `go test ./...`、`go vet ./...` 和 `go mod tidy` 检查。
