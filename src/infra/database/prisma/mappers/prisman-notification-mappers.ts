import { Notification } from "@app/entities/notifications";


export class PrismaNotificationMapper {
  public static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt
    }
  }
}