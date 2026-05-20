# eslint-plugin-security 使用

eslint-plugin-security 适合检查 Node.js 代码里的危险写法。

## 常用命令

```bash
npm install --save-dev eslint-plugin-security
```

```bash
npx eslint .
```

```bash
npx eslint . -f json -o eslint-security.json
```

```bash
npx eslint src --ext .js,.ts
```

```bash
npx eslint . --rule "security/detect-child-process:error"
```

它适合发现危险 API 使用，确认漏洞还需要看调用路径和参数来源。
