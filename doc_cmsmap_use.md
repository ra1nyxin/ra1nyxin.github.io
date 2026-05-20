# CMSmap 使用

CMSmap 可以对 WordPress、Joomla、Drupal 做基础枚举。它适合快速确认 CMS 类型、版本线索、插件和登录入口。

## 基础扫描

```bash
cmsmap http://example.local
```

```bash
cmsmap -f W http://example.local
```

```bash
cmsmap -f J http://example.local
```

```bash
cmsmap -f D http://example.local
```

## 代理和线程

```bash
cmsmap --proxy http://127.0.0.1:8080 http://example.local
```

```bash
cmsmap -t 10 http://example.local
```

```bash
cmsmap --random-agent http://example.local
```

## 登录相关

```bash
cmsmap -U users.txt -P passwords.txt http://example.local
```

小记录：CMSmap 的结果适合做第一轮线索，不要把自动识别的版本直接当最终结论。后台路径、插件路径和静态资源版本要手工抽样确认。
