import { LoggerPattern } from '@/utils/logger.ts'

export interface LoggerProps
{
    items: Array<string>,
    highlightConfig?: { [key: string]: string },
    height?: string | number,
    toolbar?: boolean
    caseSensitive?: boolean,
    customPatterns?: LoggerPattern
}
