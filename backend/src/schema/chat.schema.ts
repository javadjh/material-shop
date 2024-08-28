import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { BaseModel } from './share/BaseModel';

export type ChatDocument = Chat & Document;
class BaseChatModel extends BaseModel {
  userFullName?: string;
  adminFullName?: string;
}

@Schema({ timestamps: true })
export class Chat extends BaseChatModel {
  @Prop({ ref: 'User', type: Types.ObjectId })
  user?: Types.ObjectId | any;

  @Prop({ type: Boolean })
  isAdmin?: boolean;

  @Prop({ type: String })
  message?: string;

  @Prop({ type: Boolean })
  isUserSeen?: boolean;

  @Prop({ ref: 'User', type: Types.ObjectId })
  admin?: Types.ObjectId | any;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
