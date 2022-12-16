import { InMemoryNotificationsRepository } from "../../../test/in-memory-notification-repository";
import { Notification } from "../entities/notifications";
import { SendNotification } from "./send-notification";

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      category: 'Test notification',
      content: 'This is a test notification',
      recipientId: '1234',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  })
})