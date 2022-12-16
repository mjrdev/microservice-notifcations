import { Injectable } from "@nestjs/common";
import { Notification } from "src/app/entities/notifications";
import { NotificationRepository } from "../../../../app/repositories/notification-repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipientId: notification.recipientId,
        readAt: notification.readAt
      }
    })
  }

}