import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';

export class GetInquiryResponseList {
  @ApiProperty()
  fullName?: string;

  @ApiProperty()
  phoneNumber?: string;

  @ApiProperty()
  file?: string;

  @ApiProperty()
  items?: string;
}

export class GetInquiryResponseData {
  @ApiProperty({ isArray: true, type: GetInquiryResponseList })
  list?: Array<GetInquiryResponseList | any>;

  @ApiProperty({ type: Number })
  total: number;
}

export class GetInquiryResponseDto extends ResponseDto {
  @ApiProperty({ type: GetInquiryResponseData })
  data?: GetInquiryResponseData;
}
