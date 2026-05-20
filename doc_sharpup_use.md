# SharpUp 常用用法

SharpUp 适合 Windows 提权线索枚举。常用参数：`audit` 检查常见项，具体检查项可单独调用。

```powershell
.\SharpUp.exe audit
```

```powershell
.\SharpUp.exe AlwaysInstallElevated
```

```powershell
.\SharpUp.exe ModifiableServices
```

```powershell
.\SharpUp.exe UnquotedServicePath
```

SharpUp 输出先当作线索处理。命中后要手工确认权限、路径、服务状态和利用前提。
