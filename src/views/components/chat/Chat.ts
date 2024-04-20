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
    email?: string
}

export interface Message
{
    id?: number
    content: string
    type: 'sender' | 'receiver'
    user: User
}
