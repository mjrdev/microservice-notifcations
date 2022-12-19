import { Content } from "@app/entities/content";
import { Notification } from "@app/entities/notifications";
import { NotificationProps } from "@app/entities/notifications";

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override): Notification {
  return new Notification({
    category: 'social',
    content: new Content('Solicitação de amizade'),
    recipientId: 'recipient-1',
    ...override,
  });
}