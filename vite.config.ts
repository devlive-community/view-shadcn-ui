import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import monacoEditorPlugin from 'vite-plugin-monaco-editor'

export default defineConfig({
    // base: '/devlive-community/shadcn-ui-vue-admin',
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()]
        }
    },
    plugins: [
        vue(),
        monacoEditorPlugin({})
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    build: {
        lib: {
            entry: './packages/index.ts',
            name: 'ViewShadcnUI',
            fileName: (format) => `view-shadcn-ui.${ format }.ts`,
            formats: ['es', 'umd']
        },
        rollupOptions: {
            external: ['vue', '../dist/view-shadcn-ui.min.css'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
