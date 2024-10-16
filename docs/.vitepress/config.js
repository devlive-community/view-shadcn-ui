export default {
    title: 'View Shadcn UI',
    description: 'A component library built on Shadcn UI and Tailwind CSS.',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {
                text: "Guide",
                link: "/guide/installation",
                activeMatch: '/guide/'
            },
            {
                text: 'Components',
                items: [
                    {
                        text: '2024.1.1',
                        link: '/components/2024.1.1/button',
                        activeMatch: '/components/2024.1.1/'
                    },
                ]
            }
        ],
        socialLinks: [
            {icon: "github", link: "https://github.com/devlive-community/view-shadcn-ui"},
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
            '/components/2024.1.1/': [
                {
                    text: 'Base Components',
                    base: '/components/2024.1.1/',
                    collapsed: false,
                    items: [
                        {text: 'Button', link: 'button'}
                    ]
                },
                {
                    text: 'Layout Components',
                    base: '/components/2024.1.1/',
                    collapsed: false,
                    items: [
                        {text: 'Card', link: 'card'}
                    ]
                }
            ]
        }
    }
}
