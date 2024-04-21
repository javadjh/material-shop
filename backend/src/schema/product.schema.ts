import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { BaseModel } from './share/BaseModel';
import { optionEmbed } from './share/options-embed.schema';
import { City } from './city.schema';
import { Brand } from './barnd.schema';
import { carEmbed } from './share/car-embed.schema';

export type ProductDocument = Product & Document;
class BaseProductModel extends BaseModel {
  brandName?: string;
  categoryName?: string;
}

@Schema({ timestamps: true })
export class Product extends BaseProductModel {
  @Prop({ type: String })
  title?: string;

  @Prop({ type: String, unique: true })
  code?: string;

  @Prop({ type: String })
  image?: string;

  @Prop({ type: String })
  description?: string;

  @Prop({ type: [String] })
  tags?: Array<string>;

  @Prop({ type: Number })
  minOrderCountForRetail?: number;

  @Prop({ type: Number })
  minOrderCountForWholesale?: number;

  @Prop({ type: Number })
  offForWholesalePercent?: number;

  @Prop({
    type: [
      {
        key: String,
        value: String,
      },
    ],
  })
  options: Array<optionEmbed>;

  @Prop({ type: Boolean, default: false })
  isHighConsumption?: boolean;

  @Prop({ ref: 'Category', type: Types.ObjectId })
  category?: Types.ObjectId | any;

  @Prop({ type: [String] })
  colors?: Array<string>;

  @Prop({ ref: 'Seller', type: [Types.ObjectId] })
  sellers?: Array<Types.ObjectId | any>;

  @Prop({ ref: 'Brand', type: Types.ObjectId })
  brand?: Types.ObjectId | any;

  @Prop({ type: Number })
  postPrice?: number;

  @Prop({ type: String })
  unit?: string;

  @Prop({ type: String })
  size?: string;

  @Prop({ type: Number })
  packCount?: number;

  @Prop({
    type: [
      {
        carType: String,
        count: Number,
      },
    ],
  })
  car?: Array<carEmbed>;

  @Prop({ type: Number })
  price?: number;

  @Prop({ type: Number })
  remainingCount?: number;

  @Prop({ type: Boolean, default: true })
  isActive?: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
