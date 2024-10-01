import BrandPage from "../../page-component/brand/BrandPage";
import { brandsService } from "../../service/brand.service";

const Brand = (props: any) => {
  return <BrandPage {...props} />;
};
export default Brand;
export async function getServerSideProps() {
  const { data } = await brandsService();

  let props: any = { brands: data?.data };

  return {
    props,
  };
}
