import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class createNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;
  @IsNotEmpty()
  @Length(5, 255)
  content: string;
  @Length(2, 30)
  @IsNotEmpty()
  category: string;
}