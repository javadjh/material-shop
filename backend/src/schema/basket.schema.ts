import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { BaseModel } from './share/BaseModel';

export type BasketDocument = Basket & Document;
class BaseBasketModel extends BaseModel {}

@Schema({ timestamps: true })
export class Basket extends BaseBasketModel {
  @Prop({ ref: 'User', type: Types.ObjectId })
  user?: Types.ObjectId | any;

  @Prop({ ref: 'Product', type: Types.ObjectId })
  product?: Types.ObjectId | any;

  @Prop({ type: Number })
  count?: number;
}

export const BasketSchema = SchemaFactory.createForClass(Basket);
