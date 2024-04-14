import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from './share/BaseModel';
import { City } from './city.schema';
import { Province } from './province.schema';
import { sellerDepartmentSchema } from './share/enums';

export type SellerDocument = Seller & Document;
export class BaseSellerModel extends BaseModel {
  cityName: string;
  provinceName: string;
}
@Schema({ timestamps: true })
export class Seller extends BaseSellerModel {
  @Prop({ type: City })
  city?: City;

  @Prop({ type: Province })
  province?: Province;

  @Prop({ type: String })
  firstNumber?: String;

  @Prop({ type: String })
  secondNumber?: String;

  @Prop({ type: String })
  title?: String;

  @Prop({ type: String })
  address?: String;

  @Prop({ type: String })
  website?: String;

  @Prop({ type: String })
  instagram?: String;

  @Prop({ type: String })
  telegram?: String;

  @Prop({ enum: sellerDepartmentSchema, type: String })
  sellerDepartment?: String;
}

export const SellerSchema = SchemaFactory.createForClass(Seller);
