# Purple Knight 使用

Purple Knight 用于 AD 和 Entra ID 安全体检，适合做基线评估、复测和治理清单。它的报告适合给管理和修复团队看，但发现项仍要回到具体对象里复核。

## 扫描方式

```bash
PurpleKnight.exe
```

```bash
PurpleKnight.exe /online
```

```bash
PurpleKnight.exe /offline
```

在线模式适合直接检查当前目录环境，离线模式适合在受限环境里处理已导出的数据。运行前要确认账号权限和扫描范围。

## 报告

```bash
PurpleKnight.exe /export report.html
```

```bash
PurpleKnight.exe /help
```

HTML 报告适合留档和沟通。发现项要按域、OU、策略、对象逐项拆开，避免所有问题都堆成一个总分。

## 复核重点

优先看高权限组、弱密码策略、委派、Kerberos 配置、遗留协议和 Entra ID 条件访问。能快速修的先进入治理清单，牵涉业务兼容性的单独标记风险接受或改造计划。
