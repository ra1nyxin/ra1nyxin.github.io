const pageContents = {
    home: `
        <section class="home-command" aria-label="站内快速检索">
            <div class="home-command-shell" id="home-command-shell">
                <input
                    id="home-command-input"
                    class="home-command-input"
                    type="search"
                    autocomplete="off"
                    spellcheck="false"
                    aria-label="搜索笔记、文档或输入命令"
                    aria-autocomplete="list"
                    aria-controls="home-command-results"
                >
                <div id="home-command-results" class="home-command-results" role="listbox" hidden></div>
            </div>
        </section>
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
            <p>调整背景、布局、透明度和动效，保存后会记录在当前浏览器。</p>
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
        description: 'Owo 是一个轻量的 GitHub Pages 站点入口。'
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
        description: 'Owo 设置页支持切换星空或 Neural Noise 背景，并自定义界面宽度、字号、透明度、模糊强度、圆角和动效速度。'
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
let backgroundController = null;
let musicPlayer = null;
let hasRedirectedForDevtools = false;
let commandPaletteFocusRequested = false;
let commandSearchIndexPromise = null;

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
    backgroundMode: 'neural-noise',
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
    navbarOpacity: 0,
    panelBlur: 8,
    navbarBlur: 10,
    shadowStrength: 1,
    motionScale: 1,
    neuralHue: 344,
    neuralSaturation: 78,
    neuralLightness: 51,
    neuralOpacity: 0.9,
    neuralSpeed: 0.001
};

const settingsGroups = [
    {
        title: '背景效果',
        controls: [
            {
                key: 'backgroundMode',
                label: '背景样式',
                type: 'select',
                options: [
                    { value: 'starfield', label: '星空' },
                    { value: 'neural-noise', label: 'Neural Noise' }
                ]
            },
            { key: 'neuralHue', label: 'Neural Noise 色相', min: 0, max: 360, step: 1 },
            { key: 'neuralSaturation', label: 'Neural Noise 饱和度', min: 0, max: 100, step: 1 },
            { key: 'neuralLightness', label: 'Neural Noise 亮度', min: 0, max: 100, step: 1 },
            { key: 'neuralOpacity', label: 'Neural Noise 强度', min: 0, max: 1, step: 0.01 },
            { key: 'neuralSpeed', label: 'Neural Noise 速度', min: 0, max: 0.004, step: 0.0001 }
        ]
    },
    {
        title: '星空参数',
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
    const normalizedSettings = normalizeSiteSettings(settings);
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

    if (backgroundController) {
        backgroundController.applySettings(normalizedSettings);
    }
}

function normalizeSiteSettings(settings) {
    const nextSettings = { ...defaultSiteSettings, ...settings };

    Object.keys(defaultSiteSettings).forEach(key => {
        if (key === 'backgroundMode') return;
        const numericValue = Number(nextSettings[key]);
        nextSettings[key] = Number.isNaN(numericValue) ? defaultSiteSettings[key] : numericValue;
    });

    nextSettings.backgroundMode = nextSettings.backgroundMode === 'neural-noise' ? 'neural-noise' : 'starfield';
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
            if (control.type === 'select') {
                const select = grid.querySelector(`[data-setting-select="${control.key}"]`);
                nextSettings[control.key] = select ? select.value : defaultSiteSettings[control.key];
                return;
            }
            const input = grid.querySelector(`[data-setting-number="${control.key}"]`);
            nextSettings[control.key] = input ? Number(input.value) : defaultSiteSettings[control.key];
        });
        return normalizeSiteSettings(nextSettings);
    };

    const syncControls = settings => {
        settingsControls.forEach(control => {
            if (control.type === 'select') {
                const select = grid.querySelector(`[data-setting-select="${control.key}"]`);
                if (select) select.value = settings[control.key];
                return;
            }
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
                    <div class="setting-inputs${control.type === 'select' ? ' setting-inputs--select' : ''}">
                        ${control.type === 'select'
                            ? `<select data-setting-select="${control.key}">${control.options.map(option => `<option value="${option.value}">${option.label}</option>`).join('')}</select>`
                            : `<input type="range" min="${control.min}" max="${control.max}" step="${control.step}" data-setting-range="${control.key}">
                               <input type="number" step="${control.step}" data-setting-number="${control.key}">`
                        }
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
    grid.querySelectorAll('[data-setting-select]').forEach(select => {
        select.addEventListener('change', () => {
            currentSettings = readForm();
            applySiteSettings(currentSettings);
            showStatus('预览中，点击保存后生效记录。');
        });
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

    currentSettings = normalizeSiteSettings(currentSettings);
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

const commandPalettePlaceholders = [
    '尝试搜点什么…',
    '使用 > 进行一些设置…',
    '今天吃点什么…',
    '搜索笔记、文档和命令…'
];

const commandPaletteNoteSources = [
    { filePath: 'notes_git_commands.md', title: 'Git 命令笔记', anchor: 'git-commands-tutorial' },
    { filePath: 'notes_terminal_commands.md', title: '终端命令笔记', anchor: 'terminal-commands-tutorial' },
    { filePath: 'notes_proxy_settings.md', title: '代理设置笔记', anchor: 'proxy-settings-tutorial' },
    { filePath: 'notes_npm_commands.md', title: 'npm 命令笔记', anchor: 'npm-commands-tutorial' },
    { filePath: 'notes_gcc_g++_commands.md', title: 'GCC / G++ 命令笔记', anchor: 'gcc-gpp-commands-tutorial' },
    { filePath: 'notes_dotnet_commands.md', title: '.NET 命令笔记', anchor: 'dotnet-commands-tutorial' },
    { filePath: 'notes_powershell_commands.md', title: 'PowerShell 命令笔记', anchor: 'powershell-commands-tutorial' }
];

function initCommandPaletteShortcut() {
    window.addEventListener('keydown', event => {
        if (!(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== 'k') return;
        event.preventDefault();
        commandPaletteFocusRequested = true;

        const input = document.getElementById('home-command-input');
        if (input) {
            commandPaletteFocusRequested = false;
            input.focus();
            return;
        }
        loadContent('home');
    });
}

function initHomeCommandPalette() {
    const shell = document.getElementById('home-command-shell');
    const input = document.getElementById('home-command-input');
    const resultsElement = document.getElementById('home-command-results');
    if (!shell || !input || !resultsElement) return null;

    let destroyed = false;
    let selectedIndex = 0;
    let resultItems = [];
    let placeholderIndex = 0;
    let hideTimer = null;

    const setPlaceholder = () => {
        if (!input.value) input.placeholder = commandPalettePlaceholders[placeholderIndex];
    };

    const renderMessage = message => {
        resultsElement.hidden = false;
        resultsElement.replaceChildren();
        const element = document.createElement('p');
        element.className = 'home-command-message';
        element.textContent = message;
        resultsElement.appendChild(element);
    };

    const runResult = item => {
        if (!item) return;
        input.value = '';
        resultItems = [];
        resultsElement.hidden = true;
        if (item.type === 'command') {
            item.run();
            return;
        }
        openSearchResult(item);
    };

    const renderResults = () => {
        resultsElement.hidden = false;
        resultsElement.replaceChildren();

        if (!resultItems.length) {
            renderMessage(input.value.trim().startsWith('>') ? '没有匹配的本地命令。' : '没有找到相关的笔记或文档。');
            return;
        }

        resultItems.forEach((item, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'home-command-result';
            button.setAttribute('role', 'option');
            button.setAttribute('aria-selected', String(index === selectedIndex));
            if (index === selectedIndex) button.classList.add('is-selected');

            const title = document.createElement('span');
            title.className = 'home-command-result-title';
            title.textContent = item.title;
            const meta = document.createElement('span');
            meta.className = 'home-command-result-meta';
            meta.textContent = item.meta;
            button.append(title, meta);

            if (item.snippet) {
                const snippet = document.createElement('span');
                snippet.className = 'home-command-result-snippet';
                snippet.textContent = item.snippet;
                button.appendChild(snippet);
            }

            button.addEventListener('pointerdown', event => {
                event.preventDefault();
                runResult(item);
            });
            resultsElement.appendChild(button);
        });
    };

    const updateResults = () => {
        const query = input.value.trim();
        selectedIndex = 0;
        if (!query) {
            resultItems = [];
            resultsElement.hidden = true;
            return;
        }

        if (query.startsWith('>')) {
            resultItems = getCommandPaletteCommands(query.slice(1));
            renderResults();
            return;
        }

        renderMessage('正在建立本地索引…');
        getCommandSearchIndex().then(index => {
            if (destroyed || input.value.trim() !== query) return;
            resultItems = searchCommandIndex(index, query);
            selectedIndex = 0;
            renderResults();
        });
    };

    const handleInput = () => updateResults();
    const handleFocus = () => {
        if (hideTimer) window.clearTimeout(hideTimer);
        if (input.value) updateResults();
    };
    const handleBlur = () => {
        hideTimer = window.setTimeout(() => {
            if (!shell.contains(document.activeElement)) resultsElement.hidden = true;
        }, 120);
    };
    const handleKeyDown = event => {
        if (!resultItems.length) {
            if (event.key === 'Escape') input.blur();
            return;
        }
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            selectedIndex = event.key === 'ArrowDown'
                ? (selectedIndex + 1) % resultItems.length
                : (selectedIndex - 1 + resultItems.length) % resultItems.length;
            renderResults();
        } else if (event.key === 'Enter') {
            event.preventDefault();
            runResult(resultItems[selectedIndex]);
        } else if (event.key === 'Escape') {
            event.preventDefault();
            input.blur();
        }
    };

    input.addEventListener('input', handleInput);
    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);
    input.addEventListener('keydown', handleKeyDown);
    setPlaceholder();

    const placeholderTimer = window.setInterval(() => {
        placeholderIndex = (placeholderIndex + 1) % commandPalettePlaceholders.length;
        setPlaceholder();
    }, 3600);

    if (commandPaletteFocusRequested) {
        commandPaletteFocusRequested = false;
        requestAnimationFrame(() => input.focus());
    }

    return () => {
        destroyed = true;
        if (hideTimer) window.clearTimeout(hideTimer);
        window.clearInterval(placeholderTimer);
        input.removeEventListener('input', handleInput);
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
        input.removeEventListener('keydown', handleKeyDown);
    };
}

function getCommandPaletteCommands(query) {
    const commands = [
        {
            title: '切换为 Neural Noise',
            meta: '背景命令',
            keywords: 'neural noise 背景 动效',
            run: () => updateBackgroundMode('neural-noise')
        },
        {
            title: '切换为星空',
            meta: '背景命令',
            keywords: '星空 starfield 背景',
            run: () => updateBackgroundMode('starfield')
        },
        {
            title: '打开设置',
            meta: '跳转命令',
            keywords: '设置 外观 背景',
            run: () => loadContent('settings')
        },
        {
            title: '打开主页',
            meta: '跳转命令',
            keywords: '主页 home',
            run: () => loadContent('home')
        },
        {
            title: '打开笔记',
            meta: '跳转命令',
            keywords: '笔记 notes',
            run: () => loadContent('notes')
        },
        {
            title: '打开文档',
            meta: '跳转命令',
            keywords: '文档 docs',
            run: () => loadContent('docs')
        },
        {
            title: '打开手册',
            meta: '跳转命令',
            keywords: '手册 manual',
            run: () => loadContent('manual')
        },
        {
            title: '打开图库',
            meta: '跳转命令',
            keywords: '图库 gallery 图片',
            run: () => loadContent('gallery')
        },
        {
            title: '打开游戏',
            meta: '跳转命令',
            keywords: '游戏 game',
            run: () => loadContent('game')
        },
        {
            title: '打开留言',
            meta: '跳转命令',
            keywords: '留言 message',
            run: () => loadContent('message')
        },
        {
            title: '打开测试页面',
            meta: '跳转命令',
            keywords: '测试 test',
            run: () => loadContent('test')
        },
        {
            title: '打开其他页面',
            meta: '跳转命令',
            keywords: '其他 other',
            run: () => loadContent('other')
        }
    ];
    const normalizedQuery = normalizeCommandSearchText(query);
    return commands
        .map(command => ({ ...command, type: 'command', score: getFuzzyScore(`${command.title} ${command.keywords}`, normalizedQuery) }))
        .filter(command => !normalizedQuery || command.score >= 0)
        .sort((left, right) => right.score - left.score)
        .slice(0, 8);
}

function updateBackgroundMode(backgroundMode) {
    const settings = loadSiteSettings();
    settings.backgroundMode = backgroundMode;
    saveSiteSettings(settings);
    applySiteSettings(settings);
}

function getCommandSearchIndex() {
    if (!commandSearchIndexPromise) {
        commandSearchIndexPromise = buildCommandSearchIndex().catch(error => {
            console.error('Failed to build command search index:', error);
            return [];
        });
    }
    return commandSearchIndexPromise;
}

async function buildCommandSearchIndex() {
    const docFiles = await fetchDocFileList();
    const sources = [
        ...commandPaletteNoteSources.map(source => ({ ...source, type: '笔记', page: 'notes' })),
        ...docFiles.map(fileName => ({
            filePath: fileName,
            title: formatDocTitle(fileName),
            type: '文档',
            page: 'docs',
            anchor: `doc-section-${sanitizeId(fileName)}`
        }))
    ];
    const uniqueSources = sources.filter((source, index) => sources.findIndex(item => item.filePath === source.filePath) === index);
    const indexedSources = await Promise.all(uniqueSources.map(async source => {
        try {
            const response = await fetch(source.filePath);
            if (!response.ok) return null;
            const markdown = await response.text();
            return { ...source, text: markdownToSearchText(markdown) };
        } catch (error) {
            console.error(`Failed to index ${source.filePath}:`, error);
            return null;
        }
    }));
    return indexedSources.filter(Boolean);
}

function markdownToSearchText(markdown) {
    return markdown
        .replace(/```/g, ' ')
        .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
        .replace(/[#>*_`~|]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function normalizeCommandSearchText(text) {
    return text.toLocaleLowerCase().replace(/\s+/g, '');
}

function getFuzzyScore(text, normalizedQuery) {
    if (!normalizedQuery) return 0;
    const normalizedText = normalizeCommandSearchText(text);
    const exactPosition = normalizedText.indexOf(normalizedQuery);
    if (exactPosition >= 0) return 5000 - Math.min(exactPosition, 1000);

    let cursor = 0;
    let score = 0;
    for (const character of normalizedQuery) {
        const position = normalizedText.indexOf(character, cursor);
        if (position < 0) return -1;
        score += Math.max(1, 12 - (position - cursor));
        cursor = position + 1;
    }
    return score;
}

function searchCommandIndex(index, query) {
    const normalizedQuery = normalizeCommandSearchText(query);
    return index
        .map(source => {
            const titleScore = getFuzzyScore(source.title, normalizedQuery);
            const textScore = getFuzzyScore(source.text, normalizedQuery);
            const score = Math.max(titleScore >= 0 ? titleScore + 6000 : -1, textScore);
            return score < 0 ? null : {
                ...source,
                type: 'document',
                meta: source.type,
                score,
                snippet: getSearchSnippet(source.text, query)
            };
        })
        .filter(Boolean)
        .sort((left, right) => right.score - left.score)
        .slice(0, 8);
}

function getSearchSnippet(text, query) {
    const normalizedText = text.toLocaleLowerCase();
    const position = normalizedText.indexOf(query.toLocaleLowerCase());
    if (position < 0) return text.slice(0, 128);
    const start = Math.max(0, position - 52);
    const end = Math.min(text.length, position + query.length + 92);
    return `${start > 0 ? '…' : ''}${text.slice(start, end)}${end < text.length ? '…' : ''}`;
}

function openSearchResult(result) {
    loadContent(result.page);
    if (!result.anchor) return;

    let attempts = 0;
    const scrollToTarget = () => {
        const target = document.getElementById(result.anchor);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }
        attempts += 1;
        if (attempts < 24) window.setTimeout(scrollToTarget, 120);
    };
    window.setTimeout(scrollToTarget, 80);
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
    'doc_cisco_ios_switch_router.md',
    'doc_curl_http.md',
    'doc_ffuf_use.md',
    'doc_fortigate_cli.md',
    'doc_github_actions_debug.md',
    'doc_h3c_comware_network.md',
    'doc_huawei_vrp_network.md',
    'doc_hydra_use.md',
    'doc_impacket_tools.md',
    'doc_jq_use.md',
    'doc_kubectl_use.md',
    'doc_ldapsearch_use.md',
    'doc_linux_nftables_firewall.md',
    'doc_msf_config.md',
    'doc_msf_install.md',
    'doc_msf_use.md',
    'doc_nmap_use.md',
    'doc_openssl_use.md',
    'doc_paloalto_panos_cli.md',
    'doc_rsync_use.md',
    'doc_smbclient_rpcclient.md',
    'doc_ssh_scp.md',
    'doc_to_msf_c_payload.md',
    'doc_to_msf_cpp_payload.md',
    'doc_to_msf_go_payload.md',
    'doc_trivy_container_scan.md',
    'doc_tshark_wireshark.md',
    'doc_winapi_create_file_w.md',
    'doc_winapi_create_process_w.md',
    'doc_winexesec.md',
];

