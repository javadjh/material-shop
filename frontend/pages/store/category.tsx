import { FC } from "react";
import CategoryPage from "../../page-component/home/store/category/Category";
import { ICategory } from "../../types/category.type";
import { getCategoriesService } from "../../service/category.service";

const Category: FC<{
  mainCategories: Array<ICategory>;
  categories: Array<ICategory>;
}> = ({ mainCategories, categories }) => {
  return (
    <CategoryPage mainCategories={mainCategories} categories={categories} />
  );
};
export default Category;
export async function getServerSideProps(prop: any) {
  let parentCategoryId = prop.query.id;
  console.log(parentCategoryId);

  const {
    data: { data: mainCategoriesResponse },
  } = await getCategoriesService();

  const {
    data: { data: categoriesResponse },
  } = await getCategoriesService(parentCategoryId);

  let props: any = {
    mainCategories: mainCategoriesResponse.list,
    categories: categoriesResponse.list,
  };

  return {
    props,
  };
}
