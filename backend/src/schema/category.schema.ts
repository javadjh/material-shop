import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { BaseModel } from './share/BaseModel';
import { filtersSchema } from './share/enums';

export type CategoryDocument = Category & Document;

export class BaseCategory extends BaseModel {}

@Schema({ timestamps: true })
export class Category extends BaseCategory {
  @Prop()
  title?: string;

  @Prop({ type: Boolean, default: false })
  isMain?: boolean;

  @Prop({ type: Boolean, default: true })
  isActive?: boolean;

  //related fields
  //for sub categories
  @Prop({ ref: 'Category', type: Types.ObjectId })
  parentId?: Types.ObjectId | any;

  //for better search and find
  @Prop({ ref: 'Category', type: [Types.ObjectId] })
  previousParents?: Array<Types.ObjectId | any>;

  @Prop({ type: [String], enum: filtersSchema })
  filters?: Array<String>;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
