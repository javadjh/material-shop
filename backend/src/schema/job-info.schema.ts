import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from './share/BaseModel';
import { genderSchema } from './share/enums';

export type JobInfoDocument = JobInfo & Document;
class BaseJobInfoModel extends BaseModel {}

@Schema({ timestamps: true })
export class JobInfo extends BaseJobInfoModel {
  @Prop({ type: String, isRequired: true, unique: true })
  department?: string;

  @Prop({ type: Number })
  remainingEmployeeCount?: number;

  @Prop({ type: String, enum: genderSchema })
  gender?: string;

  @Prop({ type: String })
  city?: string;

  @Prop({ type: String })
  location?: string;

  @Prop({ type: String })
  ageRange?: string;

  @Prop({ type: String })
  minDegree?: string;

  @Prop({ type: String })
  requiredDegree?: string;

  @Prop({ type: String })
  jobHistory?: string;

  @Prop({ type: String })
  clock?: string;

  @Prop({ type: String })
  salary?: string;

  @Prop({ type: String })
  mission?: string;

  @Prop({ type: String })
  description?: string;
}

export const JobInfoSchema = SchemaFactory.createForClass(JobInfo);
