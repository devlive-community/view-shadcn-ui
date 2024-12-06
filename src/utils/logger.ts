interface LoggerPattern
{
    timestamp?: RegExp[];
    level?: RegExp[];
    thread?: RegExp[];
    logger?: RegExp[];
    file?: RegExp[];
}

interface LoggerContent
{
    timestamp: string;
    level: string;
    thread: string;
    logger: string;
    file: string;
    message: string;
}

interface LoggerParserOptions
{
    // 时区，默认 UTC
    // Timezone, default UTC
    timezone?: string;

    // 日志分隔符
    // Log separator
    separator?: string | RegExp;

    // 日志是否为多行
    // Whether the log is multi-line
    multiline?: boolean;

    // 是否解析堆栈
    // Whether to parse the stack
    stackTrace?: boolean;

    // 是否格式化 JSON
    // Whether to format JSON
    jsonFormat?: boolean;

    // 是否保留原始时间戳
    // Whether to keep the original timestamp
    keepOriginalTimestamp?: boolean;

    // 是否填充时间戳
    // Whether to fill the timestamp
    autoFillTimestamp?: boolean;
}

const DEFAULT_PATTERNS: LoggerPattern = {
    timestamp: [
        /^(\d{4}-\d{2}-\d{2}[\sT]\d{2}:\d{2}:\d{2}(?:[.,]\d{3})?(?:Z)?)/,
        /(\d{4}[-\/.]\d{2}[-\/.]\d{2}\s+\d{2}:\d{2}:\d{2}(?:[.,]\d{3})?)/,
        /(\d{2}[-:.]\d{2}[-:.]\d{2}(?:[.,]\d{3})?)/,
        /(\w{3}\s+\d{1,2}\s+(?:\d{4}\s+)?\d{2}:\d{2}:\d{2})/,
        /(\d{4}年\d{2}月\d{2}日\s*\d{2}:\d{2}:\d{2})/,
        /(\d{13,14})/,
        /@timestamp\[([^\]]+)\]/,
        /"@timestamp":"([^"]+)"/,
        /(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?(?:Z|[+-]\d{2}:?\d{2}))/,
        /\b(\d{10})\b/
    ],
    level: [
        /\b(TRACE|DEBUG|INFO|NOTICE|WARN(?:ING)?|ERROR|CRITICAL|ALERT|FATAL|EMERGENCY|EMERG|CRIT|ERR|SEVERE)\b/i,
        /[\[\(<](TRACE|DEBUG|INFO|NOTICE|WARN(?:ING)?|ERROR|CRITICAL|ALERT|FATAL|EMERGENCY|EMERG|CRIT|ERR|SEVERE)[\]\)>]/i,
        /\b(LOG|PRINT|OUTPUT|CUSTOM|VERBOSE|FINE|FINER|FINEST|CONFIG|OFF)\b/i,
        /([!✓✗✘■□▲△▼▽►◄★☆●○])/,
        /@level\[([^\]]+)\]/,
        /"level":"([^"]+)"/,
        /<(\d{1,3})>/
    ],
    thread: [
        /[\[\(](.*?)[\]\)]/,
        /\b(?:thread|process|tid|pid|worker)[:\-]?\s*(\S+)/i,
        /(?:T|Thread|TID)[-#](\d+)\b/i,
        /\b(main|background|worker-\d+|pool-\d+-thread-\d+|async-\d+)\b/i,
        /@thread\[([^\]]+)\]/,
        /PID[:\-]?(\d+)[\s,]*TID[:\-]?(\d+)/i,
        /"thread(?:Name|Id)?":"([^"]+)"/,
        /goroutine\s+(\d+)\s+\[/
    ],
    logger: [
        /(?:[\]\)]|^)\s*([\w.$@\-_]+(?:\.[\w$@\-_]+)*)/,
        /\b((?:[\w-]+\.){2,}[\w-]+)\b/,
        /\bclass\s+([\w.$]+)\b/i,
        /\b((?:\/[\w-]+)+|(?:\\[\w-]+)+)\b/,
        /@logger\[([^\]]+)\]/,
        /\b([\w-]+:[\w-]+(?::[\w-]+)*)\b/,
        /"logger(?:Name)?":"([^"]+)"/,
        /\[([\w-]+\/[\w-]+)\]/
    ],
    file: [
        /\[([^[\]]+\.[a-zA-Z0-9]+(?::\d+)?)\]/,
        /\(([^()]+\.[a-zA-Z0-9]+(?::\d+)?)\)/,
        /(?:at\s+)?([^:\s]+\.[a-zA-Z0-9]+):(\d+)(?::(\d+))?/,
        /(?:\/[\w\-\.]+)+\/([^:\s]+)(?::\d+)?/,
        /@file\[([^\]]+)\]/,
        /\b([\w.-]+):(\d+)(?::(\d+))?\b/,
        /"(?:file|fileName|source)":"([^"]+)"/,
        /(\w+\.go:\d+)/
    ]
}

