# Windows API 调用笔记：SymGetSearchPathW

SymGetSearchPathW 经常落在模块加载、PE 映像、符号和信任辅助这类链路里，通常涉及DLL 加载、导出解析、搜索路径控制、PE 映像处理、符号解析、栈回溯和信任辅助检查。记录时保留模块路径、搜索目录、加载标志、导出名、基址、签名状态和符号路径。

## 入口

```text
DLL: dbghelp.dll; Header: dbghelp.h
```

```cpp
auto result = SymGetSearchPathW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\dbghelp.dll | findstr /i SymGetSearchPathW
```

## 参数与上下文

Loader 接口要记录 DLL 名称、完整路径、LoadLibraryEx flags、搜索路径和调用线程。映像/符号接口要记录文件句柄、映射基址、模块基址、PDB 路径、符号服务器和回溯上下文。

看到这类接口时，别只记成功或失败。查询对象、输出结构、ReturnLength、错误码和二次调用结果都要放在一起看。

## 返回与错误

Loader 多返回模块句柄或 BOOL，DbgHelp/ImageHlp 接口错误信息依赖 GetLastError。符号接口受全局进程状态影响，同一进程内初始化和清理顺序要写清楚。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

最后核对时，把模块来源、签名、哈希、加载顺序、搜索路径、导出函数和调用栈关联。DLL 劫持、旁加载、插件加载和崩溃分析都依赖这些字段。
