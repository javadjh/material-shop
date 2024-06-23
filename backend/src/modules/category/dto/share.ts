import { ApiProperty } from '@nestjs/swagger';

export class BaseCategoryDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  index: number;

  @ApiProperty()
  icon?: string;

  @ApiProperty()
  isMain: boolean;

  @ApiProperty()
  parentId: string;
}

export class categoryEmbedDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  categoryId: string;
}
