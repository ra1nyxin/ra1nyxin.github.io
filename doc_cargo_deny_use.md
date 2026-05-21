# cargo-deny 使用

cargo-deny 可以检查 Rust 依赖漏洞、许可证、重复依赖和来源策略。它适合放在供应链基线里，尤其是 workspace 项目。

## 初始化和全量检查

```bash
cargo deny init
```

```bash
cargo deny check
```

```bash
cargo deny check --workspace
```

初始化后会生成配置文件，里面可以写许可证策略、漏洞处理、ban 规则和来源限制。workspace 项目建议显式按工作区检查。

## 分项检查

```bash
cargo deny check advisories
```

```bash
cargo deny check licenses
```

```bash
cargo deny check bans
```

漏洞、许可证、重复依赖最好分开看。许可证问题通常要和项目发布方式一起判断，重复依赖则要看是否真的影响体积或安全维护。

## CI 习惯

把 `deny.toml` 放进仓库，通过 review 管理例外项。漏洞暂时无法修时，要写清原因和复查时间，别让 allow 规则长期失控。
