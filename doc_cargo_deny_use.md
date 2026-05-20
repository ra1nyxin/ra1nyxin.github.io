# cargo-deny 使用

cargo-deny 可以检查 Rust 依赖漏洞、许可证和重复依赖，适合供应链基线。

## 常用命令

```bash
cargo deny init
```

```bash
cargo deny check
```

```bash
cargo deny check advisories
```

```bash
cargo deny check licenses
```

```bash
cargo deny check bans
```

适合把许可证、漏洞和依赖来源放在同一套规则里处理，CI 阶段很实用。
