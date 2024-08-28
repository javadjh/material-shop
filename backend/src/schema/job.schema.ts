import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from './share/BaseModel';

export type JobDocument = Job & Document;
class BaseJobModel extends BaseModel {}

@Schema({ timestamps: true })
export class Job extends BaseJobModel {
  @Prop({ type: String })
  department?: string;

  @Prop({ type: String })
  fullName?: string;

  @Prop({ type: String })
  mellicode?: string;

  @Prop({ type: String })
  fatherName?: string;

  @Prop({ type: String })
  age?: string;

  @Prop({ type: String })
  bithday?: string;

  @Prop({ type: String })
  isMarried?: string;

  @Prop({ type: String })
  address?: string;

  @Prop({ type: String })
  firstNumber?: string;

  @Prop({ type: String })
  secondNumber?: string;

  @Prop({ type: String })
  degree?: string;

  @Prop({ type: String })
  universityName?: string;

  @Prop({ type: String })
  jobHistory?: string;

  @Prop({ type: String })
  lastCompanyName?: string;

  @Prop({ type: String })
  lastCompanyTel?: string;

  @Prop({ type: String })
  resume?: string;

  @Prop({ type: String })
  description?: string;
}

export const JobSchema = SchemaFactory.createForClass(Job);
