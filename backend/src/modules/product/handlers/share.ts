import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/schema/product.schema';

export class ProductShareHandler {
  constructor(
    @InjectModel(Product.name)
    private readonly product: Model<ProductDocument>,
  ) {}

  manager() {}
}
