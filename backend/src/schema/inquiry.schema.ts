import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from './share/BaseModel';
import { City } from './city.schema';
import { Province } from './province.schema';

export type InquiryDocument = Inquiry & Document;
class BaseInquiryModel extends BaseModel {
  provinceName?: string;
  cityName?: string;
}

@Schema({ timestamps: true })
export class Inquiry extends BaseInquiryModel {
  @Prop({ type: String })
  fullName?: string;

  @Prop({ type: String })
  phoneNumber?: string;

  @Prop({ type: String })
  file?: string;

  @Prop({ type: String })
  items?: string;
}

export const InquirySchema = SchemaFactory.createForClass(Inquiry);
