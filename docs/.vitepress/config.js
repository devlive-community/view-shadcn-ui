function createSidebarItem(item) {
    return {
        text: `<span class="sidebar-text-wrapper">
            <span class="sidebar-item">
            ${item.icon ? `<img src="${item.icon}" alt="icon" />` : ''}
            <span class="sidebar-text-wrapper">
              ${item.text}
              ${item.version ? `<span class="version-badge VPBadge tip">${item.version}</span>` : ''}
            </span>
           </span>`,
        link: item.link
    }
}

export default {
    title: 'View Shadcn UI',
    description: 'View Shadcn UI 是一个基于 Tailwind CSS 构建的 Vue3 组件库。',

    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}]
    ],

    themeConfig: {
        logo: '/logo.svg',
        socialLinks: [
            {icon: "github", link: "https://github.com/devlive-community/view-shadcn-ui"},
            {icon: 'npm', link: 'https://www.npmjs.com/package/view-shadcn-ui'}
        ],
        editLink: {
            pattern: 'https://github.com/devlive-community/view-shadcn-ui/edit/dev/docs/:path',
            text: '在 GitHub 上编辑此页'
        },
        lastUpdated: {
            text: '更新时间',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        },
        footer: {
            message: '在 MIT 许可证下发布.',
            copyright: 'Copyright © 2024 Present by <a href="https://community.devlive.org" target="_blank">Devlive Community</a>'
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        search: {
            provider: 'local'
        },
        nav: [
            {text: '主页', link: '/'},
            {
                text: '团队',
                link: '/team',
                activeMatch: '/team'
            },
            {
                text: "指南",
                link: "/guide/installation",
                activeMatch: '/guide/'
            },
            {
                text: '组件',
                link: '/components/base/button',
                activeMatch: '/components'
            },
            {
                text: '演练场',
                link: 'https://playground.view-shadcn-ui.devlive.org'
            },
            {
                text: '2025.1.0 <span class="VPBadge danger" style="margin-left: -18px; position: absolute; bottom: 38px;">最新</span>',
                items: [
                    {
                        text: '发布日志 <span class="VPBadge tip">2025.1.0</span>',
                        link: '/changelog',
                        activeMatch: '/changelog'
                    },
                    {
                        text: '贡献指南',
                        external: true,
                        link: 'https://github.com/devlive-community/view-shadcn-ui/blob/dev/CONTRIBUTING.md',
                    }
                ]
            }
        ],
        sidebar: {
            "/guide/": [
                {
                    text: "使用指南",
                    collapsed: false,
                    base: "/guide/",
                    items: [
                        {text: "安装", link: "installation"},
                        {text: "快速开始", link: "quickstart"},
                    ]
                },
                (() => {
                    const items = [
                        {text: '计算尺寸 (calcSize)', link: 'calc-size', version: '2024.5.2'},
                        {text: '是否浅色 (isLightColor)', link: 'is-light-color', version: '2024.2.0'},
                        {text: '获取对比文本颜色 (getContrastTextColor)', link: 'get-contrast-text-color', version: '2024.2.0'},
                        {text: '获取悬停颜色 (getHoverColor)', link: 'get-hover-color', version: '2024.2.0'},
                        {text: '生成颜色色调 (generateColorShades)', link: 'generate-color-shades', version: '2024.2.0'},
                        {text: '函数 (Function)', link: 'function', version: '2024.5.0'},
                        {text: '日志 (Logger)', link: 'logger', version: '2024.5.1'},
                        {text: '唯一标记 (UUID)', link: 'uuid', version: '2024.5.2'}
                    ]

                    return {
                        text: `工具函数 [ ${items.length} ]`,
                        base: '/guide/',
                        collapsed: false,
                        items: items.map(item => createSidebarItem(item))
                    }
                })()
            ],
            '/components/': [
                (() => {
                    const items = [
                        {text: '语言 (Language)', link: 'utility/language', version: '2024.5.2'},
                    ]

                    return {
                        text: `工具函数 [ ${items.length} ]`,
                        base: '/components/',
                        collapsed: false,
                        items: items.map(item => createSidebarItem(item))
                    }
                })(),
                (() => {
                    const items = [
                        {text: '按钮 (Button)', link: 'base/button', icon: '/components/base/button.svg', version: '2024.1.1'},
                        {text: '图标 (Icon)', link: 'base/icon', icon: '/components/base/icon.svg', version: '2024.1.1'},
                        {text: '复制 (Copy)', link: 'base/copy', icon: '/components/base/copy.svg', version: '2024.1.1'},
                        {text: '水印 (Watermark)', link: 'base/watermark', icon: '/components/base/watermark.svg', version: '2024.2.0'},
                        {text: '高亮 (Highlight)', link: 'base/highlight', icon: '/components/base/highlight.svg', version: '2024.2.0'},
                        {text: '文本 (Text)', link: 'base/text', icon: '/components/base/text.svg', version: '2024.3.0'},
                        {text: '渐变文本 (Gradient Text)', link: 'base/gradient-text', icon: '/components/base/gradient-text.svg', version: '2024.3.0'},
                    ]

                    return {
                        text: `基础组件 [ ${items.length} ]`,
                        base: '/components/',
                        collapsed: false,
                        items: items.map(item => createSidebarItem(item))
                    }
                })(),
                (() => {
                    const items = [
                        {text: '卡片 (Card)', link: 'layout/card', icon: '/components/layout/card.svg', version: '2024.1.1'},
                        {text: '行 & 列 (Row & Col)', link: 'layout/row-col', icon: '/components/layout/row-col.svg', version: '2024.1.2'},
                        {text: '分隔线 (Divider)', link: 'layout/divider', icon: '/components/layout/divider.svg', version: '2024.1.2'},
                        {text: '省略 (Ellipsis)', link: 'layout/ellipsis', icon: '/components/layout/ellipsis.svg', version: '2024.1.2'},
                        {text: '头像 (Avatar)', link: 'layout/avatar', icon: '/components/layout/avatar.svg', version: '2024.1.2'},
                        {text: '间距 (Space)', link: 'layout/space', icon: '/components/layout/space.svg', version: '2024.1.2'},
                        {text: '骨架屏 (Skeleton)', link: 'layout/skeleton', icon: '/components/layout/skeleton.svg', version: '2024.1.2'},
                        {text: '布局 (Layout)', link: 'layout/layout', icon: '/components/layout/layout.svg', version: '2024.1.2'},
                        {text: '折叠 (Collapse)', link: 'layout/collapse', icon: '/components/layout/collapse.svg', version: '2024.2.0'},
                        {text: '全局页脚 (Global Footer)', link: 'layout/global-footer', icon: '/components/layout/global-footer.svg', version: '2024.2.0'},
                        {text: '工具栏页脚 (Toolbar Footer)', link: 'layout/toolbar-footer', icon: '/components/layout/toolbar-footer.svg', version: '2024.2.0'}
                    ]

                    return {
                        text: `布局组件 [ ${items.length} ]`,
                        base: '/components/',
                        collapsed: false,
                        items: items.map(item => createSidebarItem(item))
                    }
                })(),
                (() => {
                    const items = [
                        {text: 'Modal', link: 'view/modal', icon: '/components/view/modal.svg', version: '2024.1.1'},
                        {text: 'Tooltip', link: 'view/tooltip', icon: '/components/view/tooltip.svg', version: '2024.1.1'},
                        {text: 'Code Editor', link: 'view/code-editor', icon: '/components/view/code.svg', version: '2024.1.1'},
                        {text: 'Alert', link: 'view/alert', icon: '/components/view/alert.svg', version: '2024.1.2'},
                        {text: 'Progress', link: 'view/progress', icon: '/components/view/progress.svg', version: '2024.1.2'},
                        {text: 'Drawer', link: 'view/drawer', icon: '/components/view/drawer.svg', version: '2024.1.2'},
                        {text: 'Message', link: 'view/message', icon: '/components/view/message.svg', version: '2024.1.2'},
                        {text: 'Table', link: 'view/table', icon: '/components/view/table.svg', version: '2024.1.2'},
                        {text: 'Spin', link: 'view/spin', icon: '/components/view/spin.svg', version: '2024.2.0'},
                        {text: 'Timeline', link: 'view/timeline', icon: '/components/view/timeline.svg', version: '2024.2.0'},
                        {text: 'Trend', link: 'view/trend', icon: '/components/view/trend.svg', version: '2024.2.0'},
                        {text: 'Exception', link: 'view/exception', icon: '/components/view/exception.svg', version: '2024.2.0'},
                        {text: 'Tag', link: 'view/tag', icon: '/components/view/tag.svg', version: '2024.2.0'},
                        {text: '树 (Tree)', link: 'view/tree', icon: '/components/view/tree.svg', version: '2024.3.0'},
                        {text: 'Hover Card', link: 'view/hover-card', icon: '/components/view/hover-card.svg', version: '2024.4.0'},
                        {text: 'Logger', link: 'view/logger', icon: '/components/view/logger.svg', version: '2024.5.1'},
                        {text: 'Scrollbar', link: 'view/scrollbar', icon: '/components/view/scrollbar.svg', version: '2024.5.1'},
                        {text: 'Count Down', link: 'view/count-down', icon: '/components/view/count-down.svg', version: '2024.5.1'},
                        {text: 'Empty', link: 'view/empty', icon: '/components/view/empty.svg', version: '2024.5.1'},
                        {text: 'Back Top', link: 'view/back-top', icon: '/components/view/back-top.svg', version: '2024.5.1'},
                        {text: 'Loading Bar', link: 'view/loading-bar', icon: '/components/view/loading-bar.svg', version: '2024.5.2'},
                        {text: 'Float Button', link: 'view/float-button', icon: '/components/view/float-button.svg', version: '2024.5.2'},
                        {text: 'QrCode', link: 'view/qr-code', icon: '/components/view/qrcode.svg', version: '2024.5.3'},
                        {text: 'Contributor', link: 'view/contribution', icon: '/components/view/contribution.svg', version: '2024.5.4'},
                        {text: '图片 (Image)', link: 'view/image', icon: '/components/view/image.svg', version: '2025.1.0'},
                        {text: '轮播 (Carousel)', link: 'view/carousel', icon: '/components/view/carousel.svg', version: '2025.1.0'},
                    ]

                    return {
                        text: `视图组件 [ ${items.length} ]`,
                        base: '/components/',
                        collapsed: false,
                        items: items.map(item => createSidebarItem(item))
                    };
                })(),
                (() => {
                    const items = [
                        {text: 'Input', link: 'form/input', icon: '/components/form/input.svg', version: '2024.1.1'},
                        {text: 'Switch', link: 'form/switch', icon: '/components/form/switch.svg', version: '2024.1.2'},
                        {text: 'Radio', link: 'form/radio', icon: '/components/form/radio.svg', version: '2024.1.2'},
                        {text: 'Checkbox', link: 'form/checkbox', icon: '/components/form/checkbox.svg', version: '2024.1.2'},
                        {text: '选择器 (Select)', link: 'form/select', icon: '/components/form/select.svg', version: '2024.1.2'},
                        {text: 'Rate', link: 'form/rate', icon: '/components/form/rate.svg', version: '2024.1.2'},
                        {text: 'Form', link: 'form/form', icon: '/components/form/form.svg', version: '2024.2.0'},
                        {text: 'Slider', link: 'form/slider', icon: '/components/form/slider.svg', version: '2024.2.0'},
                        {text: 'Number', link: 'form/number', icon: '/components/form/number.svg', version: '2024.3.0'},
                        {text: 'Toggle', link: 'form/toggle', icon: '/components/form/toggle.svg', version: '2024.4.0'},
                        {text: 'Upload', link: 'form/upload', icon: '/components/form/upload.svg', version: '2024.5.0'},
                        {text: 'Input Tag', link: 'form/input-tag', icon: '/components/form/input-tag.svg', version: '2024.5.2'},
                        {text: 'Map', link: 'form/map', icon: '/components/form/map.svg', version: '2024.5.2'},
                        {text: 'Time Picker', link: 'form/time-picker', icon: '/components/form/time-picker.svg', version: '2024.5.3'},
                        {text: '颜色选择器 (Color Picker)', link: 'form/color-picker', icon: '/components/form/color-picker.svg', version: '2024.5.3'},
                        {text: '日期选取器 (Date Picker)', link: 'form/date-picker', icon: '/components/form/date-picker.svg', version: '2024.5.3'},
                        {text: '计划任务 (Cron)', link: 'form/cron', icon: '/components/form/cron.svg', version: '2024.5.3'},
                        {text: '提及 (Mention)', link: 'form/mention', icon: '/components/form/mention.svg', version: '2025.1.0'}
                    ]

                    return {
                        text: `表单组件 [ ${items.length} ]`,
                        base: '/components/',
                        collapsed: false,
                        items: items.map(item => createSidebarItem(item))
                    };
                })(),
                (() => {
                    const items = [
                        {text: '选项卡 (Tabs)', link: 'navigation/tabs', icon: '/components/navigation/tabs.svg', version: '2024.1.2'},
                        {text: '分页 (Pagination)', link: 'navigation/pagination', icon: '/components/navigation/pagination.svg', version: '2024.1.2'},
                        {text: '菜单 (Menu)', link: 'navigation/menu', icon: '/components/navigation/menu.svg', version: '2024.1.2'},
                        {text: '徽章 (Badge)', link: 'navigation/badge', icon: '/components/navigation/badge.svg', version: '2024.1.2'},
                        {text: '面包屑 (Breadcrumb)', link: 'navigation/breadcrumb', icon: '/components/navigation/breadcrumb.svg', version: '2024.2.0'},
                        {text: '链接 (Link)', link: 'navigation/link', icon: '/components/navigation/link.svg', version: '2024.2.0'},
                        {text: '下拉菜单 (Dropdown)', link: 'navigation/dropdown', icon: '/components/navigation/dropdown.svg', version: '2024.2.0'},
                        {text: '右键菜单 (Contextmenu)', link: 'navigation/contextmenu', icon: '/components/navigation/contextmenu.svg', version: '2024.4.0'},
                    ]

                    return {
                        text: `导航组件 [ ${items.length} ]`,
                        base: '/components/',
                        collapsed: false,
                        items: items.map(item => createSidebarItem(item))
                    };
                })(),
                (() => {
                    const items = [
                        {text: '数据构建 (Data Builder)', link: 'data/data-builder', icon: '/components/data/data-builder.svg', version: '2024.5.0'},
                        {text: '流程 (Workflow)', link: 'data/workflow', icon: '/components/data/workflow.svg', version: '2024.5.1'},
                        {text: '数据过滤 (Data Filter)', link: 'data/data-filter', icon: '/components/data/data-filter.svg', version: '2024.5.2'},
                    ]

                    return {
                        text: `数据组件 [ ${items.length} ]`,
                        base: '/components/',
                        collapsed: false,
                        items: items.map(item => createSidebarItem(item))
                    };
                })(),
            ]
        }
    }
}