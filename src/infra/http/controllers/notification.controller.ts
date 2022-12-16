import { Controller, Get, Post, Body } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { createNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationController { 
  constructor(private readonly sendNotification: SendNotification) {}

  @Post()
  async store(@Body() body: createNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId, content, category
    })

    return { notification };
  }
}
