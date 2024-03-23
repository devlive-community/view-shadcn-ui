import { createI18n } from 'vue-i18n'
import messages from '@/i18n/langs'

const i18n = createI18n({
    fallbackLocale: 'en',
    globalInjection: true,
    // Fixed ==> SyntaxError: Not available in legacy mode
    legacy: false,
    // [intlify] Fall back to translate 'hello' key with 'en' locale.
    silentFallbackWarn: true,
    fallbackWarn: false,
    // [intlify] Not found 'hello' key in 'en' locale messages.
    silentTranslationWarn: true,
    missingWarn: false,
    locale: 'en',
    messages
})

export default i18n
