// types.ts
export interface RGB
{
    r: number;
    g: number;
    b: number;
}

export interface HSL
{
    h: number;
    s: number;
    l: number;
}

export interface ColorShades
{
    base: string;
    hover: string;
    border: string;
    light: string;
    dark: string;
    disabled: string;
    background: string;
}

// color-utils.ts
class ColorUtils
{
    /**
     * Convert hex color to RGB object
     */
    static hexToRgb(hex: string): RGB
    {
        hex = hex.replace('#', '')

        if (hex.length === 3) {
            hex = hex.split('').map(char => char + char).join('')
        }

        const r = parseInt(hex.substring(0, 2), 16)
        const g = parseInt(hex.substring(2, 4), 16)
        const b = parseInt(hex.substring(4, 6), 16)

        if (isNaN(r) || isNaN(g) || isNaN(b)) {
            throw new Error('Invalid hex color')
        }

        return { r, g, b }
    }

    /**
     * Convert RGB object to hex color string
     */
    static rgbToHex(rgb: RGB): string
    {
        const toHex = (n: number): string => {
            const hex = Math.max(0, Math.min(255, Math.round(n))).toString(16)
            return hex.length === 1 ? '0' + hex : hex
        }

        return '#' + toHex(rgb.r) + toHex(rgb.g) + toHex(rgb.b)
    }

    /**
     * Convert RGB to HSL
     */
    static rgbToHsl(rgb: RGB): HSL
    {
        const r = rgb.r / 255
        const g = rgb.g / 255
        const b = rgb.b / 255

        const max = Math.max(r, g, b)
        const min = Math.min(r, g, b)
        let h = 0
        let s = 0
        const l = (max + min) / 2

        if (max !== min) {
            const d = max - min
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0)
                    break
                case g:
                    h = (b - r) / d + 2
                    break
                case b:
                    h = (r - g) / d + 4
                    break
            }
            h /= 6
        }

        return {
            h: h * 360,
            s: s * 100,
            l: l * 100
        }
    }

    /**
     * Convert HSL to RGB
     */
    static hslToRgb(hsl: HSL): RGB
    {
        const h = hsl.h / 360
        const s = hsl.s / 100
        const l = hsl.l / 100

        let r: number, g: number, b: number

        if (s === 0) {
            r = g = b = l
        }
        else {
            const hue2rgb = (p: number, q: number, t: number): number => {
                if (t < 0) {
                    t += 1
                }
                if (t > 1) {
                    t -= 1
                }
                if (t < 1 / 6) {
                    return p + (q - p) * 6 * t
                }
                if (t < 1 / 2) {
                    return q
                }
                if (t < 2 / 3) {
                    return p + (q - p) * (2 / 3 - t) * 6
                }
                return p
            }

            const q = l < 0.5 ? l * (1 + s) : l + s - l * s
            const p = 2 * l - q

            r = hue2rgb(p, q, h + 1 / 3)
            g = hue2rgb(p, q, h)
            b = hue2rgb(p, q, h - 1 / 3)
        }

        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255)
        }
    }

    /**
     * Adjust the brightness of a color
     */
    static adjustBrightness(color: string, amount: number): string
    {
        const rgb = this.hexToRgb(color)
        const hsl = this.rgbToHsl(rgb)
        hsl.l = Math.max(0, Math.min(100, hsl.l + amount))
        return this.rgbToHex(this.hslToRgb(hsl))
    }

    /**
     * Validate hex color format
     */
    static validateHexColor(color: string): boolean
    {
        return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)
    }
}

// Exported utility functions
/**
 * Check if a color is considered light
 * @param color - Hex color (e.g., '#FF0000' or '#F00')
 */
export function isLightColor(color: string): boolean
{
    if (!ColorUtils.validateHexColor(color)) {
        throw new Error('Invalid color format. Please use hex color (e.g., #FF0000)')
    }
    const rgb = ColorUtils.hexToRgb(color)
    const yiq = ((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000
    return yiq >= 128
}

/**
 * Get appropriate text color based on background color
 * @param backgroundColor - Hex color
 */
export function getContrastTextColor(backgroundColor: string): string
{
    return isLightColor(backgroundColor) ? '#000000' : '#FFFFFF'
}

/**
 * Get hover color (slightly darker version of base color)
 * @param baseColor - Hex color
 */
export function getHoverColor(baseColor: string): string
{
    if (!ColorUtils.validateHexColor(baseColor)) {
        throw new Error('Invalid color format. Please use hex color (e.g., #FF0000)')
    }
    return ColorUtils.adjustBrightness(baseColor, -10)
}

/**
 * Get color shades for UI elements
 * @param baseColor - Hex color
 */
export function generateColorShades(baseColor: string): ColorShades
{
    if (!ColorUtils.validateHexColor(baseColor)) {
        throw new Error('Invalid color format. Please use hex color (e.g., #FF0000)')
    }

    return {
        base: baseColor,
        hover: ColorUtils.adjustBrightness(baseColor, -10),
        border: ColorUtils.adjustBrightness(baseColor, -15),
        light: ColorUtils.adjustBrightness(baseColor, 20),
        dark: ColorUtils.adjustBrightness(baseColor, -20),
        disabled: ColorUtils.adjustBrightness(baseColor, 40),
        background: ColorUtils.adjustBrightness(baseColor, 45)
    }
}
