import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { BaseModel } from './share/BaseModel';

export class orderListEmbed {
  @Prop({ ref: 'Product', type: Types.ObjectId })
  product?: Types.ObjectId | any;

  @Prop({ type: Number })
  count?: number;

  @Prop({ type: Number })
  price?: number;
}

export type OrderDocument = Order & Document;
class BaseOrderModel extends BaseModel {
  userFullName?: string;
}

@Schema({ timestamps: true })
export class Order extends BaseOrderModel {
  @Prop({ ref: 'User', type: Types.ObjectId })
  user?: Types.ObjectId | any;

  @Prop({ type: Number })
  totalPrice?: number;

  @Prop({ ref: 'Payment', type: Types.ObjectId })
  payment?: Types.ObjectId | any;

  @Prop({
    type: [
      {
        product: { ref: 'Product', type: Types.ObjectId },
        count: Number,
        price: Number,
      },
    ],
  })
  orderList?: Array<orderListEmbed>;

  @Prop({ type: Boolean, default: false })
  isPayed: boolean;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
