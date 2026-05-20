# Windows API 调用笔记：freeaddrinfo

freeaddrinfo 用于释放 getaddrinfo 返回的地址链表。它本身没有网络行为，但能帮助确认程序是否按 Winsock 解析流程处理地址结果。

## 入口

```text
DLL: ws2_32.dll; Header: ws2tcpip.h
```

```cpp
freeaddrinfo(result);
```

```powershell
dumpbin /exports C:\Windows\System32\ws2_32.dll | findstr /i freeaddrinfo
```

## 使用关注

只能释放 getaddrinfo 分配的链表。释放后不要继续访问链表节点。内存泄漏排查时，可把 getaddrinfo 和 freeaddrinfo 的调用次数按线程或请求维度对齐。

## 复核点

记录对应的 getaddrinfo 输入、返回地址数量、释放时间和调用栈。若地址链表被长期缓存，要区分缓存策略和泄漏问题。
