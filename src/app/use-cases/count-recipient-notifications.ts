import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../repositories/notification-repository";

interface countRecipientNotificationsRequest {
  recipientId: string;
}

interface countRecipientNotificationsResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotifications {
  constructor(private readonly notificationRepository: NotificationRepository) {}

  async execute(request: countRecipientNotificationsRequest): Promise<countRecipientNotificationsResponse> {
    const { recipientId } = request;

    const count = await this.notificationRepository.countManyByRecipientId(recipientId);

    const notification = await this.notificationRepository.findById(recipientId);

    return {
      count
    }
  }
}