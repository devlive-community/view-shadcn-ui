import { TextType } from '@/ui/common/type.ts'

export enum TextMode
{
    h1 = 'text-4xl lg:text-5xl',
    h2 = 'text-3xl lg:text-4xl',
    h3 = 'text-2xl lg:text-3xl',
    h4 = 'text-xl lg:text-2xl',
    h5 = 'text-lg lg:text-xl',
    h6 = 'text-base lg:text-lg',
    p = 'text-base lg:text-lg',
    span = 'text-base lg:text-lg',
    label = 'text-base lg:text-lg',
    small = 'text-sm lg:text-base',
    code = 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
    pre = 'overflow-x-auto rounded-lg bg-muted p-2 font-mono text-sm'
}

export interface TextProps
{
    type?: keyof typeof TextMode | string
    color?: string
    colorType?: keyof typeof TextType | string
    strong?: boolean
    italic?: boolean
    underline?: boolean
    deleted?: boolean
    dark?: boolean
}

export interface GradientTextProps
{
    from?: string
    to?: string
    deg?: number
    options?: string
    dark?: boolean
}
