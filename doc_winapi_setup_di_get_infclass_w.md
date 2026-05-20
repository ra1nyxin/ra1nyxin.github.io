# Windows API 调用笔记：SetupDiGetINFClassW

SetupDiGetINFClassW 常见于设备树遍历、驱动排错、硬件属性读取和终端资产采集场景。判断时要先分清它处理的是节点关系、接口信息还是设备属性，再看调用前后的枚举状态是否一致。
## 入口

```text
DLL: setupapi.dll; Header: setupapi.h
```

```cpp
auto result = SetupDiGetINFClassW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\setupapi.dll | findstr /i SetupDiGetINFClassW
```

## 参数与上下文

SetupAPI 和 CfgMgr32 接口要记录设备实例 ID、Class GUID、接口 GUID、属性键、缓冲区长度以及返回的 DEVINST。枚举树节点时，还要把父子关系、状态位和设备路径一并记下来。

这是会改变状态的接口，记录时要保存调用前状态、请求的新状态、调用身份、返回码和回滚路径。安全审计里要把它和前置查询、后续验证放在同一条链路中。

## 返回与错误

这组接口常见返回值是 CONFIGRET、BOOL 或 DWORD。枚举类调用要记录索引、结束条件和 CR_NO_SUCH_DEVNODE 之类的结束语义，打开或销毁类调用则要把句柄生命周期写完整。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

复核时保存设备实例 ID、硬件 ID、类 GUID、驱动文件、签名状态、用户权限和系统版本。涉及设备树变更时，再把父节点、兄弟节点和重新枚举前后的状态放在一起看。
