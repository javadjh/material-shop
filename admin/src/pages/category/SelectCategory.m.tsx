import { Button, Modal } from "antd";
import { FC, useState } from "react";
import SelectCategoryComponent from "./SelectCategory.c";
import CategoryContextProvider from "./category.context";
import { ICategory } from "../../types/category.type";

const SelectCategoryModal: FC<{
  isOpen: boolean;
  setIsOpen: any;
  onSelected: any;
}> = ({ isOpen, setIsOpen, onSelected }) => {
  const onSelectedListener = (category: ICategory) => {
    setIsOpen(false);
    onSelected(category);
  };
  return (
    <Modal open={isOpen} style={{ top: 20 }} width={"80%"} footer={null}>
      <div dir="rtl">
        <CategoryContextProvider>
          <SelectCategoryComponent onSelectedListener={onSelectedListener} />
        </CategoryContextProvider>
      </div>
    </Modal>
  );
};
export default SelectCategoryModal;
