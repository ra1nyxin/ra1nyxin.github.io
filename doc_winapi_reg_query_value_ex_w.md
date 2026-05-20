# Windows API 调用笔记：RegQueryValueExW

RegQueryValueExW 用于读取注册表值。它常出现在配置解析、策略判断、服务启动参数、COM 路径、代理设置、证书配置和持久化分析中。读取值时要同时保存类型和长度，不能只保存字符串内容。

## 入口

```text
DLL: advapi32.dll; Header: winreg.h
```

```cpp
LSTATUS st = RegQueryValueExW(key, valueName, nullptr, &type, data, &dataSize);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i RegQueryValueExW
```

## 参数关注

`hKey` 的来源要能追溯到完整路径。`lpValueName` 为空或 null 时含义不同，要按实际调用记录。`lpType` 需要保存，`REG_SZ`、`REG_EXPAND_SZ`、`REG_MULTI_SZ`、`REG_DWORD`、`REG_BINARY` 的解析方式完全不同。

`lpcbData` 既是输入也是输出。常见做法是先用空缓冲区查询长度，再分配缓冲区读取。字符串类型要注意结尾 null，二进制值要避免按字符串误解。

## 返回与错误

`ERROR_MORE_DATA` 表示缓冲区不足，不能当成值不存在。`ERROR_FILE_NOT_FOUND` 才表示指定值不存在。

```cpp
LSTATUS st = RegQueryValueExW(key, name, nullptr, &type, nullptr, &size);
```

## 复核点

记录完整键路径、值名、类型、长度、解析后的值、原始摘要和调用身份。涉及命令行、DLL 路径、脚本路径、代理、证书或策略时，要保留展开前后的内容。
