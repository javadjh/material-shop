import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';
export class InsertFileResponseData {
  @ApiProperty()
  _id: string;
  @ApiProperty()
  originalname: string;
  @ApiProperty()
  mimetype: string;
  @ApiProperty()
  filename: string;
  @ApiProperty()
  size: number | any;
}
export class InsertFileResponseDto extends ResponseDto {
  @ApiProperty({ type: InsertFileResponseData })
  data?: InsertFileResponseData;
}
