import {ref, watch} from 'vue'
import zhCN from '@/locales/zh-CN'
import en from '@/locales/en-US'

export type Language = 'en' | 'zh-CN'

export const messages = {
    en,
    'zh-CN': zhCN
}

const currentLocale = ref<Language>('en')

export const t = (key: string, params?: Record<string, any>) => {
    const keys = key.split('.')
    let result = messages[currentLocale.value]

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
