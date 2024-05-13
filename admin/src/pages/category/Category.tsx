import { useEffect, useState } from "react";
import CategoriesComponent from "./Categories.c";
import CategoryContextProvider, {
  useCategoryContext,
} from "./category.context";
import { ICategory } from "../../types/category.type";
import { getCategoriesService } from "../../service/category.service";
import UpsertCategoryModal from "./UpsertCategory.m";
import { SpaceStyled } from "../../global-style/global.s";

const Category = () => {
  const { category, parent, reload } = useCategoryContext();
  const [categories, setCategories] = useState<Array<ICategory>>([]);
  useEffect(() => {
    getMainCategories();
  }, [reload]);
  const getMainCategories = async () => {
    const {
      data: { data: response },
    } = await getCategoriesService();
    console.log(response.list);

    setCategories(response?.list);
  };
  return (
    <>
      <UpsertCategoryModal category={category} parent={parent} />
      <SpaceStyled right={60}>
        <CategoriesComponent justView={false} categories={categories} />
      </SpaceStyled>
    </>
  );
};
export default Category;
