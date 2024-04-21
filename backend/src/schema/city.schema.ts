import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from './share/BaseModel';

export type CityDocument = City & Document;

@Schema({ timestamps: true })
export class City extends BaseModel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  province_id: number;

  @Prop({ required: true })
  id: number;
}

export const CitySchema = SchemaFactory.createForClass(City);
