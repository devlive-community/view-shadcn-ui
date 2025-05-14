export interface TimeProps
{
    /**
     * Format string for displaying time (uses Day.js format)
     * 显示时间的格式字符串（使用 Day.js 格式）
     *
     * Examples:
     * - 'HH:mm:ss' -> 23:59:59
     * - 'YYYY-MM-DD' -> 2025-05-13
     * - 'hh:mm A' -> 11:59 PM
     */
    format?: string

    /**
     * Timezone for time display (IANA timezone string)
     * 时间显示的时区（IANA 时区字符串）
     *
     * Examples: 'America/New_York', 'Europe/London', 'Asia/Tokyo'
     */
    timezone?: string

    /**
     * Show relative time instead of formatted time
     * 显示相对时间而不是格式化时间
     *
     * Examples: '2 minutes ago', 'in 3 hours'
     */
    relative?: boolean

    /**
     * Reference time for relative time display
     * 相对时间显示的参考时间
     *
     * Default is current time
     */
    referenceTime?: Date | string | number

    /**
     * Update interval in milliseconds (defaults to 1000)
     * 更新间隔（毫秒），默认为 1000
     */
    interval?: number
}

export type TimeEmits = {
    /**
     * Emitted when time changes (every second)
     * 当时间变化时触发（每秒）
     */
    (e: 'on-change', time: Date): void
}