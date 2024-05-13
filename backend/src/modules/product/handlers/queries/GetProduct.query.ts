import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/schema/product.schema';
import { Response } from 'src/config/response';
import { GetProductResponseDto } from '../../dto/response/GetProductResponse.dto';

export class GetProductQuery {
  constructor(public readonly id: string) {}
}
@QueryHandler(GetProductQuery)
export class GetProductHandler implements IQueryHandler<GetProductQuery> {
  constructor(
    @InjectModel(Product.name)
    private readonly product: Model<ProductDocument>,
  ) {}
  async execute(query: GetProductQuery): Promise<any> {
    let id = query.id;

    let product: Product = await this.product
      .findById(id)
      .select(
        `title
         code
         image
         description
         tags
         minOrderCountForRetail
         minOrderCountForWholesale
         offForWholesalePercent
         options
         category
         colors
         sellers
         brand
         postPrice
         unit
         size
         packCount
         car
         price
         remainingCount `,
      )
      .populate('brand', 'title')
      .populate('sellers', 'title city')
      .populate('category', 'title')
      .lean();

    product.brandName = `${product.brand?.title}`;
    product.categoryName = `${product.category?.title}`;
    product.categoryId = `${product.category?._id}`;
    let cities: string = '';
    product?.sellers.forEach((element) => {
      console.log(element);

      cities = ' ' + element?.city?.name;
    });
    product.cities = cities;
    delete product.brand;
    delete product.category;

    let response: GetProductResponseDto = { data: product };

    return Response.send(response);
  }
}
