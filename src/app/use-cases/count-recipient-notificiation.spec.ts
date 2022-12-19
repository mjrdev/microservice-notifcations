import { Content } from "@app/entities/content";
import { InMemoryNotificationsRepository } from "@test/in-memory-notification-repository";
import { Notification } from "@app/entities/notifications";
import { CountRecipientNotifications } from "./count-recipient-notifications";
import { makeNotification } from "@test/factories/notifications-factory";

describe('Count recipient notification', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);

    await notificationsRepository.create(makeNotification({ recipientId: 'recipient-1' }));
    await notificationsRepository.create(makeNotification({ recipientId: 'recipient-2' }));
    await notificationsRepository.create(makeNotification({ recipientId: 'recipient-2' }));

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-2'
    });

    expect(count).toEqual(2);
  })
})