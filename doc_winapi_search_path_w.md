# Windows API 调用笔记：SearchPathW

SearchPathW 多见于 Shell、路径规范化、URL 和资源解析场景。这类调用常用来路径拼接、Shell 对象解析、文件关联、URL 处理、资源加载和桌面集成。排查时需要保留用户输入、规范化结果、最终路径和对象类型，避免被符号链接、短路径、UNC、重解析点或转义差异误导。

## 入口

```text
DLL: kernel32.dll; Header: processthreadsapi.h
```

```cpp
auto result = SearchPathW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i SearchPathW
```

## 参数与上下文

路径函数要记录输入长度、输出缓冲区、是否允许长路径、是否保留尾随反斜杠和是否解析根目录。Shell 接口要记录 PIDL、绑定对象、解析标志、窗口句柄和 COM 初始化状态。URL 接口要区分编码、解码、组合和 canonicalize 的顺序。

查询类调用的重点在信息类别和缓冲区处理。先记录请求了什么，再记录实际返回了多少数据，以及状态码是否符合预期。

## 返回与错误

Shell 和 PathCch 多数使用 HRESULT，旧 Path API 可能返回 BOOL 或指针。返回成功后仍要确认输出字符串长度和截断状态。

```cpp
HRESULT hr = result;
```

## 复核点

回看记录时，把原始输入、规范化输出、最终对象、调用身份和当前目录放在一起保存。涉及文件关联、协议处理器或 ShellExecute 的链路，还要记录打开方式和注册表来源。
