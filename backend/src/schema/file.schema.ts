import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from './share/BaseModel';

export type FileDocument = File & Document;
class BaseFileModel extends BaseModel {
  url?: string;
}

@Schema()
export class File extends BaseFileModel {
  @Prop({ type: String })
  originalname: string;

  @Prop({ type: String })
  mimetype: string;

  @Prop({ type: String })
  filename: string;

  @Prop({ type: Number })
  size: number | any;
}

export const FileSchema = SchemaFactory.createForClass(File);
