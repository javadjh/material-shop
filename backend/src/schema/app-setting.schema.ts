import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from './share/BaseModel';

export type AppSettingDocument = AppSetting & Document;

@Schema({ timestamps: true })
export class AppSetting extends BaseModel {
  @Prop({ required: true })
  contract: string;
}

export const AppSettingSchema = SchemaFactory.createForClass(AppSetting);
