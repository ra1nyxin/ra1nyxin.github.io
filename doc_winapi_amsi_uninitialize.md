# Windows API 调用笔记：AmsiUninitialize

AmsiUninitialize 多见于 AMSI 内容扫描和反恶意软件集成场景。AMSI 接口用于把脚本、宏、内存缓冲区或应用内容交给反恶意软件提供程序评估。常见落点包括 PowerShell、脚本宿主、Office、浏览器组件和自带脚本引擎的软件。记录时保留应用名、会话、内容来源、内容长度、扫描结果和提供程序状态。

## 入口

```text
DLL: amsi.dll; Header: amsi.h
```

```cpp
auto result = AmsiUninitialize(...);
```

```powershell
dumpbin /exports C:\Windows\System32\amsi.dll | findstr /i AmsiUninitialize
```

## 参数与上下文

AMSI 上下文和会话句柄必须能追溯到初始化位置。扫描类接口要记录内容来源、缓冲区长度、content name、session、返回的 AMSI_RESULT 和调用线程。关闭和反初始化类接口要确认生命周期是否闭合。

这是建立句柄、连接、映射或上下文的入口，重点记录目标对象、访问掩码、创建标志、命名空间和后续释放接口。句柄生命周期经常比单次返回值更能解释问题。

## 返回与错误

AMSI 接口多返回 HRESULT，扫描结果通过输出参数表达。HRESULT 成功只说明扫描流程完成，是否判定可疑要看 AMSI_RESULT。

```cpp
HRESULT hr = result;
```

## 复核点

最后核对时，把扫描内容来源、宿主进程、脚本路径、用户、AMSI Provider 和结果放在一起。若出现扫描失败、Provider 缺失或会话异常，需要关联事件日志和安全产品状态。
