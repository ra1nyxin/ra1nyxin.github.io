# CMSeeK 使用

CMSeeK 用于识别 CMS、版本、主题、插件和部分配置痕迹。它覆盖面比较广，适合在资产很多时做快速分类。

## 单站识别

```bash
cmseek -u http://example.local
```

```bash
cmseek -u http://example.local --random-agent
```

```bash
cmseek -u http://example.local --follow-redirect
```

## 批量扫描

```bash
cmseek -l urls.txt
```

```bash
cmseek -l urls.txt --batch
```

```bash
cmseek -l urls.txt --output results
```

## 代理调试

```bash
cmseek -u http://example.local --proxy http://127.0.0.1:8080
```

小记录：CMSeeK 适合给 Web 资产打标签。识别出 CMS 后，再换对应专用工具深入枚举，准确率和可读性会更好。
