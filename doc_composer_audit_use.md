# composer audit 使用

composer audit 用来检查 PHP Composer 依赖漏洞，适合 Laravel、Symfony 和普通 PHP 项目。

## 常用命令

```bash
composer audit
```

```bash
composer audit --format=json
```

```bash
composer audit --locked
```

```bash
composer update vendor/package --with-dependencies --dry-run
```

```bash
composer show vendor/package --all
```

PHP 依赖修复经常牵动框架版本，先 dry-run 再和业务测试一起推进。
