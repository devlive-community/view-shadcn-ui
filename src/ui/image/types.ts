export interface ImageProps
{
    src: string
    alt: string
}

export type ImageEmits = {
    (e: 'on-load'): void
    (e: 'on-error'): void
}