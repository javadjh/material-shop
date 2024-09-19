import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from './share/BaseModel';
import { City } from './city.schema';
import { Province } from './province.schema';
import { activityEmploymentSchema } from './share/enums';

export type SwapDocument = Swap & Document;
class BaseSwapModel extends BaseModel {
  provinceName?: string;
  cityName?: string;
}

@Schema({ timestamps: true })
export class Swap extends BaseSwapModel {
  @Prop({ type: String })
  fullName?: string;

  @Prop({ type: String })
  phoneNumber?: string;

  @Prop({ type: City })
  city?: City;

  @Prop({ type: Province })
  province?: Province;

  @Prop({ type: String })
  file?: string;

  @Prop({ type: String })
  description?: string;

  @Prop({ type: String, enum: activityEmploymentSchema })
  activity?: string;
}

export const SwapSchema = SchemaFactory.createForClass(Swap);
