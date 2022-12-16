import { Content } from "./content"

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('hey, you have received a notification');
  
    expect(content).toBeTruthy();
  })
  
  it('should be able to create a notification with less than 5 characters', () => {
    expect(() => new Content('hey')).toThrow();
  })
  
  it('should be able to create a notification with more than 255 characters', () => {
    expect(() => new Content('hey'.repeat(200))).toThrow();
  })
})