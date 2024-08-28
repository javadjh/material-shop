import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';

export class GetUsersChatsResponseList {
  @ApiProperty()
  isAdmin?: boolean;

  @ApiProperty()
  message: string;

  @ApiProperty()
  createdAt: string;
}
export class GetUsersChatsResponseData {
  @ApiProperty({ isArray: true, type: GetUsersChatsResponseList })
  list?: Array<GetUsersChatsResponseList | any>;

  @ApiProperty({ type: Number })
  total: number;
}
export class GetUsersChatsResponseDto extends ResponseDto {
  @ApiProperty({ type: GetUsersChatsResponseData })
  data?: GetUsersChatsResponseData;
}
