export default {
    title: 'View Shadcn UI',
    description: 'A component library built on Shadcn UI and Tailwind CSS.',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: "Guide", link: "/guide/installation"},
        ],
        socialLinks: [
            {icon: "github", link: "https://github.com/devlive-community/view-shadcn-ui"},
        ],
        sidebar: {
            "/guide/": {
                text: "Guide",
                items: [
                    {text: "Installation", link: "/guide/installation"},
                    {text: "Quick Start", link: "/guide/quickstart"},
                ]
            }
        }
    }
}

