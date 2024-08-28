import SubCategoryPage from "../../page-component/home/store/sub-category/SubCategoryPage";
import { getCategoriesService } from "../../service/category.service";

const SubCategory = (props: any) => {
  return <SubCategoryPage {...props} />;
};
export default SubCategory;
export async function getServerSideProps(prop: any) {
  let parentCategoryId = prop.query.id;
  let mainCategoryId = prop.query.mainCategory;
  console.log(parentCategoryId);

  const {
    data: { data: mainCategoriesResponse },
  } = await getCategoriesService();

  const {
    data: { data: categoriesResponse },
  } = await getCategoriesService(parentCategoryId);

  const {
    data: { data: parentCategoriesResponse },
  } = await getCategoriesService(mainCategoryId);

  let props: any = {
    mainCategories: mainCategoriesResponse.list,
    categories: categoriesResponse.list,
    parentCategories: parentCategoriesResponse.list,
    parentCategoryId,
  };
  console.log({
    props,
  });

  return {
    props,
  };
}
