import { Notification } from "../entities/notifications";

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
  
  abstract findById(id: string): Promise<Notification | null>;

  abstract save(notification: Notification): Promise<void>; 

  abstract countManyByRecipientId(recipientsId: string): Promise<number>;
}