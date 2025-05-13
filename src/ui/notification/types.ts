export interface NotificationProps
{
    trigger?: boolean
    width?: string | number
    height?: string | number
    position?: 'left' | 'right' | 'center'
}

// Control center item interface
// 控制中心项目接口
export interface NotificationItemProps
{
    id: string | number
    title: string
    icon?: string
    time?: string
    read?: boolean
    description?: string
}

// Control center component emits interface
// 控制中心组件的事件接口
export type NotificationEmits = {
    (e: 'on-clear-all'): void
    (e: 'on-read-all'): void
    (e: 'on-toggle', opened: boolean): void
}

export type NotificationItemEmits = {
    (e: 'on-click', item: any): void
}