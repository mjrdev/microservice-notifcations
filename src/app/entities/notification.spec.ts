import { Content } from "./content";
import { Notification } from "./notifications";

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('this is a notification'),
      category: 'category',
      recipientId: '1234'
    });

    expect(notification).toBeTruthy();
  })
})