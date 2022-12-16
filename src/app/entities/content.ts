export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 255;
  }

  constructor(content: string) {
    const isContentLength = this.validateContentLength(content);

    if (!isContentLength) {
      throw new Error('Invalid content length');
    }
    this.content = content;
  }
}