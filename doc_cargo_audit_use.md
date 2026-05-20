# cargo-audit 使用

cargo-audit 用于检查 Rust 项目的 Cargo.lock 漏洞，适合 Rust 服务和 CLI 工具。

## 常用命令

```bash
cargo audit
```

```bash
cargo audit --json > cargo-audit.json
```

```bash
cargo audit -D warnings
```

```bash
cargo audit --ignore RUSTSEC-2020-0071
```

```bash
cargo audit fix
```

Rust 项目要优先确认 Cargo.lock 是否提交，库项目和应用项目的扫描方式会有差异。
