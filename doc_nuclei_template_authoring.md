# Nuclei 模板编写

Nuclei 模板编写适合把可复现的检测点沉淀成自动化检查。

## 常用命令

```bash
nuclei -validate -t template.yaml
```

```bash
nuclei -u http://example.local -t template.yaml
```

```bash
nuclei -l urls.txt -t templates/ -jsonl -o nuclei.jsonl
```

```bash
nuclei -u http://example.local -t template.yaml -debug
```

```bash
nuclei -u http://example.local -t template.yaml -var token=abc
```

模板要控制误报，matcher、extractor 和请求条件要写得具体。
