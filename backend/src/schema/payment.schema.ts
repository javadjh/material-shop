import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { BaseModel } from './share/BaseModel';

export type PaymentDocument = Payment & Document;
class BasePaymentModel extends BaseModel {
  userFullName?: string;
}

@Schema({ timestamps: true })
export class Payment extends BasePaymentModel {
  @Prop({ ref: 'User', type: Types.ObjectId })
  user?: Types.ObjectId | any;

  @Prop({ ref: 'Order', type: Types.ObjectId })
  order?: Types.ObjectId | any;

  @Prop({ type: Number })
  payedPrice?: number;

  @Prop({ type: String })
  paymentCode?: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
