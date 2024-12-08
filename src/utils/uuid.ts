/**
 * 生成一个符合 UUID v4 标准的字符串
 * Generate a string that follows the UUID v4 standard
 * @returns {string} UUID v4
 */
export function randomUUID(): string
{
    const randomValues = new Uint8Array(16)

    // 使用安全随机数填充数组
    // Populate the array with safe random numbers
    if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
        crypto.getRandomValues(randomValues)
    }
    else if (typeof require === 'function') {
        // Node.js 环境，使用 crypto.randomFillSync
        // Node.js environment, use crypto.randomFillSync
        const crypto = require('crypto')
        const buffer = crypto.randomBytes(16)
        randomValues.set(buffer)
    }
    else {
        throw new Error('No secure random number generator available')
    }

    // 按照 UUID v4 规范设置特定位
    // Set specific bits according to the UUID v4 standard
    randomValues[6] = (randomValues[6] & 0x0f) | 0x40
    randomValues[8] = (randomValues[8] & 0x3f) | 0x80

    // 转换为符合 UUID 格式的字符串
    // Convert to a string that follows the UUID format
    return [...randomValues]
        .map((value, index) => {
            const hex = value.toString(16).padStart(2, '0')
            if (index === 4 || index === 6 || index === 8 || index === 10) {
                return `-${ hex }`
            }
            return hex
        })
        .join('')
}

/**
 * 验证一个字符串是否符合 UUID v4 标准
 * Verify if a string follows the UUID v4 standard
 * @param {string} uuid 需要验证的字符串 | String to be verified
 * @returns {boolean} 是否符合 UUID v4 标准 | Whether the string follows the UUID v4 standard
 */
export function validateUUID(uuid: string): boolean
{
    const uuidV4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    return uuidV4Regex.test(uuid)
}
