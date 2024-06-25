import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from './share/BaseModel';
import { email } from './share/shareFields';
import { City } from './city.schema';
import { Province } from './province.schema';

export type UserDocument = User & Document;
export class BaseUserModel extends BaseModel {
  fullName: string;
  cityName: string;
  provinceName: string;
}
@Schema({ timestamps: true })
export class User extends BaseUserModel {
  //step 1
  @Prop({ type: String })
  email?: string;

  //step 2
  @Prop()
  firstName?: string;

  @Prop()
  lastName?: string;

  @Prop()
  melliCode?: string;

  @Prop({ type: City })
  city?: City;

  @Prop({ type: Province })
  province?: Province;

  @Prop()
  address?: string;

  @Prop()
  phone?: string;

  @Prop()
  postalCode?: string;

  @Prop({ type: String })
  companyName?: string;

  @Prop({ type: Boolean, default: true })
  isActive: boolean;

  @Prop({ type: Boolean, default: false })
  isAdmin?: boolean;

  @Prop({ type: Boolean, default: false })
  isCompleted?: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
