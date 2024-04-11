export function calculateHoverColor(color: string): string
{
    const hex = color.replace('#', '')
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    const hoverR = Math.max(0, r - 20)
    const hoverG = Math.max(0, g - 20)
    const hoverB = Math.max(0, b - 20)
    const hoverHex = `#${hoverR.toString(16).padStart(2, '0')}${hoverG.toString(16).padStart(2, '0')}${hoverB.toString(16).padStart(2, '0')}`
    return hoverHex
}
