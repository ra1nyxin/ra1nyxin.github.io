# btmon 使用

btmon 用于抓取 Linux 蓝牙 HCI 事件，适合分析配对、连接、断连和控制器层面的异常。它看到的是比较底层的事件流，适合和 Wireshark 一起看。

## 准备接口

```bash
sudo hciconfig hci0 up
```

```bash
sudo btmgmt info
```

先确认蓝牙控制器已经起来，设备名、地址和状态都正常。接口没起来时，后面抓到的内容会很少。

## 抓取和保存

```bash
sudo btmon
```

```bash
sudo btmon -w bluetooth.snoop
```

```bash
sudo btmon | tee btmon.log
```

需要复盘时优先保存 snoop 文件，文本日志适合快速搜索。配对问题建议从开始配对前就启动抓取，不要等失败后再开。

## 回放查看

```bash
sudo btmon -r bluetooth.snoop
```

```bash
wireshark bluetooth.snoop
```

重点看连接请求、配对方法、加密变更、断开原因和错误码。无线环境不稳定时，同一动作最好抓两三轮再下结论。
