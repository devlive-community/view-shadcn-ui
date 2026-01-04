module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2020: true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'never'],

        '@typescript-eslint/no-explicit-any': 'off',

        'vue/attributes-order': [
            'error',
            {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    'UNIQUE',
                    'SLOT',
                    'TWO_WAY_BINDING',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT'
                ],
                alphabetical: false
            }
        ],

        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 4
                },
                multiline: {
                    max: 1
                }
            }
        ]
    }
}