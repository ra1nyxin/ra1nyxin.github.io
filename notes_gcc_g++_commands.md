# GCC / G++ 常用命令

`GCC` (GNU Compiler Collection) 和 `G++` (GCC 的 C++ 前端) 是广泛使用的编译器，用于将 C 和 C++ 源代码编译成可执行文件、库等。以下是一些常用的 `gcc` 和 `g++` 命令及其参数示例：

## 基本编译

-   **编译 C 语言源文件**
    将 `source.c` 编译为可执行文件 `a.out` (Linux/macOS) 或 `a.exe` (Windows)。
    ```bash
    gcc source.c
    ```

-   **编译 C++ 语言源文件**
    将 `source.cpp` 编译为可执行文件 `a.out` (Linux/macOS) 或 `a.exe` (Windows)。
    ```bash
    g++ source.cpp
    ```

-   **指定输出文件名**
    使用 `-o` 选项指定输出的可执行文件名。
    ```bash
    gcc source.c -o myprogram
    g++ source.cpp -o myprogram
    ```

## 编译过程控制

-   **只预处理**
    使用 `-E` 选项只进行预处理，输出预处理后的代码到标准输出。
    ```bash
    gcc -E source.c
    ```

-   **只编译不链接 (生成汇编代码)**
    使用 `-S` 选项只编译，生成汇编语言文件 (`.s` 或 `.asm`)。
    ```bash
    gcc -S source.c
    ```

-   **只编译不链接 (生成目标文件)**
    使用 `-c` 选项只编译，生成目标文件 (`.o` 或 `.obj`)。这在编译大型项目时很有用，可以分步编译。
    ```bash
    gcc -c source.c -o source.o
    g++ -c source.cpp -o source.o
    ```

## 优化编译

-   **优化级别**
    使用 `-O` 选项指定优化级别，可以提高程序运行效率，但可能增加编译时间。
    -   `-O0`: 无优化 (默认)
    -   `-O1`: 基本优化
    -   `-O2`: 更多优化，推荐用于生产环境
    -   `-O3`: 最高级别优化，可能增加编译时间，有时可能导致意想不到的行为
    -   `-Os`: 优化代码大小
    ```bash
    gcc -O2 source.c -o myprogram_optimized
    g++ -O3 source.cpp -o myprogram_highly_optimized
    ```

## 调试信息

-   **生成调试信息**
    使用 `-g` 选项在可执行文件中包含调试信息，以便使用 GDB 等调试器进行调试。
    ```bash
    gcc -g source.c -o myprogram_debug
    ```

## 警告和错误

-   **显示所有警告**
    使用 `-Wall` 选项显示所有常见的警告信息。
    ```bash
    gcc -Wall source.c
    ```

-   **将警告视为错误**
    使用 `-Werror` 选项将所有警告视为编译错误，这有助于强制编写更规范的代码。
    ```bash
    gcc -Wall -Werror source.c
    ```

## 链接库

-   **链接静态库**
    使用 `-L` 指定库路径，`-l` 指定库名 (例如，`libm.a` 对应 `-lm`)。
    ```bash
    gcc main.c -L/path/to/my/libs -lmymath -o myprogram
    ```

-   **链接动态库**
    与静态库类似，但链接的是动态库 (`.so` 或 `.dll`)。
    ```bash
    g++ main.cpp -L/path/to/my/libs -lmyutil -o myprogram
    ```

## 宏定义

-   **定义宏**
    使用 `-D` 选项在编译时定义宏。
    ```bash
    gcc -DDEBUG_MODE source.c
    ```

## 包含路径

-   **指定头文件搜索路径**
    使用 `-I` 选项指定额外的头文件搜索路径。
    ```bash
    gcc -I/path/to/my/includes source.c
    ```

## 特定平台/系统选项

-   **Windows: 无控制台窗口编译 (GUI 应用)**
    对于 Windows 上的 GUI 应用程序，使用 `-mwindows` 选项可以编译出没有控制台窗口的可执行文件。
    ```bash
    g++ main.cpp -o mygui_app.exe -mwindows
    ```

-   **Windows: 带程序图标编译**
    在 Windows 上，通常需要一个 `.rc` (资源脚本) 文件来包含程序图标。首先，你需要一个 `.ico` 文件，然后创建一个 `.rc` 文件引用它，再用 `windres` 工具将 `.rc` 文件编译成 `.res` 文件，最后在链接时包含 `.res` 文件。
    
    `icon.rc` 示例:
    ```rc
    IDI_ICON1 ICON "myicon.ico"
    ```
    
    编译命令:
    ```bash
    windres icon.rc -O coff -o icon.res
    g++ main.cpp icon.res -o myapp_with_icon.exe -mwindows
    ```

-   **Windows: 编译 DLL (动态链接库)**
    使用 `-shared` 选项编译动态链接库。通常还需要 `-o` 指定输出的 `.dll` 文件名。
    ```bash
    g++ -shared -o mylib.dll source.cpp
    ```

-   **Linux/macOS: 编译共享库 (`.so` / `.dylib`)**
    使用 `-shared` 选项编译共享库。在 Linux 上是 `.so`，在 macOS 上是 `.dylib`。
    ```bash
    g++ -shared -o libmyutil.so source.cpp
    ```

-   **Linux/macOS: 编译静态库 (`.a`)**
    首先编译成目标文件，然后使用 `ar` 工具创建静态库。
    ```bash
    g++ -c source.cpp -o source.o
    ar rcs libmyutil.a source.o
    ```

## 交叉编译

-   **指定目标架构**
    使用 `--target` 或特定交叉编译工具链前缀来指定目标架构。例如，为 ARM 架构编译：
    ```bash
    arm-linux-gnueabihf-gcc source.c -o myprogram_arm
    ```

这些命令涵盖了 `gcc` 和 `g++` 的大部分常用功能，可以帮助你进行 C/C++ 项目的编译和管理。