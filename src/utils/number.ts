/**
 * Types for number validation options
 */
export interface NumberValidationOptions
{
    allowNegative?: boolean;     // Allow negative numbers
    allowZero?: boolean;         // Allow zero
    allowDecimal?: boolean;      // Allow decimal numbers
    maxDecimalPlaces?: number;   // Maximum decimal places
    min?: number;                // Minimum value
    max?: number;                // Maximum value
    allowScientific?: boolean;   // Allow scientific notation
    allowHex?: boolean;          // Allow hexadecimal
    allowBinary?: boolean;       // Allow binary
    allowOctal?: boolean;        // Allow octal
}

/**
 * Check if the input value is any valid number
 * Supports number, numeric string, scientific notation, hexadecimal, etc.
 *
 * @param value - The value to be validated
 * @returns boolean - True if the value is a valid number
 *
 * @example
 * isValidNumber(123)          // true
 * isValidNumber("123")        // true
 * isValidNumber("123.45")     // true
 * isValidNumber("1e5")        // true
 * isValidNumber("0xFF")       // true
 * isValidNumber("abc")        // false
 * isValidNumber(undefined)    // false
 * isValidNumber(null)         // false
 * isValidNumber(NaN)          // false
 */
export function isValidNumber(value: any): boolean
{
    // Handle null and undefined
    if (value === null || value === undefined) {
        return false
    }

    // Handle boolean
    if (typeof value === 'boolean') {
        return false
    }

    // If it's already a number type, just check if it's not NaN
    if (typeof value === 'number') {
        return !isNaN(value) && isFinite(value)
    }

    // Convert to string and trim whitespace
    const strValue = String(value).trim()

    // Empty string is not a valid number
    if (strValue === '') {
        return false
    }

    // Check for hexadecimal format
    if (strValue.startsWith('0x') || strValue.startsWith('0X')) {
        return /^0[xX][0-9a-fA-F]+$/.test(strValue)
    }

    // Check for binary format
    if (strValue.startsWith('0b') || strValue.startsWith('0B')) {
        return /^0[bB][01]+$/.test(strValue)
    }

    // Check for octal format
    if (strValue.startsWith('0o') || strValue.startsWith('0O')) {
        return /^0[oO][0-7]+$/.test(strValue)
    }

    // Regular number format (including scientific notation)
    const numberRegex = /^[+-]?(\d*\.?\d+|\d+\.?\d*)([eE][+-]?\d+)?$/
    if (!numberRegex.test(strValue)) {
        return false
    }

    // Final check: convert to number and verify
    const num = Number(strValue)
    return !isNaN(num) && isFinite(num)
}

/**
 * Get the number of decimal places in a number
 * @param num - The number to check
 * @returns number - The number of decimal places
 */
function getDecimalPlaces(num: number): number
{
    const match = String(num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)
    if (!match) {
        return 0
    }

    const digits = match[1] ? match[1].length : 0
    const exp = match[2] ? parseInt(match[2], 10) : 0

    return Math.max(0, digits - exp)
}

/**
 * Validate number with additional options
 * @param value - The value to be validated
 * @param options - Validation options
 * @returns boolean - True if the value meets all specified criteria
 *
 * @example
 * validate("123.456", {
 *   allowDecimal: true,
 *   maxDecimalPlaces: 2,
 *   min: 0,
 *   max: 1000
 * }) // false (exceeds maximum decimal places)
 */
export function validate(value: any, options: NumberValidationOptions = {}): boolean
{
    const defaultOptions = {
        allowNegative: true,
        allowZero: true,
        allowDecimal: true,
        allowScientific: true,
        allowHex: false,
        allowBinary: false,
        allowOctal: false
    }

    const finalOptions = { ...defaultOptions, ...options }

    // First check if it's a valid number
    if (!isValidNumber(value)) {
        return false
    }

    // Convert to string for format checking
    const strValue = String(value).trim().toLowerCase()

    // Check number format restrictions
    if (!finalOptions.allowHex && (strValue.startsWith('0x'))) {
        return false
    }
    if (!finalOptions.allowBinary && (strValue.startsWith('0b'))) {
        return false
    }
    if (!finalOptions.allowOctal && (strValue.startsWith('0o'))) {
        return false
    }
    if (!finalOptions.allowScientific && /e[+-]?\d+$/i.test(strValue)) {
        return false
    }

    // Convert to number for value checking
    const num = Number(value)

    // Check zero
    if (!finalOptions.allowZero && num === 0) {
        return false
    }

    // Check negative
    if (!finalOptions.allowNegative && num < 0) {
        return false
    }

    // Check decimal
    if (!finalOptions.allowDecimal && !Number.isInteger(num)) {
        return false
    }

    // Check decimal places
    if (typeof finalOptions.maxDecimalPlaces === 'number') {
        const decimalPlaces = getDecimalPlaces(num)
        if (decimalPlaces > finalOptions.maxDecimalPlaces) {
            return false
        }
    }

    // Check range
    if (typeof finalOptions.min === 'number' && num < finalOptions.min) {
        return false
    }

    return !(typeof finalOptions.max === 'number' && num > finalOptions.max)
}

/**
 * Convert any valid number format to a regular number
 * @param value - The value to convert
 * @returns number | null - The converted number or null if invalid
 *
 * @example
 * toNumber("123.45")  // 123.45
 * toNumber("0xFF")    // 255
 * toNumber("invalid") // null
 */
export function toNumber(value: any): number | null
{
    if (!isValidNumber(value)) {
        return null
    }
    return Number(value)
}

/**
 * Check if a value is a valid number
 * @param value - The value to check
 * @returns boolean - True if the value is a valid number
 *
 * @example
 * isNumber(123)          // true
 * isNumber("123")        // true
 * isNumber("123.45")     // true
 * isNumber("1e5")        // true
 * isNumber("0xFF")       // true
 * isNumber("abc")        // false
 * isNumber(undefined)    // false
 * isNumber(null)         // false
 * isNumber(NaN)          // false
 */
export function isNumber(value: any): boolean
{
    return isValidNumber(value)
}
