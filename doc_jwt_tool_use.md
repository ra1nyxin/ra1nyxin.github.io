# jwt_tool 常用用法

jwt_tool 适合 JWT 结构查看、弱密钥验证和常见配置检查。常用参数：Token，`-C` 破解，`-d` 字典，`-T` 篡改测试。

```bash
python3 jwt_tool.py TOKEN
```

```bash
python3 jwt_tool.py TOKEN -C -d secrets.txt
```

```bash
python3 jwt_tool.py TOKEN -T
```

```bash
python3 jwt_tool.py TOKEN -I -pc role -pv admin
```

JWT 测试先看 alg、kid、exp、iss、aud 和业务字段。签名验证逻辑要结合服务端行为确认。
