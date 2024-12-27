import { compileTemplate, parse } from '@vue/compiler-sfc'
import { defineComponent } from 'vue'

export async function compileVueCode(code)
{
    try {
        const { descriptor } = parse(code)

        if (!descriptor.template) {
            throw new Error('Template is required')
        }

        let methods = {}
        if (descriptor.scriptSetup) {
            const setupContent = descriptor.scriptSetup.content

            // 匹配方法定义和参数
            // Matching method definitions and parameters
            const methodRegex = /const\s+(\w+)\s*=\s*\(([^)]*)\)\s*=>\s*{([^}]*)}/g
            let match

            while ((match = methodRegex.exec(setupContent)) !== null) {
                const [fullMatch, methodName, params, methodBody] = match
                if (methodName) {
                    // 转换参数字符串为参数数组
                    // Convert parameter string to parameter array
                    const paramList = params
                        .split(',')
                        .map(p => p.trim())
                        .filter(p => p)

                    methods[methodName] = new Function(...paramList, methodBody.trim())
                }
            }
        }

        compileTemplate({
            source: descriptor.template.content,
            id: 'playground'
        } as any)

        return defineComponent({
            name: 'PlaygroundPreview',
            template: descriptor.template.content,
            setup()
            {
                return methods
            }
        })
    }
    catch (error) {
        throw new Error(`Compilation error: ${ error.message }`)
    }
}