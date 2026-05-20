# Watson 常用用法

Watson 适合 Windows 补丁和已知提权漏洞辅助检查。常用方式是直接运行并保存输出。

```powershell
.\Watson.exe
```

```powershell
.\Watson.exe > watson.txt
```

```cmd
systeminfo
```

```cmd
wmic qfe get HotFixID,InstalledOn
```

Watson 适合快速找补丁线索。提权漏洞要结合系统版本、补丁、架构和当前权限验证，不能只看工具输出。
