# 留言板

这里是大家的留言！

---

## 如何添加留言

由于本网站是静态托管，留言功能需要通过 GitHub 仓库的 **拉取请求 (Pull Request - PR)** 来实现。

请按照以下步骤贡献您的留言：

1.  **Fork 本仓库**：访问本网站的 GitHub 仓库 `https://github.com/ra1nyxin/ra1nyxin.github.io` (请替换为您的实际仓库地址)，点击右上角的 `Fork` 按钮，将仓库复制到您的 GitHub 账户下。

2.  **克隆您的 Fork 仓库**：将您 Fork 后的仓库克隆到本地：
    ```bash
    git clone https://github.com/您的用户名/ra1nyxin.github.io.git
    ```

3.  **创建新分支**：进入项目目录，并创建一个新的分支用于您的留言：
    ```bash
    cd ra1nyxin.github.io
    git checkout -b add-my-message
    ```

4.  **编辑 `messages.md` 文件**：
    打开项目根目录下的 `messages.md` 文件。在文件末尾添加您的留言，格式如下：
    ```markdown
    - **您的名字/昵称**: 您的留言内容。
    ```
    例如：
    ```markdown
    - **小雨**: 欢迎大家来这里留言！
    ```

5.  **提交并推送更改**：
    ```bash
    git add messages.md
    git commit -m "Add new message from [您的名字/昵称]"
    git push origin add-my-message
    ```

6.  **创建拉取请求 (Pull Request)**：
    *   访问您 Fork 后的 GitHub 仓库页面。
    *   您会看到一个提示，点击 `Compare & pull request` 按钮。
    *   填写 PR 标题和描述，然后点击 `Create pull request`。

您的留言将在审核通过后合并到主网站中。感谢您的贡献！

---

## 留言内容

- **小雨**: 欢迎来到我的留言板！期待您的留言！
- **访客1**: 网站设计很简洁，我很喜欢！
- **访客2**: 笔记内容很有用，学到了很多！
