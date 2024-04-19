export interface Chat
{
    id?: number | string
    selected: boolean
    user?: User
    messages?: Message[]
}

export interface User
{
    id?: number
    name?: string
    avatar?: string
}

export interface Message
{
    id?: number
    content?: string
    user?: User
}