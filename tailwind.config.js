const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    safelist: [
        "dark",
        ...[...Array(10).keys()]
            .flatMap(i => [`w-[${i * 10}%]`, `min-w-[${i * 10}%]`, `max-w-[${i * 10}%]`, `h-[${i * 10}%]`, `min-h-[${i * 10}%]`, `max-h-[${i * 10}%]`]),
    ],
    prefix: "",

    content: [
        './pages/**/*.{ts,tsx,vue}',
        './components/**/*.{ts,tsx,vue}',
        './app/**/*.{ts,tsx,vue}',
        './src/**/*.{ts,tsx,vue}',
    ],

    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                xl: "calc(var(--radius) + 4px)",
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: {height: 0},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: 0},
                },
                "collapsible-down": {
                    from: {height: 0},
                    to: {height: 'var(--radix-collapsible-content-height)'},
                },
                "collapsible-up": {
                    from: {height: 'var(--radix-collapsible-content-height)'},
                    to: {height: 0},
                },
                'slide-down': {
                    '0%': {transform: 'translate(-50%, -100%)', opacity: '0'},
                    '100%': {transform: 'translate(-50%, 0)', opacity: '1'}
                },
                'slide-up': {
                    '0%': {transform: 'translate(-50%, 0)', opacity: '1'},
                    '100%': {transform: 'translate(-50%, -100%)', opacity: '0'}
                },
                'marquee': {
                    '0%': {transform: 'translateX(100%)'},
                    '100%': {transform: 'translateX(-100%)'}
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "collapsible-down": "collapsible-down 0.2s ease-in-out",
                "collapsible-up": "collapsible-up 0.2s ease-in-out",
                'slide-down': 'slide-down 0.3s ease-out forwards',
                'slide-up': 'slide-up 0.3s ease-in forwards',
                'marquee': 'marquee linear'
            },
            boxShadow: {
                'left-side': 'inset -8px 0 6px -6px rgba(0, 0, 0, 0.15)',
                'right-side': 'inset 8px 0 6px -6px rgba(0, 0, 0, 0.15)',
            }
        },
    },
    plugins: [animate],
}
