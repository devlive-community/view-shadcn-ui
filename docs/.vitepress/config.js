export default {
    title: 'View Shadcn UI',
    description: 'A component library built on Shadcn UI and Tailwind CSS.',

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
                    },
                    {
                        text: 'CONTRIBUTING',
                        external: true,
                        link: 'https://github.com/devlive-community/view-shadcn-ui/blob/dev/CONTRIBUTING.md',
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
                (() => {
                    const items = [
                        {text: 'Button <span class="VPBadge tip">2024.1.1</span>', link: 'button'},
                        {text: 'Icon <span class="VPBadge tip">2024.1.1</span>', link: 'icon'},
                        {text: 'Copy <span class="VPBadge tip">2024.1.1</span>', link: 'copy'}
                    ]
                    return {
                        text: `Base [ ${items.length} ]`,
                        base: '/components/',
                        collapsed: false,
                        items: items
                    }
                })(),
                (() => {
                    const items = [
                        {text: 'Card <span class="VPBadge tip">2024.1.1</span>', link: 'card'},
                        {text: 'Row / Col <span class="VPBadge tip">2024.1.2</span>', link: 'row-col'},
                        {text: 'Divider <span class="VPBadge tip">2024.1.2</span>', link: 'divider'},
                        {text: 'Ellipsis <span class="VPBadge tip">2024.1.2</span>', link: 'ellipsis'},
                        {text: 'Avatar <span class="VPBadge tip">2024.1.2</span>', link: 'avatar'},
                        {text: 'Space <span class="VPBadge tip">2024.1.2</span>', link: 'space'},
                        {text: 'Skeleton <span class="VPBadge tip">2024.1.2</span>', link: 'skeleton'},
                        {text: 'Layout <span class="VPBadge tip">2024.1.2</span>', link: 'layout'},
                    ]
                    return {
                        text: `Layout [ ${items.length} ]`,
                        base: '/components/',
                        collapsed: false,
                        items: items
                    }
                })(),
                (() => {
                    const items = [
                        {text: 'Modal <span class="VPBadge tip">2024.1.1</span>', link: 'modal'},
                        {text: 'Tooltip <span class="VPBadge tip">2024.1.1</span>', link: 'tooltip'},
                        {text: 'Code <span class="VPBadge tip">2024.1.1</span>', link: 'code'},
                        {text: 'Alert <span class="VPBadge tip">2024.1.2</span>', link: 'alert'},
                        {text: 'Progress <span class="VPBadge tip">2024.1.2</span>', link: 'progress'},
                        {text: 'Drawer <span class="VPBadge tip">2024.1.2</span>', link: 'drawer'},
                        {text: 'Message <span class="VPBadge tip">2024.1.2</span>', link: 'message'},
                        {text: 'Spin <span class="VPBadge tip">2024.1.3</span>', link: 'spin'},
                        {text: 'Timeline <span class="VPBadge tip">2024.1.3</span>', link: 'timeline'},
                        {text: 'Trend <span class="VPBadge tip">2024.1.3</span>', link: 'trend'},
                        {text: 'Exception <span class="VPBadge tip">2024.1.3</span>', link: 'exception'},
                    ]
                    return {
                        text: `View [ ${items.length} ]`,
                        base: '/components/',
                        collapsed: false,
                        items: items
                    };
                })(),
                (() => {
                    const items = [
                        {text: 'Input <span class="VPBadge tip">2024.1.1</span>', link: 'input'},
                        {text: 'Switch <span class="VPBadge tip">2024.1.2</span>', link: 'switch'},
                        {text: 'Radio <span class="VPBadge tip">2024.1.2</span>', link: 'radio'},
                        {text: 'Checkbox <span class="VPBadge tip">2024.1.2</span>', link: 'checkbox'},
                        {text: 'Select <span class="VPBadge tip">2024.1.2</span>', link: 'select'},
                        {text: 'Rate <span class="VPBadge tip">2024.1.2</span>', link: 'rate'},
                        {text: 'Table <span class="VPBadge tip">2024.1.2</span>', link: 'table'},
                        {text: 'Form <span class="VPBadge tip">2024.1.3</span>', link: 'form'},
                    ]
                    return {
                        text: `Form [ ${items.length} ]`,
                        base: '/components/',
                        collapsed: false,
                        items: items
                    };
                })(),
                (() => {
                    const items = [
                        {text: 'Tabs <span class="VPBadge tip">2024.1.2</span>', link: 'tabs'},
                        {text: 'Pagination <span class="VPBadge tip">2024.1.2</span>', link: 'pagination'},
                        {text: 'Menu <span class="VPBadge tip">2024.1.2</span>', link: 'menu'},
                        {text: 'Badge <span class="VPBadge tip">2024.1.2</span>', link: 'badge'},
                        {text: 'Breadcrumb <span class="VPBadge tip">2024.1.3</span>', link: 'breadcrumb'},
                        {text: 'Slider <span class="VPBadge tip">2024.1.3</span>', link: 'slider'},
                    ]
                    return {
                        text: `Navigation [ ${items.length} ]`,
                        base: '/components/',
                        collapsed: false,
                        items: items
                    };
                })(),
            ]
        }
    }
}
