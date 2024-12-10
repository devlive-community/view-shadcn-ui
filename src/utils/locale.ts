import {ref, watch} from 'vue'
import zhCN from '@/locales/zh-CN'
import en from '@/locales/en-US'

export type Language = string

// 创建一个规范化的消息映射
// Create a normalized message map
const messages = {
    'en': en,
    'zh-cn': zhCN
} as Record<string, any>

const currentLocale = ref<Language>('en')

// 规范化语言代码的函数
// Normalize locale code
// 例如 'zh-CN' -> 'zh-cn'
// Example 'zh-cn' -> 'zh-cn'
const normalizeLocale = (locale: string): string => {
    return locale.replace(/\s+/g, '').toLowerCase()
}

// 添加新语言包
// Add new language package
export const addLocale = (locale: string, messagePackage: Record<string, any>) => {
    const normalizedLocale = normalizeLocale(locale)
    messages[normalizedLocale] = messagePackage
}

// 检查语言包是否存在
// Check if language package exists
export const hasLocale = (locale: string): boolean => {
    const normalizedLocale = normalizeLocale(locale)
    return !!messages[normalizedLocale]
}

// 获取所有可用的语言列表
// Get list of all available languages
export const getAvailableLocales = (): string[] => {
    return Object.keys(messages)
}

export const t = (key: string, params?: Record<string, any>) => {
    const keys = key.split('.')

    // 使用规范化的语言代码
    // Use normalized locale code
    const normalizedLocale = normalizeLocale(currentLocale.value)
    let result = messages[normalizedLocale]

    // 如果找不到对应的语言包，使用英语作为后备
    // If the corresponding language package is not found, use English as a backup
    if (!result) {
        result = messages['en']
    }

    for (const k of keys) {
        if (!result || result[k] === undefined) {
            result = messages['en']
            break
        }
        result = result[k]
    }

    const text = String(result)

    if (params) {
        return text.replace(/\{\{\s*(\w+)\s*\}\}/g, (match: string, key: string) => {
            return params[key] !== undefined ? params[key] : match
        })
    }

    return result
}

export const setLocale = (locale: Language) => {
    currentLocale.value = locale
}

export const getLocale = () => currentLocale.value

// 添加监听器在语言改变时触发回调
// Add listener when language changes
export const onLocaleChange = (callback: (locale: Language) => void) => {
    watch(currentLocale, (newLocale) => {
        callback(newLocale)
    })
}
