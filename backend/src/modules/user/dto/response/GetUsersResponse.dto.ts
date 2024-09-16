import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';

export class GetUsersResponseList {
  @ApiProperty()
  email?: string;

  @ApiProperty()
  firstName?: string;

  @ApiProperty()
  lastName?: string;

  @ApiProperty()
  melliCode?: string;

  @ApiProperty()
  city?: string;

  @ApiProperty()
  province?: string;

  @ApiProperty()
  address?: string;

  @ApiProperty()
  phone?: string;

  @ApiProperty()
  postalCode?: string;

  @ApiProperty()
  companyName?: string;

  @ApiProperty()
  isAdmin?: string;

  @ApiProperty()
  isCompleted?: string;

  @ApiProperty()
  lastChatDate?: string;

  @ApiProperty()
  createdAt?: string;

  @ApiProperty()
  updatedAt?: string;
}
export class GetUsersResponseData {
  @ApiProperty({ type: GetUsersResponseList, isArray: true })
  list: Array<GetUsersResponseList | any>;

  @ApiProperty({ type: Number })
  total: number;
}
export class GetUsersResponseDto extends ResponseDto {
  @ApiProperty({ type: GetUsersResponseData })
  data?: GetUsersResponseData;
}
