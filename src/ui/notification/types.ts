// Control center item interface
// 控制中心项目接口
export interface NotificationItem
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
}

export type NotificationItemEmits = {
    (e: 'on-click', item: any): void
}