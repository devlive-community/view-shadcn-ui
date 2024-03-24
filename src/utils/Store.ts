const LANGUAGE = 'language'

export class StoreUtils
{
    static setString(key: string, value: any): void
    {
        localStorage.setItem(key, value)
    }

    static getString(key: string): string
    {
        return localStorage.getItem(key) as string
    }

    static setLanguage(language: string): void
    {
        this.setString(LANGUAGE, language)
    }

    static getLanguage(): string
    {
        return this.getString(LANGUAGE)
    }
}