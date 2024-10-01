import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from './share/BaseModel';
import { City } from './city.schema';
import { Province } from './province.schema';
import { activityEmploymentSchema } from './share/enums';

export type ProvideMaterialDocument = ProvideMaterial & Document;
class BaseProvideMaterialModel extends BaseModel {
  provinceName?: string;
  cityName?: string;
}

@Schema({ timestamps: true })
export class ProvideMaterial extends BaseProvideMaterialModel {
  @Prop({ type: String })
  fullName?: string;

  @Prop({ type: String })
  phoneNumber?: string;

  @Prop({ type: City })
  city?: City;

  @Prop({ type: Province })
  province?: Province;

  @Prop({ type: String })
  description?: string;

  @Prop({ type: String })
  projectName?: string;
}

export const ProvideMaterialSchema =
  SchemaFactory.createForClass(ProvideMaterial);
