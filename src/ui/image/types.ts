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
}

export type ImageEmits = {
    (e: 'on-load'): void
    (e: 'on-error'): void
}