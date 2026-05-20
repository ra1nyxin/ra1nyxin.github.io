# conftest 与 OPA 策略检查

conftest 用 OPA/Rego 对配置文件做策略检查。它适合把团队自己的安全基线写成规则，覆盖 Kubernetes、Terraform、Dockerfile 等格式。

## 基础检查

```bash
conftest test deployment.yaml
```

```bash
conftest test terraform.tfplan.json
```

```bash
conftest test --policy policy/ k8s/*.yaml
```

## 输出格式

```bash
conftest test deployment.yaml --output json
```

```bash
conftest test deployment.yaml --output table
```

```bash
conftest verify --policy policy/
```

## 规则开发

```bash
opa test policy/
```

```bash
opa eval -i input.json -d policy/ 'data.main.deny'
```

小记录：conftest 的优势是可表达组织自己的规则。适合把“必须设置资源限制”“禁止特权容器”这类基线固化下来。
