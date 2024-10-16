import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsOptional } from 'class-validator';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { SellerDepartmentEnum } from 'src/shareDTO/enums';

export class GetSellersRequestDto extends PagingDto {
  @ApiProperty({ enum: SellerDepartmentEnum, required: false })
  @IsEnum(SellerDepartmentEnum)
  @IsOptional()
  sellerDepartment: string;

  @ApiProperty({ isArray: true, type: Number })
  @IsArray()
  @IsOptional()
  cities?: Array<number>;
}
