const pageContents = {
    home: `
        <div class="container about-home">
            <section class="about-quiet-hero" aria-labelledby="about-home-title" data-aos="fade-up">
                <div class="about-hero-copy">
                    <p class="about-kicker">Owo / profile</p>
                    <h1 id="about-home-title">一些留在网络里的痕迹</h1>
                    <p>关于小雨..</p>
                </div>
                <div class="about-particle-orb" aria-hidden="true">
                    <css-doodle click-to-update experimental>
                        :doodle {
                            @grid: 150x1;
                            width: 380px;
                            height: 380px;
                            font-size: 2vmin;
                        }
                        :container {
                            transform-style: preserve-3d;
                            animation: orb-spin 40s linear infinite;
                        }
                        @place-cell: center;
                        @size: @r(.24em, .66em);
                        color: var(--orb-primary);
                        opacity: @r(.42, .96);
                        transform:
                            rotateZ(calc(@i * 137.5deg))
                            rotateY(calc(@i * 47deg))
                            translateX(@r(2.4em, 11.6em))
                            rotateY(calc(@i * 1deg));
                        transform-style: preserve-3d;
                        will-change: transform;
                        :after {
                            content: '';
                            position: absolute;
                            left: 0;
                            top: 0;
                            border-radius: 50%;
                            @size: 100%;
                            background: currentColor;
                            box-shadow: @m2(
                                0 calc(@lr * @n) 0 calc(-.04em - @n * .04em)
                                currentColor
                            );
                        }
                        :before {
                            content: '';
                            position: absolute;
                            left: 50%;
                            top: 0;
                            width: 1px;
                            height: @r(1em, 5.8em);
                            border-left: 1px @p(solid, dashed, dotted) currentColor;
                            opacity: .34;
                            transform: rotateY(calc(@i * 1deg));
                        }
                        @keyframes orb-spin {
                            to { transform: rotateY(1turn); }
                        }
                    </css-doodle>
                </div>
            </section>
            <section class="about-signal-grid" aria-label="profile overview" data-aos="fade-up" data-aos-delay="80">
                <div>
                    <span>01</span>
                    <strong>网络生活</strong>
                    <p>多数连接发生在屏幕、文档、仓库、社区和游戏里。</p>
                </div>
                <div>
                    <span>02</span>
                    <strong>复现路径</strong>
                    <p>更关注复现、影响、修复路径和长期可验证的工程动作。</p>
                </div>
                <div>
                    <span>03</span>
                    <strong>边界意识</strong>
                    <p>信息不会被当成孤立碎片，亲近也不等于索取现实细节。</p>
                </div>
                <div>
                    <span>04</span>
                    <strong>长期协作</strong>
                    <p>通过文字、代码、issue、报告和项目维护建立稳定关系。</p>
                </div>
            </section>
            <section class="about-profile-shell" aria-label="about profile" data-aos="fade-up" data-aos-delay="120">
                <aside class="about-profile-nav">
                    <p>Profile</p>
                    <nav id="about-profile-toc" aria-label="AboutMe sections"></nav>
                </aside>
                <article id="about-profile-content" class="about-profile-content">
                    <p class="about-loading">正在读取 AboutMe.md</p>
                </article>
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
                            <button type="button" data-game-choice="phase">Phase Shift</button>
                            <button type="button" data-game-choice="echo">Echo Bloom</button>
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
    settings: `
        <div class="container">
            <h1>设置</h1>
            <p>调整星空、布局、透明度和动效，保存后会记录在当前浏览器。</p>
            <section class="card settings-panel">
                <div class="settings-header">
                    <h2>自定义外观</h2>
                    <div class="settings-actions">
                        <button type="button" id="settings-save">保存</button>
                        <button type="button" id="settings-reset">重置</button>
                    </div>
                </div>
                <div class="settings-grid" id="settings-grid"></div>
                <p class="settings-status" id="settings-status" aria-live="polite"></p>
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

const SITE_ORIGIN = 'https://ra1nyxin.github.io';
const DEVTOOLS_REDIRECT_URL = 'https://ys.mihoyo.com/';
const pageMeta = {
    home: {
        title: 'Owo - 小雨的个人网站',
        description: 'Owo 是小雨托管在 GitHub Pages 上的个人网站，主页收录一份关于文字、边界、网络生活和长期协作的个人档案。'
    },
    notes: {
        title: '笔记 - Owo',
        description: '小雨整理的常用开发和终端笔记，覆盖 Git、PowerShell、npm、GCC、.NET、代理配置和日常命令速查。'
    },
    docs: {
        title: '文档 - Owo',
        description: 'Owo 文档页集中展示工具用法类 Markdown 文档，适合快速查阅命令、配置流程和实用操作记录。'
    },
    manual: {
        title: '操作手册 - Owo',
        description: 'Owo 操作手册页面收录环境配置、虚拟机、远程访问和基础运维流程等可复用操作说明。'
    },
    gallery: {
        title: '图库 - Owo',
        description: 'Owo 图库页面展示项目图片和站点素材，以瀑布流布局浏览 GitHub Pages 静态图片资源。'
    },
    game: {
        title: '游戏 - Owo',
        description: 'Owo 游戏页提供 Void Runner、Orbit Drift、Pulse Gate、Phase Shift 和 Echo Bloom 等网页休闲小游戏。'
    },
    test: {
        title: '测试页面 - Owo',
        description: 'Owo 测试页面用于验证视频播放、交互组件和静态资源加载效果，方便维护站点功能。'
    },
    message: {
        title: '留言板 - Owo',
        description: 'Owo 留言板通过 GitHub 贡献方式展示访客留言，并加载贡献者头像和 Markdown 留言内容。'
    },
    other: {
        title: '其他 - Owo',
        description: 'Owo 其他页面用于放置暂未归类的站点内容、补充信息和后续扩展入口。'
    },
    settings: {
        title: '设置 - Owo',
        description: 'Owo 设置页支持用户自定义星空背景、界面宽度、字号、透明度、模糊强度、圆角和动效速度。'
    }
};

const THEME_STORAGE_KEY = 'owo-theme';
const SITE_SETTINGS_STORAGE_KEY = 'owo-site-settings';
const VOID_RUNNER_BEST_KEY = 'void-runner-best';
const ORBIT_DRIFT_BEST_KEY = 'orbit-drift-best';
const PULSE_GATE_BEST_KEY = 'pulse-gate-best';
const PHASE_SHIFT_BEST_KEY = 'phase-shift-best';
const ECHO_BLOOM_BEST_KEY = 'echo-bloom-best';
let cleanupCurrentPage = null;
let starfieldController = null;
let musicPlayer = null;
let hasRedirectedForDevtools = false;

const musicTracks = [
    { name: 'K歌之王', artist: '小雨的歌单', url: 'music/K歌之王.mp3' },
    { name: '单车', artist: '小雨的歌单', url: 'music/单车.mp3' },
    { name: '孤独患者', artist: '小雨的歌单', url: 'music/孤独患者.mp3' },
    { name: '富士山下', artist: '小雨的歌单', url: 'music/富士山下.mp3' },
    { name: '最佳损友', artist: '小雨的歌单', url: 'music/最佳损友.mp3' },
    { name: '沙龙', artist: '小雨的歌单', url: 'music/沙龙.mp3' },
    { name: '葡萄成熟时', artist: '小雨的歌单', url: 'music/葡萄成熟时.mp3' }
];

const defaultSiteSettings = {
    starCount: 200,
    minRadius: 0.4,
    maxRadius: 1.2,
    minAlpha: 0.1,
    twinkleMinSpeed: 0.005,
    twinkleMaxSpeed: 0.02,
    movementSpeed: 0,
    backgroundAlpha: 1,
    starHue: 0,
    starSaturation: 0,
    starLightness: 100,
    backgroundHue: 230,
    backgroundSaturation: 36,
    backgroundLightness: 3,
    accentHue: 212,
    contentWidth: 1280,
    baseFontSize: 16,
    contentPaddingY: 32,
    cardPadding: 24,
    cardRadius: 14,
    controlRadius: 6,
    cardGap: 24,
    panelOpacity: 0.45,
    navbarOpacity: 0.55,
    panelBlur: 8,
    navbarBlur: 10,
    shadowStrength: 1,
    motionScale: 1
};

const settingsGroups = [
    {
        title: '星空背景',
        controls: [
            { key: 'starCount', label: '星星数量', min: 0, max: 600, step: 1 },
            { key: 'minRadius', label: '最小半径', min: 0, max: 4, step: 0.1 },
            { key: 'maxRadius', label: '最大半径', min: 0, max: 8, step: 0.1 },
            { key: 'minAlpha', label: '最低透明度', min: 0, max: 1, step: 0.01 },
            { key: 'twinkleMinSpeed', label: '最小闪烁速度', min: 0, max: 0.08, step: 0.001 },
            { key: 'twinkleMaxSpeed', label: '最大闪烁速度', min: 0, max: 0.12, step: 0.001 },
            { key: 'movementSpeed', label: '星空漂移速度', min: -80, max: 80, step: 1 },
            { key: 'backgroundAlpha', label: '背景不透明度', min: 0, max: 1, step: 0.01 },
            { key: 'starHue', label: '星星色相', min: 0, max: 360, step: 1 },
            { key: 'starSaturation', label: '星星饱和度', min: 0, max: 100, step: 1 },
            { key: 'starLightness', label: '星星亮度', min: 0, max: 100, step: 1 },
            { key: 'backgroundHue', label: '背景色相', min: 0, max: 360, step: 1 },
            { key: 'backgroundSaturation', label: '背景饱和度', min: 0, max: 100, step: 1 },
            { key: 'backgroundLightness', label: '背景亮度', min: 0, max: 30, step: 1 }
        ]
    },
    {
        title: '界面外观',
        controls: [
            { key: 'accentHue', label: '主色调色相', min: 0, max: 360, step: 1 },
            { key: 'contentWidth', label: '内容最大宽度', min: 860, max: 1600, step: 10 },
            { key: 'baseFontSize', label: '基础字号', min: 12, max: 22, step: 1 },
            { key: 'contentPaddingY', label: '页面上下留白', min: 12, max: 72, step: 2 },
            { key: 'cardPadding', label: '卡片内边距', min: 10, max: 48, step: 1 },
            { key: 'cardRadius', label: '卡片圆角', min: 0, max: 28, step: 1 },
            { key: 'controlRadius', label: '控件圆角', min: 0, max: 18, step: 1 },
            { key: 'cardGap', label: '卡片间距', min: 8, max: 48, step: 1 }
        ]
    },
    {
        title: '透明与动效',
        controls: [
            { key: 'panelOpacity', label: '卡片透明度', min: 0, max: 1, step: 0.01 },
            { key: 'navbarOpacity', label: '顶栏透明度', min: 0, max: 1, step: 0.01 },
            { key: 'panelBlur', label: '卡片模糊强度', min: 0, max: 24, step: 1 },
            { key: 'navbarBlur', label: '顶栏模糊强度', min: 0, max: 24, step: 1 },
            { key: 'shadowStrength', label: '阴影强度', min: 0, max: 2, step: 0.05 },
            { key: 'motionScale', label: '动效速度倍率', min: 0, max: 2, step: 0.05 }
        ]
    }
];

const settingsControls = settingsGroups.flatMap(group => group.controls);

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

function loadSiteSettings() {
    try {
        const savedSettings = JSON.parse(localStorage.getItem(SITE_SETTINGS_STORAGE_KEY) || '{}');
        return { ...defaultSiteSettings, ...savedSettings };
    } catch (error) {
        console.error('Failed to load site settings:', error);
        return { ...defaultSiteSettings };
    }
}

function saveSiteSettings(settings) {
    localStorage.setItem(SITE_SETTINGS_STORAGE_KEY, JSON.stringify(settings));
}

function applySiteSettings(settings) {
    const normalizedSettings = normalizeStarSettings(settings);
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty('--accent-hue', String(normalizedSettings.accentHue));
    rootStyle.setProperty('--content-max-width', `${normalizedSettings.contentWidth}px`);
    rootStyle.setProperty('--site-font-size', `${normalizedSettings.baseFontSize}px`);
    rootStyle.setProperty('--content-padding-y', `${normalizedSettings.contentPaddingY}px`);
    rootStyle.setProperty('--card-padding', `${normalizedSettings.cardPadding}px`);
    rootStyle.setProperty('--card-radius', `${normalizedSettings.cardRadius}px`);
    rootStyle.setProperty('--control-radius', `${normalizedSettings.controlRadius}px`);
    rootStyle.setProperty('--card-gap', `${normalizedSettings.cardGap}px`);
    rootStyle.setProperty('--panel-opacity', String(normalizedSettings.panelOpacity));
    rootStyle.setProperty('--navbar-opacity', String(normalizedSettings.navbarOpacity));
    rootStyle.setProperty('--panel-blur', `${normalizedSettings.panelBlur}px`);
    rootStyle.setProperty('--navbar-blur', `${normalizedSettings.navbarBlur}px`);
    rootStyle.setProperty('--shadow-strength', String(normalizedSettings.shadowStrength));
    rootStyle.setProperty('--transition-speed', `${0.2 * normalizedSettings.motionScale}s`);
    rootStyle.setProperty('--star-hue', String(normalizedSettings.starHue));
    rootStyle.setProperty('--star-saturation', `${normalizedSettings.starSaturation}%`);
    rootStyle.setProperty('--star-lightness', `${normalizedSettings.starLightness}%`);
    rootStyle.setProperty('--starfield-hue', String(normalizedSettings.backgroundHue));
    rootStyle.setProperty('--starfield-saturation', `${normalizedSettings.backgroundSaturation}%`);
    rootStyle.setProperty('--starfield-lightness', `${normalizedSettings.backgroundLightness}%`);

    if (starfieldController) {
        starfieldController.applySettings(normalizedSettings);
    }
}

function normalizeStarSettings(settings) {
    const nextSettings = { ...defaultSiteSettings, ...settings };

    Object.keys(defaultSiteSettings).forEach(key => {
        const numericValue = Number(nextSettings[key]);
        nextSettings[key] = Number.isNaN(numericValue) ? defaultSiteSettings[key] : numericValue;
    });

    nextSettings.starCount = Math.max(0, Math.floor(nextSettings.starCount));
    if (nextSettings.maxRadius < nextSettings.minRadius) {
        [nextSettings.minRadius, nextSettings.maxRadius] = [nextSettings.maxRadius, nextSettings.minRadius];
    }
    if (nextSettings.twinkleMaxSpeed < nextSettings.twinkleMinSpeed) {
        [nextSettings.twinkleMinSpeed, nextSettings.twinkleMaxSpeed] = [nextSettings.twinkleMaxSpeed, nextSettings.twinkleMinSpeed];
    }
    return nextSettings;
}

function initSettingsPage() {
    const grid = document.getElementById('settings-grid');
    const saveButton = document.getElementById('settings-save');
    const resetButton = document.getElementById('settings-reset');
    const status = document.getElementById('settings-status');
    if (!grid || !saveButton || !resetButton) return null;

    let currentSettings = loadSiteSettings();

    const showStatus = message => {
        if (!status) return;
        status.textContent = message;
    };

    const readForm = () => {
        const nextSettings = {};
        settingsControls.forEach(control => {
            const input = grid.querySelector(`[data-setting-number="${control.key}"]`);
            nextSettings[control.key] = input ? Number(input.value) : defaultSiteSettings[control.key];
        });
        return normalizeStarSettings(nextSettings);
    };

    const syncControls = settings => {
        settingsControls.forEach(control => {
            const range = grid.querySelector(`[data-setting-range="${control.key}"]`);
            const input = grid.querySelector(`[data-setting-number="${control.key}"]`);
            const value = settings[control.key];
            if (range) {
                range.value = String(Math.max(Number(range.min), Math.min(Number(range.max), value)));
            }
            if (input) {
                input.value = String(value);
            }
        });
    };

    grid.innerHTML = settingsGroups.map(group => `
        <div class="settings-group">
            <h3>${group.title}</h3>
            ${group.controls.map(control => `
                <label class="setting-control">
                    <span>${control.label}</span>
                    <div class="setting-inputs">
                        <input type="range" min="${control.min}" max="${control.max}" step="${control.step}" data-setting-range="${control.key}">
                        <input type="number" step="${control.step}" data-setting-number="${control.key}">
                    </div>
                </label>
            `).join('')}
        </div>
    `).join('');

    const handleRangeInput = event => {
        const key = event.target.dataset.settingRange;
        const input = grid.querySelector(`[data-setting-number="${key}"]`);
        if (input) input.value = event.target.value;
        currentSettings = readForm();
        applySiteSettings(currentSettings);
        showStatus('预览中，点击保存后生效记录。');
    };

    const handleNumberInput = event => {
        const key = event.target.dataset.settingNumber;
        const range = grid.querySelector(`[data-setting-range="${key}"]`);
        const value = Number(event.target.value);
        if (range && !Number.isNaN(value)) {
            range.value = String(Math.max(Number(range.min), Math.min(Number(range.max), value)));
        }
        currentSettings = readForm();
        applySiteSettings(currentSettings);
        showStatus('预览中，点击保存后生效记录。');
    };

    grid.querySelectorAll('[data-setting-range]').forEach(input => {
        input.addEventListener('input', handleRangeInput);
    });
    grid.querySelectorAll('[data-setting-number]').forEach(input => {
        input.addEventListener('input', handleNumberInput);
    });

    const handleSave = () => {
        currentSettings = readForm();
        saveSiteSettings(currentSettings);
        applySiteSettings(currentSettings);
        syncControls(currentSettings);
        showStatus('已保存。');
    };

    const handleReset = () => {
        currentSettings = { ...defaultSiteSettings };
        saveSiteSettings(currentSettings);
        syncControls(currentSettings);
        applySiteSettings(currentSettings);
        showStatus('已重置为默认设置。');
    };

    saveButton.addEventListener('click', handleSave);
    resetButton.addEventListener('click', handleReset);

    currentSettings = normalizeStarSettings(currentSettings);
    syncControls(currentSettings);
    applySiteSettings(currentSettings);

    return () => {
        saveButton.removeEventListener('click', handleSave);
        resetButton.removeEventListener('click', handleReset);
    };
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
            refreshScrollAnimations();
        }
    } catch (error) {
        console.error('Error loading markdown content:', error);
        const targetElement = document.getElementById(targetElementId);
        if (targetElement) {
            targetElement.innerHTML = `<p style="color: red;">加载内容失败: ${error.message}</p>`;
        }
    }
}

