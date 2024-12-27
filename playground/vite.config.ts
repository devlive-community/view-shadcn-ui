import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    runtimeCompiler: true
                }
            }
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