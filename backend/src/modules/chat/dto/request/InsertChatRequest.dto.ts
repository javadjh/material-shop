import { IsBoolean, IsOptional, IsString, Max, Min } from 'class-validator';

export class InsertChatRequestDto {
  @IsString()
  message?: string;

  @IsString()
  @IsOptional()
  userId?: string;

  @IsBoolean()
  isAdmin?: boolean;
}
