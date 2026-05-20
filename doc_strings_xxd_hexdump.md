# strings xxd hexdump 速查

`strings`、`xxd`、`hexdump` 适合做文件初筛。遇到未知样本、配置文件、pcap 导出内容和二进制 blob 时，先用它们找可读线索。

## 可读字符串

```bash
strings sample.bin | head
```

```bash
strings -a -n 8 sample.bin
```

```bash
strings -el sample.bin | head
```

## 十六进制查看

```bash
xxd sample.bin | head
```

```bash
xxd -l 256 sample.bin
```

```bash
hexdump -C sample.bin | head
```

## 提取和还原

```bash
xxd -r patch.hex output.bin
```

```bash
dd if=sample.bin of=part.bin bs=1 skip=1024 count=512
```

小记录：先找 URL、IP、路径、密钥字段和错误信息。看到编码痕迹时，再切到 CyberChef、base64、jq 或专门解析器处理。
