import zhCN from '@/locales/zh-CN'
import en from '@/locales/en-US'

export type Language = 'en' | 'zh-CN'

export const messages = {
    en,
    'zh-CN': zhCN
}

let currentLocale: Language = 'en'

export const t = (key: string, params?: Record<string, any>) => {
    const keys = key.split('.')
    let result = messages[currentLocale]

    for (const k of keys) {
        if (!result || result[k] === undefined) {
            result = messages['en']
            break
        }
        result = result[k]
    }

    const text = String(result)

    // 如果有参数需要替换
    // If there are parameters to be replaced
    if (params) {
        return text.replace(/\{\{\s*(\w+)\s*\}\}/g, (match: string, key: string) => {
            return params[key] !== undefined ? params[key] : match
        })
    }

    return result
}

export const setLocale = (locale: Language) => {
    currentLocale = locale
}

export const getLocale = () => currentLocale