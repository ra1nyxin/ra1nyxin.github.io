const pageContents = {
    home: `
        <div class="container">
            <h1>Welcome to Owo</h1>
            <p>这里是小雨的一个位于GitHub托管的小网站，欢迎喵！</p>
            <section class="card">
                <h2>关于</h2>
                <p>这个项目旨在展示如何使用纯前端技术创建一个具有现代感和响应式设计的网站</p>
            </section>
            <section class="card">
                <h2>功能</h2>
                <ul>
                    <li>深色主题</li>
                    <li>顶部导航栏</li>
                    <li>响应式布局</li>
                </ul>
            </section>
        </div>
    `,
    notes: `
        <div class="container">
            <h1>笔记</h1>
            <p>这里是我的笔记内容</p>
            <div id="git-commands-tutorial"></div>
            <div id="terminal-commands-tutorial"></div>
        </div>
    `,
    test: `
        <div class="container">
            <h1>测试页面</h1>
            <p>这是一个用于测试的页面</p>
            <section class="card">
                <h2>测试区域</h2>
                <p>你可以在这里进行各种测试</p>
            </section>
        </div>
    `,
    message: `
        <div class="container">
            <h1>留言板</h1>
            <p>欢迎留言！</p>
            <section class="card">
                <h2>留言</h2>
                <form>
                    <textarea placeholder="写下你的留言..." rows="5" style="width: 100%; background-color: #0d1117; border: 1px solid #30363d; border-radius: 6px; padding: 8px; color: #c9d1d9;"></textarea>
                    <button type="submit" style="background-color: #238636; color: white; border: none; border-radius: 6px; padding: 10px 15px; cursor: pointer; margin-top: 10px;">提交留言</button>
                </form>
            </section>
        </div>
    `,
    other: `
        <div class="container">
            <h1>其他</h1>
            <p>这里是其他内容</p>
            <section class="card">
                <h2>更多信息</h2>
                <p>敬请期待更多内容</p>
            </section>
        </div>
    `
};

async function loadMarkdownContent(filePath, targetElementId) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const markdown = await response.text();
        const html = marked.parse(markdown);
        const targetElement = document.getElementById(targetElementId);
        if (targetElement) {
            targetElement.innerHTML = html;
            // Add copy buttons to code blocks after rendering
            targetElement.querySelectorAll('pre code').forEach(codeBlock => {
                const preElement = codeBlock.parentNode;
                const wrapperDiv = document.createElement('div');
                wrapperDiv.classList.add('code-block');
                preElement.parentNode.insertBefore(wrapperDiv, preElement);
                wrapperDiv.appendChild(preElement);

                const copyButton = document.createElement('button');
                copyButton.classList.add('copy-button');
                copyButton.textContent = '复制';
                copyButton.onclick = () => copyCode(copyButton);
                wrapperDiv.appendChild(copyButton);
            });
        }
    } catch (error) {
        console.error('Error loading markdown content:', error);
        const targetElement = document.getElementById(targetElementId);
        if (targetElement) {
            targetElement.innerHTML = `<p style="color: red;">加载内容失败: ${error.message}</p>`;
        }
    }
}

function githubSearch() {
    const query = document.getElementById('github-search-input').value;
    if (query) {
        window.location.href = `https://github.com/search?q=${encodeURIComponent(query)}&type=repositories`;
    }
}

function loadContent(page) {
    const mainContent = document.querySelector('main.content');
    if (pageContents[page]) {
        mainContent.innerHTML = pageContents[page];
        if (page === 'notes') {
            loadMarkdownContent('notes_git_commands.md', 'git-commands-tutorial');
            loadMarkdownContent('notes_terminal_commands.md', 'terminal-commands-tutorial');
        }
    } else {
        mainContent.innerHTML = `<div class="container"><h1>页面未找到</h1><p>您请求的页面不存在</p></div>`;
    }
}

// 页面加载完成后默认加载主页内容
document.addEventListener('DOMContentLoaded', () => {
    loadContent('home');
});

function copyCode(button) {
    // Find the code element relative to the button's parent (the .code-block div)
    const codeBlockWrapper = button.closest('.code-block');
    const codeElement = codeBlockWrapper ? codeBlockWrapper.querySelector('pre code') : null;

    if (codeElement) {
        const textToCopy = codeElement.innerText;

        navigator.clipboard.writeText(textToCopy).then(() => {
            button.textContent = '已复制!';
            setTimeout(() => {
                button.textContent = '复制';
            }, 2000);
        }).catch(err => {
            console.error('复制失败:', err);
        });
    } else {
        console.error('无法找到要复制的代码块');
    }
}

console.log("网站已加载");
