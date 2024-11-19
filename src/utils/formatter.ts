/**
 * Convert function to string
 *
 * @example
 * fnToString((value) => `${ value }px`)            // "(value) => `${ value }px`"
 * @param formatter Function
 */
const fnToString = (formatter: Function): string | undefined => {
    if (!formatter || typeof formatter !== 'function') {
        return undefined
    }
    return formatter.toString()
}

/**
 * Convert string to function
 *
 * @example
 * fnToFunction("(value) => `${ value }px`")          // (value) => `${ value }px`
 * @param formatterStr String
 */
const fnToFunction = (formatterStr: string): Function | undefined => {
    if (!formatterStr) {
        return undefined
    }
    try {
        return new Function('value', `return ${ formatterStr }`)
    }
    catch (e) {
        console.error('Failed to parse formatter:', e)
        return undefined
    }
}

export {
    fnToString,
    fnToFunction
}
