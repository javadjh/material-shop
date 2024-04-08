import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';
import { ShareAppSetting } from '../share';

export class GetAppSettingResponseDto extends ResponseDto {
  @ApiProperty({ type: ShareAppSetting })
  data?: ShareAppSetting;
}
