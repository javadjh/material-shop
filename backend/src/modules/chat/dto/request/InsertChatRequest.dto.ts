import { IsBoolean, IsString, Max, Min } from 'class-validator';

export class InsertChatRequestDto {
  @IsString()
  message?: string;

  @IsBoolean()
  isAdmin?: boolean;
}
