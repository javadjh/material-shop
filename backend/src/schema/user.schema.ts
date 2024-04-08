import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { BaseModel } from './share/BaseModel';
import {
  produceClassSchema,
  produceTypeSchema,
  sellerStatusSchema,
  sellerTypeSchema,
  userTypeSchema,
} from './share/enums';
import { email } from './share/shareFields';
import { City } from './city.schema';
import { Province } from './province.schema';
import { File } from './file.schema';
import { userTypesEnum } from 'src/shareDTO/enums';

export type UserDocument = User & Document;
export class BaseUserModel extends BaseModel {
  fullName: string;
  cityName: string;
  provinceName: string;
}
@Schema({ timestamps: true })
export class User extends BaseUserModel {


  //step 1
  @Prop(email)
  email?: string;

  @Prop({ type: String, required: true })
  password: string;

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
  tel?: string;

  @Prop()
  postalCode?: string;

  @Prop()
  shabaCode?: string;

  
  @Prop({ type: Boolean, default: true })
  isActive: boolean;


  
}

export const UserSchema = SchemaFactory.createForClass(User);
