import { FC, useEffect, useState } from "react";
import { useCategoryContext } from "./category.context";
import { ICategory } from "../../types/category.type";
import { getCategoriesService } from "../../service/category.service";
import { SpaceStyled } from "../../global-style/global.s";
import CategoriesComponent from "./Categories.c";
import { Button } from "antd";

const SelectCategoryComponent: FC<{ onSelectedListener: any }> = ({
  onSelectedListener,
}) => {
  const { reload, selected } = useCategoryContext();
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
      <SpaceStyled right={60}>
        <CategoriesComponent justView={true} categories={categories} />
      </SpaceStyled>
      {selected?._id && (
        <Button onClick={() => onSelectedListener(selected)} type="primary">
          انتخاب
        </Button>
      )}
    </>
  );
};
export default SelectCategoryComponent;
