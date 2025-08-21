# .NET 常用命令

`.NET CLI` (Command-Line Interface) 是一个跨平台的工具集，用于开发、构建、运行和发布 .NET 应用程序。以下是一些常用的 `dotnet` 命令及其参数示例：

## 项目管理

-   **`dotnet new`**
    创建新的 .NET 项目、配置文件或解决方案。可以通过 `-l` 或 `--list` 查看所有可用的模板。
    ```bash
    dotnet new console -o MyConsoleApp # 创建一个新的控制台应用项目
    dotnet new webapi -o MyWebApi # 创建一个新的 Web API 项目
    dotnet new sln -o MySolution # 创建一个新的解决方案文件
    dotnet new -l # 列出所有可用的项目模板
    ```

-   **`dotnet new <template> --name <name> --output <output_directory>`**
    使用指定模板创建项目，并指定项目名称和输出目录。
    ```bash
    dotnet new console --name MyAwesomeApp --output src/MyAwesomeApp
    ```

-   **`dotnet add reference`**
    向项目添加项目到项目的引用。
    ```bash
    dotnet add MyProject/MyProject.csproj reference AnotherProject/AnotherProject.csproj
    ```

-   **`dotnet add package`**
    向项目添加 NuGet 包引用。
    ```bash
    dotnet add package Newtonsoft.Json
    dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 5.0.0
    ```

-   **`dotnet remove reference`**
    从项目移除项目引用。
    ```bash
    dotnet remove MyProject/MyProject.csproj reference AnotherProject/AnotherProject.csproj
    ```

-   **`dotnet remove package`**
    从项目移除 NuGet 包引用。
    ```bash
    dotnet remove package Newtonsoft.Json
    ```

## 构建和运行

-   **`dotnet restore`**
    恢复项目的依赖项。通常在 `build`、`run`、`publish` 等命令执行前自动调用。
    ```bash
    dotnet restore
    ```

-   **`dotnet build`**
    构建项目及其所有依赖项。生成可执行文件或库。
    ```bash
    dotnet build # 构建 Debug 配置
    dotnet build --configuration Release # 构建 Release 配置
    dotnet build -c Release # 简写
    ```

-   **`dotnet run`**
    从源代码运行项目。它会先执行 `restore` 和 `build`，然后运行应用程序。
    ```bash
    dotnet run
    dotnet run --project MyConsoleApp/MyConsoleApp.csproj # 运行指定项目
    ```

-   **`dotnet watch run`**
    在文件更改时自动重新构建和运行应用程序，非常适合开发。
    ```bash
    dotnet watch run
    ```

## 发布应用程序

-   **`dotnet publish`**
    将应用程序及其依赖项打包到一个文件夹中，以便部署。默认发布为 `Debug` 配置。
    ```bash
    dotnet publish # 发布 Debug 配置
    dotnet publish --configuration Release # 发布 Release 配置
    dotnet publish -c Release # 简写
    ```

-   **指定输出目录**
    使用 `-o` 或 `--output` 指定发布输出的目录。
    ```bash
    dotnet publish -c Release -o ./publish_output
    ```

-   **指定运行时 (RID)**
    使用 `-r` 或 `--runtime` 指定目标运行时标识符 (RID)，用于创建自包含部署。
    ```bash
    dotnet publish -c Release -r win-x64 # 发布 Windows 64位自包含应用
    dotnet publish -c Release -r linux-x64 # 发布 Linux 64位自包含应用
    ```

-   **创建单文件可执行文件**
    使用 `/p:PublishSingleFile=true` 参数创建单个可执行文件。
    ```bash
    dotnet publish -c Release -r win-x64 /p:PublishSingleFile=true
    ```

-   **裁剪未使用的程序集**
    使用 `/p:PublishTrimmed=true` 参数裁剪未使用的程序集，减小发布大小。
    ```bash
    dotnet publish -c Release -r win-x64 /p:PublishTrimmed=true
    ```

## 测试

-   **`dotnet test`**
    运行项目中的单元测试。
    ```bash
    dotnet test
    ```

## 清理

-   **`dotnet clean`**
    清理项目输出和中间文件。
    ```bash
    dotnet clean
    ```

## 其他常用命令

-   **`dotnet tool install --global <tool-name>`**
    全局安装 .NET 工具。
    ```bash
    dotnet tool install --global dotnet-ef
    ```

-   **`dotnet tool update --global <tool-name>`**
    更新全局 .NET 工具。
    ```bash
    dotnet tool update --global dotnet-ef
    ```

-   **`dotnet tool uninstall --global <tool-name>`**
    卸载全局 .NET 工具。
    ```bash
    dotnet tool uninstall --global dotnet-ef
    ```

-   **`dotnet workload install <workload-id>`**
    安装 .NET 工作负载，例如用于 Blazor WebAssembly 或 MAUI 开发。
    ```bash
    dotnet workload install wasm-tools
    ```

-   **`dotnet --info`**
    显示 .NET SDK 和运行时环境的信息。
    ```bash
    dotnet --info
    ```

这些命令涵盖了 .NET CLI 的大部分常用功能，可以帮助你进行 .NET 项目的开发、构建、发布和管理。