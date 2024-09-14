import { FC } from "react";
import MainLayout from "../../layout/MainLayout";
import { productsService } from "../../service/product.service";
import { IProduct } from "../../types/product.type";
import TopMaterialsPage from "../../page-component/top-materials/TopMaterialsPage";

const TopMaterials: FC<{ products: Array<IProduct> }> = ({ products }) => {
  return (
    <MainLayout>
      <TopMaterialsPage products={products} />
    </MainLayout>
  );
};
export default TopMaterials;
export async function getServerSideProps(prop: any) {
  let parentCategoryId = prop.query.id;
  console.log(parentCategoryId);

  const {
    data: { data: productsResponse },
  } = await productsService({ isHighConsumption: true });

  console.log(productsResponse?.list);

  let props: any = {
    products: productsResponse?.list,
  };
  console.log({
    props,
  });

  return {
    props,
  };
}
