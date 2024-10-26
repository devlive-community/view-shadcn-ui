// Define basic types
export type CSSUnit = 'px' | 'rem' | 'em' | 'vw' | 'vh' | '%' | 'pt' | 'pc' | 'in' | 'cm' | 'mm' | 'ex' | 'ch'
export type CSSKeyword = 'auto' | 'inherit' | 'initial' | 'unset' | 'none' | 'fit-content' | 'max-content' | 'min-content'
export type SizeValue = number | string | null | undefined

interface SizeOptions
{
    /** Default unit, defaults to px */
    defaultUnit?: CSSUnit
    /** Whether to allow negative values */
    allowNegative?: boolean
    /** Minimum value constraint */
    min?: number
    /** Maximum value constraint */
    max?: number
    /** Number of decimal places */
    decimals?: number
    /** Default value when parsing fails */
    fallback?: string
}

export class SizeCalculator
{
    private static readonly DEFAULT_OPTIONS: Required<SizeOptions> = {
        defaultUnit: 'px',
        allowNegative: true,
        min: Number.NEGATIVE_INFINITY,
        max: Number.POSITIVE_INFINITY,
        decimals: 2,
        fallback: 'auto'
    }

    private static readonly CSS_UNITS: CSSUnit[] = ['px', 'rem', 'em', 'vw', 'vh', '%', 'pt', 'pc', 'in', 'cm', 'mm', 'ex', 'ch']
    private static readonly CSS_KEYWORDS: CSSKeyword[] = ['auto', 'inherit', 'initial', 'unset', 'none', 'fit-content', 'max-content', 'min-content']

    private static readonly CALC_REGEX = /^calc\(.+\)$/
    private static readonly VAR_REGEX = /^var\(.+\)$/
    private static readonly NUMBER_REGEX = /^-?\d*\.?\d+$/
    private static readonly UNIT_REGEX = new RegExp(`^-?\\d*\\.?\\d+(${SizeCalculator.CSS_UNITS.join('|')})$`)

    /**
     * Calculate size value from various inputs
     * @param value - Input value to calculate size from
     * @param options - Configuration options for size calculation
     * @returns Processed size string with appropriate unit
     *
     * @example
     * ```typescript
     * // Basic usage
     * SizeCalculator.calc(100) // => "100px"
     * SizeCalculator.calc('2rem') // => "2rem"
     *
     * // With options
     * SizeCalculator.calc(100, { defaultUnit: 'rem' }) // => "100rem"
     * SizeCalculator.calc(-50, { allowNegative: false }) // => "50px"
     * ```
     */
    static calc(value: SizeValue, options: SizeOptions = {}): string
    {
        const opts = { ...this.DEFAULT_OPTIONS, ...options }

        // Handle special cases
        if (value === null || value === undefined || value === '') {
            return opts.fallback
        }

        // Handle zero value
        if (value === 0 || value === '0') {
            return '0'
        }

        // Handle string values
        if (typeof value === 'string') {
            const trimmedValue = value.trim()

            // Check for CSS keywords
            if (this.CSS_KEYWORDS.includes(trimmedValue as CSSKeyword)) {
                return trimmedValue
            }

            // Check for calc expressions and CSS variables
            if (this.CALC_REGEX.test(trimmedValue) || this.VAR_REGEX.test(trimmedValue)) {
                return trimmedValue
            }

            // Check for values with units
            if (this.UNIT_REGEX.test(trimmedValue)) {
                return this.normalizeValue(trimmedValue, opts)
            }

            // Handle pure numeric strings
            if (this.NUMBER_REGEX.test(trimmedValue)) {
                const num = parseFloat(trimmedValue)
                return this.formatSize(num, opts)
            }

            // Try to extract numeric part
            const numericPart = parseFloat(trimmedValue)
            if (!isNaN(numericPart)) {
                return this.formatSize(numericPart, opts)
            }

            return opts.fallback
        }

        // Handle numeric values
        if (typeof value === 'number') {
            return this.formatSize(value, opts)
        }

        return opts.fallback
    }

    /**
     * Format numeric value to size string with unit
     * @private
     * @param value - Numeric value to format
     * @param options - Formatting options
     * @returns Formatted size string
     */
    private static formatSize(value: number, options: Required<SizeOptions>): string
    {
        // Check for negative values
        if (!options.allowNegative && value < 0) {
            value = Math.abs(value)
        }

        // Apply min/max constraints
        value = Math.max(options.min, Math.min(options.max, value))

        // Handle decimal places
        const formattedValue = Number(value.toFixed(options.decimals))

        // Return zero without unit
        if (formattedValue === 0) {
            return '0'
        }

        return `${ formattedValue }${ options.defaultUnit }`
    }

    /**
     * Normalize value that already has a unit
     * @private
     * @param value - String value with unit to normalize
     * @param options - Normalization options
     * @returns Normalized size string
     */
    private static normalizeValue(value: string, options: Required<SizeOptions>): string
    {
        const matches = value.match(/^(-?\d*\.?\d+)(.+)$/)
        if (!matches) {
            return options.fallback
        }

        const [, num, unit] = matches
        const numericValue = parseFloat(num)

        if (!this.CSS_UNITS.includes(unit as CSSUnit)) {
            return this.formatSize(numericValue, options)
        }

        return this.formatSize(numericValue, { ...options, defaultUnit: unit as CSSUnit })
    }
}

/**
 * Convenience function to calculate size value
 * @param value - Input value to calculate size from
 * @param options - Configuration options
 * @returns Processed size string
 *
 * @example
 * ```typescript
 * calcSize(100) // => "100px"
 * calcSize('2rem') // => "2rem"
 * calcSize(100, { defaultUnit: 'rem' }) // => "100rem"
 * ```
 */
export const calcSize = (value: SizeValue, options?: SizeOptions): string => {
    return SizeCalculator.calc(value, options)
}
