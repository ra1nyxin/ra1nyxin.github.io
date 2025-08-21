# npm 常用命令

`npm` (Node Package Manager) 是 Node.js 的包管理器，用于安装、管理和发布 Node.js 包。以下是一些常用的 npm 命令：

## 包管理

-   **`npm init`**
    初始化一个新的 Node.js 项目，会在当前目录创建一个 `package.json` 文件，用于定义项目信息和依赖。
    ```bash
    npm init
    npm init -y # 快速初始化，跳过提问
    ```

-   **`npm install`**
    安装项目依赖。如果在项目根目录运行，会根据 `package.json` 中的 `dependencies` 和 `devDependencies` 安装所有依赖。
    ```bash
    npm install
    npm i # 简写
    ```

-   **`npm install <package-name>`**
    安装指定的包到项目的 `node_modules` 目录，并将其添加到 `package.json` 的 `dependencies` 中。
    ```bash
    npm install express
    npm i express # 简写
    ```

-   **`npm install <package-name> --save-dev` 或 `npm install <package-name> -D`**
    安装指定的包作为开发依赖，并将其添加到 `package.json` 的 `devDependencies` 中。开发依赖通常用于开发和测试，而不是生产环境。
    ```bash
    npm install webpack --save-dev
    npm i webpack -D # 简写
    ```

-   **`npm install <package-name> --global` 或 `npm install <package-name> -g`**
    全局安装指定的包。全局安装的包通常是命令行工具，可以在系统的任何位置运行。
    ```bash
    npm install nodemon --global
    npm i nodemon -g # 简写
    ```

-   **`npm uninstall <package-name>`**
    卸载指定的包，并从 `package.json` 中移除其依赖。
    ```bash
    npm uninstall express
    ```

-   **`npm update`**
    更新项目中的所有依赖到 `package.json` 中定义的版本范围内的最新版本。
    ```bash
    npm update
    ```

-   **`npm update <package-name>`**
    更新指定的包。
    ```bash
    npm update express
    ```

## 查看包信息

-   **`npm list`**
    列出当前项目安装的所有依赖包及其版本。
    ```bash
    npm list
    npm ls # 简写
    ```

-   **`npm list -g`**
    列出所有全局安装的包。
    ```bash
    npm list -g
    npm ls -g # 简写
    ```

-   **`npm view <package-name> versions`**
    查看指定包的所有可用版本。
    ```bash
    npm view react versions
    ```

-   **`npm outdated`**
    检查项目中有哪些依赖包已经过时（有新版本可用）。
    ```bash
    npm outdated
    ```

## 运行脚本

-   **`npm run <script-name>`**
    运行 `package.json` 中 `scripts` 字段定义的脚本。
    ```json
    // package.json
    "scripts": {
        "start": "node app.js",
        "test": "jest"
    }
    ```
    ```bash
    npm run start
    npm run test
    ```
    对于 `start`、`test`、`stop` 等少数几个内置脚本，可以直接使用 `npm start`、`npm test`、`npm stop`。

## 其他常用命令

-   **`npm cache clean --force`**
    清除 npm 缓存。当遇到安装问题时，清除缓存有时能解决问题。
    ```bash
    npm cache clean --force
    ```

-   **`npm audit`**
    检查项目依赖中的已知安全漏洞。
    ```bash
    npm audit
    ```

-   **`npm docs <package-name>`**
    在浏览器中打开指定包的文档页面。
    ```bash
    npm docs express
    ```

-   **`npm root`**
    显示本地安装包的根目录。
    ```bash
    npm root
    ```

-   **`npm root -g`**
    显示全局安装包的根目录。
    ```bash
    npm root -g
    ```
