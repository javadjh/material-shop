import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from './share/BaseModel';

export type ReportDocument = Report & Document;
class BaseReportModel extends BaseModel {}

@Schema({ timestamps: true })
export class Report extends BaseReportModel {
  @Prop({ type: String })
  fullName?: string;

  @Prop({ type: String })
  phoneNumber?: string;

  @Prop({ type: String })
  description?: string;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
