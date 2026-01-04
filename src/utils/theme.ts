import { type ClassValue } from 'clsx'
import { cn } from '@/lib/utils'

export type ThemeMode = {
    dark?: boolean
    glass?: boolean
}

export type ComponentType = 'primary' | 'success' | 'warning' | 'danger' | 'error' | 'info' | 'default' | 'text'

export type ComponentSize = 'small' | 'default' | 'large'

export const glassStyles = {
    base: [
        'backdrop-blur-xl',
        'backdrop-saturate-150',
        'shadow-lg',
        'shadow-black/5'
    ] as ClassValue[],

    border: 'border-white/20',

    background: {
        light: 'bg-white/60',
        dark: 'bg-white/10'
    },

    text: {
        dark: 'text-gray-100',
        light: 'text-gray-900',
        placeholder: {
            dark: 'placeholder:text-gray-400',
            light: 'placeholder:text-gray-600'
        }
    },

    hover: {
        dark: 'hover:bg-white/10',
        light: 'hover:bg-black/10'
    },

    selected: {
        dark: 'bg-white/15',
        light: 'bg-black/15'
    }
}

export const glassBackgroundByType = {
    light: {
        primary: 'bg-blue-500/30',
        success: 'bg-green-500/30',
        warning: 'bg-yellow-500/30',
        danger: 'bg-red-500/30',
        error: 'bg-red-500/30',
        info: 'bg-blue-500/30',
        default: 'bg-gray-500/30',
        text: 'bg-gray-500/30'
    },
    dark: {
        primary: 'bg-blue-600/30',
        success: 'bg-green-600/30',
        warning: 'bg-yellow-600/30',
        danger: 'bg-red-600/30',
        error: 'bg-red-600/30',
        info: 'bg-blue-600/30',
        default: 'bg-gray-600/30',
        text: 'bg-gray-600/30'
    }
}

export const glassHoverByType = {
    light: {
        primary: 'hover:bg-blue-500/40',
        success: 'hover:bg-green-500/40',
        warning: 'hover:bg-yellow-500/40',
        danger: 'hover:bg-red-500/40',
        error: 'hover:bg-red-500/40',
        info: 'hover:bg-blue-500/40',
        default: 'hover:bg-gray-500/40',
        text: 'hover:bg-gray-500/40'
    },
    dark: {
        primary: 'hover:bg-blue-600/40',
        success: 'hover:bg-green-600/40',
        warning: 'hover:bg-yellow-600/40',
        danger: 'hover:bg-red-600/40',
        error: 'hover:bg-red-600/40',
        info: 'hover:bg-blue-600/40',
        default: 'hover:bg-gray-600/40',
        text: 'hover:bg-gray-600/40'
    }
}

export const darkBackgrounds = {
    primary: 'bg-gray-800',
    card: 'bg-gray-800',
    container: 'bg-gray-800',
    hover: 'hover:bg-gray-700',
    active: 'bg-gray-700/50',
    muted: 'bg-gray-700/50'
}

export const darkBorders = {
    default: 'border-gray-700',
    light: 'border-gray-600',
    muted: 'border-gray-700/50'
}

export const darkTexts = {
    primary: 'text-gray-100',
    secondary: 'text-gray-200',
    muted: 'text-gray-400',
    disabled: 'text-gray-500'
}

export const lightBackgrounds = {
    primary: 'bg-white',
    card: 'bg-white',
    container: 'bg-white',
    hover: 'hover:bg-gray-50',
    active: 'bg-gray-100',
    muted: 'bg-gray-50'
}

export const lightBorders = {
    default: 'border-gray-200',
    light: 'border-gray-100',
    muted: 'border-gray-200/50'
}

export const lightTexts = {
    primary: 'text-gray-900',
    secondary: 'text-gray-700',
    muted: 'text-gray-500',
    disabled: 'text-gray-400'
}

export const componentSizes = {
    checkbox: {
        small: 'w-4 h-4',
        default: 'w-5 h-5',
        large: 'w-6 h-6'
    },
    checkboxIcon: {
        small: 'w-2 h-2',
        default: 'w-3 h-3',
        large: 'w-4 h-4'
    },
    input: {
        small: 'h-8 text-sm',
        default: 'h-10 text-base',
        large: 'h-12 text-lg'
    },
    button: {
        small: 'h-8 px-3 text-sm',
        default: 'h-10 px-4 text-base',
        large: 'h-12 px-6 text-lg'
    }
}

