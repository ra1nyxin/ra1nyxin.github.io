# Windows API 调用笔记：WerGetFlags

WerGetFlags 常出现在错误码、环境块、用户配置文件和版本信息场景，主要处理解释错误、处理用户配置文件、构造环境块、读取版本资源或确认应用身份。它们经常是排查链路里的辅助证据，但会直接影响最终结论。

## 入口

```text
DLL: kernel32.dll; Header: errhandlingapi.h / winbase.h
```

```cpp
auto result = WerGetFlags(...);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i WerGetFlags
```

## 参数与上下文

错误码接口要记录原始错误值、来源 API 和转换方式。环境与配置文件接口要记录用户 token、profile path、环境变量来源、加载状态和卸载结果。版本接口要记录文件路径、语言代码页和资源字段。

这类查询接口要把目标对象、信息类别、输入输出长度、返回结构和状态码写完整。第一次因为缓冲区不足返回，通常只是探测长度，最终结论以后续读取结果为准。

## 返回与错误

错误处理接口本身也可能失败，不能覆盖原始错误。Profile/Userenv 接口常需要特定权限和正确的 token 类型。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

回看记录时，把错误码、调用 API、用户上下文、系统版本、文件版本和环境变量放在一起。服务进程和交互用户进程的环境差异尤其容易造成误判。
