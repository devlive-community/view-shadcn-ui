export default {
    title: 'View Shadcn UI',
    description: 'A component library built on Shadcn UI and Tailwind CSS.',
    themeConfig: {
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
                link: '/components',
                activeMatch: '/components'
            },
            {
                text: '2024.1.3 <span class="VPBadge danger" style="margin-left: -18px; position: absolute; bottom: 38px;">Alpha</span>',
                items: [
                    {
                        text: 'CHANGELOG <span class="VPBadge tip">2024.1.2</span>',
                        link: '/changelog',
                        activeMatch: '/changelog'
                    }
                ]
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
                }
            ],
            '/components/': [
                {
                    text: 'Base Components',
                    base: '/components/',
                    collapsed: false,
                    items: [
                        {text: 'Button <span class="VPBadge tip">2024.1.1</span>', link: 'button'},
                        {text: 'Icon <span class="VPBadge tip">2024.1.1</span>', link: 'icon'},
                        {text: 'Copy <span class="VPBadge tip">2024.1.1</span>', link: 'copy'}
                    ]
                },
                {
                    text: 'Layout Components',
                    base: '/components/',
                    collapsed: false,
                    items: [
                        {text: 'Card <span class="VPBadge tip">2024.1.1</span>', link: 'card'},
                        {text: 'Row / Col <span class="VPBadge tip">2024.1.2</span>', link: 'row-col'},
                        {text: 'Divider <span class="VPBadge tip">2024.1.2</span>', link: 'divider'},
                        {text: 'Ellipsis <span class="VPBadge tip">2024.1.2</span>', link: 'ellipsis'},
                        {text: 'Avatar <span class="VPBadge tip">2024.1.2</span>', link: 'avatar'},
                        {text: 'Space <span class="VPBadge tip">2024.1.2</span>', link: 'space'},
                        {text: 'Skeleton <span class="VPBadge tip">2024.1.2</span>', link: 'skeleton'},
                        {text: 'Layout <span class="VPBadge tip">2024.1.2</span>', link: 'layout'},
                    ]
                },
                {
                    text: 'View Components',
                    base: '/components/',
                    collapsed: false,
                    items: [
                        {text: 'Modal <span class="VPBadge tip">2024.1.1</span>', link: 'modal'},
                        {text: 'Tooltip <span class="VPBadge tip">2024.1.1</span>', link: 'tooltip'},
                        {text: 'Code <span class="VPBadge tip">2024.1.1</span>', link: 'code'},
                        {text: 'Alert <span class="VPBadge tip">2024.1.2</span>', link: 'alert'},
                        {text: 'Progress <span class="VPBadge tip">2024.1.2</span>', link: 'progress'},
                        {text: 'Drawer <span class="VPBadge tip">2024.1.2</span>', link: 'drawer'},
                        {text: 'Message <span class="VPBadge tip">2024.1.2</span>', link: 'message'},
                    ]
                },
                {
                    text: 'Form Components',
                    base: '/components/',
                    collapsed: false,
                    items: [
                        {text: 'Input <span class="VPBadge tip">2024.1.1</span>', link: 'input'},
                        {text: 'Switch <span class="VPBadge tip">2024.1.2</span>', link: 'switch'},
                        {text: 'Radio <span class="VPBadge tip">2024.1.2</span>', link: 'radio'},
                        {text: 'Checkbox <span class="VPBadge tip">2024.1.2</span>', link: 'checkbox'},
                        {text: 'Select <span class="VPBadge tip">2024.1.2</span>', link: 'select'},
                        {text: 'Rate <span class="VPBadge tip">2024.1.2</span>', link: 'rate'},
                        {text: 'Table <span class="VPBadge tip">2024.1.2</span>', link: 'table'},
                    ]
                }, {
                    text: 'Navigation Components',
                    base: '/components/',
                    collapsed: false,
                    items: [
                        {text: 'Tab <span class="VPBadge tip">2024.1.2</span>', link: 'tab'},
                        {text: 'Page <span class="VPBadge tip">2024.1.2</span>', link: 'page'},
                        {text: 'Menu <span class="VPBadge tip">2024.1.2</span>', link: 'menu'},
                        {text: 'Badge <span class="VPBadge tip">2024.1.2</span>', link: 'badge'},
                    ]
                }
            ]
        }
    }
}
