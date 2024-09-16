import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { BaseModel } from './share/BaseModel';

export type SmsDocument = Sms & Document;
export class BaseSmsModel extends BaseModel {
  userFullName: string;
}
@Schema({ timestamps: true })
export class Sms extends BaseSmsModel {
  @Prop({ type: String })
  message?: String;

  @Prop({ ref: 'User', type: Types.ObjectId })
  user?: Types.ObjectId | any;
}

export const SmsSchema = SchemaFactory.createForClass(Sms);
