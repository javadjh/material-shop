import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';

export class GetUsersUnseenChatResponseData {
  @ApiProperty({ type: Number })
  count: number;
}
export class GetUsersUnseenChatResponseDto extends ResponseDto {
  @ApiProperty({ type: GetUsersUnseenChatResponseData })
  data?: GetUsersUnseenChatResponseData;
}
