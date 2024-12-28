import { Plugin } from 'vite'
import fs from 'fs'
import path from 'path'

interface ExampleFile
{
    label: string
    content: string
    key: string
    group?: string
}

function scanExamples(dir: string): ExampleFile[]
{
    const examples: ExampleFile[] = []
    const entries = fs.readdirSync(dir)

    // 先处理根目录下的文件
    // First, process the files in the root directory
    for (const entry of entries) {
        const entryPath = path.join(dir, entry)
        const stats = fs.statSync(entryPath)

        if (stats.isFile() && entry.endsWith('.vue')) {
            const content = fs.readFileSync(entryPath, 'utf-8')
            const fileName = path.basename(entry, '.vue')

            examples.push({
                label: fileName.charAt(0).toUpperCase() + fileName.slice(1),
                content,
                key: fileName
            })
        }
    }

    // 再处理子目录文件
    // Then, process the files in the subdirectories
    for (const entry of entries) {
        const entryPath = path.join(dir, entry)
        const stats = fs.statSync(entryPath)

        if (stats.isDirectory()) {
            const files = fs.readdirSync(entryPath)
            const groupName = entry.charAt(0).toUpperCase() + entry.slice(1)

            // 对子目录中的文件进行排序
            // Sort the files in the subdirectory
            for (const file of files.sort()) {
                if (file.endsWith('.vue')) {
                    const filePath = path.join(entryPath, file)
                    const content = fs.readFileSync(filePath, 'utf-8')
                    const fileName = path.basename(file, '.vue')

                    examples.push({
                        label: fileName.charAt(0).toUpperCase() + fileName.slice(1),
                        content,
                        key: `${ entry }-${ fileName }`,
                        group: groupName
                    })
                }
            }
        }
    }

    return examples
}

export default function examplePlugin(options = { dir: 'playground/src/example' }): Plugin {
    const virtualModuleId = 'virtual:examples'
    const resolvedVirtualModuleId = '\0' + virtualModuleId

    return {
        name: 'vite-plugin-examples',

        resolveId(id)
        {
            if (id === virtualModuleId) {
                return resolvedVirtualModuleId
            }
        },

        load(id)
        {
            if (id === resolvedVirtualModuleId) {
                const examplesDir = path.resolve(process.cwd(), options.dir)
                const examples = scanExamples(examplesDir)

                // 返回一个虚拟模块，内容是示例文件的数组
                // 这样在其他地方可以使用 import examples from 'virtual:examples'
                return `export default ${ JSON.stringify(examples) }`
            }
        },

        // 添加 HMR 支持
        // Add HMR support
        handleHotUpdate({ file, server })
        {
            // 如果更新的文件在示例目录中
            // If the updated file is in the examples directory
            if (file.includes(options.dir) && file.endsWith('.vue')) {
                // 通知客户端重新加载虚拟模块
                // Notify the client to reload the virtual module
                const mod = server.moduleGraph.getModuleById(resolvedVirtualModuleId)
                if (mod) {
                    server.moduleGraph.invalidateModule(mod)
                    return [mod]
                }
            }
        }
    }
}