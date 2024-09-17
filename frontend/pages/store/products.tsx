import { FC } from "react";
import Products from "../../page-component/home/store/products/Products";
import { productsService } from "../../service/product.service";
import { getCategoriesService } from "../../service/category.service";
import { brandsService } from "../../service/brand.service";
import { sellersService } from "../../service/seller.service";

export const ProductsPage: FC<any> = (data) => {
  console.log(data);

  return (
    <Products
      categories={data?.categories}
      products={data?.products}
      mainCategories={data.mainCategories}
      brands={data.brands}
      sellers={data.sellers}
    />
  );
};
export default ProductsPage;
export async function getServerSideProps(prop: any) {
  let parentCategoryId = prop.query.id;
  console.log(parentCategoryId);

  const {
    data: { data: productsResponse },
  } = await productsService({ categoryId: parentCategoryId });

  const {
    data: { data: mainCategoriesResponse },
  } = await getCategoriesService();

  const {
    data: { data: categoriesResponse },
  } = await getCategoriesService(parentCategoryId);

  const {
    data: { data: brandsResponse },
  } = await brandsService();

  const {
    data: { data: sellersResponse },
  } = await sellersService({ eachPerPage: 20 });

  let props: any = {
    products: productsResponse,
    mainCategories: mainCategoriesResponse.list,
    categories: categoriesResponse.list,
    brands: brandsResponse,
    sellers: sellersResponse.sellers,
  };
  console.log({
    props,
  });

  return {
    props,
  };
}
