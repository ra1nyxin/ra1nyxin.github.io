# btmon 使用

btmon 用于抓取 Linux 蓝牙 HCI 事件，适合分析配对和连接过程。

## 常用命令

```bash
sudo btmon
```

```bash
sudo btmon -w bluetooth.snoop
```

```bash
sudo btmon -r bluetooth.snoop
```

```bash
sudo btmon | tee btmon.log
```

```bash
sudo hciconfig hci0 up
```

它适合底层排查，和 Wireshark 打开 snoop 文件一起看更直观。
