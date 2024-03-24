import NotificationService from '@/services/Notification'
import { NotificationModel } from '@/model/Notification'

const createNotification = (): void => {
    const notification001: NotificationModel = {
        title: 'Notification 001',
        description: 'This is the description of the first notification',
        isRead: false,
        createTime: '2024-01-01T00:00:00.000Z'
    }
    NotificationService.addNotification(notification001)

    const notification002: NotificationModel = {
        title: 'Notification 002',
        description: 'This is the description of the second notification',
        isRead: false,
        createTime: '2024-02-01T00:00:00.000Z'
    }
    NotificationService.addNotification(notification002)

    const notification003: NotificationModel = {
        title: 'Notification 003',
        description: 'This is the description of the third notification',
        isRead: false,
        createTime: '2024-03-01T00:00:00.000Z'
    }
    NotificationService.addNotification(notification003)

    const notification004: NotificationModel = {
        title: 'Notification 004',
        description: 'This is the description of the fourth notification',
        isRead: true,
        createTime: '2024-03-24T00:00:00.000Z'
    }
    NotificationService.addNotification(notification004)
}

export {
    createNotification
}
