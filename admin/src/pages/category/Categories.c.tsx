import { FC, useEffect, useState } from "react";
import { ICategory } from "../../types/category.type";
import CategoryItemComponent from "./CategoryItem.c";
import { Typography } from "antd";
import { useCategoryContext } from "./category.context";
import { SpaceStyled } from "../../global-style/global.s";
import { AddCategoryTextStyled } from "./category.style";

const CategoriesComponent: FC<{
  categories: Array<ICategory>;
  justView: boolean;
}> = ({ categories, justView }) => {
  const { setIsOpen, reload, setCategory } = useCategoryContext();

  const onInsertCategory = () => {
    setCategory({});
    setIsOpen(true);
  };

  return (
    <div
      style={{
        marginTop: 20,
        marginRight: -50,
      }}
    >
      {categories?.map((catregory) => (
        <CategoryItemComponent justView={justView} category={catregory} />
      ))}
      {!justView && (
        <AddCategoryTextStyled onClick={onInsertCategory}>
          افزودن
        </AddCategoryTextStyled>
      )}
    </div>
  );
};
export default CategoriesComponent;
