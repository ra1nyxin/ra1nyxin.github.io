# Windows API 调用笔记：LoadUserProfileW

LoadUserProfileW 多见于错误码、环境块、用户配置文件和版本信息场景，调用语义主要是解释错误、处理用户配置文件、构造环境块、读取版本资源或确认应用身份。它们经常是排查链路里的辅助证据，但会直接影响最终结论。

## 入口

```text
DLL: profapi.dll; Header: profinfo.h
```

```cpp
auto result = LoadUserProfileW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\profapi.dll | findstr /i LoadUserProfileW
```

## 参数与上下文

错误码接口要记录原始错误值、来源 API 和转换方式。环境与配置文件接口要记录用户 token、profile path、环境变量来源、加载状态和卸载结果。版本接口要记录文件路径、语言代码页和资源字段。

这是建立句柄、连接、映射或上下文的入口，重点记录目标对象、访问掩码、创建标志、命名空间和后续释放接口。句柄生命周期经常比单次返回值更能解释问题。

## 返回与错误

错误处理接口本身也可能失败，不能覆盖原始错误。Profile/Userenv 接口常需要特定权限和正确的 token 类型。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

复查时，把错误码、调用 API、用户上下文、系统版本、文件版本和环境变量放在一起。服务进程和交互用户进程的环境差异尤其容易造成误判。