export const componentTypeColors = {
    light: {
        primary: 'bg-blue-400',
        success: 'bg-green-400',
        warning: 'bg-yellow-400',
        error: 'bg-red-400',
        danger: 'bg-red-400',
        info: 'bg-blue-400',
        default: 'bg-gray-400',
        text: 'bg-transparent'
    },
    dark: {
        primary: 'bg-blue-500',
        success: 'bg-green-500',
        warning: 'bg-yellow-500',
        error: 'bg-red-500',
        danger: 'bg-red-500',
        info: 'bg-blue-500',
        default: 'bg-gray-500',
        text: 'bg-transparent'
    }
}

export function getComponentSize(component: keyof typeof componentSizes, size: ComponentSize): string
{
    return componentSizes[component][size]
}

export function getTypeColor(type: ComponentType, mode: ThemeMode): string
{
    if (mode.glass) {
        return getGlassBackground(type, mode)
    }
    const isDark = mode.dark || false
    return isDark ? componentTypeColors.dark[type] : componentTypeColors.light[type]
}

export function getGlassBackground(type: ComponentType, mode: ThemeMode): string
{
    const isDark = mode.dark || false
    return isDark ? glassBackgroundByType.dark[type] : glassBackgroundByType.light[type]
}

export function getGlassHover(type: ComponentType, mode: ThemeMode): string
{
    const isDark = mode.dark || false
    return isDark ? glassHoverByType.dark[type] : glassHoverByType.light[type]
}

export function getGlassStyles(mode: ThemeMode, options?: {
    type?: ComponentType
    withHover?: boolean
    withBorder?: boolean
    withText?: boolean
}): ClassValue[]
{
    const { type, withHover = false, withBorder = true, withText = true } = options || {}

    const styles: ClassValue[] = [...glassStyles.base]

    if (withBorder) {
        styles.push(glassStyles.border)
    }

    if (withText) {
        styles.push('text-white')
    }

    if (type) {
        styles.push(getGlassBackground(type, mode))
        if (withHover) {
            styles.push(getGlassHover(type, mode))
        }
    }
    else {
        const isDark = mode.dark || false
        styles.push(isDark ? glassStyles.background.dark : glassStyles.background.light)
    }

    return styles
}

export function getBackground(mode: ThemeMode, variant: keyof typeof darkBackgrounds = 'primary'): string
{
    if (mode.glass) {
        return mode.dark ? glassStyles.background.dark : glassStyles.background.light
    }
    return mode.dark ? darkBackgrounds[variant] : lightBackgrounds[variant]
}

export function getBorder(mode: ThemeMode, variant: keyof typeof darkBorders = 'default'): string
{
    if (mode.glass) {
        return glassStyles.border
    }
    return mode.dark ? darkBorders[variant] : lightBorders[variant]
}

export function getText(mode: ThemeMode, variant: keyof typeof darkTexts = 'primary'): string
{
    if (mode.glass) {
        return 'text-white'
    }
    return mode.dark ? darkTexts[variant] : lightTexts[variant]
}

export function getContainerStyles(mode: ThemeMode, options?: {
    withBorder?: boolean
    variant?: keyof typeof darkBackgrounds
}): ClassValue[]
{
    const { withBorder = true, variant = 'container' } = options || {}

    if (mode.glass) {
        return [
            ...glassStyles.base,
            mode.dark ? glassStyles.background.dark : glassStyles.background.light,
            withBorder && glassStyles.border
        ]
    }

    const styles: ClassValue[] = [getBackground(mode, variant)]

    if (withBorder) {
        styles.push('border', getBorder(mode))
    }

    return styles
}

export function getHoverStyles(mode: ThemeMode, type?: ComponentType): string
{
    if (mode.glass && type) {
        return getGlassHover(type, mode)
    }

    if (mode.glass) {
        return mode.dark ? 'hover:bg-white/15' : 'hover:bg-black/15'
    }

    return mode.dark ? darkBackgrounds.hover : lightBackgrounds.hover
}

export function getActiveStyles(mode: ThemeMode): string
{
    if (mode.glass) {
        return mode.dark ? 'bg-white/20' : 'bg-black/20'
    }

    return mode.dark ? darkBackgrounds.active : lightBackgrounds.active
}

export function mergeThemeClasses(...classes: ClassValue[]): string
{
    return cn(...classes)
}

export const getGlassClass = (glass: boolean, dark: boolean, type: 'background' | 'hover' | 'selected') => {
    if (!glass) {
        return ''
    }
    const mode = dark ? 'dark' : 'light'
    return glassStyles[type][mode]
}
