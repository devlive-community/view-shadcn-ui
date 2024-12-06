export interface LoggerProps
{
    items: Array<string>,
    highlightConfig?: { [key: string]: string },
    height?: string | number,
    toolbar?: boolean
    caseSensitive?: boolean
}
