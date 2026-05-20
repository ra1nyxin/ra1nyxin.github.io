# helm-secrets 使用

helm-secrets 用于结合 sops 管理 Helm values 中的敏感配置。

## 常用命令

```bash
helm secrets enc secrets.yaml
```

```bash
helm secrets dec secrets.yaml
```

```bash
helm secrets view secrets.yaml
```

```bash
helm secrets upgrade --install app ./chart -f secrets.yaml
```

```bash
helm secrets template app ./chart -f secrets.yaml
```

小记录：适合把敏感 values 加密进仓库，但密钥管理和 CI 解密权限要单独设计。
