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
    game: `
        <div class="container">
            <div class="game-shell">
                <div class="game-header">
                    <div>
                        <h1 id="game-title">Void Runner</h1>
                        <p id="game-subtitle">Drift through the quiet edge of space.</p>
                        <div class="game-picker" role="tablist" aria-label="Game selection">
                            <button type="button" class="is-active" data-game-choice="runner">Void Runner</button>
                            <button type="button" data-game-choice="orbit">Orbit Drift</button>
                            <button type="button" data-game-choice="pulse">Pulse Gate</button>
                        </div>
                    </div>
                    <div class="game-stats">
                        <span>Score <strong id="game-score">0</strong></span>
                        <span>Best <strong id="game-best">0</strong></span>
                    </div>
                </div>
                <div class="game-stage-wrap" id="void-runner-wrap">
                    <div id="void-runner" class="game-stage" aria-label="Game area"></div>
                    <div class="game-overlay" id="game-overlay">
                        <strong>Void Runner</strong>
                        <span>Press Space or tap to launch.</span>
                    </div>
                </div>
                <div class="game-controls">
                    <button type="button" id="game-start">Start</button>
                    <button type="button" id="game-pause">Pause</button>
                    <span id="game-help-primary">Space / tap: jump</span>
                    <span id="game-help-secondary">Shift / down: slide, down in air: fast drop</span>
                </div>
            </div>
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

const THEME_STORAGE_KEY = 'owo-theme';
const VOID_RUNNER_BEST_KEY = 'void-runner-best';
const ORBIT_DRIFT_BEST_KEY = 'orbit-drift-best';
const PULSE_GATE_BEST_KEY = 'pulse-gate-best';
let cleanupCurrentPage = null;

function applyTheme(theme) {
    const nextTheme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;

    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        const isLight = nextTheme === 'light';
        const label = isLight ? '切换到深色模式' : '切换到浅色模式';
        toggleButton.setAttribute('aria-label', label);
        toggleButton.setAttribute('title', label);
    }
}

function initThemeToggle() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    applyTheme(savedTheme);

    const toggleButton = document.getElementById('theme-toggle');
    if (!toggleButton) return;

    toggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.dataset.theme || 'dark';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
        applyTheme(nextTheme);
    });
}

function cleanupPage() {
    if (typeof cleanupCurrentPage === 'function') {
        cleanupCurrentPage();
        cleanupCurrentPage = null;
    }
}

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
    cleanupPage();
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
        } else if (page === 'game') {
            cleanupCurrentPage = initVoidRunner();
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

function initVoidRunner() {
    const mount = document.getElementById('void-runner');
    const overlay = document.getElementById('game-overlay');
    const startButton = document.getElementById('game-start');
    const pauseButton = document.getElementById('game-pause');
    const scoreElement = document.getElementById('game-score');
    const bestElement = document.getElementById('game-best');
    const titleElement = document.getElementById('game-title');
    const subtitleElement = document.getElementById('game-subtitle');
    const primaryHelpElement = document.getElementById('game-help-primary');
    const secondaryHelpElement = document.getElementById('game-help-secondary');
    const pickerButtons = Array.from(document.querySelectorAll('[data-game-choice]'));

    if (!mount || typeof Phaser === 'undefined') {
        if (overlay) {
            overlay.innerHTML = '<strong>Game failed</strong><span>Phaser did not load.</span>';
        }
        return null;
    }

    let game;
    let sceneApi = null;
    let destroyed = false;
    let activeGame = 'runner';

    const gameMeta = {
        runner: {
            title: 'Void Runner',
            subtitle: 'Drift through the quiet edge of space.',
            bestKey: VOID_RUNNER_BEST_KEY,
            primaryHelp: 'W / Space / up: jump',
            secondaryHelp: 'S / Shift / down: slide, down in air: fast drop'
        },
        orbit: {
            title: 'Orbit Drift',
            subtitle: 'Hold your orbit and thread the debris field.',
            bestKey: ORBIT_DRIFT_BEST_KEY,
            primaryHelp: 'Space / tap: reverse orbit',
            secondaryHelp: 'Avoid debris and collect blue sparks'
        },
        pulse: {
            title: 'Pulse Gate',
            subtitle: 'Switch lanes through a quiet field of signal gates.',
            bestKey: PULSE_GATE_BEST_KEY,
            primaryHelp: 'WASD / arrows / Space: switch lane',
            secondaryHelp: 'Avoid red gates and collect blue pulses'
        }
    };

    const getCssColor = (name, fallback) => {
        return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
    };

    const toHex = (color, fallback) => {
        const value = color || fallback;
        if (value.startsWith('#')) {
            return Number.parseInt(value.slice(1), 16);
        }
        return Number.parseInt(fallback.slice(1), 16);
    };

    const setOverlay = (title, line, visible = true) => {
        if (!overlay) return;
        overlay.classList.toggle('is-hidden', !visible);
        if (visible) {
            overlay.innerHTML = `<strong>${title}</strong><span>${line}</span>`;
        }
    };

    const getBest = gameKey => Number(localStorage.getItem(gameMeta[gameKey].bestKey) || 0);

    const saveBest = (gameKey, score) => {
        const best = getBest(gameKey);
        if (score > best) {
            localStorage.setItem(gameMeta[gameKey].bestKey, String(score));
            if (bestElement && activeGame === gameKey) bestElement.textContent = String(score);
            return score;
        }
        return best;
    };

    const updateChrome = gameKey => {
        const meta = gameMeta[gameKey];
        if (titleElement) titleElement.textContent = meta.title;
        if (subtitleElement) subtitleElement.textContent = meta.subtitle;
        if (primaryHelpElement) primaryHelpElement.textContent = meta.primaryHelp;
        if (secondaryHelpElement) secondaryHelpElement.textContent = meta.secondaryHelp;
        if (scoreElement) scoreElement.textContent = '0';
        if (bestElement) bestElement.textContent = String(getBest(gameKey));
        if (pauseButton) pauseButton.textContent = 'Pause';
        pickerButtons.forEach(button => {
            const isActive = button.dataset.gameChoice === gameKey;
            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-selected', String(isActive));
        });
    };

    const destroyGame = () => {
        sceneApi = null;
        if (game) {
            game.destroy(true);
            game = null;
        }
        mount.innerHTML = '';
    };

    class RunnerScene extends Phaser.Scene {
        constructor() {
            super('runner');
            this.started = false;
            this.gameOver = false;
            this.isPaused = false;
            this.isSliding = false;
            this.score = 0;
            this.best = getBest('runner');
            this.speed = 320;
            this.spawnTimer = 0;
            this.spawnDelay = 1450;
            this.starLayers = [];
            this.groundY = 0;
            this.dropHeld = false;
        }

        create() {
            const width = this.scale.width;
            const height = this.scale.height;
            const textColor = getCssColor('--text-color', '#c9d1d9');
            const accentColor = getCssColor('--accent-color', '#58a6ff');
            const borderColor = getCssColor('--border-color', '#30363d');
            this.groundY = height - 58;

            this.physics.world.gravity.y = 1550;
            this.cameras.main.setBackgroundColor('rgba(0,0,0,0)');

            this.createTextures(textColor, accentColor, borderColor);
            this.buildStarLayers(width, height);

            this.floorLine = this.add.rectangle(width / 2, this.groundY, width, 2, toHex(borderColor, '#30363d'), 0.95);
            this.ground = this.physics.add.staticImage(width / 2, this.groundY + 9, 'ground');
            this.ground.setDisplaySize(width, 18).setVisible(false).refreshBody();
            this.runner = this.physics.add.sprite(96, this.groundY, 'runner');
            this.runner.setOrigin(0.5, 1);
            this.runner.setCollideWorldBounds(true);
            this.setRunnerBody(false);
            this.physics.add.collider(this.runner, this.ground);

            this.obstacles = this.physics.add.staticGroup();
            this.physics.add.overlap(this.runner, this.obstacles, () => this.endRun(), null, this);

            this.keys = this.input.keyboard.addKeys({
                jump: Phaser.Input.Keyboard.KeyCodes.SPACE,
                w: Phaser.Input.Keyboard.KeyCodes.W,
                up: Phaser.Input.Keyboard.KeyCodes.UP,
                slide: Phaser.Input.Keyboard.KeyCodes.SHIFT,
                s: Phaser.Input.Keyboard.KeyCodes.S,
                down: Phaser.Input.Keyboard.KeyCodes.DOWN,
                pause: Phaser.Input.Keyboard.KeyCodes.P
            });

            this.input.on('pointerdown', pointer => {
                if (pointer.downY > height * 0.62) {
                    this.dropOrSlide(true);
                } else {
                    this.jumpOrStart();
                }
            });
            this.input.on('pointerup', () => this.dropOrSlide(false));

            sceneApi = {
                start: () => this.startRun(),
                pause: () => this.togglePause(),
                jump: () => this.jumpOrStart(),
                drop: active => this.dropOrSlide(active),
                destroy: () => {}
            };
        }

        createTextures(textColor, accentColor, borderColor) {
            const runnerGraphics = this.make.graphics({ x: 0, y: 0, add: false });
            runnerGraphics.fillStyle(toHex(accentColor, '#58a6ff'), 1);
            runnerGraphics.fillRoundedRect(18, 8, 30, 44, 10);
            runnerGraphics.fillStyle(toHex(textColor, '#c9d1d9'), 1);
            runnerGraphics.fillCircle(42, 18, 4);
            runnerGraphics.fillRect(13, 48, 11, 16);
            runnerGraphics.fillRect(38, 48, 11, 16);
            runnerGraphics.lineStyle(2, toHex(borderColor, '#30363d'), 1);
            runnerGraphics.strokeRoundedRect(18, 8, 30, 44, 10);
            runnerGraphics.generateTexture('runner', 64, 64);
            runnerGraphics.destroy();

            const cometGraphics = this.make.graphics({ x: 0, y: 0, add: false });
            cometGraphics.fillStyle(toHex(borderColor, '#30363d'), 1);
            cometGraphics.fillTriangle(10, 64, 28, 22, 46, 64);
            cometGraphics.fillStyle(toHex(accentColor, '#58a6ff'), 0.85);
            cometGraphics.fillTriangle(24, 55, 28, 34, 34, 55);
            cometGraphics.generateTexture('spike', 56, 64);
            cometGraphics.destroy();

            const gateGraphics = this.make.graphics({ x: 0, y: 0, add: false });
            gateGraphics.lineStyle(5, toHex(accentColor, '#58a6ff'), 1);
            gateGraphics.strokeRoundedRect(4, 4, 26, 92, 8);
            gateGraphics.fillStyle(toHex(accentColor, '#58a6ff'), 0.25);
            gateGraphics.fillRoundedRect(10, 10, 14, 80, 6);
            gateGraphics.generateTexture('gate', 36, 100);
            gateGraphics.destroy();

            const groundGraphics = this.make.graphics({ x: 0, y: 0, add: false });
            groundGraphics.fillStyle(0xffffff, 0);
            groundGraphics.fillRect(0, 0, 1, 1);
            groundGraphics.generateTexture('ground', 1, 1);
            groundGraphics.destroy();
        }

        buildStarLayers(width, height) {
            const starColor = toHex(getCssColor('--star-color', '#ffffff'), '#ffffff');
            for (let layer = 0; layer < 3; layer++) {
                const key = `void-stars-${layer}`;
                const graphics = this.make.graphics({ x: 0, y: 0, add: false });
                graphics.fillStyle(starColor, 0.35 + layer * 0.18);
                const count = 36 + layer * 22;
                for (let i = 0; i < count; i++) {
                    const x = Phaser.Math.Between(0, width);
                    const y = Phaser.Math.Between(20, height - 110);
                    const radius = Phaser.Math.FloatBetween(0.8, 1.8 + layer * 0.4);
                    graphics.fillCircle(x, y, radius);
                }
                graphics.generateTexture(key, width, height);
                graphics.destroy();

                const tile = this.add.tileSprite(0, 0, width, height, key);
                tile.setOrigin(0, 0);
                this.starLayers.push({ tile, speed: 0.08 + layer * 0.08 });
            }
        }

        update(time, delta) {
            const dt = delta / 1000;

            this.starLayers.forEach(layer => {
                layer.tile.tilePositionX += this.speed * layer.speed * dt;
            });

            if (Phaser.Input.Keyboard.JustDown(this.keys.pause)) {
                this.togglePause();
            }

            if (
                Phaser.Input.Keyboard.JustDown(this.keys.jump) ||
                Phaser.Input.Keyboard.JustDown(this.keys.w) ||
                Phaser.Input.Keyboard.JustDown(this.keys.up)
            ) {
                this.jumpOrStart();
            }

            this.dropOrSlide(this.keys.slide.isDown || this.keys.s.isDown || this.keys.down.isDown);

            if (!this.started || this.gameOver || this.isPaused) return;

            this.score += delta * 0.012;
            this.speed = Math.min(680, 320 + this.score * 2.2);
            this.spawnTimer -= delta;

            if (this.spawnTimer <= 0) {
                this.spawnObstacle();
                this.spawnDelay = Phaser.Math.Between(820, 1480) - Math.min(380, this.score * 2);
                this.spawnTimer = Math.max(620, this.spawnDelay);
            }

            this.obstacles.children.iterate(obstacle => {
                if (!obstacle) return;
                obstacle.x -= this.speed * dt;
                obstacle.refreshBody();
                if (obstacle.x < -80) {
                    obstacle.destroy();
                }
            });

            this.updateScore();
        }

        isGrounded() {
            return this.runner.body.blocked.down || this.runner.body.touching.down;
        }

        setRunnerBody(sliding) {
            if (sliding) {
                this.runner.body.setSize(34, 25).setOffset(15, 37);
            } else {
                this.runner.body.setSize(28, 44).setOffset(20, 18);
            }
        }

        jumpOrStart() {
            if (this.gameOver) {
                this.startRun();
                return;
            }
            if (!this.started) {
                this.startRun();
                return;
            }
            if (this.isGrounded()) {
                this.dropHeld = false;
                this.runner.setVelocityY(-650);
            }
        }

        dropOrSlide(active) {
            if (!this.started || this.gameOver || this.isPaused) return;
            if (active && !this.isGrounded()) {
                this.dropHeld = true;
                this.runner.setVelocityY(980);
                return;
            }
            if (!active) {
                this.dropHeld = false;
            }
            if (this.dropHeld && this.isGrounded()) {
                this.dropHeld = false;
            }

            if (active && !this.isSliding && this.isGrounded()) {
                this.isSliding = true;
                this.runner.setScale(1, 0.62);
                this.setRunnerBody(true);
            } else if (!active && this.isSliding) {
                this.isSliding = false;
                this.runner.setScale(1, 1);
                this.setRunnerBody(false);
            }
        }

        startRun() {
            this.started = true;
            this.gameOver = false;
            this.isPaused = false;
            this.score = 0;
            this.speed = 320;
            this.spawnTimer = 700;
            this.isSliding = false;
            this.dropHeld = false;
            this.runner.setScale(1, 1);
            this.setRunnerBody(false);
            this.runner.setPosition(96, this.groundY);
            this.runner.setVelocity(0, 0);
            this.obstacles.clear(true, true);
            setOverlay('', '', false);
            if (pauseButton) pauseButton.textContent = 'Pause';
            this.scene.resume();
            this.updateScore();
        }

        togglePause() {
            if (!this.started || this.gameOver) return;
            this.isPaused = !this.isPaused;
            if (pauseButton) pauseButton.textContent = this.isPaused ? 'Resume' : 'Pause';
            setOverlay('Paused', 'Press P or Resume to continue.', this.isPaused);
        }

        spawnObstacle() {
            const useGate = this.score > 120 && Math.random() > 0.62;
            const texture = useGate ? 'gate' : 'spike';
            const obstacle = this.obstacles.create(this.scale.width + 40, this.groundY, texture);
            obstacle.setOrigin(0.5, 1);
            if (useGate) {
                obstacle.body.setSize(16, 64).setOffset(10, 27);
            } else {
                obstacle.body.setSize(16, 30).setOffset(20, 34);
            }
            obstacle.refreshBody();
        }

        endRun() {
            if (this.gameOver) return;
            this.gameOver = true;
            this.started = false;
            this.runner.setVelocityY(-180);
            this.cameras.main.shake(130, 0.004);

            const finalScore = Math.floor(this.score);
            this.best = saveBest('runner', finalScore);

            setOverlay('Run Ended', `Score ${finalScore}. Press Space or Start to retry.`);
        }

        updateScore() {
            if (scoreElement) scoreElement.textContent = String(Math.floor(this.score));
            if (bestElement) bestElement.textContent = String(this.best);
        }
    }

    class OrbitScene extends Phaser.Scene {
        constructor() {
            super('orbit');
            this.started = false;
            this.gameOver = false;
            this.isPaused = false;
            this.score = 0;
            this.best = getBest('orbit');
            this.angle = -90;
            this.direction = 1;
            this.radius = 92;
            this.spawnTimer = 0;
            this.collectTimer = 0;
            this.hazards = null;
            this.sparks = null;
            this.starLayers = [];
        }

        create() {
            const width = this.scale.width;
            const height = this.scale.height;
            this.center = { x: width / 2, y: height / 2 + 8 };
            this.cameras.main.setBackgroundColor('rgba(0,0,0,0)');
            this.physics.world.gravity.y = 0;
            this.createOrbitTextures();
            this.buildStarLayers(width, height);

            const borderColor = toHex(getCssColor('--border-color', '#30363d'), '#30363d');
            const accentColor = toHex(getCssColor('--accent-color', '#58a6ff'), '#58a6ff');
            this.orbitRing = this.add.circle(this.center.x, this.center.y, this.radius, borderColor, 0.12);
            this.orbitRing.setStrokeStyle(2, borderColor, 0.9);
            this.innerRing = this.add.circle(this.center.x, this.center.y, 26, accentColor, 0.14);
            this.innerRing.setStrokeStyle(2, accentColor, 0.75);

            this.ship = this.physics.add.sprite(this.center.x, this.center.y - this.radius, 'orbit-ship');
            this.ship.body.setAllowGravity(false);
            this.ship.body.setCircle(11, 8, 8);

            this.hazards = this.physics.add.group();
            this.sparks = this.physics.add.group();
            this.physics.add.overlap(this.ship, this.hazards, () => this.endRun(), null, this);
            this.physics.add.overlap(this.ship, this.sparks, (ship, spark) => {
                spark.destroy();
                this.score += 18;
                this.updateScore();
            }, null, this);

            this.keys = this.input.keyboard.addKeys({
                action: Phaser.Input.Keyboard.KeyCodes.SPACE,
                left: Phaser.Input.Keyboard.KeyCodes.LEFT,
                right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
                pause: Phaser.Input.Keyboard.KeyCodes.P
            });
            this.input.on('pointerdown', () => this.reverseOrStart());

            sceneApi = {
                start: () => this.startRun(),
                pause: () => this.togglePause(),
                action: () => this.reverseOrStart()
            };
        }

        createOrbitTextures() {
            const accentColor = toHex(getCssColor('--accent-color', '#58a6ff'), '#58a6ff');
            const textColor = toHex(getCssColor('--text-color', '#c9d1d9'), '#c9d1d9');
            const borderColor = toHex(getCssColor('--border-color', '#30363d'), '#30363d');

            const shipGraphics = this.make.graphics({ x: 0, y: 0, add: false });
            shipGraphics.fillStyle(accentColor, 1);
            shipGraphics.fillTriangle(24, 4, 42, 44, 6, 44);
            shipGraphics.fillStyle(textColor, 0.9);
            shipGraphics.fillCircle(24, 27, 5);
            shipGraphics.lineStyle(2, borderColor, 1);
            shipGraphics.strokeTriangle(24, 4, 42, 44, 6, 44);
            shipGraphics.generateTexture('orbit-ship', 48, 48);
            shipGraphics.destroy();

            const hazardGraphics = this.make.graphics({ x: 0, y: 0, add: false });
            hazardGraphics.fillStyle(borderColor, 1);
            hazardGraphics.fillCircle(18, 18, 17);
            hazardGraphics.fillStyle(0xffffff, 0.18);
            hazardGraphics.fillCircle(12, 10, 4);
            hazardGraphics.generateTexture('orbit-hazard', 36, 36);
            hazardGraphics.destroy();

            const sparkGraphics = this.make.graphics({ x: 0, y: 0, add: false });
            sparkGraphics.fillStyle(accentColor, 0.95);
            sparkGraphics.fillCircle(12, 12, 8);
            sparkGraphics.fillStyle(textColor, 0.9);
            sparkGraphics.fillCircle(9, 8, 2);
            sparkGraphics.generateTexture('orbit-spark', 24, 24);
            sparkGraphics.destroy();
        }

        buildStarLayers(width, height) {
            const starColor = toHex(getCssColor('--star-color', '#ffffff'), '#ffffff');
            for (let layer = 0; layer < 2; layer++) {
                const key = `orbit-stars-${layer}`;
                const graphics = this.make.graphics({ x: 0, y: 0, add: false });
                graphics.fillStyle(starColor, 0.32 + layer * 0.22);
                for (let i = 0; i < 56 + layer * 36; i++) {
                    graphics.fillCircle(
                        Phaser.Math.Between(0, width),
                        Phaser.Math.Between(20, height - 20),
                        Phaser.Math.FloatBetween(0.8, 1.8 + layer * 0.5)
                    );
                }
                graphics.generateTexture(key, width, height);
                graphics.destroy();
                const tile = this.add.tileSprite(0, 0, width, height, key);
                tile.setOrigin(0, 0);
                this.starLayers.push({ tile, speed: 0.05 + layer * 0.06 });
            }
        }

        update(time, delta) {
            const dt = delta / 1000;
            this.starLayers.forEach(layer => {
                layer.tile.tilePositionX += 90 * layer.speed * dt;
            });

            if (Phaser.Input.Keyboard.JustDown(this.keys.pause)) this.togglePause();
            if (
                Phaser.Input.Keyboard.JustDown(this.keys.action) ||
                Phaser.Input.Keyboard.JustDown(this.keys.left) ||
                Phaser.Input.Keyboard.JustDown(this.keys.right)
            ) {
                this.reverseOrStart();
            }

            if (!this.started || this.gameOver || this.isPaused) return;

            this.score += delta * 0.01;
            this.angle += this.direction * (112 + Math.min(86, this.score * 0.5)) * dt;
            const rad = Phaser.Math.DegToRad(this.angle);
            this.ship.setPosition(
                this.center.x + Math.cos(rad) * this.radius,
                this.center.y + Math.sin(rad) * this.radius
            );
            this.ship.rotation = rad + Math.PI / 2;

            this.spawnTimer -= delta;
            this.collectTimer -= delta;
            if (this.spawnTimer <= 0) {
                this.spawnHazard();
                this.spawnTimer = Phaser.Math.Between(760, 1280);
            }
            if (this.collectTimer <= 0) {
                this.spawnSpark();
                this.collectTimer = Phaser.Math.Between(1350, 2200);
            }

            [...this.hazards.getChildren(), ...this.sparks.getChildren()].forEach(item => {
                item.rotation += item.getData('spin') * dt;
                item.x += item.getData('vx') * dt;
                item.y += item.getData('vy') * dt;
                if (item.x < -80 || item.x > this.scale.width + 80 || item.y < -80 || item.y > this.scale.height + 80) {
                    item.destroy();
                }
            });

            this.updateScore();
        }

        reverseOrStart() {
            if (this.gameOver || !this.started) {
                this.startRun();
                return;
            }
            this.direction *= -1;
        }

        startRun() {
            this.started = true;
            this.gameOver = false;
            this.isPaused = false;
            this.score = 0;
            this.angle = -90;
            this.direction = 1;
            this.spawnTimer = 650;
            this.collectTimer = 1200;
            this.hazards.clear(true, true);
            this.sparks.clear(true, true);
            setOverlay('', '', false);
            if (pauseButton) pauseButton.textContent = 'Pause';
            this.updateScore();
        }

        togglePause() {
            if (!this.started || this.gameOver) return;
            this.isPaused = !this.isPaused;
            if (pauseButton) pauseButton.textContent = this.isPaused ? 'Resume' : 'Pause';
            setOverlay('Paused', 'Press P or Resume to continue.', this.isPaused);
        }

        spawnHazard() {
            const side = Phaser.Math.Between(0, 3);
            const pos = this.edgePosition(side);
            const target = Phaser.Math.RotateAround(
                { x: this.center.x + this.radius, y: this.center.y },
                this.center.x,
                this.center.y,
                Phaser.Math.FloatBetween(0, Math.PI * 2)
            );
            const speed = Phaser.Math.Between(95, 145) + Math.min(95, this.score * 0.45);
            const angle = Phaser.Math.Angle.Between(pos.x, pos.y, target.x, target.y);
            const hazard = this.physics.add.sprite(pos.x, pos.y, 'orbit-hazard');
            hazard.body.setAllowGravity(false);
            hazard.body.setCircle(13, 5, 5);
            hazard.setData('vx', Math.cos(angle) * speed);
            hazard.setData('vy', Math.sin(angle) * speed);
            hazard.setData('spin', Phaser.Math.FloatBetween(-3, 3));
            this.hazards.add(hazard);
        }

        spawnSpark() {
            const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
            const spark = this.physics.add.sprite(
                this.center.x + Math.cos(angle) * this.radius,
                this.center.y + Math.sin(angle) * this.radius,
                'orbit-spark'
            );
            spark.body.setAllowGravity(false);
            spark.body.setCircle(8, 4, 4);
            spark.setData('vx', 0);
            spark.setData('vy', 0);
            spark.setData('spin', 2);
            this.sparks.add(spark);
        }

        edgePosition(side) {
            const width = this.scale.width;
            const height = this.scale.height;
            if (side === 0) return { x: Phaser.Math.Between(0, width), y: -40 };
            if (side === 1) return { x: width + 40, y: Phaser.Math.Between(0, height) };
            if (side === 2) return { x: Phaser.Math.Between(0, width), y: height + 40 };
            return { x: -40, y: Phaser.Math.Between(0, height) };
        }

        endRun() {
            if (this.gameOver) return;
            this.gameOver = true;
            this.started = false;
            this.cameras.main.shake(140, 0.004);
            const finalScore = Math.floor(this.score);
            this.best = saveBest('orbit', finalScore);
            setOverlay('Orbit Lost', `Score ${finalScore}. Press Space or Start to retry.`);
        }

        updateScore() {
            if (scoreElement) scoreElement.textContent = String(Math.floor(this.score));
            if (bestElement) bestElement.textContent = String(this.best);
        }
    }

    class PulseScene extends Phaser.Scene {
        constructor() {
            super('pulse');
            this.started = false;
            this.gameOver = false;
            this.isPaused = false;
            this.score = 0;
            this.best = getBest('pulse');
            this.laneIndex = 1;
            this.lanes = [];
            this.speed = 260;
            this.spawnTimer = 0;
            this.gates = null;
            this.pulses = null;
            this.starLayers = [];
        }

        create() {
            const width = this.scale.width;
            const height = this.scale.height;
            this.physics.world.gravity.y = 0;
            this.cameras.main.setBackgroundColor('rgba(0,0,0,0)');
            this.lanes = [
                height * 0.28,
                height * 0.42,
                height * 0.56,
                height * 0.70
            ];
            this.createPulseTextures();
            this.buildStarLayers(width, height);
            const borderColor = toHex(getCssColor('--border-color', '#30363d'), '#30363d');
            this.lanes.forEach(y => {
                this.add.rectangle(width / 2, y, width - 96, 1, borderColor, 0.45);
            });

            this.player = this.physics.add.sprite(110, this.lanes[this.laneIndex], 'pulse-player');
            this.player.body.setAllowGravity(false);
            this.player.body.setCircle(13, 5, 5);
            this.gates = this.physics.add.group();
            this.pulses = this.physics.add.group();
            this.physics.add.overlap(this.player, this.gates, () => this.endRun(), null, this);
            this.physics.add.overlap(this.player, this.pulses, (player, pulse) => {
                pulse.destroy();
                this.score += 14;
                this.updateScore();
            }, null, this);
            this.input.on('pointerdown', pointer => {
                this.switchLane(pointer.downY < this.player.y ? -1 : 1);
            });
            sceneApi = {
                start: () => this.startRun(),
                pause: () => this.togglePause(),
                action: code => this.handleAction(code)
            };
        }

        createPulseTextures() {
            const accentColor = toHex(getCssColor('--accent-color', '#58a6ff'), '#58a6ff');
            const textColor = toHex(getCssColor('--text-color', '#c9d1d9'), '#c9d1d9');
            const borderColor = toHex(getCssColor('--border-color', '#30363d'), '#30363d');

            const playerGraphics = this.make.graphics({ x: 0, y: 0, add: false });
            playerGraphics.fillStyle(accentColor, 1);
            playerGraphics.fillCircle(18, 18, 14);
            playerGraphics.fillStyle(textColor, 0.95);
            playerGraphics.fillCircle(14, 13, 3);
            playerGraphics.lineStyle(2, borderColor, 1);
            playerGraphics.strokeCircle(18, 18, 14);
            playerGraphics.generateTexture('pulse-player', 36, 36);
            playerGraphics.destroy();

            const gateGraphics = this.make.graphics({ x: 0, y: 0, add: false });
            gateGraphics.fillStyle(0xff5f73, 0.78);
            gateGraphics.fillRoundedRect(4, 4, 26, 42, 8);
            gateGraphics.lineStyle(2, borderColor, 1);
            gateGraphics.strokeRoundedRect(4, 4, 26, 42, 8);
            gateGraphics.generateTexture('pulse-gate', 34, 50);
            gateGraphics.destroy();

            const pulseGraphics = this.make.graphics({ x: 0, y: 0, add: false });
            pulseGraphics.fillStyle(accentColor, 0.95);
            pulseGraphics.fillCircle(12, 12, 8);
            pulseGraphics.fillStyle(textColor, 0.95);
            pulseGraphics.fillCircle(9, 8, 2);
            pulseGraphics.generateTexture('pulse-collect', 24, 24);
            pulseGraphics.destroy();
        }

        buildStarLayers(width, height) {
            const starColor = toHex(getCssColor('--star-color', '#ffffff'), '#ffffff');
            for (let layer = 0; layer < 2; layer++) {
                const key = `pulse-stars-${layer}`;
                const graphics = this.make.graphics({ x: 0, y: 0, add: false });
                graphics.fillStyle(starColor, 0.28 + layer * 0.2);
                for (let i = 0; i < 42 + layer * 28; i++) {
                    graphics.fillCircle(
                        Phaser.Math.Between(0, width),
                        Phaser.Math.Between(20, height - 20),
                        Phaser.Math.FloatBetween(0.7, 1.7 + layer * 0.5)
                    );
                }
                graphics.generateTexture(key, width, height);
                graphics.destroy();
                const tile = this.add.tileSprite(0, 0, width, height, key);
                tile.setOrigin(0, 0);
                this.starLayers.push({ tile, speed: 0.07 + layer * 0.07 });
            }
        }

        update(time, delta) {
            const dt = delta / 1000;
            this.starLayers.forEach(layer => {
                layer.tile.tilePositionX += this.speed * layer.speed * dt;
            });
            if (!this.started || this.gameOver || this.isPaused) return;

            this.score += delta * 0.011;
            this.speed = Math.min(560, 260 + this.score * 1.8);
            this.spawnTimer -= delta;
            if (this.spawnTimer <= 0) {
                this.spawnWave();
                this.spawnTimer = Phaser.Math.Between(760, 1180);
            }
            [...this.gates.getChildren(), ...this.pulses.getChildren()].forEach(item => {
                item.x -= this.speed * dt;
                if (item.x < -60) item.destroy();
            });
            this.updateScore();
        }

        handleAction(code) {
            if (this.gameOver || !this.started) {
                this.startRun();
                return;
            }
            if (['ArrowUp', 'KeyW', 'KeyA', 'ArrowLeft'].includes(code)) {
                this.switchLane(-1);
            } else if (['ArrowDown', 'KeyS', 'KeyD', 'ArrowRight', 'Space'].includes(code)) {
                this.switchLane(1);
            }
        }

        switchLane(direction) {
            if (!this.started || this.gameOver || this.isPaused) {
                this.startRun();
                return;
            }
            this.laneIndex = Phaser.Math.Clamp(this.laneIndex + direction, 0, this.lanes.length - 1);
            this.tweens.add({
                targets: this.player,
                y: this.lanes[this.laneIndex],
                duration: 90,
                ease: 'Sine.easeOut'
            });
        }

        startRun() {
            this.started = true;
            this.gameOver = false;
            this.isPaused = false;
            this.score = 0;
            this.speed = 260;
            this.spawnTimer = 480;
            this.laneIndex = 1;
            this.player.setPosition(110, this.lanes[this.laneIndex]);
            this.gates.clear(true, true);
            this.pulses.clear(true, true);
            setOverlay('', '', false);
            if (pauseButton) pauseButton.textContent = 'Pause';
            this.updateScore();
        }

        togglePause() {
            if (!this.started || this.gameOver) return;
            this.isPaused = !this.isPaused;
            if (pauseButton) pauseButton.textContent = this.isPaused ? 'Resume' : 'Pause';
            setOverlay('Paused', 'Press P or Resume to continue.', this.isPaused);
        }

        spawnWave() {
            const safeLane = Phaser.Math.Between(0, this.lanes.length - 1);
            this.lanes.forEach((y, index) => {
                if (index === safeLane) return;
                if (Math.random() < 0.66) {
                    const gate = this.physics.add.sprite(this.scale.width + 40, y, 'pulse-gate');
                    gate.body.setAllowGravity(false);
                    gate.body.setSize(20, 34).setOffset(7, 8);
                    this.gates.add(gate);
                }
            });
            if (Math.random() < 0.72) {
                const pulse = this.physics.add.sprite(this.scale.width + 92, this.lanes[safeLane], 'pulse-collect');
                pulse.body.setAllowGravity(false);
                pulse.body.setCircle(8, 4, 4);
                this.pulses.add(pulse);
            }
        }

        endRun() {
            if (this.gameOver) return;
            this.gameOver = true;
            this.started = false;
            this.cameras.main.shake(140, 0.004);
            const finalScore = Math.floor(this.score);
            this.best = saveBest('pulse', finalScore);
            setOverlay('Gate Closed', `Score ${finalScore}. Press Space or Start to retry.`);
        }

        updateScore() {
            if (scoreElement) scoreElement.textContent = String(Math.floor(this.score));
            if (bestElement) bestElement.textContent = String(this.best);
        }
    }

    const sceneMap = {
        runner: RunnerScene,
        orbit: OrbitScene,
        pulse: PulseScene
    };

    const startPrompts = {
        runner: 'Press W, Space, up, or tap to launch.',
        orbit: 'Press Space or tap to reverse orbit.',
        pulse: 'Press WASD, arrows, Space, or tap to switch lanes.'
    };

    const launchGame = gameKey => {
        activeGame = gameKey;
        destroyGame();
        updateChrome(gameKey);
        const meta = gameMeta[gameKey];
        setOverlay(meta.title, startPrompts[gameKey]);
        game = new Phaser.Game({
            type: Phaser.AUTO,
            parent: mount,
            width: 960,
            height: 360,
            transparent: true,
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH
            },
            physics: {
                default: 'arcade',
                arcade: {
                    debug: false
                }
            },
            scene: sceneMap[gameKey]
        });
    };

    const startHandler = () => sceneApi && sceneApi.start();
    const pauseHandler = () => sceneApi && sceneApi.pause();
    const keyGuard = event => {
        const blockedCodes = ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD', 'ShiftLeft', 'ShiftRight'];
        const tagName = event.target && event.target.tagName;
        if (blockedCodes.includes(event.code) && tagName !== 'INPUT' && tagName !== 'TEXTAREA') {
            event.preventDefault();
        }
    };
    const keyActionDown = event => {
        const tagName = event.target && event.target.tagName;
        if (tagName === 'INPUT' || tagName === 'TEXTAREA' || event.repeat) return;
        if (activeGame === 'runner' && ['Space', 'ArrowUp', 'KeyW'].includes(event.code)) {
            sceneApi && sceneApi.jump && sceneApi.jump();
        } else if (activeGame === 'runner' && ['ArrowDown', 'KeyS', 'ShiftLeft', 'ShiftRight'].includes(event.code)) {
            sceneApi && sceneApi.drop && sceneApi.drop(true);
        } else if (activeGame === 'orbit' && ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyS'].includes(event.code)) {
            sceneApi && sceneApi.action && sceneApi.action();
        } else if (activeGame === 'pulse' && ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(event.code)) {
            sceneApi && sceneApi.action && sceneApi.action(event.code);
        }
    };
    const keyActionUp = event => {
        if (activeGame === 'runner' && ['ArrowDown', 'KeyS', 'ShiftLeft', 'ShiftRight'].includes(event.code)) {
            sceneApi && sceneApi.drop && sceneApi.drop(false);
        }
    };
    const choiceHandler = event => {
        const nextGame = event.currentTarget.dataset.gameChoice;
        if (nextGame && nextGame !== activeGame) {
            launchGame(nextGame);
        }
    };
    startButton && startButton.addEventListener('click', startHandler);
    pauseButton && pauseButton.addEventListener('click', pauseHandler);
    window.addEventListener('keydown', keyGuard, { passive: false });
    window.addEventListener('keydown', keyActionDown);
    window.addEventListener('keyup', keyActionUp);
    pickerButtons.forEach(button => button.addEventListener('click', choiceHandler));
    launchGame('runner');

    return () => {
        if (destroyed) return;
        destroyed = true;
        startButton && startButton.removeEventListener('click', startHandler);
        pauseButton && pauseButton.removeEventListener('click', pauseHandler);
        window.removeEventListener('keydown', keyGuard);
        window.removeEventListener('keydown', keyActionDown);
        window.removeEventListener('keyup', keyActionUp);
        pickerButtons.forEach(button => button.removeEventListener('click', choiceHandler));
        destroyGame();
    };
}

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
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
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--star-color').trim() || '#ffffff';

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
