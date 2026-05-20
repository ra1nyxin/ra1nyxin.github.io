# Cosign 镜像签名检查

Cosign 用来签名和验证容器镜像、SBOM 和制品。供应链安全检查里，它能确认镜像来源、签名状态和 attestation。

## 签名验证

```bash
cosign verify image.example.com/app:1.0 --key cosign.pub
```

```bash
cosign verify ghcr.io/org/app:latest
```

```bash
cosign triangulate image.example.com/app:1.0
```

## 签名和附件

```bash
cosign sign --key cosign.key image.example.com/app:1.0
```

```bash
cosign attach sbom --sbom sbom.spdx.json image.example.com/app:1.0
```

```bash
cosign verify-attestation image.example.com/app:1.0 --key cosign.pub
```

## 证书信息

```bash
cosign verify image.example.com/app:1.0 --certificate-identity user@example.com --certificate-oidc-issuer https://accounts.google.com
```

小记录：镜像签名检查要和构建流水线一起看。签名存在只能说明来源链路，不能替代漏洞扫描和运行时配置检查。
