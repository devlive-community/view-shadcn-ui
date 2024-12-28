import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import monacoEditorPlugin from 'vite-plugin-monaco-editor'

export default defineConfig({
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()]
        }
    },
    plugins: [
        vue(),
        monacoEditorPlugin({
            customWorkers: [
                {
                    label: 'json',
                    entry: 'monaco-editor/esm/vs/language/json/json.worker'
                },
                {
                    label: 'css',
                    entry: 'monaco-editor/esm/vs/language/css/css.worker'
                },
                {
                    label: 'html',
                    entry: 'monaco-editor/esm/vs/language/html/html.worker'
                },
                {
                    label: 'typescript',
                    entry: 'monaco-editor/esm/vs/language/typescript/ts.worker'
                },
                {
                    label: 'editor',
                    entry: 'monaco-editor/esm/vs/editor/editor.worker'
                }
            ],
            publicPath: 'monaco-editor/min/worker'
        })
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
            external: ['vue', '../dist/view-shadcn-ui.min.css', 'monaco-editor'],
            output: {
                globals: {
                    vue: 'Vue',
                    'monaco-editor': 'monaco'
                }
            }
        }
    }
})