import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from './share/BaseModel';

export type TeamDocument = Team & Document;
export class BaseTeamModel extends BaseModel {
  cityName: string;
  provinceName: string;
}
@Schema({ timestamps: true })
export class Team extends BaseTeamModel {
  @Prop({ type: String })
  fullName?: String;

  @Prop({ type: String })
  image?: String;

  @Prop({ type: String })
  instagram?: String;

  @Prop({ type: String })
  telegram?: String;

  @Prop({ type: String })
  twitter?: String;

  @Prop({ type: String })
  whatsapp?: String;

  @Prop({ type: String })
  linkedin?: String;

  @Prop({ type: String })
  position?: String;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
