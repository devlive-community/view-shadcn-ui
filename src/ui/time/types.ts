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
}

export type TimeEmits = {
    /**
     * Emitted when time changes (every second)
     * 当时间变化时触发（每秒）
     */
    (e: 'on-change', time: Date): void
}