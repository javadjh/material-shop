import { useEffect, useState } from "react";
import CategoriesComponent from "./Categories.c";
import CategoryContextProvider, {
  useCategoryContext,
} from "./category.context";
import { ICategory } from "../../types/category.type";
import { getCategoriesService } from "../../service/category.service";
import UpsertCategoryModal from "./UpsertCategory.m";
import { Pointer, SpaceStyled } from "../../global-style/global.s";

const Category = () => {
  const {
    category,
    parent,
    reload,
    categories,
    setCategories,
    map,
    backPress,
  } = useCategoryContext();

  useEffect(() => {
    getMainCategories();
  }, [reload]);
  const getMainCategories = async () => {
    const {
      data: { data: response },
    } = await getCategoriesService();

    setCategories(response?.list);
  };
  return (
    <>
      {map?.map((item) => (
        <span>{`${item} >`}</span>
      ))}
      {map?.length > 1 && (
        <SpaceStyled top={10}>
          <Pointer onClick={backPress}>
            <span style={{ color: "#3C91AA" }}>بازگشت</span>
          </Pointer>
        </SpaceStyled>
      )}
      <UpsertCategoryModal category={category} parent={parent} />
      <SpaceStyled right={60}>
        <CategoriesComponent justView={false} categories={categories} />
      </SpaceStyled>
    </>
  );
};
export default Category;
