import { FC } from "react";
import ProductPage from "../../page-component/home/store/product/Product";
import { getCategoriesService } from "../../service/category.service";
import { productService, productsService } from "../../service/product.service";

const Product: FC<any> = ({ product, mainCategories, categories }) => {
  return (
    <ProductPage
      categories={categories}
      mainCategories={mainCategories}
      product={product}
    />
  );
};
export default Product;
export async function getServerSideProps(prop: any) {
  const {
    data: { data: product },
  } = await productService(prop?.query.id);

  const {
    data: { data: mainCategoriesResponse },
  } = await getCategoriesService();

  console.log(product?.data?.categoryId);

  const {
    data: { data: categoriesResponse },
  } = await getCategoriesService(product?.data?.categoryId);

  let props: any = {
    product: product.data,
    mainCategories: mainCategoriesResponse.list,
    categories: categoriesResponse.list,
  };
  console.log(props);

  return { props };
}
