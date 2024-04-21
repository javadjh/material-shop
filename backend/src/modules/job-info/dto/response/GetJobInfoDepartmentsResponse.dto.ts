import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';

export class GetJobInfoDepartmentsResponseDto extends ResponseDto {
  @ApiProperty({ type: String, isArray: true })
  data?: Array<String>;
}
