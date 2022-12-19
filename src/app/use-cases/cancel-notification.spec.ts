import { Content } from "@app/entities/content";
import { InMemoryNotificationsRepository } from "@test/in-memory-notification-repository";
import { CancelNotification } from "./cancel-notification";
import { Notification } from "@app/entities/notifications";
import { NotificationRepository } from "@app/repositories/notification-repository";
import { NotificationNotFound } from "./errors/notification-not-found";
import { makeNotification } from "@test/factories/notifications-factory";

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = makeNotification({});

    await notificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(expect.any(Date));;
  })

  it('should not be able to cancel a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id'
      })
    }).rejects.toThrow(NotificationNotFound);
  })
})