function getInitialPage() {
    const params = new URLSearchParams(window.location.search);
    const requestedPage = params.get('page') || 'home';
    return Object.prototype.hasOwnProperty.call(pageContents, requestedPage) ? requestedPage : 'home';
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
    if (Object.prototype.hasOwnProperty.call(pageContents, page)) {
        setPageMetadata(page);
        if (options.updateUrl !== false) {
            setPageUrl(page);
        }
        mainContent.innerHTML = pageContents[page];
        applyDefaultScrollAnimations(mainContent);
        if (page === 'home') {
            cleanupCurrentPage = initHomeCommandPalette();
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
    initCommandPaletteShortcut();
    applySiteSettings(loadSiteSettings());
    loadContent(getInitialPage(), { updateUrl: false });
    initBackgroundController();
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

function initBackgroundController() {
    const starfield = initStarfield();
    const neuralNoise = initNeuralNoise();
    if (!starfield || !neuralNoise) return;

    backgroundController = {
        applySettings(nextSettings) {
            const settings = normalizeSiteSettings(nextSettings);
            starfield.applySettings(settings);
            neuralNoise.applySettings(settings);

            if (settings.backgroundMode === 'neural-noise' && neuralNoise.setActive(true)) {
                starfield.setActive(false);
                return;
            }

            neuralNoise.setActive(false);
            starfield.setActive(true);
        }
    };

    backgroundController.applySettings(loadSiteSettings());
}

function initStarfield() {
    const canvas = document.getElementById('starfield');
    const ctx = canvas && canvas.getContext('2d');
    if (!canvas || !ctx) return null;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const lightChart = {
        background: '#f4f7fb',
        star: 'rgba(72, 91, 118, 0.58)',
        line: 'rgba(72, 91, 118, 0.22)',
        maxLineDistance: 142,
        maxLinkedStars: 260
    };
    let animationFrameId = null;
    let isActive = false;
    let stars = [];
    let settings = normalizeSiteSettings(loadSiteSettings());

    function shouldAnimate() {
        return isActive && !document.hidden && !reducedMotion.matches;
    }

    function createStars() {
        stars = Array.from({ length: settings.starCount }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: settings.minRadius + Math.random() * (settings.maxRadius - settings.minRadius),
            alpha: Math.random(),
            twinkleSpeed: settings.twinkleMinSpeed + Math.random() * (settings.twinkleMaxSpeed - settings.twinkleMinSpeed)
        }));
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createStars();
        render();
    }

    function updateStarTwinkle(star) {
        star.alpha += star.twinkleSpeed;
        if (star.alpha >= 1 || star.alpha <= settings.minAlpha) star.twinkleSpeed = -star.twinkleSpeed;
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
                const distance = Math.hypot(star.x - nextStar.x, star.y - nextStar.y);
                if (distance > lightChart.maxLineDistance) continue;
                ctx.globalAlpha = (1 - distance / lightChart.maxLineDistance) * 0.9;
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

    function render() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
        if (!isActive) return;
        if (document.documentElement.dataset.theme === 'light') drawLightChart();
        else drawDarkStarfield();
        if (shouldAnimate()) animationFrameId = requestAnimationFrame(render);
    }

    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('visibilitychange', render);
    reducedMotion.addEventListener('change', render);
    resizeCanvas();

    return {
        applySettings(nextSettings) {
            const normalizedSettings = normalizeSiteSettings(nextSettings);
            const shouldRecreateStars =
                normalizedSettings.starCount !== settings.starCount ||
                normalizedSettings.minRadius !== settings.minRadius ||
                normalizedSettings.maxRadius !== settings.maxRadius ||
                normalizedSettings.twinkleMinSpeed !== settings.twinkleMinSpeed ||
                normalizedSettings.twinkleMaxSpeed !== settings.twinkleMaxSpeed;
            settings = normalizedSettings;
            if (shouldRecreateStars) createStars();
            render();
        },
        setActive(active) {
            isActive = Boolean(active);
            canvas.hidden = !isActive;
            render();
            return true;
        }
    };
}

function initNeuralNoise() {
    const canvas = document.getElementById('neural-noise');
    if (!canvas) return null;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2, targetX: window.innerWidth / 2, targetY: window.innerHeight / 2 };
    let animationFrameId = null;
    let gl = null;
    let uniforms = null;
    let isActive = false;
    let settings = normalizeSiteSettings(loadSiteSettings());

    const vertexSource = `
        precision mediump float;
        varying vec2 vUv;
        attribute vec2 a_position;
        void main() {
            vUv = 0.5 * (a_position + 1.0);
            gl_Position = vec4(a_position, 0.0, 1.0);
        }
    `;
    const fragmentSource = `
        precision mediump float;
        varying vec2 vUv;
        uniform float u_time;
        uniform float u_ratio;
        uniform vec2 u_pointer_position;
        uniform vec3 u_color;
        uniform float u_speed;
        uniform float u_opacity;
        vec2 rotate(vec2 uv, float th) {
            return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
        }
        float neuro_shape(vec2 uv, float t, float p) {
            vec2 sine_acc = vec2(0.0);
            vec2 res = vec2(0.0);
            float scale = 8.0;
            for (int j = 0; j < 15; j++) {
                uv = rotate(uv, 1.0);
                sine_acc = rotate(sine_acc, 1.0);
                vec2 layer = uv * scale + float(j) + sine_acc - t;
                sine_acc += sin(layer) + 2.4 * p;
                res += (0.5 + 0.5 * cos(layer)) / scale;
                scale *= 1.2;
            }
            return res.x + res.y;
        }
        void main() {
            vec2 uv = 0.5 * vUv;
            uv.x *= u_ratio;
            vec2 pointer = vUv - u_pointer_position;
            pointer.x *= u_ratio;
            float p = clamp(length(pointer), 0.0, 1.0);
            p = 0.5 * pow(1.0 - p, 2.0);
            float noise = neuro_shape(uv, u_speed * u_time, p);
            noise = 1.2 * pow(noise, 3.0);
            noise += pow(noise, 10.0);
            noise = max(0.0, noise - 0.5);
            noise *= (1.0 - length(vUv - 0.5));
            float alpha = noise * u_opacity;
            gl_FragColor = vec4(u_color * alpha, alpha);
        }
    `;

    function createShader(source, type) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
        console.error('Neural Noise shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

    function initShader() {
        gl = canvas.getContext('webgl', { alpha: true, antialias: false, powerPreference: 'low-power' })
            || canvas.getContext('experimental-webgl');
        if (!gl) return false;

        const vertexShader = createShader(vertexSource, gl.VERTEX_SHADER);
        const fragmentShader = createShader(fragmentSource, gl.FRAGMENT_SHADER);
        if (!vertexShader || !fragmentShader) return false;

        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Neural Noise program link error:', gl.getProgramInfoLog(program));
            return false;
        }

        uniforms = {
            time: gl.getUniformLocation(program, 'u_time'),
            ratio: gl.getUniformLocation(program, 'u_ratio'),
            pointer: gl.getUniformLocation(program, 'u_pointer_position'),
            color: gl.getUniformLocation(program, 'u_color'),
            speed: gl.getUniformLocation(program, 'u_speed'),
            opacity: gl.getUniformLocation(program, 'u_opacity')
        };
        const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
        gl.useProgram(program);
        const position = gl.getAttribLocation(program, 'a_position');
        gl.enableVertexAttribArray(position);
        gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
        gl.clearColor(0, 0, 0, 0);
        resizeCanvas();
        applyUniforms();
        return true;
    }

    function hslToRgb(hue, saturation, lightness) {
        const h = ((hue % 360) + 360) % 360 / 360;
        const s = saturation / 100;
        const l = lightness / 100;
        if (s === 0) return [l, l, l];
        const hueToRgb = (p, q, t) => {
            const value = (t + 1) % 1;
            if (value < 1 / 6) return p + (q - p) * 6 * value;
            if (value < 1 / 2) return q;
            if (value < 2 / 3) return p + (q - p) * (2 / 3 - value) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        return [hueToRgb(p, q, h + 1 / 3), hueToRgb(p, q, h), hueToRgb(p, q, h - 1 / 3)];
    }

    function applyUniforms() {
        if (!gl || !uniforms) return;
        const [red, green, blue] = hslToRgb(settings.neuralHue, settings.neuralSaturation, settings.neuralLightness);
        gl.uniform3f(uniforms.color, red, green, blue);
        gl.uniform1f(uniforms.speed, settings.neuralSpeed * settings.motionScale);
        gl.uniform1f(uniforms.opacity, settings.neuralOpacity);
    }

    function resizeCanvas() {
        if (!gl) return;
        const maxPixelRatio = window.innerWidth < 768 ? 1 : 1.5;
        const pixelRatio = Math.min(window.devicePixelRatio || 1, maxPixelRatio);
        canvas.width = Math.max(1, Math.round(window.innerWidth * pixelRatio));
        canvas.height = Math.max(1, Math.round(window.innerHeight * pixelRatio));
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform1f(uniforms.ratio, canvas.width / canvas.height);
        render();
    }

    function shouldAnimate() {
        return isActive && !document.hidden && !reducedMotion.matches;
    }

    function render() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
        if (!isActive || !gl) return;
        pointer.x += (pointer.targetX - pointer.x) * 0.2;
        pointer.y += (pointer.targetY - pointer.y) * 0.2;
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform1f(uniforms.time, performance.now());
        gl.uniform2f(uniforms.pointer, pointer.x / Math.max(1, window.innerWidth), 1 - pointer.y / Math.max(1, window.innerHeight));
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        if (shouldAnimate()) animationFrameId = requestAnimationFrame(render);
    }

    function updatePointer(event) {
        pointer.targetX = event.clientX;
        pointer.targetY = event.clientY;
        if (!animationFrameId) render();
    }

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('pointermove', updatePointer, { passive: true });
    window.addEventListener('pointerdown', updatePointer, { passive: true });
    document.addEventListener('visibilitychange', render);
    reducedMotion.addEventListener('change', render);

    return {
        applySettings(nextSettings) {
            settings = normalizeSiteSettings(nextSettings);
            applyUniforms();
            render();
        },
        setActive(active) {
            if (!active) {
                isActive = false;
                canvas.hidden = true;
                render();
                return true;
            }
            if (!gl && !initShader()) {
                canvas.hidden = true;
                return false;
            }
            isActive = true;
            canvas.hidden = false;
            applyUniforms();
            render();
            return true;
        }
    };
}