function slugifyHeading(text, index) {
    const slug = text
        .trim()
        .toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, '-')
        .replace(/^-+|-+$/g, '');
    return slug || `section-${index + 1}`;
}

async function loadAboutProfile() {
    const contentElement = document.getElementById('about-profile-content');
    const tocElement = document.getElementById('about-profile-toc');
    if (!contentElement || !tocElement) return;

    try {
        const response = await fetch('AboutMe.md');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const markdown = await response.text();
        contentElement.innerHTML = marked.parse(markdown);

        const headings = Array.from(contentElement.querySelectorAll('h2'));
        tocElement.innerHTML = '';
        headings.forEach((heading, index) => {
            const id = `about-${slugifyHeading(heading.textContent, index)}`;
            heading.id = id;

            const link = document.createElement('a');
            link.href = `#${id}`;
            link.textContent = heading.textContent;
            tocElement.appendChild(link);
        });

        if (!headings.length) {
            tocElement.innerHTML = '<span>暂无章节</span>';
        }
        refreshScrollAnimations();
    } catch (error) {
        console.error('Error loading about profile:', error);
        contentElement.innerHTML = `<p class="about-error">AboutMe.md 读取失败：${error.message}</p>`;
        tocElement.innerHTML = '<span>读取失败</span>';
        refreshScrollAnimations();
    }
}

function initScrollAnimations() {
    if (typeof AOS === 'undefined') return;

    AOS.init({
        duration: 520,
        easing: 'ease-out-cubic',
        offset: 80,
        once: true,
        mirror: false
    });
}

function refreshScrollAnimations() {
    if (typeof AOS === 'undefined') return;
    applyDefaultScrollAnimations();
    AOS.refreshHard();
}

function applyDefaultScrollAnimations(scope = document) {
    if (typeof AOS === 'undefined') return;

    scope.querySelectorAll('.card:not([data-aos]), .gallery-item:not([data-aos]), .game-shell:not([data-aos]), .settings-panel:not([data-aos])').forEach((element, index) => {
        element.setAttribute('data-aos', 'fade-up');
        element.setAttribute('data-aos-delay', String(Math.min(index * 35, 140)));
    });
}

function githubSearch() {
    const query = document.getElementById('github-search-input').value;
    if (query) {
        window.location.href = `https://github.com/search?q=${encodeURIComponent(query)}&type=repositories`;
    }
}

