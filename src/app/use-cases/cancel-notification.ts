import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/notifications";
import { NotificationRepository } from "../repositories/notification-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private readonly notificationRepository: NotificationRepository) {}

  async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.cancel();

    await this.notificationRepository.save(notification)
  }
}