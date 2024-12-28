import { parse } from '@vue/compiler-sfc'
import { computed, defineComponent, onMounted, reactive, ref, version as vueVersion, watch } from 'vue'

function escapeHtml(str)
{
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
}

export async function compileVueCode(code)
{
    try {
        const { descriptor, errors } = parse(code)

        if (errors && errors.length > 0) {
            const error = errors[0]
            const finalErrors = [] as any[]
            finalErrors.push(`Template parsing error at line ${ (error as any).loc.start.line }`)
            const message = `${ (error as any).loc.start.line }: ${ escapeHtml(code.split('\n')[(error as any).loc.start.line - 1]) }`
            finalErrors.push(message)
            finalErrors.push('Error: Invalid template structure or syntax.')
            throw new Error(finalErrors.join('\n'))
        }

        // Check for empty or missing template
        if (!descriptor.template || descriptor.template.content.trim() === '') {
            throw new Error(`Template parsing error: Missing or empty template`)
        }

        let setupVariables = {}
        let methods = {}

        if (descriptor.scriptSetup) {
            const setupContent = descriptor.scriptSetup.content

            // 处理导入语句
            // Handle import statements
            const importRegex = /import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/g
            let importMatch
            while ((importMatch = importRegex.exec(setupContent)) !== null) {
                const [, imports] = importMatch
                const importNames = imports.split(',').map(name => {
                    const parts = name.trim().split(' as ')
                    return parts[parts.length - 1].trim()
                })

                importNames.forEach(name => {
                    if (name === 'version') {
                        setupVariables['vueVersion'] = vueVersion
                    }
                    if (['ref', 'reactive', 'computed', 'watch', 'onMounted'].includes(name)) {
                        setupVariables[name] = eval(name)
                    }
                })
            }

            // 处理 ref 定义
            // Handle ref definitions
            const refRegex = /const\s+(\w+)\s*=\s*ref\((.*?)\)/g
            let refMatch
            while ((refMatch = refRegex.exec(setupContent)) !== null) {
                const [, varName, initialValue] = refMatch
                let parsedValue = initialValue.trim()
                if (parsedValue.startsWith('\'') || parsedValue.startsWith('"')) {
                    parsedValue = parsedValue.slice(1, -1)
                }
                else if (parsedValue === 'true') {
                    parsedValue = true
                }
                else if (parsedValue === 'false') {
                    parsedValue = false
                }
                else if (!isNaN(parsedValue)) {
                    parsedValue = Number(parsedValue)
                }
                setupVariables[varName] = ref(parsedValue)
            }

            // 处理 reactive 定义
            // Handle reactive definitions
            const reactiveRegex = /const\s+(\w+)\s*=\s*reactive\((.*?)\)/g
            let reactiveMatch
            while ((reactiveMatch = reactiveRegex.exec(setupContent)) !== null) {
                const [, varName, initialValue] = reactiveMatch
                try {
                    const parsedValue = eval(`(${ initialValue })`)
                    setupVariables[varName] = reactive(parsedValue)
                }
                catch (e) {
                    console.error('Error parsing reactive value:', e)
                }
            }

            // 处理 computed 属性
            // Handle computed properties
            const computedRegex = /const\s+(\w+)\s*=\s*computed\s*\(\s*\(\)\s*=>\s*{([^}]*)}\)/g
            let computedMatch
            while ((computedMatch = computedRegex.exec(setupContent)) !== null) {
                const [, varName, computedBody] = computedMatch
                setupVariables[varName] = computed(() => {
                    // 使变量在 computed 中可用
                    const setupVariablesCopy = { ...setupVariables }
                    Object.keys(setupVariablesCopy).forEach(key => {
                        if (setupVariablesCopy[key]?.value !== undefined) {
                            setupVariablesCopy[`${ key }Value`] = setupVariablesCopy[key].value
                        }
                    })
                    return new Function(...Object.keys(setupVariablesCopy), `return ${ computedBody }`)(...Object.values(setupVariablesCopy))
                })
            }

            // 处理方法定义
            // Handle method definitions
            const methodRegex = /const\s+(\w+)\s*=\s*(?:async\s*)?\(([^)]*)\)\s*=>\s*{([^}]*)}/g
            let methodMatch
            while ((methodMatch = methodRegex.exec(setupContent)) !== null) {
                const [, methodName, params, methodBody] = methodMatch
                if (methodName) {
                    const paramList = params
                        .split(',')
                        .map(p => p.trim())
                        .filter(p => p)

                    // 创建一个闭包来保持对 setupVariables 的访问
                    // Create a closure to keep access to setupVariables
                    methods[methodName] = (...args) => {
                        // 使变量在方法中可用
                        // Make variables available in the method
                        const setupVariablesCopy = { ...setupVariables }
                        Object.keys(setupVariablesCopy).forEach(key => {
                            if (setupVariablesCopy[key]?.value !== undefined) {
                                setupVariablesCopy[`${ key }Value`] = setupVariablesCopy[key].value
                            }
                        })
                        const fn = new Function(...paramList, `with(this) { ${ methodBody } }`)
                        return fn.apply(setupVariablesCopy, args)
                    }
                }
            }

            // 处理 watch
            // Handle watch
            const watchRegex = /watch\(\s*([^,]+),\s*\(([^)]*)\)\s*=>\s*{([^}]*)}\)/g
            let watchMatch
            while ((watchMatch = watchRegex.exec(setupContent)) !== null) {
                const [, watchedVar, params, watchBody] = watchMatch
                if (setupVariables[watchedVar]) {
                    watch(setupVariables[watchedVar], new Function(...params.split(','), watchBody) as any)
                }
            }

            // 处理 onMounted
            // Handle onMounted
            const mountedRegex = /onMounted\(\s*\(\)\s*=>\s*{([^}]*)}\)/g
            let mountedMatch
            while ((mountedMatch = mountedRegex.exec(setupContent)) !== null) {
                const [, mountedBody] = mountedMatch
                onMounted(() => {
                    const fn = new Function(`with(this) { ${ mountedBody } }`)
                    fn.apply(setupVariables)
                })
            }
        }

        return defineComponent({
            name: 'PlaygroundPreview',
            template: descriptor.template.content,
            setup()
            {
                return {
                    ...setupVariables,
                    ...methods,
                    vueVersion
                }
            }
        })
    }
    catch (error) {
        throw new Error(`Compilation error: ${ error.message }`)
    }
}