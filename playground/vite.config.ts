import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import examplePlugin from './vite-example-plugin'

export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {}
            }
        }),
        examplePlugin({
            dir: 'src/example'
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            'vue': 'vue/dist/vue.esm-bundler.js'
        }
    },
    optimizeDeps: {
        include: [
            'vue',
            'view-shadcn-ui',
            '@vue/compiler-sfc',
            '@vue/compiler-dom',
            '@vue/compiler-core'
        ]
    },
    build: {
        commonjsOptions: {
            include: [/node_modules/]
        }
    }
})