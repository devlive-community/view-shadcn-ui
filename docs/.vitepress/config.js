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
                text: "Guide",
                link: "/guide/installation",
                activeMatch: '/guide/'
            },
            {
                text: 'Components (v2024.1.2)',
                items: [
                    {
                        text: '2024.1.2',
                        link: '/components/2024.1.2/release-notes',
                        activeMatch: '/components/2024.1.2/'
                    },
                    {
                        text: '2024.1.1',
                        link: '/components/2024.1.1/release-notes',
                        activeMatch: '/components/2024.1.1/'
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
            '/components/2024.1.2/': [
                {
                    text: 'Release Notes',
                    base: '/components/2024.1.2/',
                    link: 'release-notes',
                },
                {
                    text: 'Base Components',
                    base: '/components/2024.1.1/',
                    collapsed: false,
                    items: [
                        {text: 'Button', link: 'button'},
                        {text: 'Icon', link: 'icon'},
                        {text: 'Copy', link: 'copy'},
                    ]
                },
                {
                    text: 'Layout Components',
                    collapsed: false,
                    base: '/components/2024.1.2/',
                    items: [
                        {text: 'Card', link: '../2024.1.1/card'},
                        {text: 'Row / Col', link: 'row-col'},
                        {text: 'Divider', link: 'divider'},
                        {text: 'Ellipsis', link: 'ellipsis'},
                        {text: 'Avatar', link: 'avatar'},
                        {text: 'Badge', link: 'badge'},
                    ]
                },
                {
                    text: 'View Components',
                    base: '/components/2024.1.1/',
                    collapsed: false,
                    items: [
                        {text: 'Modal', link: 'modal'},
                        {text: 'Tooltip', link: 'tooltip'},
                        {text: 'Code', link: 'code'},
                    ]
                },
                {
                    text: 'Form Components',
                    base: '/components/2024.1.1/',
                    collapsed: false,
                    items: [
                        {text: 'Input', link: 'input'},
                    ]
                }
            ],
            '/components/2024.1.1/': [
                {
                    text: 'Release Notes',
                    base: '/components/2024.1.1/',
                    link: 'release-notes',
                },
                {
                    text: 'Base Components',
                    base: '/components/2024.1.1/',
                    collapsed: false,
                    items: [
                        {text: 'Button', link: 'button'},
                        {text: 'Icon', link: 'icon'},
                        {text: 'Copy', link: 'copy'},
                    ]
                },
                {
                    text: 'Layout Components',
                    base: '/components/2024.1.1/',
                    collapsed: false,
                    items: [
                        {text: 'Card', link: 'card'}
                    ]
                },
                {
                    text: 'View Components',
                    base: '/components/2024.1.1/',
                    collapsed: false,
                    items: [
                        {text: 'Modal', link: 'modal'},
                        {text: 'Tooltip', link: 'tooltip'},
                        {text: 'Code', link: 'code'},
                    ]
                },
                {
                    text: 'Form Components',
                    base: '/components/2024.1.1/',
                    collapsed: false,
                    items: [
                        {text: 'Input', link: 'input'},
                    ]
                }
            ]
        }
    }
}
