import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';
export class GetBrandsResponseData {
  @ApiProperty()
  title: string;

  @ApiProperty()
  logo: string;
}

export class GetBrandsResponseDto extends ResponseDto {
  @ApiProperty({ type: GetBrandsResponseData, isArray: true })
  data?: Array<GetBrandsResponseData | any>;
}
