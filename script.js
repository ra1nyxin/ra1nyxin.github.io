const pageContents = {
    home: `
        <div class="container">
            <h1>Welcome to Owo</h1>
            <p>这里是小雨的一个位于GitHub托管的小网站，欢迎喵！</p>
            <section class="card">
                <h2>关于</h2>
                <p>一个平平无奇的小网站喵喵喵</p>
            </section>
            <section class="card">
                <h2>占位符</h2>
                <ul>
                    <li>主页还没想到写什么好捏 qwq</li>
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
            <div id="proxy-settings-tutorial"></div>
            <div id="npm-commands-tutorial"></div>
            <div id="gcc-gpp-commands-tutorial"></div>
            <div id="dotnet-commands-tutorial"></div>
            <div id="powershell-commands-tutorial"></div>
        </div>
    `,
    test: `
        <div class="container">
            <h1>测试页面</h1>
            <p>这是一个用于测试的页面</p>
            <section class="card">
                <h2>测试区域</h2>
                <div id="video-player-container">
                    <video id="nggyu-video" width="100%" controls loop autoplay>
                        <source src="nggyu.mp4" type="video/mp4">
                        您的浏览器不支持视频播放。
                    </video>
                </div>
            </section>
        </div>
    `,
    gallery: `
        <div class="container">
            <h1>图库</h1>
            <div class="gallery-grid"></div>
        </div>
    `,
    docs: `
        <div class="container">
            <h1>文档</h1>
            <p>所有 <code>doc_*.md</code> 文件将自动加载并展示。</p>
            <div id="docs-content" class="docs-grid"></div>
        </div>
    `,
    message: `
        <div class="container">
            <h1>留言板</h1>
            <p>欢迎大家通过贡献代码的方式来添加留言！</p>
            <section class="card">
                <div id="messages-content"></div>
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
    `,
    manual: `
        <div class="container">
            <h1>操作手册</h1>
            <p>喵喵喵</p>
            <div id="manual-content"></div>
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
        let html = marked.parse(markdown);
        const targetElement = document.getElementById(targetElementId);
        if (targetElement) {
            targetElement.innerHTML = html;

            if (filePath === 'messages.md') {
                // Process messages to add GitHub avatars
                targetElement.querySelectorAll('ul li').forEach(listItem => {
                    const strongTag = listItem.querySelector('strong');
                    if (strongTag) {
                        const username = strongTag.textContent.replace(':', '').trim();
                        if (username) {
                            const avatarUrl = `https://github.com/${username}.png`;
                            const avatarImg = document.createElement('img');
                            avatarImg.src = avatarUrl;
                            avatarImg.alt = `${username}'s GitHub Avatar`;
                            avatarImg.classList.add('github-avatar');
                            strongTag.parentNode.insertBefore(avatarImg, strongTag);
                        }
                    }
                });
            }

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

function renderGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
        galleryGrid.innerHTML = ''; // Clear existing content
        // Ensure galleryImages is defined globally by gallery_data.js
        if (typeof galleryImages !== 'undefined' && galleryImages.length > 0) {
            galleryImages.forEach(image => {
                const galleryItem = document.createElement('div');
                galleryItem.classList.add('gallery-item');

                const img = document.createElement('img');
                img.src = image.path;
                img.alt = `Image from ${image.folder} folder`;

                const folderInfo = document.createElement('p');
                folderInfo.classList.add('gallery-folder-info');
                folderInfo.textContent = `Path: ${image.path}`;

                galleryItem.appendChild(img);
                galleryItem.appendChild(folderInfo);
                galleryGrid.appendChild(galleryItem);
            });

            // Initialize Masonry after images are added
            // imagesLoaded is usually included with Masonry CDN, or can be loaded separately
            if (typeof imagesLoaded !== 'undefined') {
                imagesLoaded(galleryGrid, function() {
                    new Masonry(galleryGrid, {
                        itemSelector: '.gallery-item',
                        columnWidth: '.gallery-item', // Masonry will use the width of the first item
                        gutter: 10, // Match gap from CSS
                        percentPosition: true // Use percentage for columnWidth
                    });
                });
            } else {
                // Fallback if imagesLoaded is not available (less reliable)
                console.warn('imagesLoaded not found. Masonry layout might be incorrect if images load slowly.');
                setTimeout(() => {
                    new Masonry(galleryGrid, {
                        itemSelector: '.gallery-item',
                        columnWidth: '.gallery-item',
                        gutter: 10,
                        percentPosition: true
                    });
                }, 500); // Give some time for images to load
            }

        } else {
            galleryGrid.innerHTML = '<p>No images found in gallery. Please add images to the `img/` directory and push to GitHub to generate `gallery_data.js`.</p>';
        }
    }
}

