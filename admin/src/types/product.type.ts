export interface IProduct {
  _id?: string;
  title?: string;
  code?: number;
  image?: string;
  categoryName?: string;
  brandName?: string;
  createdAt?: string;
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
  isHighConsumption?: boolean;
  brands?: any;
  sellers?: any;
  category?: any;
  categoryId?: string;
  brandId?: string;
  sellerIds?: [string];
  colors?: [string];
  postPrice?: number;
  unit?: string;
  size?: string;
  packCount?: number;
  price?: number;
  remainingCount?: number;
}
