import { Prop } from '@nestjs/mongoose';

export class carEmbed {
  @Prop()
  carType?: string;

  @Prop({ type: Number })
  count?: number;
}
