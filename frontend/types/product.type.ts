export interface IProduct {
  _id?: string;
  title?: string;
  sendWay?: string;
  brandName?: string;
  cities?: string;
  code?: number;
  image?: string;
  categoryName?: string;
  description?: string;
  tags?: [string];
  minOrderCountForRetail?: number;
  minOrderCountForWholesale?: number;
  offForWholesalePercent?: number;
  options?: [
    {
      key?: string;
      value?: string;
    }
  ];
  car?: [
    {
      carType?: string;
      count?: number;
    }
  ];
  isHighConsumption?: true;
  categoryId?: string;
  brandId?: string;
  sellerIds?: [string];
  colors?: [string];
  postPrice?: number;
  unit?: string;
  size?: string;
  packCount?: number;
  price: number;
  remainingCount: number;
}
