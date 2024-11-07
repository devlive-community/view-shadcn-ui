import { TextType } from '@/ui/common/type.ts'

export interface TextProps
{
    color?: string
    colorType?: TextType | string
    strong?: boolean
    italic?: boolean
    underline?: boolean
    deleted?: boolean
}

export interface GradientTextProps
{
    from?: string
    to?: string
    deg?: number
}
