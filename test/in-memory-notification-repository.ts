import { Notification } from "@app/entities/notifications";
import { NotificationRepository } from "@app/repositories/notification-repository";

export class InMemoryNotificationsRepository implements NotificationRepository {
  
  
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async findById(id: string): Promise<Notification> {
    const notification = this.notifications.find(item => item.id === id);

    if (!notification) {
      return null;
    }

    return notification;
  }

  async countManyByRecipientId(recipientsId: string): Promise<number> {
    return this.notifications.filter(
      notification => notification.recipientId === recipientsId
    ).length;
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id
    );

    if (notificationIndex > 0) {
      this.notifications[notificationIndex] = notification; 
    }
  }
}
