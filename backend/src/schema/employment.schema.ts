import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from './share/BaseModel';
import { activityEmploymentSchema } from './share/enums';

export type EmploymentDocument = Employment & Document;
class BaseEmploymentModel extends BaseModel {}

@Schema({ timestamps: true })
export class Employment extends BaseEmploymentModel {
  @Prop({ type: String })
  fullName?: string;

  @Prop({ type: String })
  phoneNumber?: string;

  @Prop({ type: Number })
  cityId?: number;

  @Prop({ type: String })
  description?: string;

  @Prop({ type: String, enum: activityEmploymentSchema })
  activity?: string;
}

export const EmploymentSchema = SchemaFactory.createForClass(Employment);
