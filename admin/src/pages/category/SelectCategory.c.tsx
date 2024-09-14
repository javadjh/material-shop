import { FC, useEffect, useState } from "react";
import { useCategoryContext } from "./category.context";
import { ICategory } from "../../types/category.type";
import { getCategoriesService } from "../../service/category.service";
import { SpaceStyled } from "../../global-style/global.s";
import CategoriesComponent from "./Categories.c";
import { Button } from "antd";
import Category from "./Category";

const SelectCategoryComponent: FC<{ onSelectedListener: any }> = ({
  onSelectedListener,
}) => {
  const { reload, parent } = useCategoryContext();
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
      {parent?._id && (
        <button
          className="btn btn-success float-start mx-3 px-5"
          onClick={(e) => {
            e.preventDefault();
            onSelectedListener(parent);
          }}
        >
          دسته بندی {parent?.title}
        </button>
      )}
      <SpaceStyled right={60}>
        <Category />
      </SpaceStyled>
    </>
  );
};
export default SelectCategoryComponent;
