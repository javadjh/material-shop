import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { PagingDto } from 'src/shareDTO/Paging.dto';

export class GetProductsRequestRequestDto extends PagingDto {
  @IsString()
  @ApiProperty({ required: false })
  @IsOptional()
  categoryId: string;

  @IsString()
  @ApiProperty({ required: false })
  @IsOptional()
  brandId: string;

  @IsString()
  @ApiProperty({ required: false })
  @IsOptional()
  price: string;

  @IsString()
  @ApiProperty({ required: false })
  @IsOptional()
  sellerId: string;
}
