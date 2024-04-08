import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from './share/BaseModel';

export type ProvinceDocument = Province & Document;

@Schema()
export class Province extends BaseModel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  id: number;
}

export const ProvinceSchema = SchemaFactory.createForClass(Province);
