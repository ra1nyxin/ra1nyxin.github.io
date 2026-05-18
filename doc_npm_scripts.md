# npm scripts 常用用法

这篇记录 npm scripts 的常用命令。前端项目、Node 小工具和静态站点构建都会碰到它。

## 基础命令

安装依赖。

```bash
npm install
```

按 lock 文件安装。

```bash
npm ci
```

运行脚本。

```bash
npm run build
```

列出可用脚本。

```bash
npm run
```

## 常见开发命令

启动开发服务。

```bash
npm run dev
```

运行测试。

```bash
npm test
```

运行 lint。

```bash
npm run lint
```

运行格式化。

```bash
npm run format
```

## 依赖管理

安装运行时依赖。

```bash
npm install lodash
```

安装开发依赖。

```bash
npm install -D vite
```

卸载依赖。

```bash
npm uninstall lodash
```

查看过期依赖。

```bash
npm outdated
```

## 排查

查看依赖树。

```bash
npm ls
```

查看某个包版本。

```bash
npm ls vite
```

清理缓存。

```bash
npm cache verify
```

查看 npm 配置。

```bash
npm config list
```

## 安全相关

审计依赖。

```bash
npm audit
```

自动修复可处理的问题。

```bash
npm audit fix
```

生成生产依赖列表。

```bash
npm ls --omit=dev
```

## 小记录

CI 里优先用 `npm ci`，本地开发用 `npm install` 更灵活。依赖异常时先看 Node 版本、lock 文件和包管理器是否一致。
