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
    description: 'View Shadcn UI is a Vue3 component library built on Tailwind CSS.',

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
            text: 'Edit this page on GitHub'
        },
        lastUpdated: {
            text: 'Updated at',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024 Present by <a href="https://community.devlive.org" target="_blank">Devlive Community</a>'
        },
        docFooter: {
            prev: 'Previous page',
            next: 'Next page'
        },
        search: {
            provider: 'local'
        },
        nav: [
            {text: 'Home', link: '/'},
            {
                text: 'Team',
                link: '/team',
                activeMatch: '/team'
            },
            {
                text: "Guide",
                link: "/guide/installation",
                activeMatch: '/guide/'
            },
            {
                text: 'Components',
                link: '/components/base/button',
                activeMatch: '/components'
            },
            {
                text: '2024.5.4 <span class="VPBadge danger" style="margin-left: -18px; position: absolute; bottom: 38px;">Latest</span>',
                items: [
                    {
                        text: 'CHANGELOG <span class="VPBadge tip">2024.5.4</span>',
                        link: '/changelog',
                        activeMatch: '/changelog'
                    },
                    {
                        text: 'CONTRIBUTING',
                        external: true,
                        link: 'https://github.com/devlive-community/view-shadcn-ui/blob/dev/CONTRIBUTING.md',
                    }
                ]
            },
            {
                text: '<img alt="NPM Downloads" src="https://img.shields.io/npm/d18m/view-shadcn-ui?style=flat&label=D">',
                link: 'https://www.npmjs.com/package/view-shadcn-ui'
            },
            {
                text: '<img alt="GitHub stars" src="https://img.shields.io/github/stars/devlive-community/view-shadcn-ui?style=flat">',
                link: 'https://github.com/devlive-community/view-shadcn-ui'
            },
            {
                text: '<img alt="Gitee stars" src="https://gitee.com/devlive-community/view-shadcn-ui/badge/star.svg?theme=white"/>',
                link: 'https://gitee.com/devlive-community/view-shadcn-ui'
            }
        ],
        sidebar: {
            "/guide/": [
                {
                    text: "Guide",
                    collapsed: false,
                    base: "/guide/",
                    items: [
                        {text: "Installation", link: "installation"},
                        {text: "Quick Start", link: "quickstart"},
                    ]
                },
                {
                    text: "Utility",
                    collapsed: false,
                    base: "/guide/",
                    items: [
                        {text: 'calcSize <span class="VPBadge tip">2024.2.0</span>', link: 'calc-size'},
                        {text: 'isLightColor <span class="VPBadge tip">2024.2.0</span>', link: 'is-light-color'},
                        {text: 'getContrastTextColor <span class="VPBadge tip">2024.2.0</span>', link: 'get-contrast-text-color'},
                        {text: 'getHoverColor <span class="VPBadge tip">2024.2.0</span>', link: 'get-hover-color'},
                        {text: 'generateColorShades <span class="VPBadge tip">2024.2.0</span>', link: 'generate-color-shades'},
                        {text: 'Function <span class="VPBadge tip">2024.5.0</span>', link: 'function'},
                        {text: 'Logger <span class="VPBadge tip">2024.5.1</span>', link: 'logger'},
                        {text: 'UUID <span class="VPBadge tip">2024.5.2</span>', link: 'uuid'},
                    ]
                }
            ],
            '/components/': [
                (() => {
                    const items = [
                        {text: 'Language', link: 'utility/language', version: '2024.5.2'},
                    ]

                    return {
                        text: `Utility [ ${items.length} ]`,
                        base: '/components/',
                        collapsed: false,
                        items: items.map(item => createSidebarItem(item))
                    }
                })(),
                (() => {
                    const items = [
                        {text: 'Button', link: 'base/button', icon: '/components/base/button.svg', version: '2024.1.1'},
                        {text: 'Icon', link: 'base/icon', icon: '/components/base/icon.svg', version: '2024.1.1'},
                        {text: 'Copy', link: 'base/copy', icon: '/components/base/copy.svg', version: '2024.1.1'},
                        {text: 'Watermark', link: 'base/watermark', icon: '/components/base/watermark.svg', version: '2024.2.0'},
                        {text: 'Highlight', link: 'base/highlight', icon: '/components/base/highlight.svg', version: '2024.2.0'},
                        {text: 'Text', link: 'base/text', icon: '/components/base/text.svg', version: '2024.3.0'},
                        {text: 'Gradient Text', link: 'base/gradient-text', icon: '/components/base/gradient-text.svg', version: '2024.3.0'},
                    ]

                    return {
                        text: `Base [ ${items.length} ]`,
                        base: '/components/',
                        collapsed: false,
                        items: items.map(item => createSidebarItem(item))
                    }
                })(),
                (() => {
                    const items = [
                        {text: 'Card', link: 'layout/card', icon: '/components/layout/card.svg', version: '2024.1.1'},
                        {text: 'Row / Col', link: 'layout/row-col', icon: '/components/layout/row-col.svg', version: '2024.1.2'},
                        {text: 'Divider', link: 'layout/divider', icon: '/components/layout/divider.svg', version: '2024.1.2'},
                        {text: 'Ellipsis', link: 'layout/ellipsis', icon: '/components/layout/ellipsis.svg', version: '2024.1.2'},
                        {text: 'Avatar', link: 'layout/avatar', icon: '/components/layout/avatar.svg', version: '2024.1.2'},
                        {text: 'Space', link: 'layout/space', icon: '/components/layout/space.svg', version: '2024.1.2'},
                        {text: 'Skeleton', link: 'layout/skeleton', icon: '/components/layout/skeleton.svg', version: '2024.1.2'},
                        {text: 'Layout', link: 'layout/layout', icon: '/components/layout/layout.svg', version: '2024.1.2'},
                        {text: 'Collapse', link: 'layout/collapse', icon: '/components/layout/collapse.svg', version: '2024.2.0'},
                        {text: 'Global Footer', link: 'layout/global-footer', icon: '/components/layout/global-footer.svg', version: '2024.2.0'},
                        {text: 'Toolbar Footer', link: 'layout/toolbar-footer', icon: '/components/layout/toolbar-footer.svg', version: '2024.2.0'}
                    ]

                    return {
                        text: `Layout [ ${items.length} ]`,
                        base: '/components/',
                        collapsed: false,
                        items: items.map(item => createSidebarItem(item))
                    }
                })(),
                (() => {
                    const items = [
                        {text: 'Modal', link: 'view/modal', icon: '/components/view/modal.svg', version: '2024.1.1'},
                        {text: 'Tooltip', link: 'view/tooltip', icon: '/components/view/tooltip.svg', version: '2024.1.1'},
                        {text: 'Code', link: 'view/code', icon: '/components/view/code.svg', version: '2024.1.1'},
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
                        {text: 'Tree', link: 'view/tree', icon: '/components/view/tree.svg', version: '2024.3.0'},
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
                    ]

                    return {
                        text: `View [ ${items.length} ]`,
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
                        {text: 'Select', link: 'form/select', icon: '/components/form/select.svg', version: '2024.1.2'},
                        {text: 'Rate', link: 'form/rate', icon: '/components/form/rate.svg', version: '2024.1.2'},
                        {text: 'Form', link: 'form/form', icon: '/components/form/form.svg', version: '2024.2.0'},
                        {text: 'Slider', link: 'form/slider', icon: '/components/form/slider.svg', version: '2024.2.0'},
                        {text: 'Number', link: 'form/number', icon: '/components/form/number.svg', version: '2024.3.0'},
                        {text: 'Toggle', link: 'form/toggle', icon: '/components/form/toggle.svg', version: '2024.4.0'},
                        {text: 'Upload', link: 'form/upload', icon: '/components/form/upload.svg', version: '2024.5.0'},
                        {text: 'Input Tag', link: 'form/input-tag', icon: '/components/form/input-tag.svg', version: '2024.5.2'},
                        {text: 'Map', link: 'form/map', icon: '/components/form/map.svg', version: '2024.5.2'},
                        {text: 'Time Picker', link: 'form/time-picker', icon: '/components/form/time-picker.svg', version: '2024.5.3'},
                        {text: 'Color Picker', link: 'form/color-picker', icon: '/components/form/color-picker.svg', version: '2024.5.3'},
                        {text: 'Date Picker', link: 'form/date-picker', icon: '/components/form/date-picker.svg', version: '2024.5.3'},
                        {text: 'Cron', link: 'form/cron', icon: '/components/form/cron.svg', version: '2024.5.3'}
                    ]

                    return {
                        text: `Form [ ${items.length} ]`,
                        base: '/components/',
                        collapsed: false,
                        items: items.map(item => createSidebarItem(item))
                    };
                })(),
                (() => {
                    const items = [
                        {text: 'Tabs', link: 'navigation/tabs', icon: '/components/navigation/tabs.svg', version: '2024.1.2'},
                        {text: 'Pagination', link: 'navigation/pagination', icon: '/components/navigation/pagination.svg', version: '2024.1.2'},
                        {text: 'Menu', link: 'navigation/menu', icon: '/components/navigation/menu.svg', version: '2024.1.2'},
                        {text: 'Badge', link: 'navigation/badge', icon: '/components/navigation/badge.svg', version: '2024.1.2'},
                        {text: 'Breadcrumb', link: 'navigation/breadcrumb', icon: '/components/navigation/breadcrumb.svg', version: '2024.2.0'},
                        {text: 'Link', link: 'navigation/link', icon: '/components/navigation/link.svg', version: '2024.2.0'},
                        {text: 'Dropdown', link: 'navigation/dropdown', icon: '/components/navigation/dropdown.svg', version: '2024.2.0'},
                        {text: 'Contextmenu', link: 'navigation/contextmenu', icon: '/components/navigation/contextmenu.svg', version: '2024.4.0'},
                    ]

                    return {
                        text: `Navigation [ ${items.length} ]`,
                        base: '/components/',
                        collapsed: false,
                        items: items.map(item => createSidebarItem(item))
                    };
                })(),
                (() => {
                    const items = [
                        {text: 'Data Builder', link: 'data/data-builder', icon: '/components/data/data-builder.svg', version: '2024.5.0'},
                        {text: 'Workflow', link: 'data/workflow', icon: '/components/data/workflow.svg', version: '2024.5.1'},
                        {text: 'Data Filter', link: 'data/data-filter', icon: '/components/data/data-filter.svg', version: '2024.5.2'},
                    ]

                    return {
                        text: `Data [ ${items.length} ]`,
                        base: '/components/',
                        collapsed: false,
                        items: items.map(item => createSidebarItem(item))
                    };
                })(),
            ]
        }
    }
}