function getPageUrl(page) {
    return page === 'home' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}/?page=${encodeURIComponent(page)}`;
}

function ensureHeadTag(selector, createTag) {
    let element = document.head.querySelector(selector);
    if (!element) {
        element = createTag();
        document.head.appendChild(element);
    }
    return element;
}

function setMetaContent(selector, createTag, value) {
    const element = ensureHeadTag(selector, createTag);
    element.setAttribute('content', value);
}

function setPageMetadata(page) {
    const meta = pageMeta[page] || pageMeta.home;
    const url = getPageUrl(pageMeta[page] ? page : 'home');

    document.title = meta.title;
    setMetaContent('meta[name="description"]', () => {
        const tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        return tag;
    }, meta.description);
    setMetaContent('meta[property="og:title"]', () => {
        const tag = document.createElement('meta');
        tag.setAttribute('property', 'og:title');
        return tag;
    }, meta.title);
    setMetaContent('meta[property="og:description"]', () => {
        const tag = document.createElement('meta');
        tag.setAttribute('property', 'og:description');
        return tag;
    }, meta.description);
    setMetaContent('meta[property="og:url"]', () => {
        const tag = document.createElement('meta');
        tag.setAttribute('property', 'og:url');
        return tag;
    }, url);
    setMetaContent('meta[name="twitter:title"]', () => {
        const tag = document.createElement('meta');
        tag.setAttribute('name', 'twitter:title');
        return tag;
    }, meta.title);
    setMetaContent('meta[name="twitter:description"]', () => {
        const tag = document.createElement('meta');
        tag.setAttribute('name', 'twitter:description');
        return tag;
    }, meta.description);

    const canonical = ensureHeadTag('link[rel="canonical"]', () => {
        const tag = document.createElement('link');
        tag.setAttribute('rel', 'canonical');
        return tag;
    });
    canonical.setAttribute('href', url);
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
                galleryItem.setAttribute('data-aos', 'fade-up');

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
        refreshScrollAnimations();
    }
}

const DOCS_REPO_OWNER = 'ra1nyxin';
const DOCS_REPO_NAME = 'ra1nyxin.github.io';
const docFallbackFiles = [
    'doc_aadinternals_use.md',
    'doc_aclpwn_use.md',
    'doc_adalanche_use.md',
    'doc_adexplorer_snapshot.md',
    'doc_adfind_use.md',
    'doc_adidnsdump_use.md',
    'doc_airbase_ng_use.md',
    'doc_aircrack_ng_use.md',
    'doc_aireplay_ng_use.md',
    'doc_airodump_ng_use.md',
    'doc_alterx_use.md',
    'doc_amcacheparser_use.md',
    'doc_anew_use.md',
    'doc_angr_use.md',
    'doc_appcompatcacheparser_use.md',
    'doc_aquatone_use.md',
    'doc_arista_eos_network.md',
    'doc_arjun_paramspider.md',
    'doc_arp_scan_use.md',
    'doc_assetfinder_use.md',
    'doc_atexec_impacket.md',
    'doc_audit_ci_use.md',
    'doc_awk_sed.md',
    'doc_aws_vault_use.md',
    'doc_awscli_security.md',
    'doc_azure_cli_security.md',
    'doc_azurehound_use.md',
    'doc_bandit_use.md',
    'doc_bettercap_use.md',
    'doc_binwalk_foremost.md',
    'doc_bleah_use.md',
    'doc_blobhunter_use.md',
    'doc_bloodhound_python.md',
    'doc_bloodyad_use.md',
    'doc_bluetoothctl_use.md',
    'doc_brakeman_use.md',
    'doc_btmon_use.md',
    'doc_bucket_finder_use.md',
    'doc_bulk_extractor_use.md',
    'doc_bully_use.md',
    'doc_bundler_audit_use.md',
    'doc_capa_floss.md',
    'doc_capstone_tools.md',
    'doc_cargo_audit_use.md',
    'doc_cargo_deny_use.md',
    'doc_cariddi_use.md',
    'doc_cartography_use.md',
    'doc_certify_use.md',
    'doc_certipy_adcs.md',
    'doc_cewl_use.md',
    'doc_changepasswd_impacket.md',
    'doc_checkov_iac.md',
    'doc_chisel_ligolo_tunnel.md',
    'doc_chrome_cookie_tools.md',
    'doc_cisco_ios_switch_router.md',
    'doc_clamav_use.md',
    'doc_cloud_enum_use.md',
    'doc_cloudfox_use.md',
    'doc_cloudsplaining_use.md',
    'doc_cmseek_use.md',
    'doc_cmsmap_use.md',
    'doc_codeql_cli_use.md',
    'doc_coercer_use.md',
    'doc_commix_use.md',
    'doc_composer_audit_use.md',
    'doc_comsvcs_minidump.md',
    'doc_conftest_opa.md',
    'doc_consul_cli_use.md',
    'doc_container_diff_use.md',
    'doc_corkscrew_use.md',
    'doc_corscanner_use.md',
    'doc_corsy_use.md',
    'doc_cosign_container_sign.md',
    'doc_crackle_ble_use.md',
    'doc_crlfuzz_use.md',
    'doc_crunch_use.md',
    'doc_curl_http.md',
    'doc_cyberchef_local.md',
    'doc_dalfox_use.md',
    'doc_dasel_use.md',
    'doc_dcomexec_impacket.md',
    'doc_deepbluecli_use.md',
    'doc_dementor_use.md',
    'doc_dependency_check_use.md',
    'doc_deserialization_checklist.md',
    'doc_detect_secrets_use.md',
    'doc_die_detector_use.md',
    'doc_dirb_use.md',
    'doc_dirsearch_use.md',
    'doc_dive_use.md',
    'doc_dns_tools.md',
    'doc_dnscat2_use.md',
    'doc_dnschef_use.md',
    'doc_dnsgen_use.md',
    'doc_dnsrecon_use.md',
    'doc_dnsx_use.md',
    'doc_docker_bench_security.md',
    'doc_docker_compose_use.md',
    'doc_docker_forensics.md',
    'doc_dockle_use.md',
    'doc_donpapi_use.md',
    'doc_dploot_use.md',
    'doc_droopescan_use.md',
    'doc_dumpit_use.md',
    'doc_eaphammer_use.md',
    'doc_enum4linux_ng.md',
    'doc_enumerate_iam_use.md',
    'doc_eslint_security_use.md',
    'doc_etcdctl_use.md',
    'doc_ettercap_use.md',
    'doc_evil_winrm_use.md',
    'doc_evtxecmd_use.md',
    'doc_exiftool_use.md',
    'doc_feroxbuster_use.md',
    'doc_ffuf_use.md',
    'doc_fierce_use.md',
    'doc_find_xargs.md',
    'doc_findsecbugs_use.md',
    'doc_firefox_decrypt.md',
    'doc_fortigate_cli.md',
    'doc_fping_use.md',
    'doc_frida_objection.md',
    'doc_frp_use.md',
    'doc_ftp_lftp_use.md',
    'doc_gatttool_use.md',
    'doc_gau_waybackurls.md',
    'doc_gcloud_cli_security.md',
    'doc_gcp_enum_use.md',
    'doc_gcpbucketbrute_use.md',
    'doc_gdb_pwndbg.md',
    'doc_getnpusers_use.md',
    'doc_gettgt_getst_impacket.md',
    'doc_getuserspns_use.md',
    'doc_ggshield_use.md',
    'doc_ghauri_use.md',
    'doc_ghidra_headless.md',
    'doc_git_dumper_use.md',
    'doc_git_secrets.md',
    'doc_git_worktree.md',
    'doc_github_actions_debug.md',
    'doc_gitleaks_use.md',
    'doc_gnuradio_companion.md',
    'doc_go_tools.md',
    'doc_gobuster_use.md',
    'doc_gomplate_use.md',
    'doc_gosec_use.md',
    'doc_gospider_use.md',
    'doc_gost_use.md',
    'doc_govulncheck_use.md',
    'doc_gowitness_use.md',
    'doc_gpp_decrypt_use.md',
    'doc_graphql_voyager_inql.md',
    'doc_graphqlmap_use.md',
    'doc_graphw00f_use.md',
    'doc_gron_use.md',
    'doc_h2csmuggler_use.md',
    'doc_h3c_comware_network.md',
    'doc_hadolint_use.md',
    'doc_hakrawler_use.md',
    'doc_hash_extender_use.md',
    'doc_hashid_nth.md',
    'doc_hayabusa_use.md',
    'doc_hcxdumptool_use.md',
    'doc_hcxpcapngtool_use.md',
    'doc_helm_lint_template.md',
    'doc_helm_secrets_use.md',
    'doc_hostapd_wpe_use.md',
    'doc_hping3_use.md',
    'doc_htmlq_pup_use.md',
    'doc_httpie_use.md',
    'doc_httpx_naabu.md',
    'doc_huawei_vrp_network.md',
    'doc_hydra_use.md',
    'doc_ike_scan_use.md',
    'doc_impacket_tools.md',
    'doc_interactsh_use.md',
    'doc_inveigh_use.md',
    'doc_iodine_use.md',
    'doc_jadx_apktool.md',
    'doc_jaeles_use.md',
    'doc_jlecmd_use.md',
    'doc_john_hashcat.md',
    'doc_joomscan_use.md',
    'doc_jq_use.md',
    'doc_juniper_junos_network.md',
    'doc_jwt_tool_use.md',
    'doc_k9s_use.md',
    'doc_kape_use.md',
    'doc_katana_use.md',
    'doc_kcat_use.md',
    'doc_kdigger_use.md',
    'doc_kerbrute_use.md',
    'doc_kismet_use.md',
    'doc_kiterunner_use.md',
    'doc_krbrelayx_use.md',
    'doc_kube_bench_use.md',
    'doc_kube_hunter.md',
    'doc_kube_score_use.md',
    'doc_kubeaudit_use.md',
    'doc_kubeconform_use.md',
    'doc_kubectl_neat_use.md',
    'doc_kubectl_rbac_review.md',
    'doc_kubectl_use.md',
    'doc_kubectx_use.md',
    'doc_kubelet_api_check.md',
    'doc_kubent_use.md',
    'doc_kubescape_use.md',
    'doc_kubesec_use.md',
    'doc_kubetail_use.md',
    'doc_kubeval_use.md',
    'doc_kubiscan_use.md',
    'doc_kxss_use.md',
    'doc_lazagne_use.md',
    'doc_ldapdomaindump_use.md',
    'doc_ldapnomnom_use.md',
    'doc_ldapsearch_use.md',
    'doc_ldd_readelf_objdump.md',
    'doc_lecmd_use.md',
    'doc_linenum_use.md',
    'doc_linpeas_use.md',
    'doc_linux_auditd_ausearch.md',
    'doc_linux_exploit_suggester.md',
    'doc_linux_native_enum.md',
    'doc_linux_nftables_firewall.md',
    'doc_loki_scanner_use.md',
    'doc_lookupsid_impacket.md',
    'doc_lse_use.md',
    'doc_ltrace_use.md',
    'doc_machineaccountquota_check.md',
    'doc_make_use.md',
    'doc_masscan_zmap.md',
    'doc_mdk4_use.md',
    'doc_mftecmd_use.md',
    'doc_microburst_use.md',
    'doc_mikrotik_routeros.md',
    'doc_mimikatz_use.md',
    'doc_minio_client.md',
    'doc_mitmproxy_use.md',
    'doc_mona_immunity.md',
    'doc_mongoaudit_use.md',
    'doc_mongodb_shell.md',
    'doc_mosquitto_clients.md',
    'doc_mount_cifs_nfs.md',
    'doc_mqttx_cli_use.md',
    'doc_msf_config.md',
    'doc_msf_install.md',
    'doc_msf_use.md',
    'doc_mssqlclient_impacket.md',
    'doc_mycli_pgcli_use.md',
    'doc_mysql_client.md',
    'doc_nats_cli_use.md',
    'doc_neoregeorg_use.md',
    'doc_netcat_socat.md',
    'doc_netdiscover_use.md',
    'doc_netexec_use.md',
    'doc_newman_use.md',
    'doc_nikto_whatweb.md',
    'doc_nishang_use.md',
    'doc_njsscan_use.md',
    'doc_nmap_use.md',
    'doc_nomad_cli_use.md',
    'doc_nopac_use.md',
    'doc_nosqlmap_use.md',
    'doc_nping_use.md',
    'doc_npm_audit_use.md',
    'doc_npm_scripts.md',
    'doc_ntlm_theft_use.md',
    'doc_ntlmrelayx_use.md',
    'doc_nuclei_template_authoring.md',
    'doc_nuclei_use.md',
    'doc_o365spray_use.md',
    'doc_oasdiff_use.md',
    'doc_odat_use.md',
    'doc_oledump_use.md',
    'doc_oletools_use.md',
    'doc_olevba_use.md',
    'doc_one_gadget_use.md',
    'doc_onesixtyone_use.md',
    'doc_openssl_use.md',
    'doc_oracle_sqlplus.md',
    'doc_osquery_use.md',
    'doc_osv_scanner_use.md',
    'doc_pacu_use.md',
    'doc_padbuster_use.md',
    'doc_paloalto_panos_cli.md',
    'doc_parameth_use.md',
    'doc_parliament_use.md',
    'doc_patchelf_use.md',
    'doc_pcredz_use.md',
    'doc_pdf_parser_use.md',
    'doc_pdfid_use.md',
    'doc_peas_enumeration.md',
    'doc_pecmd_use.md',
    'doc_peepdf_use.md',
    'doc_petitpotam_use.md',
    'doc_pg_activity_use.md',
    'doc_pgbadger_use.md',
    'doc_phpggc_use.md',
    'doc_pingcastle_use.md',
    'doc_pip_audit_use.md',
    'doc_pkl_eval_use.md',
    'doc_plaso_log2timeline.md',
    'doc_plumhound_use.md',
    'doc_pluto_use.md',
    'doc_pmd_use.md',
    'doc_pnpm_audit_use.md',
    'doc_pop3_imap_tools.md',
    'doc_popeye_use.md',
    'doc_postgresql_psql.md',
    'doc_powercat_use.md',
    'doc_powermad_use.md',
    'doc_powerup_use.md',
    'doc_powerview_use.md',
    'doc_precommit_security.md',
    'doc_pretender_use.md',
    'doc_printerbug_use.md',
    'doc_privesccheck_use.md',
    'doc_procdump_use.md',
    'doc_procmon_procfilter.md',
    'doc_prowler_use.md',
    'doc_proxychains_use.md',
    'doc_psexec_impacket.md',
    'doc_pspy_use.md',
    'doc_puredns_use.md',
    'doc_purple_knight_use.md',
    'doc_pwncat_cs_use.md',
    'doc_pwninit_use.md',
    'doc_pwntools_use.md',
    'doc_pypykatz_use.md',
    'doc_python_http_server.md',
    'doc_python_venv_pip.md',
    'doc_pywerview_use.md',
    'doc_qemu_user_use.md',
    'doc_qiling_use.md',
    'doc_qsreplace_use.md',
    'doc_rabbitmqadmin_use.md',
    'doc_radare2_rizin.md',
    'doc_rbac_lookup_use.md',
    'doc_rbac_police_use.md',
    'doc_rbcmd_use.md',
    'doc_rclone_use.md',
    'doc_reaver_use.md',
    'doc_recmd_use.md',
    'doc_redis_cli_use.md',
    'doc_redis_rdb_tools.md',
    'doc_redsocks_use.md',
    'doc_regctl_crane_skopeo.md',
    'doc_regeorg_use.md',
    'doc_responder_use.md',
    'doc_retirejs_use.md',
    'doc_ripgrep_use.md',
    'doc_rkhunter_chkrootkit.md',
    'doc_roadtools_use.md',
    'doc_ropgadget_use.md',
    'doc_ropper_use.md',
    'doc_rpcdump_impacket.md',
    'doc_rpcinfo_use.md',
    'doc_rsync_use.md',
    'doc_rubeus_use.md',
    'doc_rustscan_use.md',
    'doc_s3recon_use.md',
    'doc_s3scanner_use.md',
    'doc_safety_cli_use.md',
    'doc_samrdump_impacket.md',
    'doc_scalpel_use.md',
    'doc_scapy_use.md',
    'doc_scoutsuite_use.md',
    'doc_searchsploit_use.md',
    'doc_seatbelt_use.md',
    'doc_secretfinder_linkfinder.md',
    'doc_secretsdump_use.md',
    'doc_semgrep_use.md',
    'doc_shadowcoerce_use.md',
    'doc_sharphound_use.md',
    'doc_sharpup_use.md',
    'doc_shhgit_use.md',
    'doc_showmount_nfs.md',
    'doc_shuffledns_use.md',
    'doc_sigma_chainsaw.md',
    'doc_sleuthkit_use.md',
    'doc_smbclient_rpcclient.md',
    'doc_smbexec_impacket.md',
    'doc_smbmap_use.md',
    'doc_smbpasswd_impacket.md',
    'doc_smbserver_impacket.md',
    'doc_smtp_user_enum.md',
    'doc_smuggler_use.md',
    'doc_snaffler_use.md',
    'doc_snmpwalk_use.md',
    'doc_snort_use.md',
    'doc_snyk_cli_use.md',
    'doc_sonarscanner_use.md',
    'doc_spotbugs_use.md',
    'doc_sprayhound_use.md',
    'doc_sqlcmd_mssql.md',
    'doc_sqlecmd_use.md',
    'doc_sqlite_use.md',
    'doc_sqlmap_use.md',
    'doc_sqlninja_use.md',
    'doc_ss_lsof.md',
    'doc_ssh_enum_algos.md',
    'doc_ssh_scp.md',
    'doc_sshuttle_use.md',
    'doc_sslyze_use.md',
    'doc_steampipe_use.md',
    'doc_stern_use.md',
    'doc_stormspotter_use.md',
    'doc_strace_use.md',
    'doc_strings_xxd_hexdump.md',
    'doc_subfinder_amass.md',
    'doc_subjs_use.md',
    'doc_suricata_use.md',
    'doc_svn_dumper_use.md',
    'doc_swagger_cli_use.md',
    'doc_syft_grype.md',
    'doc_sysinternals_tools.md',
    'doc_sysmon_use.md',
    'doc_systemctl_journalctl.md',
    'doc_targetedkerberoast_use.md',
    'doc_tcpdump_use.md',
    'doc_testssl_sh.md',
    'doc_tftp_client_use.md',
    'doc_ticketer_impacket.md',
    'doc_timelineexplorer_use.md',
    'doc_timesketch_use.md',
    'doc_tmux_use.md',
    'doc_tnscmd10g_use.md',
    'doc_to_msf_c_payload.md',
    'doc_to_msf_cpp_payload.md',
    'doc_to_msf_go_payload.md',
    'doc_tplmap_use.md',
    'doc_trivy_config_scan.md',
    'doc_trivy_container_scan.md',
    'doc_trufflehog_use.md',
    'doc_tshark_wireshark.md',
    'doc_ubertooth_use.md',
    'doc_unfurl_use.md',
    'doc_unicorn_engine_use.md',
    'doc_unix_privesc_check.md',
    'doc_updog_http_server.md',
    'doc_upx_use.md',
    'doc_urlhunter_use.md',
    'doc_uro_use.md',
    'doc_vault_cli_use.md',
    'doc_velociraptor_use.md',
    'doc_volatility3_use.md',
    'doc_vyos_router.md',
    'doc_wafw00f_use.md',
    'doc_watson_use.md',
    'doc_waymore_use.md',
    'doc_websocat_use.md',
    'doc_wevtutil_use.md',
    'doc_wfuzz_use.md',
    'doc_whatwaf_use.md',
    'doc_whispers_use.md',
    'doc_wifite_use.md',
    'doc_winapi_accept.md',
    'doc_winapi_accept_security_context.md',
    'doc_winapi_access_check.md',
    'doc_winapi_acquire_credentials_handle_w.md',
    'doc_winapi_add_clipboard_format_listener.md',
    'doc_winapi_add_dll_directory.md',
    'doc_winapi_add_vectored_continue_handler.md',
    'doc_winapi_add_vectored_exception_handler.md',
    'doc_winapi_adjust_token_privileges.md',
    'doc_winapi_ads_build_enumerator.md',
    'doc_winapi_ads_build_var_array_int.md',
    'doc_winapi_ads_build_var_array_str.md',
    'doc_winapi_ads_decode_binary_data.md',
    'doc_winapi_ads_encode_binary_data.md',
    'doc_winapi_ads_enumerate_next.md',
    'doc_winapi_ads_free_enumerator.md',
    'doc_winapi_ads_get_last_error.md',
    'doc_winapi_ads_get_object.md',
    'doc_winapi_ads_open_object.md',
    'doc_winapi_alloc_ads_mem.md',
    'doc_winapi_amsi_close_session.md',
    'doc_winapi_amsi_initialize.md',
    'doc_winapi_amsi_open_session.md',
    'doc_winapi_amsi_scan_buffer.md',
    'doc_winapi_amsi_uninitialize.md',
    'doc_winapi_are_file_apis_ansi.md',
    'doc_winapi_assign_process_to_job_object.md',
    'doc_winapi_assoc_query_string_w.md',
    'doc_winapi_authz_access_check.md',
    'doc_winapi_authz_add_sids_to_context.md',
    'doc_winapi_authz_cached_access_check.md',
    'doc_winapi_authz_free_context.md',
    'doc_winapi_authz_free_resource_manager.md',
    'doc_winapi_authz_initialize_context_from_authz_context.md',
    'doc_winapi_authz_initialize_context_from_sid.md',
    'doc_winapi_authz_initialize_context_from_token.md',
    'doc_winapi_authz_initialize_resource_manager.md',
    'doc_winapi_authz_modify_claims.md',
    'doc_winapi_authz_modify_sids.md',
    'doc_winapi_authz_open_object_audit.md',
    'doc_winapi_bcrypt_close_algorithm_provider.md',
    'doc_winapi_bcrypt_create_hash.md',
    'doc_winapi_bcrypt_decrypt.md',
    'doc_winapi_bcrypt_derive_key.md',
    'doc_winapi_bcrypt_derive_key_pbkdf2.md',
    'doc_winapi_bcrypt_destroy_hash.md',
    'doc_winapi_bcrypt_destroy_key.md',
    'doc_winapi_bcrypt_encrypt.md',
    'doc_winapi_bcrypt_enum_algorithms.md',
    'doc_winapi_bcrypt_enum_providers.md',
    'doc_winapi_bcrypt_export_key.md',
    'doc_winapi_bcrypt_finalize_key_pair.md',
    'doc_winapi_bcrypt_finish_hash.md',
    'doc_winapi_bcrypt_gen_random.md',
    'doc_winapi_bcrypt_generate_key_pair.md',
    'doc_winapi_bcrypt_generate_symmetric_key.md',
    'doc_winapi_bcrypt_get_property.md',
    'doc_winapi_bcrypt_hash_data.md',
    'doc_winapi_bcrypt_import_key.md',
    'doc_winapi_bcrypt_import_key_pair.md',
    'doc_winapi_bcrypt_open_algorithm_provider.md',
    'doc_winapi_bcrypt_secret_agreement.md',
    'doc_winapi_bcrypt_set_property.md',
    'doc_winapi_bcrypt_sign_hash.md',
    'doc_winapi_bcrypt_verify_signature.md',
    'doc_winapi_bind.md',
    'doc_winapi_bind_image_ex.md',
    'doc_winapi_bit_blt.md',
    'doc_winapi_build_explicit_access_with_name_w.md',
    'doc_winapi_build_security_descriptor_w.md',
    'doc_winapi_call_named_pipe_w.md',
    'doc_winapi_call_nt_power_information.md',
    'doc_winapi_cancel_io.md',
    'doc_winapi_cancel_io_ex.md',
    'doc_winapi_cancel_mib_change_notify2.md',
    'doc_winapi_cert_add_certificate_context_to_store.md',
    'doc_winapi_cert_close_store.md',
    'doc_winapi_cert_delete_certificate_from_store.md',
    'doc_winapi_cert_duplicate_certificate_context.md',
    'doc_winapi_cert_enum_certificates_in_store.md',
    'doc_winapi_cert_enum_crls_in_store.md',
    'doc_winapi_cert_find_certificate_in_store.md',
    'doc_winapi_cert_free_certificate_context.md',
    'doc_winapi_cert_get_certificate_chain.md',
    'doc_winapi_cert_get_name_string_w.md',
    'doc_winapi_cert_name_to_str_w.md',
    'doc_winapi_cert_open_store.md',
    'doc_winapi_cert_open_system_store_w.md',
    'doc_winapi_cert_str_to_name_w.md',
    'doc_winapi_cert_verify_certificate_chain_policy.md',
    'doc_winapi_cert_verify_crlrevocation.md',
    'doc_winapi_change_display_settings_ex_w.md',
    'doc_winapi_change_service_config2_w.md',
    'doc_winapi_change_window_message_filter_ex.md',
    'doc_winapi_check_remote_debugger_present.md',
    'doc_winapi_check_sum_mapped_file.md',
    'doc_winapi_check_token_membership.md',
    'doc_winapi_close_clipboard.md',
    'doc_winapi_close_desktop.md',
    'doc_winapi_close_threadpool_work.md',
    'doc_winapi_closesocket.md',
    'doc_winapi_cm_get_child.md',
    'doc_winapi_cm_get_dev_node_status.md',
    'doc_winapi_cm_get_device_id_size.md',
    'doc_winapi_cm_get_device_idw.md',
    'doc_winapi_cm_get_device_interface_list_size_w.md',
    'doc_winapi_cm_get_device_interface_list_w.md',
    'doc_winapi_cm_get_device_interface_property_w.md',
    'doc_winapi_cm_get_parent.md',
    'doc_winapi_cm_get_sibling.md',
    'doc_winapi_cm_locate_dev_node_w.md',
    'doc_winapi_cm_query_and_remove_sub_tree_w.md',
    'doc_winapi_cm_reenumerate_dev_node.md',
    'doc_winapi_cm_register_notification.md',
    'doc_winapi_cm_unregister_notification.md',
    'doc_winapi_co_create_instance.md',
    'doc_winapi_co_create_instance_cuiautomation.md',
    'doc_winapi_co_create_instance_ex.md',
    'doc_winapi_co_get_class_object.md',
    'doc_winapi_co_get_interface_and_release_stream.md',
    'doc_winapi_co_get_malloc.md',
    'doc_winapi_co_get_object.md',
    'doc_winapi_co_impersonate_client.md',
    'doc_winapi_co_initialize_ex.md',
    'doc_winapi_co_initialize_security.md',
    'doc_winapi_co_marshal_inter_thread_interface_in_stream.md',
    'doc_winapi_co_query_proxy_blanket.md',
    'doc_winapi_co_register_class_object.md',
    'doc_winapi_co_revert_to_self.md',
    'doc_winapi_co_revoke_class_object.md',
    'doc_winapi_co_set_proxy_blanket.md',
    'doc_winapi_co_task_mem_alloc.md',
    'doc_winapi_co_task_mem_free.md',
    'doc_winapi_co_uninitialize.md',
    'doc_winapi_command_line_to_argv_w.md',
    'doc_winapi_complete_auth_token.md',
    'doc_winapi_connect.md',
    'doc_winapi_connect_named_pipe.md',
    'doc_winapi_continue_debug_event.md',
    'doc_winapi_control_service.md',
    'doc_winapi_control_trace_w.md',
    'doc_winapi_convert_security_descriptor_to_string_security_descriptor_w.md',
    'doc_winapi_convert_sid_to_string_sid_w.md',
    'doc_winapi_convert_string_security_descriptor_to_security_descriptor_w.md',
    'doc_winapi_convert_string_sid_to_sid_w.md',
    'doc_winapi_copy_file_ex_w.md',
    'doc_winapi_copy_file_w.md',
    'doc_winapi_create_app_container_profile.md',
    'doc_winapi_create_compatible_bitmap.md',
    'doc_winapi_create_compatible_dc.md',
    'doc_winapi_create_desktop_w.md',
    'doc_winapi_create_dibsection.md',
    'doc_winapi_create_directory_w.md',
    'doc_winapi_create_environment_block.md',
    'doc_winapi_create_event_w.md',
    'doc_winapi_create_file_mapping_from_app.md',
    'doc_winapi_create_file_mapping_w.md',
    'doc_winapi_create_file_w.md',
    'doc_winapi_create_font_indirect_w.md',
    'doc_winapi_create_hard_link_w.md',
    'doc_winapi_create_io_completion_port.md',
    'doc_winapi_create_job_object_w.md',
    'doc_winapi_create_mutex_w.md',
    'doc_winapi_create_named_pipe_w.md',
    'doc_winapi_create_pen.md',
    'doc_winapi_create_pipe.md',
    'doc_winapi_create_process_a.md',
    'doc_winapi_create_process_as_user_w.md',
    'doc_winapi_create_process_w.md',
    'doc_winapi_create_process_with_logon_w.md',
    'doc_winapi_create_process_with_token_w.md',
    'doc_winapi_create_profile.md',
    'doc_winapi_create_remote_thread.md',
    'doc_winapi_create_remote_thread_ex.md',
    'doc_winapi_create_restricted_token.md',
    'doc_winapi_create_service_w.md',
    'doc_winapi_create_solid_brush.md',
    'doc_winapi_create_symbolic_link_w.md',
    'doc_winapi_create_thread.md',
    'doc_winapi_create_threadpool.md',
    'doc_winapi_create_threadpool_work.md',
    'doc_winapi_create_timer_queue_timer.md',
    'doc_winapi_create_toolhelp32_snapshot.md',
    'doc_winapi_create_waitable_timer_w.md',
    'doc_winapi_cred_delete_w.md',
    'doc_winapi_cred_enumerate_w.md',
    'doc_winapi_cred_find_best_credential_w.md',
    'doc_winapi_cred_free.md',
    'doc_winapi_cred_get_session_types.md',
    'doc_winapi_cred_is_marshaled_credential_w.md',
    'doc_winapi_cred_marshal_credential_w.md',
    'doc_winapi_cred_pack_authentication_buffer_w.md',
    'doc_winapi_cred_protect_w.md',
    'doc_winapi_cred_read_w.md',
    'doc_winapi_cred_uiprompt_for_credentials_w.md',
    'doc_winapi_cred_uiprompt_for_windows_credentials_w.md',
    'doc_winapi_cred_un_pack_authentication_buffer_w.md',
    'doc_winapi_cred_unmarshal_credential_w.md',
    'doc_winapi_cred_unprotect_w.md',
    'doc_winapi_cred_write_w.md',
    'doc_winapi_crypt_acquire_context_w.md',
    'doc_winapi_crypt_catadmin_acquire_context.md',
    'doc_winapi_crypt_catadmin_calc_hash_from_file_handle.md',
    'doc_winapi_crypt_catadmin_enum_catalog_from_hash.md',
    'doc_winapi_crypt_catcatalog_info_from_context.md',
    'doc_winapi_crypt_decode_object_ex.md',
    'doc_winapi_crypt_encode_object_ex.md',
    'doc_winapi_crypt_gen_random.md',
    'doc_winapi_crypt_msg_get_param.md',
    'doc_winapi_crypt_msg_open_to_decode.md',
    'doc_winapi_crypt_msg_update.md',
    'doc_winapi_crypt_protect_data.md',
    'doc_winapi_crypt_query_object.md',
    'doc_winapi_crypt_unprotect_data.md',
    'doc_winapi_debug_active_process.md',
    'doc_winapi_debug_active_process_stop.md',
    'doc_winapi_decrypt_message.md',
    'doc_winapi_def_raw_input_proc.md',
    'doc_winapi_delete_app_container_profile.md',
    'doc_winapi_delete_dc.md',
    'doc_winapi_delete_file_w.md',
    'doc_winapi_delete_object.md',
    'doc_winapi_delete_proc_thread_attribute_list.md',
    'doc_winapi_delete_profile_w.md',
    'doc_winapi_delete_security_context.md',
    'doc_winapi_delete_timer_queue_timer.md',
    'doc_winapi_derive_app_container_sid_from_app_container_name.md',
    'doc_winapi_destroy_environment_block.md',
    'doc_winapi_device_io_control.md',
    'doc_winapi_discard_virtual_memory.md',
    'doc_winapi_disconnect_named_pipe.md',
    'doc_winapi_dns_acquire_context_handle_w.md',
    'doc_winapi_dns_flush_resolver_cache.md',
    'doc_winapi_dns_flush_resolver_cache_entry_w.md',
    'doc_winapi_dns_free.md',
    'doc_winapi_dns_get_cache_data_table.md',
    'doc_winapi_dns_modify_records_in_set_w.md',
    'doc_winapi_dns_name_compare_w.md',
    'doc_winapi_dns_query_ex.md',
    'doc_winapi_dns_query_w.md',
    'doc_winapi_dns_record_list_free.md',
    'doc_winapi_dns_release_context_handle.md',
    'doc_winapi_dns_replace_record_set_w.md',
    'doc_winapi_dns_validate_name_w.md',
    'doc_winapi_drag_query_file_w.md',
    'doc_winapi_driver_final_policy.md',
    'doc_winapi_ds_bind_w.md',
    'doc_winapi_ds_bind_with_cred_w.md',
    'doc_winapi_ds_crack_names_w.md',
    'doc_winapi_ds_free_domain_controller_info_w.md',
    'doc_winapi_ds_free_spn_array_w.md',
    'doc_winapi_ds_get_dc_name_w.md',
    'doc_winapi_ds_get_domain_controller_info_w.md',
    'doc_winapi_ds_get_site_name_w.md',
    'doc_winapi_ds_get_spn_w.md',
    'doc_winapi_ds_list_domains_in_site_w.md',
    'doc_winapi_ds_list_roles_w.md',
    'doc_winapi_ds_list_servers_in_site_w.md',
    'doc_winapi_ds_list_sites_w.md',
    'doc_winapi_ds_make_spn_w.md',
    'doc_winapi_ds_replica_free_info.md',
    'doc_winapi_ds_replica_get_info_w.md',
    'doc_winapi_ds_replica_sync_w.md',
    'doc_winapi_ds_un_bind_w.md',
    'doc_winapi_duplicate_token.md',
    'doc_winapi_duplicate_token_ex.md',
    'doc_winapi_dwm_enable_blur_behind_window.md',
    'doc_winapi_dwm_flush.md',
    'doc_winapi_dwm_get_colorization_color.md',
    'doc_winapi_dwm_get_window_attribute.md',
    'doc_winapi_dwm_is_composition_enabled.md',
    'doc_winapi_dwm_query_thumbnail_source_size.md',
    'doc_winapi_dwm_register_thumbnail.md',
    'doc_winapi_dwm_set_window_attribute.md',
    'doc_winapi_dwm_unregister_thumbnail.md',
    'doc_winapi_dwm_update_thumbnail_properties.md',
    'doc_winapi_enable_trace_ex2.md',
    'doc_winapi_encrypt_message.md',
    'doc_winapi_enter_critical_policy_section.md',
    'doc_winapi_enum_child_windows.md',
    'doc_winapi_enum_clipboard_formats.md',
    'doc_winapi_enum_desktops_w.md',
    'doc_winapi_enum_device_drivers.md',
    'doc_winapi_enum_display_devices_w.md',
    'doc_winapi_enum_display_monitors.md',
    'doc_winapi_enum_display_settings_w.md',
    'doc_winapi_enum_font_families_ex_w.md',
    'doc_winapi_enum_fonts_w.md',
    'doc_winapi_enum_process_modules.md',
    'doc_winapi_enum_processes.md',
    'doc_winapi_enum_resource_languages_w.md',
    'doc_winapi_enum_resource_names_w.md',
    'doc_winapi_enum_resource_types_w.md',
    'doc_winapi_enum_services_status_ex_w.md',
    'doc_winapi_enum_windows.md',
    'doc_winapi_enumerate_security_packages_w.md',
    'doc_winapi_event_activity_id_control.md',
    'doc_winapi_event_register.md',
    'doc_winapi_event_write.md',
    'doc_winapi_evt_archive_exported_log.md',
    'doc_winapi_evt_clear_log.md',
    'doc_winapi_evt_close.md',
    'doc_winapi_evt_create_bookmark.md',
    'doc_winapi_evt_export_log.md',
    'doc_winapi_evt_format_message.md',
    'doc_winapi_evt_get_object_array_property.md',
    'doc_winapi_evt_get_object_array_size.md',
    'doc_winapi_evt_get_publisher_metadata_property.md',
    'doc_winapi_evt_next.md',
    'doc_winapi_evt_next_channel_path.md',
    'doc_winapi_evt_next_publisher_id.md',
    'doc_winapi_evt_open_channel_enum.md',
    'doc_winapi_evt_open_publisher_enum.md',
    'doc_winapi_evt_open_publisher_metadata.md',
    'doc_winapi_evt_query.md',
    'doc_winapi_evt_render.md',
    'doc_winapi_evt_seek.md',
    'doc_winapi_evt_subscribe.md',
    'doc_winapi_evt_update_bookmark.md',
    'doc_winapi_exit_thread.md',
    'doc_winapi_exit_windows_ex.md',
    'doc_winapi_expand_environment_strings_w.md',
    'doc_winapi_extract_icon_ex_w.md',
    'doc_winapi_find_first_change_notification_w.md',
    'doc_winapi_find_first_file_w.md',
    'doc_winapi_find_next_file_w.md',
    'doc_winapi_find_resource_ex_w.md',
    'doc_winapi_find_resource_w.md',
    'doc_winapi_flush_process_write_buffers.md',
    'doc_winapi_flush_view_of_file.md',
    'doc_winapi_format_message_w.md',
    'doc_winapi_free_ads_mem.md',
    'doc_winapi_free_credentials_handle.md',
    'doc_winapi_free_environment_strings_w.md',
    'doc_winapi_free_gpolist_w.md',
    'doc_winapi_free_library.md',
    'doc_winapi_freeaddrinfo.md',
    'doc_winapi_fwpm_engine_close0.md',
    'doc_winapi_fwpm_engine_open0.md',
    'doc_winapi_fwpm_filter_enum0.md',
    'doc_winapi_fwpm_provider_enum0.md',
    'doc_winapi_get_ace.md',
    'doc_winapi_get_acl_information.md',
    'doc_winapi_get_adapters_addresses.md',
    'doc_winapi_get_addr_info_ex_w.md',
    'doc_winapi_get_all_users_profile_directory_w.md',
    'doc_winapi_get_anycast_ip_address_table.md',
    'doc_winapi_get_applied_gpolist_w.md',
    'doc_winapi_get_async_key_state.md',
    'doc_winapi_get_audited_permissions_from_acl_w.md',
    'doc_winapi_get_best_interface_ex.md',
    'doc_winapi_get_best_route2.md',
    'doc_winapi_get_class_name_w.md',
    'doc_winapi_get_clipboard_data.md',
    'doc_winapi_get_command_line_w.md',
    'doc_winapi_get_compressed_file_size_w.md',
    'doc_winapi_get_current_package_full_name.md',
    'doc_winapi_get_current_process.md',
    'doc_winapi_get_current_process_id.md',
    'doc_winapi_get_current_processor_number.md',
    'doc_winapi_get_current_processor_number_ex.md',
    'doc_winapi_get_current_thread.md',
    'doc_winapi_get_current_thread_id.md',
    'doc_winapi_get_default_user_profile_directory_w.md',
    'doc_winapi_get_device_caps.md',
    'doc_winapi_get_device_driver_base_name_w.md',
    'doc_winapi_get_device_driver_file_name_w.md',
    'doc_winapi_get_dibits.md',
    'doc_winapi_get_disk_free_space_ex_w.md',
    'doc_winapi_get_dll_directory_w.md',
    'doc_winapi_get_drive_type_w.md',
    'doc_winapi_get_effective_rights_from_acl_w.md',
    'doc_winapi_get_environment_strings_w.md',
    'doc_winapi_get_environment_variable_w.md',
    'doc_winapi_get_exit_code_process.md',
    'doc_winapi_get_extended_tcp_table.md',
    'doc_winapi_get_extended_udp_table.md',
    'doc_winapi_get_file_attributes_ex_w.md',
    'doc_winapi_get_file_information_by_handle.md',
    'doc_winapi_get_file_information_by_handle_ex.md',
    'doc_winapi_get_file_security_w.md',
    'doc_winapi_get_file_size_ex.md',
    'doc_winapi_get_file_type.md',
    'doc_winapi_get_file_version_info_ex_w.md',
    'doc_winapi_get_file_version_info_size_ex_w.md',
    'doc_winapi_get_file_version_info_size_w.md',
    'doc_winapi_get_file_version_info_w.md',
    'doc_winapi_get_final_path_name_by_handle_w.md',
    'doc_winapi_get_foreground_window.md',
    'doc_winapi_get_full_path_name_w.md',
    'doc_winapi_get_gpolist_w.md',
    'doc_winapi_get_if_entry2.md',
    'doc_winapi_get_if_table2.md',
    'doc_winapi_get_ip_forward_table2.md',
    'doc_winapi_get_ip_interface_entry.md',
    'doc_winapi_get_ip_interface_table.md',
    'doc_winapi_get_ip_net_table2.md',
    'doc_winapi_get_keyboard_state.md',
    'doc_winapi_get_large_page_minimum.md',
    'doc_winapi_get_last_error.md',
    'doc_winapi_get_logical_drives.md',
    'doc_winapi_get_long_path_name_w.md',
    'doc_winapi_get_mapped_file_name_w.md',
    'doc_winapi_get_module_file_name_ex_w.md',
    'doc_winapi_get_module_handle_ex_w.md',
    'doc_winapi_get_module_handle_w.md',
    'doc_winapi_get_monitor_info_w.md',
    'doc_winapi_get_multicast_ip_address_table.md',
    'doc_winapi_get_named_pipe_client_process_id.md',
    'doc_winapi_get_named_pipe_info.md',
    'doc_winapi_get_named_pipe_server_process_id.md',
    'doc_winapi_get_named_security_info_w.md',
    'doc_winapi_get_native_system_info.md',
    'doc_winapi_get_network_params.md',
    'doc_winapi_get_numa_highest_node_number.md',
    'doc_winapi_get_numa_node_processor_mask_ex.md',
    'doc_winapi_get_object_w.md',
    'doc_winapi_get_overlapped_result.md',
    'doc_winapi_get_overlapped_result_ex.md',
    'doc_winapi_get_owner_module_from_tcp_entry.md',
    'doc_winapi_get_owner_module_from_udp_entry.md',
    'doc_winapi_get_package_full_name.md',
    'doc_winapi_get_per_tcp_connection_estats.md',
    'doc_winapi_get_priority_class.md',
    'doc_winapi_get_proc_address.md',
    'doc_winapi_get_process_affinity_mask.md',
    'doc_winapi_get_process_handle_count.md',
    'doc_winapi_get_process_image_file_name_w.md',
    'doc_winapi_get_process_information.md',
    'doc_winapi_get_process_io_counters.md',
    'doc_winapi_get_process_memory_info.md',
    'doc_winapi_get_process_mitigation_policy.md',
    'doc_winapi_get_process_priority_boost.md',
    'doc_winapi_get_process_times.md',
    'doc_winapi_get_process_working_set_size_ex.md',
    'doc_winapi_get_profiles_directory_w.md',
    'doc_winapi_get_queued_completion_status.md',
    'doc_winapi_get_queued_completion_status_ex.md',
    'doc_winapi_get_raw_input_data.md',
    'doc_winapi_get_raw_input_device_info_w.md',
    'doc_winapi_get_raw_input_device_list.md',
    'doc_winapi_get_security_descriptor_dacl.md',
    'doc_winapi_get_security_descriptor_group.md',
    'doc_winapi_get_security_descriptor_owner.md',
    'doc_winapi_get_security_info.md',
    'doc_winapi_get_shell_window.md',
    'doc_winapi_get_short_path_name_w.md',
    'doc_winapi_get_startup_info_w.md',
    'doc_winapi_get_stock_object.md',
    'doc_winapi_get_system_info.md',
    'doc_winapi_get_system_power_status.md',
    'doc_winapi_get_tcp_table2.md',
    'doc_winapi_get_temp_file_name_w.md',
    'doc_winapi_get_temp_path_w.md',
    'doc_winapi_get_text_metrics_w.md',
    'doc_winapi_get_thread_context.md',
    'doc_winapi_get_thread_description.md',
    'doc_winapi_get_thread_desktop.md',
    'doc_winapi_get_thread_ideal_processor_ex.md',
    'doc_winapi_get_thread_priority.md',
    'doc_winapi_get_thread_priority_boost.md',
    'doc_winapi_get_thread_times.md',
    'doc_winapi_get_token_information.md',
    'doc_winapi_get_unicast_ip_address_table.md',
    'doc_winapi_get_user_name_ex_w.md',
    'doc_winapi_get_user_name_w.md',
    'doc_winapi_get_user_profile_directory_w.md',
    'doc_winapi_get_volume_information_w.md',
    'doc_winapi_get_window_text_w.md',
    'doc_winapi_get_window_thread_process_id.md',
    'doc_winapi_get_write_watch.md',
    'doc_winapi_getaddrinfo.md',
    'doc_winapi_getsockopt.md',
    'doc_winapi_global_memory_status_ex.md',
    'doc_winapi_heap_walk.md',
    'doc_winapi_http_add_url_to_url_group.md',
    'doc_winapi_http_close_request_queue.md',
    'doc_winapi_http_close_server_session.md',
    'doc_winapi_http_close_url_group.md',
    'doc_winapi_http_create_request_queue.md',
    'doc_winapi_http_create_server_session.md',
    'doc_winapi_http_create_url_group.md',
    'doc_winapi_http_delete_service_configuration.md',
    'doc_winapi_http_initialize.md',
    'doc_winapi_http_open_request_w.md',
    'doc_winapi_http_query_service_configuration.md',
    'doc_winapi_http_query_url_group_property.md',
    'doc_winapi_http_receive_http_request.md',
    'doc_winapi_http_remove_url_from_url_group.md',
    'doc_winapi_http_send_http_response.md',
    'doc_winapi_http_send_response_entity_body.md',
    'doc_winapi_http_set_service_configuration.md',
    'doc_winapi_http_set_url_group_property.md',
    'doc_winapi_http_terminate.md',
    'doc_winapi_ienum_wbem_class_object_next.md',
    'doc_winapi_iexec_action_get_arguments.md',
    'doc_winapi_iexec_action_get_path.md',
    'doc_winapi_image_add_certificate.md',
    'doc_winapi_image_directory_entry_to_data.md',
    'doc_winapi_image_enumerate_certificates.md',
    'doc_winapi_image_get_certificate_data.md',
    'doc_winapi_image_get_certificate_header.md',
    'doc_winapi_image_get_digest_stream.md',
    'doc_winapi_image_nt_header.md',
    'doc_winapi_image_remove_certificate.md',
    'doc_winapi_impersonate_anonymous_token.md',
    'doc_winapi_impersonate_logged_on_user.md',
    'doc_winapi_impersonate_named_pipe_client.md',
    'doc_winapi_impersonate_security_context.md',
    'doc_winapi_impersonate_self.md',
    'doc_winapi_inet_ntop.md',
    'doc_winapi_inet_pton.md',
    'doc_winapi_initialize_proc_thread_attribute_list.md',
    'doc_winapi_initialize_security_context_w.md',
    'doc_winapi_internet_connect_w.md',
    'doc_winapi_internet_open_w.md',
    'doc_winapi_internet_read_file.md',
    'doc_winapi_ioctlsocket.md',
    'doc_winapi_iproperty_store_get_at.md',
    'doc_winapi_iproperty_store_get_count.md',
    'doc_winapi_iproperty_store_get_value.md',
    'doc_winapi_iregistered_task_get_definition.md',
    'doc_winapi_iregistered_task_get_last_run_time.md',
    'doc_winapi_iregistered_task_get_last_task_result.md',
    'doc_winapi_iregistered_task_get_name.md',
    'doc_winapi_iregistered_task_get_path.md',
    'doc_winapi_iregistered_task_get_state.md',
    'doc_winapi_is_debugger_present.md',
    'doc_winapi_is_process_in_job.md',
    'doc_winapi_is_pwr_hibernate_allowed.md',
    'doc_winapi_is_pwr_suspend_allowed.md',
    'doc_winapi_is_token_restricted.md',
    'doc_winapi_is_valid_security_descriptor.md',
    'doc_winapi_is_window_visible.md',
    'doc_winapi_is_wow64_process2.md',
    'doc_winapi_itask_definition_get_actions.md',
    'doc_winapi_itask_definition_get_principal.md',
    'doc_winapi_itask_definition_get_triggers.md',
    'doc_winapi_itask_folder_get_task.md',
    'doc_winapi_itask_folder_get_tasks.md',
    'doc_winapi_itask_service_connect.md',
    'doc_winapi_itask_service_get_folder.md',
    'doc_winapi_iuiautomation_element_find_all.md',
    'doc_winapi_iuiautomation_element_from_handle.md',
    'doc_winapi_iuiautomation_element_get_current_automation_id.md',
    'doc_winapi_iuiautomation_element_get_current_control_type.md',
    'doc_winapi_iuiautomation_element_get_current_name.md',
    'doc_winapi_iuiautomation_element_get_current_pattern.md',
    'doc_winapi_iuiautomation_element_get_current_process_id.md',
    'doc_winapi_iuiautomation_get_root_element.md',
    'doc_winapi_iuiautomation_tree_walker_get_first_child_element.md',
    'doc_winapi_iuiautomation_tree_walker_get_next_sibling_element.md',
    'doc_winapi_iwbem_locator_connect_server.md',
    'doc_winapi_iwbem_services_exec_method.md',
    'doc_winapi_iwbem_services_exec_query.md',
    'doc_winapi_k32_enum_process_modules.md',
    'doc_winapi_k32_enum_processes.md',
    'doc_winapi_k32_get_module_file_name_ex_w.md',
    'doc_winapi_k32_get_performance_info.md',
    'doc_winapi_k32_get_process_image_file_name_w.md',
    'doc_winapi_k32_query_working_set.md',
    'doc_winapi_k32_query_working_set_ex.md',
    'doc_winapi_ldap_bind_s_w.md',
    'doc_winapi_ldap_connect.md',
    'doc_winapi_ldap_err2string_w.md',
    'doc_winapi_ldap_first_attribute_w.md',
    'doc_winapi_ldap_first_entry.md',
    'doc_winapi_ldap_get_dn_w.md',
    'doc_winapi_ldap_get_option_w.md',
    'doc_winapi_ldap_get_values_len_w.md',
    'doc_winapi_ldap_get_values_w.md',
    'doc_winapi_ldap_init_w.md',
    'doc_winapi_ldap_msgfree.md',
    'doc_winapi_ldap_next_attribute_w.md',
    'doc_winapi_ldap_next_entry.md',
    'doc_winapi_ldap_sasl_bind_s_w.md',
    'doc_winapi_ldap_search_ext_s_w.md',
    'doc_winapi_ldap_search_s_w.md',
    'doc_winapi_ldap_set_option_w.md',
    'doc_winapi_ldap_sslinit_w.md',
    'doc_winapi_ldap_unbind_s.md',
    'doc_winapi_ldap_value_free_len.md',
    'doc_winapi_ldap_value_free_w.md',
    'doc_winapi_ldr_add_dll_directory.md',
    'doc_winapi_ldr_enumerate_loaded_modules.md',
    'doc_winapi_ldr_get_dll_full_name.md',
    'doc_winapi_ldr_get_dll_handle.md',
    'doc_winapi_ldr_get_dll_path.md',
    'doc_winapi_ldr_get_procedure_address.md',
    'doc_winapi_ldr_load_dll.md',
    'doc_winapi_ldr_register_dll_notification.md',
    'doc_winapi_ldr_remove_dll_directory.md',
    'doc_winapi_ldr_set_dll_directory.md',
    'doc_winapi_ldr_unload_dll.md',
    'doc_winapi_ldr_unregister_dll_notification.md',
    'doc_winapi_leave_critical_policy_section.md',
    'doc_winapi_listen.md',
    'doc_winapi_load_library_ex_w.md',
    'doc_winapi_load_library_w.md',
    'doc_winapi_load_resource.md',
    'doc_winapi_load_user_profile_w.md',
    'doc_winapi_lock_file_ex.md',
    'doc_winapi_lock_resource.md',
    'doc_winapi_lock_work_station.md',
    'doc_winapi_logon_user_w.md',
    'doc_winapi_lookup_account_name_w.md',
    'doc_winapi_lookup_account_sid_w.md',
    'doc_winapi_lookup_privilege_name_w.md',
    'doc_winapi_lookup_privilege_value_w.md',
    'doc_winapi_lsa_close.md',
    'doc_winapi_lsa_enumerate_account_rights.md',
    'doc_winapi_lsa_enumerate_accounts_with_user_right.md',
    'doc_winapi_lsa_enumerate_logon_sessions.md',
    'doc_winapi_lsa_free_memory.md',
    'doc_winapi_lsa_get_logon_session_data.md',
    'doc_winapi_lsa_lookup_names2.md',
    'doc_winapi_lsa_lookup_sids.md',
    'doc_winapi_lsa_open_policy.md',
    'doc_winapi_lsa_query_information_policy.md',
    'doc_winapi_make_absolute_sd.md',
    'doc_winapi_make_self_relative_sd.md',
    'doc_winapi_make_signature.md',
    'doc_winapi_map_and_load.md',
    'doc_winapi_map_file_and_check_sum_w.md',
    'doc_winapi_map_view_of_file.md',
    'doc_winapi_map_view_of_file_ex.md',
    'doc_winapi_map_view_of_file_numa2.md',
    'doc_winapi_map_view_of_file3.md',
    'doc_winapi_map_virtual_key_w.md',
    'doc_winapi_mini_dump_read_dump_stream.md',
    'doc_winapi_mini_dump_write_dump.md',
    'doc_winapi_module32_first_w.md',
    'doc_winapi_module32_next_w.md',
    'doc_winapi_monitor_from_point.md',
    'doc_winapi_monitor_from_window.md',
    'doc_winapi_move_file_ex_w.md',
    'doc_winapi_move_file_w.md',
    'doc_winapi_ncrypt_create_persisted_key.md',
    'doc_winapi_ncrypt_decrypt.md',
    'doc_winapi_ncrypt_delete_key.md',
    'doc_winapi_ncrypt_derive_key.md',
    'doc_winapi_ncrypt_encrypt.md',
    'doc_winapi_ncrypt_enum_algorithms.md',
    'doc_winapi_ncrypt_enum_keys.md',
    'doc_winapi_ncrypt_enum_storage_providers.md',
    'doc_winapi_ncrypt_export_key.md',
    'doc_winapi_ncrypt_finalize_key.md',
    'doc_winapi_ncrypt_free_object.md',
    'doc_winapi_ncrypt_get_property.md',
    'doc_winapi_ncrypt_import_key.md',
    'doc_winapi_ncrypt_is_alg_supported.md',
    'doc_winapi_ncrypt_notify_change_key.md',
    'doc_winapi_ncrypt_open_key.md',
    'doc_winapi_ncrypt_open_storage_provider.md',
    'doc_winapi_ncrypt_secret_agreement.md',
    'doc_winapi_ncrypt_set_property.md',
    'doc_winapi_ncrypt_sign_hash.md',
    'doc_winapi_ncrypt_verify_signature.md',
    'doc_winapi_need_current_directory_for_exe_path_w.md',
    'doc_winapi_net_api_buffer_free.md',
    'doc_winapi_net_file_close.md',
    'doc_winapi_net_file_enum.md',
    'doc_winapi_net_get_join_information.md',
    'doc_winapi_net_group_enum.md',
    'doc_winapi_net_group_get_users.md',
    'doc_winapi_net_local_group_add.md',
    'doc_winapi_net_local_group_add_members.md',
    'doc_winapi_net_local_group_del.md',
    'doc_winapi_net_local_group_del_members.md',
    'doc_winapi_net_local_group_enum.md',
    'doc_winapi_net_local_group_get_members.md',
    'doc_winapi_net_message_buffer_send.md',
    'doc_winapi_net_remote_tod.md',
    'doc_winapi_net_schedule_job_enum.md',
    'doc_winapi_net_schedule_job_get_info.md',
    'doc_winapi_net_server_disk_enum.md',
    'doc_winapi_net_server_enum.md',
    'doc_winapi_net_server_get_info.md',
    'doc_winapi_net_session_enum.md',
    'doc_winapi_net_share_add.md',
    'doc_winapi_net_share_check.md',
    'doc_winapi_net_share_del.md',
    'doc_winapi_net_share_enum.md',
    'doc_winapi_net_share_get_info.md',
    'doc_winapi_net_statistics_get.md',
    'doc_winapi_net_use_enum.md',
    'doc_winapi_net_user_add.md',
    'doc_winapi_net_user_change_password.md',
    'doc_winapi_net_user_del.md',
    'doc_winapi_net_user_enum.md',
    'doc_winapi_net_user_get_groups.md',
    'doc_winapi_net_user_get_info.md',
    'doc_winapi_net_user_get_local_groups.md',
    'doc_winapi_net_user_set_info.md',
    'doc_winapi_net_wksta_user_enum.md',
    'doc_winapi_notify_addr_change.md',
    'doc_winapi_notify_ip_interface_change.md',
    'doc_winapi_notify_route_change2.md',
    'doc_winapi_notify_service_status_change_w.md',
    'doc_winapi_notify_unicast_ip_address_change.md',
    'doc_winapi_nt_adjust_privileges_token.md',
    'doc_winapi_nt_allocate_virtual_memory.md',
    'doc_winapi_nt_allocate_virtual_memory_ex.md',
    'doc_winapi_nt_are_mapped_files_the_same.md',
    'doc_winapi_nt_cancel_io_file.md',
    'doc_winapi_nt_cancel_io_file_ex.md',
    'doc_winapi_nt_cancel_timer.md',
    'doc_winapi_nt_compress_key.md',
    'doc_winapi_nt_create_debug_object.md',
    'doc_winapi_nt_create_event.md',
    'doc_winapi_nt_create_file.md',
    'doc_winapi_nt_create_key.md',
    'doc_winapi_nt_create_mailslot_file.md',
    'doc_winapi_nt_create_mutant.md',
    'doc_winapi_nt_create_named_pipe_file.md',
    'doc_winapi_nt_create_paging_file.md',
    'doc_winapi_nt_create_section.md',
    'doc_winapi_nt_create_semaphore.md',
    'doc_winapi_nt_create_thread_ex.md',
    'doc_winapi_nt_create_timer.md',
    'doc_winapi_nt_create_user_process.md',
    'doc_winapi_nt_debug_active_process.md',
    'doc_winapi_nt_debug_continue.md',
    'doc_winapi_nt_delay_execution.md',
    'doc_winapi_nt_delete_file.md',
    'doc_winapi_nt_delete_key.md',
    'doc_winapi_nt_delete_value_key.md',
    'doc_winapi_nt_device_io_control_file.md',
    'doc_winapi_nt_duplicate_token.md',
    'doc_winapi_nt_enumerate_key.md',
    'doc_winapi_nt_filter_token.md',
    'doc_winapi_nt_flush_buffers_file.md',
    'doc_winapi_nt_flush_instruction_cache.md',
    'doc_winapi_nt_flush_key.md',
    'doc_winapi_nt_flush_virtual_memory.md',
    'doc_winapi_nt_free_virtual_memory.md',
    'doc_winapi_nt_fs_control_file.md',
    'doc_winapi_nt_get_context_thread.md',
    'doc_winapi_nt_load_key.md',
    'doc_winapi_nt_lock_file.md',
    'doc_winapi_nt_lock_virtual_memory.md',
    'doc_winapi_nt_map_view_of_section.md',
    'doc_winapi_nt_notify_change_key.md',
    'doc_winapi_nt_notify_change_multiple_keys.md',
    'doc_winapi_nt_open_directory_object.md',
    'doc_winapi_nt_open_event.md',
    'doc_winapi_nt_open_file.md',
    'doc_winapi_nt_open_key.md',
    'doc_winapi_nt_open_key_ex.md',
    'doc_winapi_nt_open_mutant.md',
    'doc_winapi_nt_open_process.md',
    'doc_winapi_nt_open_process_token.md',
    'doc_winapi_nt_open_section.md',
    'doc_winapi_nt_open_semaphore.md',
    'doc_winapi_nt_open_symbolic_link_object.md',
    'doc_winapi_nt_open_thread.md',
    'doc_winapi_nt_open_thread_token.md',
    'doc_winapi_nt_open_timer.md',
    'doc_winapi_nt_protect_virtual_memory.md',
    'doc_winapi_nt_query_attributes_file.md',
    'doc_winapi_nt_query_default_locale.md',
    'doc_winapi_nt_query_default_uilanguage.md',
    'doc_winapi_nt_query_directory_file.md',
    'doc_winapi_nt_query_directory_object.md',
    'doc_winapi_nt_query_ea_file.md',
    'doc_winapi_nt_query_full_attributes_file.md',
    'doc_winapi_nt_query_information_file.md',
    'doc_winapi_nt_query_information_job_object.md',
    'doc_winapi_nt_query_information_process.md',
    'doc_winapi_nt_query_information_thread.md',
    'doc_winapi_nt_query_information_token.md',
    'doc_winapi_nt_query_install_uilanguage.md',
    'doc_winapi_nt_query_interval_profile.md',
    'doc_winapi_nt_query_key.md',
    'doc_winapi_nt_query_multiple_value_key.md',
    'doc_winapi_nt_query_object.md',
    'doc_winapi_nt_query_performance_counter.md',
    'doc_winapi_nt_query_security_object.md',
    'doc_winapi_nt_query_symbolic_link_object.md',
    'doc_winapi_nt_query_system_environment_value.md',
    'doc_winapi_nt_query_system_environment_value_ex.md',
    'doc_winapi_nt_query_system_information.md',
    'doc_winapi_nt_query_system_information_ex.md',
    'doc_winapi_nt_query_system_time.md',
    'doc_winapi_nt_query_timer_resolution.md',
    'doc_winapi_nt_query_value_key.md',
    'doc_winapi_nt_query_virtual_memory.md',
    'doc_winapi_nt_query_volume_information_file.md',
    'doc_winapi_nt_read_file.md',
    'doc_winapi_nt_read_virtual_memory.md',
    'doc_winapi_nt_release_mutant.md',
    'doc_winapi_nt_release_semaphore.md',
    'doc_winapi_nt_remove_process_debug.md',
    'doc_winapi_nt_rename_key.md',
    'doc_winapi_nt_reset_event.md',
    'doc_winapi_nt_restore_key.md',
    'doc_winapi_nt_resume_process.md',
    'doc_winapi_nt_resume_thread.md',
    'doc_winapi_nt_save_key.md',
    'doc_winapi_nt_set_context_thread.md',
    'doc_winapi_nt_set_default_locale.md',
    'doc_winapi_nt_set_default_uilanguage.md',
    'doc_winapi_nt_set_ea_file.md',
    'doc_winapi_nt_set_event.md',
    'doc_winapi_nt_set_information_file.md',
    'doc_winapi_nt_set_information_object.md',
    'doc_winapi_nt_set_information_virtual_memory.md',
    'doc_winapi_nt_set_interval_profile.md',
    'doc_winapi_nt_set_system_environment_value.md',
    'doc_winapi_nt_set_system_environment_value_ex.md',
    'doc_winapi_nt_set_system_information.md',
    'doc_winapi_nt_set_timer.md',
    'doc_winapi_nt_set_value_key.md',
    'doc_winapi_nt_set_volume_information_file.md',
    'doc_winapi_nt_start_profile.md',
    'doc_winapi_nt_stop_profile.md',
    'doc_winapi_nt_suspend_process.md',
    'doc_winapi_nt_suspend_thread.md',
    'doc_winapi_nt_terminate_process.md',
    'doc_winapi_nt_terminate_thread.md',
    'doc_winapi_nt_unload_key.md',
    'doc_winapi_nt_unlock_file.md',
    'doc_winapi_nt_unlock_virtual_memory.md',
    'doc_winapi_nt_unmap_view_of_section.md',
    'doc_winapi_nt_wait_for_debug_event.md',
    'doc_winapi_nt_write_file.md',
    'doc_winapi_nt_write_virtual_memory.md',
    'doc_winapi_offer_virtual_memory.md',
    'doc_winapi_open_clipboard.md',
    'doc_winapi_open_desktop_w.md',
    'doc_winapi_open_event_log_w.md',
    'doc_winapi_open_event_w.md',
    'doc_winapi_open_file_mapping_w.md',
    'doc_winapi_open_input_desktop.md',
    'doc_winapi_open_mutex_w.md',
    'doc_winapi_open_process.md',
    'doc_winapi_open_process_token.md',
    'doc_winapi_open_scmanager_w.md',
    'doc_winapi_open_service_w.md',
    'doc_winapi_open_thread.md',
    'doc_winapi_open_thread_token.md',
    'doc_winapi_open_trace_w.md',
    'doc_winapi_output_debug_string_w.md',
    'doc_winapi_package_id_from_full_name.md',
    'doc_winapi_path_append_w.md',
    'doc_winapi_path_canonicalize_w.md',
    'doc_winapi_path_cch_add_backslash.md',
    'doc_winapi_path_cch_add_extension.md',
    'doc_winapi_path_cch_append.md',
    'doc_winapi_path_cch_canonicalize.md',
    'doc_winapi_path_cch_combine.md',
    'doc_winapi_path_cch_find_extension.md',
    'doc_winapi_path_cch_is_root.md',
    'doc_winapi_path_cch_remove_backslash.md',
    'doc_winapi_path_cch_remove_extension.md',
    'doc_winapi_path_cch_remove_file_spec.md',
    'doc_winapi_path_cch_rename_extension.md',
    'doc_winapi_path_cch_skip_root.md',
    'doc_winapi_path_cch_strip_prefix.md',
    'doc_winapi_path_cch_strip_to_root.md',
    'doc_winapi_path_combine_w.md',
    'doc_winapi_path_file_exists_w.md',
    'doc_winapi_path_find_extension_w.md',
    'doc_winapi_path_find_file_name_w.md',
    'doc_winapi_path_is_directory_w.md',
    'doc_winapi_path_is_relative_w.md',
    'doc_winapi_path_is_uncw.md',
    'doc_winapi_path_match_spec_w.md',
    'doc_winapi_path_remove_file_spec_w.md',
    'doc_winapi_peek_named_pipe.md',
    'doc_winapi_post_message_w.md',
    'doc_winapi_post_queued_completion_status.md',
    'doc_winapi_power_delete_scheme.md',
    'doc_winapi_power_duplicate_scheme.md',
    'doc_winapi_power_enumerate.md',
    'doc_winapi_power_get_active_scheme.md',
    'doc_winapi_power_get_capabilities.md',
    'doc_winapi_power_read_acvalue.md',
    'doc_winapi_power_read_dcvalue.md',
    'doc_winapi_power_read_description.md',
    'doc_winapi_power_read_friendly_name.md',
    'doc_winapi_power_set_active_scheme.md',
    'doc_winapi_power_write_acvalue_index.md',
    'doc_winapi_power_write_dcvalue_index.md',
    'doc_winapi_prefetch_virtual_memory.md',
    'doc_winapi_process_trace.md',
    'doc_winapi_process32_first_w.md',
    'doc_winapi_process32_next_w.md',
    'doc_winapi_prop_variant_clear.md',
    'doc_winapi_psget_name_from_property_key.md',
    'doc_winapi_psget_property_description.md',
    'doc_winapi_psget_property_description_list_from_string.md',
    'doc_winapi_psget_property_key_from_name.md',
    'doc_winapi_psproperty_key_from_string.md',
    'doc_winapi_psstring_from_property_key.md',
    'doc_winapi_query_context_attributes_w.md',
    'doc_winapi_query_credentials_attributes_w.md',
    'doc_winapi_query_full_process_image_name_w.md',
    'doc_winapi_query_information_job_object.md',
    'doc_winapi_query_performance_counter.md',
    'doc_winapi_query_performance_frequency.md',
    'doc_winapi_query_security_package_info_w.md',
    'doc_winapi_query_service_config_w.md',
    'doc_winapi_query_service_config2_w.md',
    'doc_winapi_query_service_object_security.md',
    'doc_winapi_query_service_status_ex.md',
    'doc_winapi_query_thread_cycle_time.md',
    'doc_winapi_query_working_set_ex.md',
    'doc_winapi_queue_user_apc.md',
    'doc_winapi_raise_exception.md',
    'doc_winapi_ras_dial_w.md',
    'doc_winapi_ras_enum_connections_w.md',
    'doc_winapi_ras_enum_entries_w.md',
    'doc_winapi_ras_get_connect_status_w.md',
    'doc_winapi_ras_get_credentials_w.md',
    'doc_winapi_ras_get_entry_properties_w.md',
    'doc_winapi_ras_get_error_string_w.md',
    'doc_winapi_ras_get_projection_info_w.md',
    'doc_winapi_ras_hang_up_w.md',
    'doc_winapi_ras_set_credentials_w.md',
    'doc_winapi_ras_set_entry_properties_w.md',
    'doc_winapi_re_base_image64.md',
    'doc_winapi_read_directory_changes_w.md',
    'doc_winapi_read_event_log_w.md',
    'doc_winapi_read_file.md',
    'doc_winapi_read_process_memory.md',
    'doc_winapi_reclaim_virtual_memory.md',
    'doc_winapi_recv.md',
    'doc_winapi_recvfrom.md',
    'doc_winapi_refresh_policy.md',
    'doc_winapi_refresh_policy_ex.md',
    'doc_winapi_reg_connect_registry_w.md',
    'doc_winapi_reg_create_key_ex_w.md',
    'doc_winapi_reg_enum_key_ex_w.md',
    'doc_winapi_reg_enum_value_w.md',
    'doc_winapi_reg_get_value_w.md',
    'doc_winapi_reg_load_app_key_w.md',
    'doc_winapi_reg_notify_change_key_value.md',
    'doc_winapi_reg_open_key_ex_w.md',
    'doc_winapi_reg_query_info_key_w.md',
    'doc_winapi_reg_query_value_ex_w.md',
    'doc_winapi_reg_save_key_w.md',
    'doc_winapi_reg_set_value_ex_w.md',
    'doc_winapi_register_clipboard_format_w.md',
    'doc_winapi_register_gpnotification.md',
    'doc_winapi_register_hot_key.md',
    'doc_winapi_register_power_setting_notification.md',
    'doc_winapi_register_raw_input_devices.md',
    'doc_winapi_register_shell_hook_window.md',
    'doc_winapi_register_wait_for_single_object.md',
    'doc_winapi_register_window_message_w.md',
    'doc_winapi_remove_clipboard_format_listener.md',
    'doc_winapi_remove_directory_w.md',
    'doc_winapi_remove_dll_directory.md',
    'doc_winapi_remove_vectored_continue_handler.md',
    'doc_winapi_remove_vectored_exception_handler.md',
    'doc_winapi_replace_file_w.md',
    'doc_winapi_report_event_w.md',
    'doc_winapi_reset_write_watch.md',
    'doc_winapi_resolve_ip_net_entry2.md',
    'doc_winapi_resume_thread.md',
    'doc_winapi_revert_security_context.md',
    'doc_winapi_revert_to_self.md',
    'doc_winapi_rtl_allocate_heap.md',
    'doc_winapi_rtl_ansi_string_to_unicode_string.md',
    'doc_winapi_rtl_compare_unicode_string.md',
    'doc_winapi_rtl_convert_sid_to_unicode_string.md',
    'doc_winapi_rtl_create_heap.md',
    'doc_winapi_rtl_create_process_parameters_ex.md',
    'doc_winapi_rtl_create_user_thread.md',
    'doc_winapi_rtl_destroy_heap.md',
    'doc_winapi_rtl_destroy_process_parameters.md',
    'doc_winapi_rtl_dos_path_name_to_nt_path_name_u.md',
    'doc_winapi_rtl_equal_unicode_string.md',
    'doc_winapi_rtl_free_ansi_string.md',
    'doc_winapi_rtl_free_heap.md',
    'doc_winapi_rtl_free_unicode_string.md',
    'doc_winapi_rtl_get_current_peb.md',
    'doc_winapi_rtl_get_version.md',
    'doc_winapi_rtl_init_string.md',
    'doc_winapi_rtl_init_unicode_string.md',
    'doc_winapi_rtl_nt_status_to_dos_error.md',
    'doc_winapi_rtl_prefix_unicode_string.md',
    'doc_winapi_rtl_size_heap.md',
    'doc_winapi_rtl_unicode_string_to_ansi_string.md',
    'doc_winapi_rtl_upcase_unicode_string.md',
    'doc_winapi_rtl_validate_heap.md',
    'doc_winapi_rtl_verify_version_info.md',
    'doc_winapi_sam_close_handle.md',
    'doc_winapi_sam_connect.md',
    'doc_winapi_sam_enumerate_groups_in_domain.md',
    'doc_winapi_sam_enumerate_users_in_domain.md',
    'doc_winapi_sam_free_memory.md',
    'doc_winapi_sam_get_members_in_alias.md',
    'doc_winapi_sam_get_members_in_group.md',
    'doc_winapi_sam_lookup_domain_in_sam_server.md',
    'doc_winapi_sam_lookup_ids_in_domain.md',
    'doc_winapi_sam_lookup_names_in_domain.md',
    'doc_winapi_sam_open_alias.md',
    'doc_winapi_sam_open_domain.md',
    'doc_winapi_sam_open_group.md',
    'doc_winapi_sam_open_user.md',
    'doc_winapi_sam_query_information_group.md',
    'doc_winapi_sam_query_information_user.md',
    'doc_winapi_search_path_w.md',
    'doc_winapi_select.md',
    'doc_winapi_select_object.md',
    'doc_winapi_send.md',
    'doc_winapi_send_message_timeout_w.md',
    'doc_winapi_send_message_w.md',
    'doc_winapi_sendto.md',
    'doc_winapi_set_clipboard_data.md',
    'doc_winapi_set_context_attributes_w.md',
    'doc_winapi_set_default_dll_directories.md',
    'doc_winapi_set_dibits.md',
    'doc_winapi_set_dll_directory_w.md',
    'doc_winapi_set_end_of_file.md',
    'doc_winapi_set_entries_in_acl_w.md',
    'doc_winapi_set_environment_variable_w.md',
    'doc_winapi_set_file_apis_to_ansi.md',
    'doc_winapi_set_file_apis_to_oem.md',
    'doc_winapi_set_file_attributes_w.md',
    'doc_winapi_set_file_information_by_handle.md',
    'doc_winapi_set_file_pointer_ex.md',
    'doc_winapi_set_information_job_object.md',
    'doc_winapi_set_last_error.md',
    'doc_winapi_set_named_pipe_handle_state.md',
    'doc_winapi_set_named_security_info_w.md',
    'doc_winapi_set_per_tcp_connection_estats.md',
    'doc_winapi_set_priority_class.md',
    'doc_winapi_set_process_affinity_mask.md',
    'doc_winapi_set_process_information.md',
    'doc_winapi_set_process_mitigation_policy.md',
    'doc_winapi_set_process_priority_boost.md',
    'doc_winapi_set_process_working_set_size_ex.md',
    'doc_winapi_set_security_descriptor_dacl.md',
    'doc_winapi_set_security_descriptor_owner.md',
    'doc_winapi_set_security_info.md',
    'doc_winapi_set_thread_affinity_mask.md',
    'doc_winapi_set_thread_description.md',
    'doc_winapi_set_thread_desktop.md',
    'doc_winapi_set_thread_ideal_processor.md',
    'doc_winapi_set_thread_ideal_processor_ex.md',
    'doc_winapi_set_thread_priority.md',
    'doc_winapi_set_thread_priority_boost.md',
    'doc_winapi_set_thread_token.md',
    'doc_winapi_set_token_information.md',
    'doc_winapi_set_unhandled_exception_filter.md',
    'doc_winapi_set_waitable_timer.md',
    'doc_winapi_set_win_event_hook.md',
    'doc_winapi_setsockopt.md',
    'doc_winapi_setup_di_build_driver_info_list.md',
    'doc_winapi_setup_di_class_name_from_guid_w.md',
    'doc_winapi_setup_di_destroy_device_info_list.md',
    'doc_winapi_setup_di_enum_device_info.md',
    'doc_winapi_setup_di_enum_device_interfaces.md',
    'doc_winapi_setup_di_enum_driver_info_w.md',
    'doc_winapi_setup_di_get_class_description_w.md',
    'doc_winapi_setup_di_get_class_devs_w.md',
    'doc_winapi_setup_di_get_device_interface_detail_w.md',
    'doc_winapi_setup_di_get_device_property_w.md',
    'doc_winapi_setup_di_get_device_registry_property_w.md',
    'doc_winapi_setup_di_get_driver_info_detail_w.md',
    'doc_winapi_setup_di_get_infclass_w.md',
    'doc_winapi_setup_di_open_dev_reg_key.md',
    'doc_winapi_shbind_to_parent.md',
    'doc_winapi_shcreate_item_from_parsing_name.md',
    'doc_winapi_shdelete_key_w.md',
    'doc_winapi_shell_execute_ex_w.md',
    'doc_winapi_shell_execute_w.md',
    'doc_winapi_shfile_operation_w.md',
    'doc_winapi_shget_file_info_w.md',
    'doc_winapi_shget_folder_path_w.md',
    'doc_winapi_shget_known_folder_path.md',
    'doc_winapi_shget_property_store_from_parsing_name.md',
    'doc_winapi_shget_special_folder_path_w.md',
    'doc_winapi_shget_stock_icon_info.md',
    'doc_winapi_shopen_folder_and_select_items.md',
    'doc_winapi_shparse_display_name.md',
    'doc_winapi_shreg_get_value_w.md',
    'doc_winapi_shutdown.md',
    'doc_winapi_shutdown_block_reason_create.md',
    'doc_winapi_shutdown_block_reason_destroy.md',
    'doc_winapi_sizeof_resource.md',
    'doc_winapi_sleep_ex.md',
    'doc_winapi_socket.md',
    'doc_winapi_softpub_load_message.md',
    'doc_winapi_sspi_free_auth_identity.md',
    'doc_winapi_sspi_prompt_for_credentials_w.md',
    'doc_winapi_stack_walk64.md',
    'doc_winapi_start_service_w.md',
    'doc_winapi_start_trace_w.md',
    'doc_winapi_stretch_blt.md',
    'doc_winapi_submit_threadpool_work.md',
    'doc_winapi_suspend_thread.md',
    'doc_winapi_switch_desktop.md',
    'doc_winapi_switch_to_thread.md',
    'doc_winapi_sym_cleanup.md',
    'doc_winapi_sym_enum_modules_w64.md',
    'doc_winapi_sym_enum_symbols_w.md',
    'doc_winapi_sym_from_addr_w.md',
    'doc_winapi_sym_get_line_from_addr_w64.md',
    'doc_winapi_sym_get_search_path_w.md',
    'doc_winapi_sym_initialize.md',
    'doc_winapi_sym_load_module_ex_w.md',
    'doc_winapi_sym_set_search_path_w.md',
    'doc_winapi_sym_unload_module64.md',
    'doc_winapi_sys_alloc_string.md',
    'doc_winapi_tdh_enumerate_manifest_provider_events.md',
    'doc_winapi_tdh_enumerate_provider_field_information.md',
    'doc_winapi_tdh_enumerate_provider_filters.md',
    'doc_winapi_tdh_enumerate_providers.md',
    'doc_winapi_tdh_format_property.md',
    'doc_winapi_tdh_get_event_information.md',
    'doc_winapi_tdh_get_event_map_information.md',
    'doc_winapi_tdh_get_manifest_event_information.md',
    'doc_winapi_tdh_load_manifest.md',
    'doc_winapi_tdh_query_provider_field_information.md',
    'doc_winapi_tdh_unload_manifest.md',
    'doc_winapi_terminate_thread.md',
    'doc_winapi_thread32_first.md',
    'doc_winapi_thread32_next.md',
    'doc_winapi_to_unicode_ex.md',
    'doc_winapi_trace_logging_register.md',
    'doc_winapi_transact_named_pipe.md',
    'doc_winapi_tree_reset_named_security_info_w.md',
    'doc_winapi_un_decorate_symbol_name.md',
    'doc_winapi_un_map_and_load.md',
    'doc_winapi_unhandled_exception_filter.md',
    'doc_winapi_unhook_win_event.md',
    'doc_winapi_unload_user_profile.md',
    'doc_winapi_unlock_file_ex.md',
    'doc_winapi_unmap_view_of_file.md',
    'doc_winapi_unmap_view_of_file2.md',
    'doc_winapi_unregister_gpnotification.md',
    'doc_winapi_unregister_hot_key.md',
    'doc_winapi_unregister_power_setting_notification.md',
    'doc_winapi_unregister_wait_ex.md',
    'doc_winapi_update_proc_thread_attribute.md',
    'doc_winapi_url_canonicalize_w.md',
    'doc_winapi_url_combine_w.md',
    'doc_winapi_url_escape_w.md',
    'doc_winapi_url_get_part_w.md',
    'doc_winapi_url_unescape_w.md',
    'doc_winapi_variant_clear.md',
    'doc_winapi_variant_init.md',
    'doc_winapi_ver_find_file_w.md',
    'doc_winapi_ver_install_file_w.md',
    'doc_winapi_ver_query_value_w.md',
    'doc_winapi_verify_signature.md',
    'doc_winapi_virtual_alloc.md',
    'doc_winapi_virtual_alloc_ex.md',
    'doc_winapi_virtual_alloc_ex_numa.md',
    'doc_winapi_virtual_alloc2.md',
    'doc_winapi_virtual_alloc2_from_app.md',
    'doc_winapi_virtual_free.md',
    'doc_winapi_virtual_free_ex.md',
    'doc_winapi_virtual_lock.md',
    'doc_winapi_virtual_protect.md',
    'doc_winapi_virtual_protect_ex.md',
    'doc_winapi_virtual_protect_from_app.md',
    'doc_winapi_virtual_query.md',
    'doc_winapi_virtual_query_ex.md',
    'doc_winapi_virtual_unlock.md',
    'doc_winapi_wait_for_debug_event.md',
    'doc_winapi_wait_for_input_idle.md',
    'doc_winapi_wait_for_multiple_objects.md',
    'doc_winapi_wait_for_single_object.md',
    'doc_winapi_wait_for_threadpool_work_callbacks.md',
    'doc_winapi_wait_named_pipe_w.md',
    'doc_winapi_web_auth_nauthenticator_get_assertion.md',
    'doc_winapi_web_auth_nauthenticator_make_credential.md',
    'doc_winapi_web_auth_ncancel_current_operation.md',
    'doc_winapi_web_auth_ndelete_platform_credential.md',
    'doc_winapi_web_auth_nfree_assertion.md',
    'doc_winapi_web_auth_nfree_credential_attestation.md',
    'doc_winapi_web_auth_nfree_platform_credential_list.md',
    'doc_winapi_web_auth_nget_api_version_number.md',
    'doc_winapi_web_auth_nget_cancellation_id.md',
    'doc_winapi_web_auth_nget_platform_credential_list.md',
    'doc_winapi_web_auth_nis_user_verifying_platform_authenticator_available.md',
    'doc_winapi_wer_add_excluded_application.md',
    'doc_winapi_wer_get_flags.md',
    'doc_winapi_wer_register_file.md',
    'doc_winapi_wer_register_memory_block.md',
    'doc_winapi_wer_register_runtime_exception_module.md',
    'doc_winapi_wer_remove_excluded_application.md',
    'doc_winapi_wer_report_add_dump.md',
    'doc_winapi_wer_report_add_file.md',
    'doc_winapi_wer_report_close_handle.md',
    'doc_winapi_wer_report_create.md',
    'doc_winapi_wer_report_set_parameter.md',
    'doc_winapi_wer_report_submit.md',
    'doc_winapi_wer_set_flags.md',
    'doc_winapi_wer_unregister_file.md',
    'doc_winapi_wer_unregister_memory_block.md',
    'doc_winapi_wer_unregister_runtime_exception_module.md',
    'doc_winapi_win_http_connect.md',
    'doc_winapi_win_http_get_proxy_for_url.md',
    'doc_winapi_win_http_open.md',
    'doc_winapi_win_http_open_request.md',
    'doc_winapi_win_http_query_headers.md',
    'doc_winapi_win_http_send_request.md',
    'doc_winapi_win_verify_trust.md',
    'doc_winapi_win_verify_trust_ex.md',
    'doc_winapi_wintrust_get_default_for_usage.md',
    'doc_winapi_wintrust_get_reg_policy_flags.md',
    'doc_winapi_wintrust_set_default_include_pepage_hashes.md',
    'doc_winapi_wintrust_set_reg_policy_flags.md',
    'doc_winapi_wlan_close_handle.md',
    'doc_winapi_wlan_connect.md',
    'doc_winapi_wlan_delete_profile.md',
    'doc_winapi_wlan_disconnect.md',
    'doc_winapi_wlan_enum_interfaces.md',
    'doc_winapi_wlan_enum_profiles.md',
    'doc_winapi_wlan_free_memory.md',
    'doc_winapi_wlan_get_available_network_list.md',
    'doc_winapi_wlan_get_network_bss_list.md',
    'doc_winapi_wlan_get_profile.md',
    'doc_winapi_wlan_open_handle.md',
    'doc_winapi_wlan_query_interface.md',
    'doc_winapi_wlan_register_notification.md',
    'doc_winapi_wlan_scan.md',
    'doc_winapi_wlan_set_interface.md',
    'doc_winapi_wlan_set_profile.md',
    'doc_winapi_wnet_add_connection2_w.md',
    'doc_winapi_wnet_add_connection3_w.md',
    'doc_winapi_wnet_cancel_connection2_w.md',
    'doc_winapi_wnet_close_enum.md',
    'doc_winapi_wnet_enum_resource_w.md',
    'doc_winapi_wnet_get_connection_w.md',
    'doc_winapi_wnet_get_network_information_w.md',
    'doc_winapi_wnet_get_provider_name_w.md',
    'doc_winapi_wnet_get_universal_name_w.md',
    'doc_winapi_wnet_get_user_w.md',
    'doc_winapi_wnet_open_enum_w.md',
    'doc_winapi_wnet_use_connection_w.md',
    'doc_winapi_wow64_get_thread_context.md',
    'doc_winapi_write_file.md',
    'doc_winapi_write_process_memory.md',
    'doc_winapi_wsaaddress_to_string_w.md',
    'doc_winapi_wsaasync_select.md',
    'doc_winapi_wsacreate_event.md',
    'doc_winapi_wsaenum_network_events.md',
    'doc_winapi_wsaenum_protocols_w.md',
    'doc_winapi_wsaevent_select.md',
    'doc_winapi_wsaioctl.md',
    'doc_winapi_wsapoll.md',
    'doc_winapi_wsastartup.md',
    'doc_winapi_wsastring_to_address_w.md',
    'doc_winapi_wsawait_for_multiple_events.md',
    'doc_winapi_wsc_get_security_provider_health.md',
    'doc_winapi_wthelper_cert_check_valid_signature.md',
    'doc_winapi_wthelper_get_prov_cert_from_chain.md',
    'doc_winapi_wthelper_get_prov_signer_from_chain.md',
    'doc_winapi_wthelper_prov_data_from_state_data.md',
    'doc_winapi_wtsclose_server.md',
    'doc_winapi_wtsdisconnect_session.md',
    'doc_winapi_wtsenumerate_processes_w.md',
    'doc_winapi_wtsenumerate_sessions_w.md',
    'doc_winapi_wtsfree_memory.md',
    'doc_winapi_wtsfree_memory_ex_w.md',
    'doc_winapi_wtsget_active_console_session_id.md',
    'doc_winapi_wtslogoff_session.md',
    'doc_winapi_wtsopen_server_w.md',
    'doc_winapi_wtsquery_session_information_w.md',
    'doc_winapi_wtsquery_user_config_w.md',
    'doc_winapi_wtsquery_user_token.md',
    'doc_winapi_wtsregister_session_notification.md',
    'doc_winapi_wtsregister_session_notification_ex.md',
    'doc_winapi_wtssend_message_w.md',
    'doc_winapi_wtsset_user_config_w.md',
    'doc_winapi_wtsshutdown_system.md',
    'doc_winapi_wtsstart_remote_control_session_w.md',
    'doc_winapi_wtsstop_remote_control_session.md',
    'doc_winapi_wtsun_register_session_notification.md',
    'doc_winapi_wtsun_register_session_notification_ex.md',
    'doc_windapsearch_use.md',
    'doc_windows_native_enum.md',
    'doc_windows_powershell_ir.md',
    'doc_winexesec.md',
    'doc_winpmem_use.md',
    'doc_wmiexec_impacket.md',
    'doc_wpscan_use.md',
    'doc_wscat_use.md',
    'doc_xfreerdp_use.md',
    'doc_xsrfprobe_use.md',
    'doc_xsstrike_use.md',
    'doc_yara_use.md',
    'doc_yarn_audit_use.md',
    'doc_yq_use.md',
    'doc_ysoserial_java.md',
    'doc_ysoserial_net.md',
    'doc_zaproxy_baseline.md',
    'doc_zeek_use.md',
    'doc_zircolite_use.md',
    'doc_zookeeper_cli_use.md',
];

function getInitialPage() {
    const params = new URLSearchParams(window.location.search);
    const requestedPage = params.get('page') || 'home';
    return pageContents[requestedPage] ? requestedPage : 'home';
}

function setPageUrl(page) {
    const nextPath = page === 'home' ? `${window.location.pathname}` : `${window.location.pathname}?page=${encodeURIComponent(page)}`;
    const currentPath = `${window.location.pathname}${window.location.search}`;
    if (nextPath !== currentPath) {
        history.pushState({ page }, '', nextPath);
    }
}

function loadContent(page, options = {}) {
    cleanupPage();
    const mainContent = document.querySelector('main.content');
    if (pageContents[page]) {
        setPageMetadata(page);
        if (options.updateUrl !== false) {
            setPageUrl(page);
        }
        mainContent.innerHTML = pageContents[page];
        applyDefaultScrollAnimations(mainContent);
        if (page === 'home') {
            loadAboutProfile();
        } else if (page === 'notes') {
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
        } else if (page === 'settings') {
            cleanupCurrentPage = initSettingsPage();
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
        setPageMetadata('home');
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
        },
        phase: {
            title: 'Phase Shift',
            subtitle: 'Match your phase to pass cleanly through signal walls.',
            bestKey: PHASE_SHIFT_BEST_KEY,
            primaryHelp: 'Space / W / up / tap: switch phase',
            secondaryHelp: 'Pass matching walls, avoid the wrong phase'
        },
        echo: {
            title: 'Echo Bloom',
            subtitle: 'Bloom between inner and outer rings to catch clean echoes.',
            bestKey: ECHO_BLOOM_BEST_KEY,
            primaryHelp: 'Space / W / up / tap: swap ring',
            secondaryHelp: 'Collect blue echoes, dodge red noise'
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

    class PhaseScene extends Phaser.Scene {
        constructor() {
            super('phase');
            this.started = false;
            this.gameOver = false;
            this.isPaused = false;
            this.score = 0;
            this.best = getBest('phase');
            this.phase = 0;
            this.speed = 280;
            this.spawnTimer = 0;
            this.walls = null;
            this.starLayers = [];
            this.phaseColors = [0x58a6ff, 0xff7ac8];
        }

        create() {
            const width = this.scale.width;
            const height = this.scale.height;
            this.physics.world.gravity.y = 0;
            this.cameras.main.setBackgroundColor('rgba(0,0,0,0)');
            this.centerY = height / 2;
            this.createPhaseTextures();
            this.buildStarLayers(width, height);

            const borderColor = toHex(getCssColor('--border-color', '#30363d'), '#30363d');
            this.add.rectangle(width / 2, this.centerY - 58, width - 96, 1, borderColor, 0.35);
            this.add.rectangle(width / 2, this.centerY + 58, width - 96, 1, borderColor, 0.35);
            this.playerAura = this.add.circle(112, this.centerY, 26, this.phaseColors[this.phase], 0.16);
            this.player = this.physics.add.sprite(112, this.centerY, 'phase-player-blue');
            this.player.body.setAllowGravity(false);
            this.player.body.setCircle(14, 10, 10);
            this.walls = this.physics.add.group();
            this.physics.add.overlap(this.player, this.walls, (player, wall) => this.handleWall(wall), null, this);
            this.input.on('pointerdown', () => this.switchOrStart());

            sceneApi = {
                start: () => this.startRun(),
                pause: () => this.togglePause(),
                action: () => this.switchOrStart()
            };
        }

        createPhaseTextures() {
            this.makePhasePlayer('phase-player-blue', 0x58a6ff);
            this.makePhasePlayer('phase-player-pink', 0xff7ac8);
            this.makeWallTexture('phase-wall-blue', 0x58a6ff);
            this.makeWallTexture('phase-wall-pink', 0xff7ac8);
        }

        makePhasePlayer(key, color) {
            const textColor = toHex(getCssColor('--text-color', '#c9d1d9'), '#c9d1d9');
            const borderColor = toHex(getCssColor('--border-color', '#30363d'), '#30363d');
            const graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(color, 1);
            graphics.fillCircle(24, 24, 16);
            graphics.fillStyle(textColor, 0.92);
            graphics.fillCircle(19, 18, 3);
            graphics.lineStyle(2, borderColor, 1);
            graphics.strokeCircle(24, 24, 16);
            graphics.generateTexture(key, 48, 48);
            graphics.destroy();
        }

        makeWallTexture(key, color) {
            const borderColor = toHex(getCssColor('--border-color', '#30363d'), '#30363d');
            const graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(color, 0.72);
            graphics.fillRoundedRect(4, 4, 32, 132, 12);
            graphics.fillStyle(0xffffff, 0.18);
            graphics.fillRoundedRect(12, 14, 8, 112, 6);
            graphics.lineStyle(2, borderColor, 1);
            graphics.strokeRoundedRect(4, 4, 32, 132, 12);
            graphics.generateTexture(key, 40, 140);
            graphics.destroy();
        }

        buildStarLayers(width, height) {
            const starColor = toHex(getCssColor('--star-color', '#ffffff'), '#ffffff');
            for (let layer = 0; layer < 2; layer++) {
                const key = `phase-stars-${layer}`;
                const graphics = this.make.graphics({ x: 0, y: 0, add: false });
                graphics.fillStyle(starColor, 0.30 + layer * 0.2);
                for (let i = 0; i < 48 + layer * 32; i++) {
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
                this.starLayers.push({ tile, speed: 0.06 + layer * 0.07 });
            }
        }

        update(time, delta) {
            const dt = delta / 1000;
            this.starLayers.forEach(layer => {
                layer.tile.tilePositionX += this.speed * layer.speed * dt;
            });
            if (!this.started || this.gameOver || this.isPaused) return;

            this.score += delta * 0.012;
            this.speed = Math.min(610, 280 + this.score * 1.7);
            this.spawnTimer -= delta;
            this.player.y = this.centerY + Math.sin(time / 260) * 10;
            this.playerAura.setPosition(this.player.x, this.player.y);
            if (this.spawnTimer <= 0) {
                this.spawnWall();
                this.spawnTimer = Phaser.Math.Between(720, 1140);
            }
            this.walls.getChildren().forEach(wall => {
                wall.x -= this.speed * dt;
                if (wall.x < -80) {
                    wall.destroy();
                    this.score += 8;
                }
            });
            this.updateScore();
        }

        switchOrStart() {
            if (this.gameOver || !this.started) {
                this.startRun();
                return;
            }
            this.phase = this.phase === 0 ? 1 : 0;
            this.player.setTexture(this.phase === 0 ? 'phase-player-blue' : 'phase-player-pink');
            this.playerAura.setFillStyle(this.phaseColors[this.phase], 0.18);
            this.tweens.add({
                targets: this.playerAura,
                scaleX: 1.24,
                scaleY: 1.24,
                duration: 90,
                yoyo: true,
                ease: 'Sine.easeOut'
            });
        }

        startRun() {
            this.started = true;
            this.gameOver = false;
            this.isPaused = false;
            this.score = 0;
            this.speed = 280;
            this.spawnTimer = 520;
            this.phase = 0;
            this.player.setTexture('phase-player-blue');
            this.player.setPosition(112, this.centerY);
            this.playerAura.setPosition(this.player.x, this.player.y);
            this.playerAura.setFillStyle(this.phaseColors[this.phase], 0.18);
            this.walls.clear(true, true);
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

        spawnWall() {
            const phase = Phaser.Math.Between(0, 1);
            const key = phase === 0 ? 'phase-wall-blue' : 'phase-wall-pink';
            const wall = this.physics.add.sprite(this.scale.width + 42, this.centerY, key);
            wall.body.setAllowGravity(false);
            wall.body.setSize(26, 112).setOffset(7, 14);
            wall.setData('phase', phase);
            wall.setData('passed', false);
            this.walls.add(wall);
        }

        handleWall(wall) {
            if (wall.getData('phase') === this.phase) {
                if (!wall.getData('passed')) {
                    wall.setData('passed', true);
                    wall.setAlpha(0.35);
                    this.score += 22;
                    this.updateScore();
                }
                return;
            }
            this.endRun();
        }

        endRun() {
            if (this.gameOver) return;
            this.gameOver = true;
            this.started = false;
            this.cameras.main.shake(140, 0.004);
            const finalScore = Math.floor(this.score);
            this.best = saveBest('phase', finalScore);
            setOverlay('Phase Broken', `Score ${finalScore}. Press Space or Start to retry.`);
        }

        updateScore() {
            if (scoreElement) scoreElement.textContent = String(Math.floor(this.score));
            if (bestElement) bestElement.textContent = String(this.best);
        }
    }

    class EchoBloomScene extends Phaser.Scene {
        constructor() {
            super('echo');
            this.started = false;
            this.gameOver = false;
            this.isPaused = false;
            this.score = 0;
            this.best = getBest('echo');
            this.ringIndex = 0;
            this.radii = [68, 126];
            this.angle = -90;
            this.speed = 105;
            this.spawnTimer = 0;
            this.echoes = null;
            this.noise = null;
            this.starLayers = [];
            this.lastSpawnAngle = null;
        }

        create() {
            const width = this.scale.width;
            const height = this.scale.height;
            this.physics.world.gravity.y = 0;
            this.cameras.main.setBackgroundColor('rgba(0,0,0,0)');
            this.center = { x: width / 2, y: height / 2 };
            this.createEchoTextures();
            this.buildStarLayers(width, height);

            const borderColor = toHex(getCssColor('--border-color', '#30363d'), '#30363d');
            const accentColor = toHex(getCssColor('--accent-color', '#58a6ff'), '#58a6ff');
            this.radii.forEach((radius, index) => {
                const ring = this.add.circle(this.center.x, this.center.y, radius, borderColor, index === 0 ? 0.06 : 0.04);
                ring.setStrokeStyle(2, index === 0 ? accentColor : borderColor, index === 0 ? 0.55 : 0.75);
            });
            this.core = this.add.circle(this.center.x, this.center.y, 22, accentColor, 0.10);
            this.core.setStrokeStyle(2, accentColor, 0.72);
            this.player = this.physics.add.sprite(this.center.x, this.center.y - this.radii[this.ringIndex], 'echo-player');
            this.player.body.setAllowGravity(false);
            this.player.body.setCircle(12, 6, 6);
            this.echoes = this.physics.add.group();
            this.noise = this.physics.add.group();
            this.physics.add.overlap(this.player, this.echoes, (player, echo) => {
                echo.destroy();
                this.score += 18;
                this.updateScore();
            }, null, this);
            this.physics.add.overlap(this.player, this.noise, () => this.endRun(), null, this);
            this.input.on('pointerdown', () => this.swapOrStart());
            sceneApi = {
                start: () => this.startRun(),
                pause: () => this.togglePause(),
                action: () => this.swapOrStart()
            };
        }

        createEchoTextures() {
            const accentColor = toHex(getCssColor('--accent-color', '#58a6ff'), '#58a6ff');
            const textColor = toHex(getCssColor('--text-color', '#c9d1d9'), '#c9d1d9');
            const borderColor = toHex(getCssColor('--border-color', '#30363d'), '#30363d');

            const playerGraphics = this.make.graphics({ x: 0, y: 0, add: false });
            playerGraphics.fillStyle(accentColor, 1);
            playerGraphics.fillCircle(18, 18, 13);
            playerGraphics.fillStyle(textColor, 0.9);
            playerGraphics.fillCircle(14, 13, 3);
            playerGraphics.lineStyle(2, borderColor, 1);
            playerGraphics.strokeCircle(18, 18, 13);
            playerGraphics.generateTexture('echo-player', 36, 36);
            playerGraphics.destroy();

            const echoGraphics = this.make.graphics({ x: 0, y: 0, add: false });
            echoGraphics.fillStyle(accentColor, 0.24);
            echoGraphics.fillCircle(18, 18, 17);
            echoGraphics.lineStyle(3, accentColor, 0.92);
            echoGraphics.strokeCircle(18, 18, 12);
            echoGraphics.fillStyle(textColor, 0.9);
            echoGraphics.fillCircle(18, 18, 4);
            echoGraphics.generateTexture('echo-good', 36, 36);
            echoGraphics.destroy();

            const noiseGraphics = this.make.graphics({ x: 0, y: 0, add: false });
            noiseGraphics.fillStyle(0xff5f73, 0.78);
            noiseGraphics.fillTriangle(18, 2, 34, 32, 2, 32);
            noiseGraphics.fillStyle(0xffffff, 0.18);
            noiseGraphics.fillCircle(18, 20, 4);
            noiseGraphics.lineStyle(2, borderColor, 1);
            noiseGraphics.strokeTriangle(18, 2, 34, 32, 2, 32);
            noiseGraphics.generateTexture('echo-noise', 36, 36);
            noiseGraphics.destroy();
        }

        buildStarLayers(width, height) {
            const starColor = toHex(getCssColor('--star-color', '#ffffff'), '#ffffff');
            for (let layer = 0; layer < 2; layer++) {
                const key = `echo-stars-${layer}`;
                const graphics = this.make.graphics({ x: 0, y: 0, add: false });
                graphics.fillStyle(starColor, 0.28 + layer * 0.22);
                for (let i = 0; i < 46 + layer * 34; i++) {
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
                this.starLayers.push({ tile, speed: 0.05 + layer * 0.06 });
            }
        }

        update(time, delta) {
            const dt = delta / 1000;
            this.starLayers.forEach(layer => {
                layer.tile.tilePositionX += 105 * layer.speed * dt;
            });
            if (!this.started || this.gameOver || this.isPaused) return;

            this.score += delta * 0.01;
            this.speed = Math.min(220, 105 + this.score * 0.35);
            this.angle += this.speed * dt;
            this.updatePlayerPosition();
            this.spawnTimer -= delta;
            if (this.spawnTimer <= 0) {
                this.spawnEchoSet();
                this.spawnTimer = Phaser.Math.Between(760, 1120);
            }
            [...this.echoes.getChildren(), ...this.noise.getChildren()].forEach(item => {
                const age = time - item.getData('bornAt');
                const ttl = item.getData('ttl');
                item.rotation += item.getData('spin') * dt;
                item.alpha = Phaser.Math.Clamp(1 - Math.max(0, age - ttl * 0.62) / (ttl * 0.38), 0, 1);
                item.setScale(1 + Math.sin(time / 170 + item.x) * 0.045);
                if (age >= ttl) {
                    item.destroy();
                }
            });
            this.updateScore();
        }

        updatePlayerPosition() {
            const rad = Phaser.Math.DegToRad(this.angle);
            const radius = this.radii[this.ringIndex];
            this.player.setPosition(
                this.center.x + Math.cos(rad) * radius,
                this.center.y + Math.sin(rad) * radius
            );
            this.player.rotation = rad + Math.PI / 2;
        }

        swapOrStart() {
            if (this.gameOver || !this.started) {
                this.startRun();
                return;
            }
            this.ringIndex = this.ringIndex === 0 ? 1 : 0;
            this.tweens.add({
                targets: this.player,
                scaleX: 1.18,
                scaleY: 1.18,
                duration: 70,
                yoyo: true,
                ease: 'Sine.easeOut'
            });
            this.updatePlayerPosition();
        }

        startRun() {
            this.started = true;
            this.gameOver = false;
            this.isPaused = false;
            this.score = 0;
            this.speed = 105;
            this.spawnTimer = 520;
            this.ringIndex = 0;
            this.angle = -90;
            this.lastSpawnAngle = null;
            this.echoes.clear(true, true);
            this.noise.clear(true, true);
            this.updatePlayerPosition();
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

        spawnEchoSet() {
            let angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
            if (this.lastSpawnAngle !== null) {
                let attempts = 0;
                while (Math.abs(Phaser.Math.Angle.Wrap(angle - this.lastSpawnAngle)) < 0.9 && attempts < 8) {
                    angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
                    attempts++;
                }
            }
            this.lastSpawnAngle = angle;
            const goodRing = Phaser.Math.Between(0, 1);
            const badRing = goodRing === 0 ? 1 : 0;
            const ttl = Phaser.Math.Between(2300, 3100);
            this.spawnEchoItem('echo-good', goodRing, angle, this.echoes, 10, ttl);
            if (Math.random() < 0.82) {
                const noiseAngle = angle + Phaser.Math.FloatBetween(0.65, 1.15) * (Math.random() < 0.5 ? -1 : 1);
                this.spawnEchoItem('echo-noise', badRing, noiseAngle, this.noise, 11, ttl * 0.88);
            }
        }

        spawnEchoItem(texture, ring, angle, group, radius, ttl) {
            const item = this.physics.add.sprite(
                this.center.x + Math.cos(angle) * this.radii[ring],
                this.center.y + Math.sin(angle) * this.radii[ring],
                texture
            );
            item.body.setAllowGravity(false);
            item.body.setCircle(radius, 18 - radius, 18 - radius);
            item.setData('spin', Phaser.Math.FloatBetween(-2.8, 2.8));
            item.setData('bornAt', this.time.now);
            item.setData('ttl', ttl);
            group.add(item);
        }

        endRun() {
            if (this.gameOver) return;
            this.gameOver = true;
            this.started = false;
            this.cameras.main.shake(140, 0.004);
            const finalScore = Math.floor(this.score);
            this.best = saveBest('echo', finalScore);
            setOverlay('Echo Lost', `Score ${finalScore}. Press Space or Start to retry.`);
        }

        updateScore() {
            if (scoreElement) scoreElement.textContent = String(Math.floor(this.score));
            if (bestElement) bestElement.textContent = String(this.best);
        }
    }

    const sceneMap = {
        runner: RunnerScene,
        orbit: OrbitScene,
        pulse: PulseScene,
        phase: PhaseScene,
        echo: EchoBloomScene
    };

    const startPrompts = {
        runner: 'Press W, Space, up, or tap to launch.',
        orbit: 'Press Space or tap to reverse orbit.',
        pulse: 'Press WASD, arrows, Space, or tap to switch lanes.',
        phase: 'Press Space, W, up, or tap to switch phase.',
        echo: 'Press Space, W, up, or tap to swap rings.'
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
        } else if (activeGame === 'phase' && ['Space', 'ArrowUp', 'KeyW'].includes(event.code)) {
            sceneApi && sceneApi.action && sceneApi.action();
        } else if (activeGame === 'echo' && ['Space', 'ArrowUp', 'KeyW'].includes(event.code)) {
            sceneApi && sceneApi.action && sceneApi.action();
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
    initDevtoolsRedirect();
    initThemeToggle();
    initScrollAnimations();
    applySiteSettings(loadSiteSettings());
    loadContent(getInitialPage(), { updateUrl: false });
    initStarfield();
    scheduleMusicPlayerInit();
});

window.addEventListener('popstate', () => {
    loadContent(getInitialPage(), { updateUrl: false });
});

function initDevtoolsRedirect() {
    if (typeof devtoolsDetector === 'undefined') return;

    devtoolsDetector.addListener(isOpen => {
        if (!isOpen || hasRedirectedForDevtools) return;
        hasRedirectedForDevtools = true;
        window.location.href = DEVTOOLS_REDIRECT_URL;
    });
    devtoolsDetector.launch();
}

function shuffleTracks(tracks) {
    const shuffledTracks = [...tracks];
    for (let i = shuffledTracks.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffledTracks[i], shuffledTracks[randomIndex]] = [shuffledTracks[randomIndex], shuffledTracks[i]];
    }
    return shuffledTracks;
}

function scheduleMusicPlayerInit() {
    const runInit = () => {
        const start = () => initMusicPlayer();
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(start, { timeout: 1600 });
            return;
        }
        window.setTimeout(start, 600);
    };

    if (document.readyState === 'complete') {
        runInit();
        return;
    }

    window.addEventListener('load', runInit, { once: true });
}

function initMusicPlayer() {
    const playerElement = document.getElementById('floating-music-player');
    if (!playerElement || typeof APlayer === 'undefined' || musicPlayer) return;

    const audio = shuffleTracks(musicTracks).map(track => ({
        ...track,
        type: 'auto'
    }));

    musicPlayer = new APlayer({
        container: playerElement,
        fixed: false,
        mini: false,
        autoplay: true,
        theme: '#58a6ff',
        loop: 'all',
        order: 'list',
        preload: 'none',
        volume: 0.3,
        mutex: true,
        listFolded: true,
        audio
    });
}

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
    docFiles.forEach((fileName, index) => {
        const section = document.createElement('section');
        section.classList.add('card', 'doc-card');
        section.setAttribute('data-aos', 'fade-up');
        section.setAttribute('data-aos-delay', String(Math.min(index * 35, 140)));

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
    let settings = normalizeStarSettings(loadSiteSettings());
    const lightChart = {
        background: '#f4f7fb',
        star: 'rgba(72, 91, 118, 0.58)',
        line: 'rgba(72, 91, 118, 0.22)',
        maxLineDistance: 142,
        maxLinkedStars: 260
    };

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createStars();
    }

    function createStars() {
        stars = [];
        for (let i = 0; i < settings.starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: settings.minRadius + Math.random() * (settings.maxRadius - settings.minRadius),
                alpha: Math.random(),
                twinkleSpeed: settings.twinkleMinSpeed + Math.random() * (settings.twinkleMaxSpeed - settings.twinkleMinSpeed)
            });
        }
    }

    function updateStarTwinkle(star) {
        star.alpha += star.twinkleSpeed;
        if (star.alpha >= 1 || star.alpha <= settings.minAlpha) {
            star.twinkleSpeed = -star.twinkleSpeed;
        }
    }

    function drawDarkStarfield() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = Math.max(0, Math.min(1, settings.backgroundAlpha));
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--starfield-bg').trim() || '#05060a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--star-color').trim() || '#ffffff';

        stars.forEach(star => {
            star.x += settings.movementSpeed * 0.016;
            if (star.x > canvas.width + star.radius) star.x = -star.radius;
            if (star.x < -star.radius) star.x = canvas.width + star.radius;

            ctx.globalAlpha = star.alpha;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();

            updateStarTwinkle(star);
        });

        ctx.globalAlpha = 1;
    }

    function drawLightChart() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
        ctx.fillStyle = lightChart.background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const linkedStars = stars.slice(0, lightChart.maxLinkedStars);
        ctx.lineWidth = 0.85;
        linkedStars.forEach((star, index) => {
            for (let nextIndex = index + 1; nextIndex < linkedStars.length; nextIndex++) {
                const nextStar = linkedStars[nextIndex];
                const distanceX = star.x - nextStar.x;
                const distanceY = star.y - nextStar.y;
                const distance = Math.hypot(distanceX, distanceY);
                if (distance > lightChart.maxLineDistance) continue;

                const opacity = (1 - distance / lightChart.maxLineDistance) * 0.9;
                ctx.globalAlpha = opacity;
                ctx.strokeStyle = lightChart.line;
                ctx.beginPath();
                ctx.moveTo(star.x, star.y);
                ctx.lineTo(nextStar.x, nextStar.y);
                ctx.stroke();
            }
        });

        ctx.fillStyle = lightChart.star;
        stars.forEach(star => {
            star.x += settings.movementSpeed * 0.006;
            if (star.x > canvas.width + star.radius) star.x = -star.radius;
            if (star.x < -star.radius) star.x = canvas.width + star.radius;

            ctx.globalAlpha = Math.max(settings.minAlpha, star.alpha) * 0.42;
            ctx.beginPath();
            ctx.arc(star.x, star.y, Math.max(0.55, star.radius * 0.82), 0, Math.PI * 2);
            ctx.fill();

            updateStarTwinkle(star);
        });

        ctx.globalAlpha = 1;
    }

    function drawStars() {
        if (document.documentElement.dataset.theme === 'light') {
            drawLightChart();
        } else {
            drawDarkStarfield();
        }
        requestAnimationFrame(drawStars);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawStars();

    starfieldController = {
        applySettings(nextSettings) {
            const normalizedSettings = normalizeStarSettings(nextSettings);
            const shouldRecreateStars =
                normalizedSettings.starCount !== settings.starCount ||
                normalizedSettings.minRadius !== settings.minRadius ||
                normalizedSettings.maxRadius !== settings.maxRadius ||
                normalizedSettings.twinkleMinSpeed !== settings.twinkleMinSpeed ||
                normalizedSettings.twinkleMaxSpeed !== settings.twinkleMaxSpeed;

            settings = normalizedSettings;
            if (shouldRecreateStars) {
                createStars();
            }
        }
    };
}
