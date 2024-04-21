import { Prop } from '@nestjs/mongoose';

export class optionEmbed {
  @Prop()
  key?: string;

  @Prop()
  value?: string;
}
