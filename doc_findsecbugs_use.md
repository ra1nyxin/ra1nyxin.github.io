# FindSecBugs 使用

FindSecBugs 是 SpotBugs 的安全规则插件，适合 Java Web 和 Spring 项目审计。

## 常用命令

```bash
spotbugs -pluginList findsecbugs-plugin.jar -textui target/classes
```

```bash
spotbugs -pluginList findsecbugs-plugin.jar -html -output findsecbugs.html target/classes
```

```bash
mvn com.github.spotbugs:spotbugs-maven-plugin:spotbugs
```

```bash
gradle spotbugsMain
```

```bash
spotbugs -pluginList findsecbugs-plugin.jar -effort:max -low target/classes
```

重点看反序列化、表达式注入、路径穿越、XXE 和弱加密。
