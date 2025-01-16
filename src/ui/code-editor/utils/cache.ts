export interface CacheItem
{
    timestamp: number;
    data: any;
    key: string;
}

export class SuggestionCache
{
    private cache: Map<string, CacheItem> = new Map()
    private readonly cacheTime: number

    constructor(cacheTime: number)
    {
        this.cacheTime = cacheTime
    }

    // 生成缓存键
    private generateKey(url: string, body: any): string
    {
        return `${ url }:${ JSON.stringify(body) }`
    }

    // 设置缓存
    set(url: string, body: any, data: any)
    {
        const key = this.generateKey(url, body)
        this.cache.set(key, {
            timestamp: Date.now(),
            data,
            key
        })
    }

    // 获取缓存
    get(url: string, body: any): any | null
    {
        const key = this.generateKey(url, body)
        const item = this.cache.get(key)

        if (!item) {
            return null
        }

        // 检查缓存是否过期
        if (Date.now() - item.timestamp > this.cacheTime) {
            this.cache.delete(key)
            return null
        }

        return item.data
    }

    // 清除过期缓存
    cleanup()
    {
        const now = Date.now()
        for (const [key, item] of this.cache.entries()) {
            if (now - item.timestamp > this.cacheTime) {
                this.cache.delete(key)
            }
        }
    }
}