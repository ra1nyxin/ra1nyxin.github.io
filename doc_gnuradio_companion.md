# GNU Radio Companion 使用

GNU Radio Companion 用于构建 SDR 信号处理流程，适合无线安全实验和协议分析。

## 常用命令

```bash
gnuradio-companion
```

```bash
gnuradio-companion flowgraph.grc
```

```bash
python3 generated_flowgraph.py
```

```bash
rtl_test
```

```bash
rtl_sdr -f 433920000 -s 2048000 capture.iq
```

小记录：SDR 实验要记录频率、采样率、增益和天线，缺这些参数很难复现。
