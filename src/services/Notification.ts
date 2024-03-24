import { NotificationModel } from '@/model/Notification'

class NotificationService
{
    private notifications: NotificationModel[] = []

    addNotification(notification: NotificationModel): void
    {
        this.notifications.push(notification)
    }

    getNotifications(): NotificationModel[]
    {
        return this.notifications
    }
}

export default new NotificationService()
