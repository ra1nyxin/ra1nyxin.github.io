# SpotBugs 使用

SpotBugs 用于 Java 字节码静态分析，适合后端服务和老 Java 项目。

## 常用命令

```bash
spotbugs -textui target/classes
```

```bash
spotbugs -html -output spotbugs.html target/classes
```

```bash
spotbugs -xml -output spotbugs.xml target/classes
```

```bash
spotbugs -effort:max -low target/classes
```

```bash
mvn com.github.spotbugs:spotbugs-maven-plugin:spotbugs
```

小记录：Java 项目要结合构建产物扫描，依赖和源码阶段的结果会有差异。
