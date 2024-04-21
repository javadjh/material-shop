import { useEffect, useState } from "react";
import { brandsService } from "../../service/brand.service";
import { IBrand } from "../../types/brand.type";

const Brand = () => {
  const [brands, setBrands] = useState<Array<IBrand>>([]);
  const getBrands = async () => {
    const {
      data: { data: response },
    } = await brandsService();
    setBrands(response.data);
  };
  useEffect(() => {
    getBrands();
  }, []);
  return <p>Brand</p>;
};
export default Brand;
