# Droopescan 使用

Droopescan 适合扫描 Drupal、SilverStripe、WordPress 等 CMS 的插件、主题和版本线索。它输出简洁，适合作为 CMS 初筛工具。

## Drupal 扫描

```bash
droopescan scan drupal -u http://example.local
```

```bash
droopescan scan drupal -u http://example.local -e p,t
```

```bash
droopescan scan drupal -u http://example.local --threads 10
```

## 其他 CMS

```bash
droopescan scan wordpress -u http://example.local
```

```bash
droopescan scan silverstripe -u http://example.local
```

```bash
droopescan scan moodle -u http://example.local
```

## 输出与代理

```bash
droopescan scan drupal -u http://example.local --output json
```

```bash
droopescan scan drupal -u http://example.local --proxy http://127.0.0.1:8080
```

小记录：Droopescan 命中模块后，继续查模块版本和公开漏洞。CMS 类站点还要看备份包、安装脚本、上传目录和后台访问控制。
