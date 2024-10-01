import MainFooterPage from "../../page-component/main-footer/MainFooterPage";
import { getCategoriesService } from "../../service/category.service";

const MainFooter = (props: any) => {
  return <MainFooterPage {...props} />;
};
export default MainFooter;
export async function getServerSideProps() {
  const { data } = await getCategoriesService();

  let props: any = { categories: data?.data?.list };

  return {
    props,
  };
}
