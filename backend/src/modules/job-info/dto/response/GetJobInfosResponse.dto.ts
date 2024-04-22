import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';
import { GetJobInfoResponseData } from './GetJobInfoResponse.dto';

export class GetJobInfosResponseDto extends ResponseDto {
  @ApiProperty({ type: GetJobInfoResponseData, isArray: true })
  data?: Array<GetJobInfoResponseData>;
}
