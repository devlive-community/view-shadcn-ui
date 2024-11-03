export enum Shadow
{
    never = 'shadow-background',
    always = 'shadow-2xl',
    hover = 'hover:shadow-2xl',
}

export interface CardProps
{
    title?: string
    description?: string
    shadow?: keyof typeof Shadow
    loading?: boolean
    onlyContentLoading?: boolean
    border?: boolean
}