const DEFAULT_LEVEL_MAP: { [key: string]: string } = {
    'TRACE': 'TRACE',
    'FINEST': 'TRACE',
    'FINER': 'TRACE',
    'FINE': 'DEBUG',
    'DEBUG': 'DEBUG',
    'VERBOSE': 'DEBUG',
    'CONFIG': 'INFO',
    'INFO': 'INFO',
    'NOTICE': 'INFO',
    'LOG': 'INFO',
    'PRINT': 'INFO',
    'OUTPUT': 'INFO',
    'CUSTOM': 'INFO',
    'WARN': 'WARN',
    'WARNING': 'WARN',
    'ERROR': 'ERROR',
    'ERR': 'ERROR',
    'SEVERE': 'ERROR',
    'CRITICAL': 'ERROR',
    'CRIT': 'ERROR',
    'ALERT': 'ERROR',
    'FATAL': 'FATAL',
    'EMERGENCY': 'FATAL',
    'EMERG': 'FATAL',
    'OFF': 'OFF'
}

class LoggerParser
{
    private patterns: LoggerPattern
    private readonly levelNormalization: { [key: string]: string }
    private options: LoggerParserOptions
    private cache: Map<string, LoggerContent>

    constructor(
        customPatterns?: LoggerPattern,
        customLevelMap?: { [key: string]: string },
        options?: LoggerParserOptions
    )
    {
        this.patterns = {
            timestamp: [
                /^(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2},\d{3})/,
                ...DEFAULT_PATTERNS.timestamp || [],
                ...(customPatterns?.timestamp || [])
            ],
            level: [...(DEFAULT_PATTERNS.level || []), ...(customPatterns?.level || [])],
            thread: [...(DEFAULT_PATTERNS.thread || []), ...(customPatterns?.thread || [])],
            logger: [...(DEFAULT_PATTERNS.logger || []), ...(customPatterns?.logger || [])],
            file: [...(DEFAULT_PATTERNS.file || []), ...(customPatterns?.file || [])]
        }
        this.levelNormalization = { ...DEFAULT_LEVEL_MAP, ...customLevelMap }
        this.options = {
            timezone: 'UTC',
            multiline: false,
            stackTrace: false,
            jsonFormat: false,
            keepOriginalTimestamp: true,
            autoFillTimestamp: false,
            ...options
        }
        this.cache = new Map()
    }

    private findMatch(patterns: RegExp[] | undefined, text: string, removeMatch: boolean = true): { value: string; remaining: string }
    {
        if (!patterns || patterns.length === 0) {
            return { value: '', remaining: text }
        }

        for (const pattern of patterns) {
            const match = text.match(pattern)
            if (match) {
                const value = match[1]
                const remaining = removeMatch ? text.replace(match[0], '') : text
                return { value, remaining }
            }
        }
        return { value: '', remaining: text }
    }

    private cleanText(text: string): string
    {
        return text
            .replace(/[\[\](){}「」【】]/g, '')
            .replace(/\s+/g, ' ')
            .trim()
    }

    private parseJson(line: string): Partial<LoggerContent> | null
    {
        try {
            const json = JSON.parse(line)
            return {
                timestamp: json['@timestamp'] || json.timestamp || json.time,
                level: json.level || json.severity,
                thread: json.thread || json.threadName || json.threadId,
                logger: json.logger || json.loggerName || json.category,
                file: json.file || json.fileName || json.source,
                message: json.message || json.msg || json.text
            }
        }
        catch {
            return null
        }
    }

    private parseStackTrace(lines: string[]): string[]
    {
        const stackTracePattern = /^\s+at\s+.+|^Caused by:.+|^\s*(?:[\w\s.]+Exception|\w+Error):.+/
        const stack: string[] = []

        for (const line of lines) {
            if (stackTracePattern.test(line)) {
                stack.push(line.trim())
            }
        }

        return stack
    }

    private adjustTimezone(timestamp: string): string
    {
        if (this.options.keepOriginalTimestamp) {
            return timestamp
        }

        if (!timestamp) {
            return timestamp
        }

        try {
            const date = new Date(timestamp)
            if (this.options.timezone) {
                return date.toLocaleString('en-US', { timeZone: this.options.timezone })
            }
            return date.toISOString()
        }
        catch {
            return timestamp
        }
    }

    private formatTimestamp(timestamp: string): string
    {
        if (this.options.autoFillTimestamp) {
            if (!timestamp) {
                return new Date().toISOString()
            }
        }

        if (this.options.keepOriginalTimestamp) {
            return timestamp
        }

        const match = timestamp.match(/^(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}),(\d{3})$/)
        if (match) {
            const [_, dateTime, ms] = match
            return this.adjustTimezone(new Date(dateTime.replace(' ', 'T') + '.' + ms + 'Z').toISOString())
        }

        if (/^\d{13,14}$/.test(timestamp)) {
            return this.adjustTimezone(new Date(parseInt(timestamp)).toISOString())
        }

        return this.adjustTimezone(timestamp)
    }

    parse(input: string): LoggerContent
    {
        const cached = this.cache.get(input)
        if (cached) {
            return cached
        }

        let lines = input.split(/\r?\n/)
        let mainLine = lines[0]
        let remainingText = mainLine
        let parsedProps: Partial<LoggerContent> = {}

        if (this.options.jsonFormat) {
            const jsonResult = this.parseJson(mainLine)
            if (jsonResult) {
                parsedProps = jsonResult
            }
        }

        if (!parsedProps.timestamp) {
            const timestampResult = this.findMatch(this.patterns.timestamp, remainingText)
            parsedProps.timestamp = this.adjustTimezone(this.formatTimestamp(timestampResult.value))
            remainingText = timestampResult.remaining

            if (this.options.separator) {
                const separatorString = this.options.separator instanceof RegExp ?
                    this.options.separator.source :
                    this.options.separator

                const parts = remainingText.split(separatorString)
                if (parts.length >= 3) {
                    const [_, level, thread, ...rest] = parts
                    parsedProps.level = level
                    parsedProps.thread = thread
                    remainingText = rest.join(separatorString)
                }
            }

            if (!parsedProps.level) {
                const levelResult = this.findMatch(this.patterns.level, remainingText)
                parsedProps.level = this.levelNormalization[levelResult.value.toUpperCase()] || 'INFO'
                remainingText = levelResult.remaining
            }

            if (!parsedProps.thread) {
                const threadResult = this.findMatch(this.patterns.thread, remainingText)
                parsedProps.thread = threadResult.value || 'main'
                remainingText = threadResult.remaining
            }

            if (!parsedProps.logger) {
                const loggerResult = this.findMatch(this.patterns.logger, remainingText)
                parsedProps.logger = loggerResult.value || 'default'
                remainingText = loggerResult.remaining
            }

            if (!parsedProps.file) {
                const fileResult = this.findMatch(this.patterns.file, remainingText)
                parsedProps.file = fileResult.value
                remainingText = fileResult.remaining
            }

            parsedProps.message = this.cleanText(remainingText)
        }

        if (this.options.stackTrace && lines.length > 1) {
            const stackTrace = this.parseStackTrace(lines.slice(1))
            if (stackTrace.length > 0) {
                parsedProps.message = `${ parsedProps.message }\n${ stackTrace.join('\n') }`
            }
        }

        if (this.options.multiline && lines.length > 1) {
            const additionalLines = lines.slice(1)
                                         .filter(line => !this.findMatch(this.patterns.timestamp, line).value)
                                         .join('\n')
            if (additionalLines) {
                parsedProps.message = `${ parsedProps.message }\n${ additionalLines }`
            }
        }

        const result = {
            timestamp: parsedProps.timestamp || (this.options.autoFillTimestamp ? new Date().toISOString() : ''),
            level: (parsedProps.level || 'INFO').trim(),
            thread: this.cleanText(parsedProps.thread || 'main'),
            logger: this.cleanText(parsedProps.logger || 'default'),
            file: this.cleanText(parsedProps.file || ''),
            message: this.cleanText(parsedProps.message || input)
        }

        if (this.cache.size < 10000) {
            this.cache.set(input, result)
        }

        return result
    }

    parseMultipleLines(lines: string[]): LoggerContent[]
    {
        const results: LoggerContent[] = []
        const batchSize = 1000

        for (let i = 0; i < lines.length; i += batchSize) {
            const batch = lines.slice(i, i + batchSize)
            const batchResults = batch.map(line => this.parse(line))
            results.push(...batchResults)

            if (this.cache.size > 5000) {
                this.cache.clear()
            }
        }

        return results
    }

    learnFromExample(example: string, parsed: Partial<LoggerContent>): void
    {
        console.debug('Learning from example', example)
        if (parsed.timestamp) {
            const escapedTimestamp = parsed.timestamp.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            const timestampPattern = new RegExp('^(' + escapedTimestamp.replace(/\d+/g, '\\d+') + ')')
            this.patterns.timestamp = [timestampPattern, ...(this.patterns.timestamp || [])]
        }
        if (parsed.level) {
            const levelPattern = new RegExp(`\\b(${parsed.level})\\b`, 'i')
            this.patterns.level = [levelPattern, ...(this.patterns.level || [])]
        }
        if (parsed.thread) {
            const threadPattern = new RegExp(`\\b(${parsed.thread})\\b`)
            this.patterns.thread = [threadPattern, ...(this.patterns.thread || [])]
        }
        if (parsed.logger) {
            const loggerPattern = new RegExp(`\\b(${parsed.logger.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`)
            this.patterns.logger = [loggerPattern, ...(this.patterns.logger || [])]
        }
        if (parsed.file) {
            const filePattern = new RegExp(`\\b(${parsed.file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`)
            this.patterns.file = [filePattern, ...(this.patterns.file || [])]
        }
    }
}

export function* formatLoggerFromStream(
    lines: string[],
    options?: LoggerParserOptions
): Generator<LoggerContent>
{
    const parser = new LoggerParser(undefined, undefined, { ...options, multiline: true })
    for (const line of lines) {
        yield parser.parse(line)
    }
}

export function formatLogger(
    line: string,
    customPatterns?: LoggerPattern,
    customLevelMap?: { [key: string]: string },
    options?: LoggerParserOptions
): LoggerContent
{
    const parser = new LoggerParser(customPatterns, customLevelMap, options)
    return parser.parse(line)
}

export function formatFromExample(
    line: string,
    example: string,
    parsed: Partial<LoggerContent>,
    options?: LoggerParserOptions
): LoggerContent
{
    const parser = new LoggerParser(undefined, undefined, options)
    parser.learnFromExample(example, parsed)
    return parser.parse(line)
}

export function formatMultipleLines(
    lines: string[],
    options?: LoggerParserOptions
): LoggerContent[]
{
    const parser = new LoggerParser(undefined, undefined, { ...options, multiline: true })
    return parser.parseMultipleLines(lines)
}

export type { LoggerPattern, LoggerContent }
export { DEFAULT_PATTERNS, DEFAULT_LEVEL_MAP }
