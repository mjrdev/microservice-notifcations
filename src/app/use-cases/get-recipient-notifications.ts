import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/notifications";
import { NotificationRepository } from "../repositories/notification-repository";

interface GetRecipientNotificationsRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface GetRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
  constructor(private readonly notificationRepository: NotificationRepository) {}

  async execute(request: GetRecipientNotificationsRequest): Promise<GetRecipientNotificationsResponse> {
    const { recipientId } = request;

    const notification = 

    return {
      notification,
    };
  }
}