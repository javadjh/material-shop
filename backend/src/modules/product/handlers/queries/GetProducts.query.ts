import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/schema/product.schema';
import { Response } from 'src/config/response';
import { GetProductsRequestRequestDto } from '../../dto/request/GetProductsRequestRequest.dto';
import { GlobalUtility } from 'src/utility/GlobalUtility';
import { BadRequestException } from '@nestjs/common';
import { GetProductsData } from '../../dto/response/GetProductsResponse.dto';
import { count } from 'console';
import { Category } from 'src/schema/category.schema';

export class GetProductsQuery {
  constructor(public readonly filter: GetProductsRequestRequestDto) {}
}
@QueryHandler(GetProductsQuery)
export class GetProductsHandler implements IQueryHandler<GetProductsQuery> {
  constructor(
    @InjectModel(Product.name)
    private readonly product: Model<ProductDocument>,
  ) {}
  async execute(query: GetProductsQuery): Promise<any> {
    const { filter } = query;
    const { regex, skip, eachPerPage } = GlobalUtility.pagingWrapper(filter);

    let filterObject: any = {
      isActive: true,
      $or: [
        { title: regex },
        { code: regex },
        { description: regex },
        { tags: regex },
      ],
    };
    if (
      filter?.isHighConsumption != null ||
      filter?.isHighConsumption != undefined
    ) {
      filterObject = {
        ...filterObject,
        ...{ isHighConsumption: filter?.isHighConsumption },
      };
    }
    if (filter?.categoryId)
      filterObject = {
        ...filterObject,
        ...{ category: filter.categoryId.toObjectId() },
      };
    if (filter?.sellerId)
      filterObject = {
        ...filterObject,
        ...{ sellers: { $in: [filter.sellerId.toObjectId()] } },
      };

    if (filter?.brandId)
      filterObject = {
        ...filterObject,
        ...{ brand: filter.brandId.toObjectId() },
      };
    if (filter?.price) {
      let price = filter.price;
      if (price.length < 4 || !price.includes('-'))
        throw new BadRequestException();
      let priceRange = price.split('-');
      let fromPrice = priceRange[0];
      let toPrice = priceRange[1];
      filterObject = {
        ...filterObject,
        ...{
          price: {
            $gte: fromPrice,
            $lte: toPrice,
          },
        },
      };
    }

    let products: Array<Product> = await this.product
      .find(filterObject)
      .limit(eachPerPage)
      .select('price title image brand remainingCount createdAt category')
      .skip(skip)
      .populate('brand', 'title')
      .populate([
        {
          path: 'category',
          select: 'title',
          populate: {
            path: 'previousParents',
            select: 'title',
          },
        },
      ])
      .sort({ createdAt: -1 })
      .lean();

    let maxPrice: number = 0;
    let minPrice: number = 0;

    if (products?.length > 0) {
      maxPrice = (await this.product.find().limit(1).sort({ price: -1 }))[0]
        .price;

      minPrice = (await this.product.find().limit(1).sort({ price: 1 }))[0]
        .price;
    }

    let total: number = await this.product.find(filterObject).count();

    let categoryMap: string = `${products[0]?.category?.title} `;
    products[0]?.category?.previousParents?.map((item: Category) => {
      categoryMap += `- ${item?.title} `;
    });

    products.forEach((ele) => {
      ele.brandName = `${ele.brand?.title}`;
      ele.createdAt = ele?.createdAt?.toJalali();

      ele.categoryMap = categoryMap;
      console.log(categoryMap);

      delete ele.brand;
      delete ele.category;
    });

    let response: GetProductsData = {
      list: products,
      categoryMap,
      total,
      maxPrice,
      minPrice,
    };
    console.log(filterObject);

    return Response.send(response);
  }
}
