export enum ImageFit
{
    fill = 'object-fill',
    contain = 'object-contain',
    cover = 'object-cover',
    none = 'object-none',
    'scale-down' = 'object-scale-down'
}

export interface ImageProps
{
    src: string
    alt: string
    width?: number | string
    height?: number | string
    fit?: keyof typeof ImageFit
    lazy?: boolean
    border?: boolean
}

export interface ImageGroupProps
{
    images: Array<ImageProps>
    columns?: number
    gap?: number
    preview?: boolean
}

export interface ImagePreviewProps
{
    visible: boolean
    images: Array<ImageProps>
    current: number
}

export type ImagePreviewEmits = {
    (e: 'update:visible', value: boolean): void
    (e: 'update:current', value: number): void
}

export type ImageEmits = {
    (e: 'on-load'): void
    (e: 'on-error'): void
}