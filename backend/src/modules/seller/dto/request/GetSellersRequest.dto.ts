import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { SellerDepartmentEnum } from 'src/shareDTO/enums';

export class GetSellersRequestDto extends PagingDto {
  @ApiProperty({ enum: SellerDepartmentEnum, required: false })
  @IsEnum(SellerDepartmentEnum)
  @IsOptional()
  sellerDepartment: string;
}
