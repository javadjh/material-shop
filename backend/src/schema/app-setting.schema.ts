import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from './share/BaseModel';

export type AppSettingDocument = AppSetting & Document;

@Schema({ timestamps: true })
export class AppSetting extends BaseModel {
  //social media
  @Prop()
  instagram?: string;

  @Prop()
  twitter?: string;

  @Prop()
  whatsapp?: string;

  @Prop()
  pinterest?: string;

  @Prop()
  linkedin?: string;

  @Prop()
  telegram?: string;

  @Prop()
  youtube?: string;

  //app links
  @Prop()
  bazazr?: string;

  @Prop()
  myket?: string;

  @Prop()
  link?: string;

  @Prop()
  sibche?: string;

  @Prop()
  sibapp?: string;

  @Prop()
  webapp?: string;

  @Prop()
  banner?: string;

  @Prop()
  firstAddress?: string;

  @Prop()
  secondAddress?: string;

  @Prop()
  thirdAddress?: string;

  @Prop()
  location?: string;

  @Prop()
  firstTell?: string;

  @Prop()
  secondTell?: string;

  @Prop()
  thirdTell?: string;

  @Prop()
  bannerLink?: string;
}

export const AppSettingSchema = SchemaFactory.createForClass(AppSetting);
