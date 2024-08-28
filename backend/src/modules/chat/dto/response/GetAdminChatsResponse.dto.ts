import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';

export class GetAdminChatsResponseList {
  @ApiProperty()
  firstName?: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  lastChatDate: string;

  @ApiProperty()
  lastChat: string;
}
export class GetAdminChatsResponseData {
  @ApiProperty({ isArray: true, type: GetAdminChatsResponseList })
  list?: Array<GetAdminChatsResponseList | any>;

  @ApiProperty({ type: Number })
  total: number;
}
export class GetAdminChatsResponseDto extends ResponseDto {
  @ApiProperty({ type: GetAdminChatsResponseData })
  data?: GetAdminChatsResponseData;
}
