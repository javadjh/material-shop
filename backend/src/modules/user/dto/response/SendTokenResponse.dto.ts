import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';
import { ShareAppSetting } from '../share';

export class SendTokenResponseDto extends ResponseDto {
  @ApiProperty({ type: String })
  data?: string;
}
