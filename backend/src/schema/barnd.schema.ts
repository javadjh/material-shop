import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from './share/BaseModel';

export type BrandDocument = Brand & Document;
class BaseBrandModel extends BaseModel {}

@Schema({ timestamps: true })
export class Brand extends BaseBrandModel {
  @Prop({ type: String })
  title?: string;

  @Prop({ type: String })
  logo?: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