const DOCS_REPO_OWNER = 'ra1nyxin';
const DOCS_REPO_NAME = 'ra1nyxin.github.io';
const docFallbackFiles = [
    'doc_winexesec.md',
    'doc_to_msf_c_payload.md',
    'doc_to_msf_cpp_payload.md',
    'doc_to_msf_go_payload.md',
    'doc_msf_install.md',
    'doc_msf_use.md',
    'doc_msf_config.md'
];

function loadContent(page) {
    const mainContent = document.querySelector('main.content');
    if (pageContents[page]) {
        mainContent.innerHTML = pageContents[page];
        if (page === 'notes') {
            loadMarkdownContent('notes_git_commands.md', 'git-commands-tutorial');
            loadMarkdownContent('notes_terminal_commands.md', 'terminal-commands-tutorial');
            loadMarkdownContent('notes_proxy_settings.md', 'proxy-settings-tutorial');
            loadMarkdownContent('notes_npm_commands.md', 'npm-commands-tutorial');
            loadMarkdownContent('notes_gcc_g++_commands.md', 'gcc-gpp-commands-tutorial');
            loadMarkdownContent('notes_dotnet_commands.md', 'dotnet-commands-tutorial');
            loadMarkdownContent('notes_powershell_commands.md', 'powershell-commands-tutorial');
        } else if (page === 'gallery') {
            renderGallery();
        } else if (page === 'message') {
            loadMarkdownContent('messages.md', 'messages-content');
        } else if (page === 'docs') {
            loadDocsPage();
        } else if (page === 'manual') {
            loadMarkdownContent('operationmanual.txt', 'manual-content');
        } else if (page === 'test') {
            const videoElement = document.getElementById('nggyu-video');
            if (videoElement) {
                videoElement.muted = true;
                videoElement.play().then(() => {
                    videoElement.muted = false;
                }).catch(error => {
                    console.error(error);
                });
            }
        }
    } else {
        mainContent.innerHTML = `<div class="container"><h1>页面未找到</h1><p>您请求的页面不存在</p></div>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadContent('home');
    initStarfield();
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

async function loadDocsPage() {
    const docsContainer = document.getElementById('docs-content');
    if (!docsContainer) return;

    docsContainer.innerHTML = '<p>正在加载文档列表...</p>';
    const docFiles = await fetchDocFileList();

    if (!docFiles.length) {
        docsContainer.innerHTML = '<p>没有找到任何 doc_*.md 文档。</p>';
        return;
    }

    docsContainer.innerHTML = '';
    docFiles.forEach(fileName => {
        const section = document.createElement('section');
        section.classList.add('card', 'doc-card');

        const title = document.createElement('h2');
        title.textContent = formatDocTitle(fileName);
        section.appendChild(title);

        const contentId = `doc-section-${sanitizeId(fileName)}`;
        const contentDiv = document.createElement('div');
        contentDiv.id = contentId;
        section.appendChild(contentDiv);

        docsContainer.appendChild(section);
        loadMarkdownContent(fileName, contentId);
    });
}

async function fetchDocFileList() {
    const apiUrl = `https://api.github.com/repos/${DOCS_REPO_OWNER}/${DOCS_REPO_NAME}/contents/`;
    try {
        const response = await fetch(apiUrl, { headers: { 'Accept': 'application/vnd.github+json' } });
        if (!response.ok) {
            throw new Error(`GitHub API 返回 ${response.status}`);
        }
        const data = await response.json();
        const docFiles = data
            .filter(item => item.type === 'file' && /^doc_.*\.md$/i.test(item.name))
            .map(item => item.name)
            .sort();
        if (docFiles.length > 0) {
            return docFiles;
        }
    } catch (error) {
        console.error('获取 doc_*.md 列表失败，使用本地回退名单:', error);
    }
    return docFallbackFiles;
}

function formatDocTitle(fileName) {
    const base = fileName.replace(/^doc_/i, '').replace(/\.md$/i, '');
    return base.replace(/[_-]+/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}

function sanitizeId(fileName) {
    return fileName.replace(/[^a-z0-9]/gi, '-').toLowerCase();
}

function initStarfield() {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let stars = [];
    const starCount = 140;
    const minRadius = 0.4;
    const maxRadius = 1.2;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createStars();
    }

    function createStars() {
        stars = [];
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: minRadius + Math.random() * (maxRadius - minRadius),
                alpha: Math.random(),
                twinkleSpeed: 0.005 + Math.random() * 0.015
            });
        }
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ffffff';

        stars.forEach(star => {
            ctx.globalAlpha = star.alpha;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();

            star.alpha += star.twinkleSpeed;
            if (star.alpha >= 1 || star.alpha <= 0.1) {
                star.twinkleSpeed = -star.twinkleSpeed;
            }
        });

        ctx.globalAlpha = 1;
        requestAnimationFrame(drawStars);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawStars();
}
