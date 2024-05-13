import { FC, createContext, useContext, useState } from "react";
import { ICategory } from "../../types/category.type";
export interface ICategoryContext {
  isOpen?: any;
  setIsOpen?: any;
  category?: ICategory;
  setCategory?: any;
  parent?: ICategory;
  setParent?: any;
  reload: any;
  setReload: any;
  selected: ICategory;
  setSelected: any;
}

const CategoryContext = createContext<ICategoryContext | null>(null);
interface ICategoryContextProvider {
  children: any;
}
const CategoryContextProvider: FC<ICategoryContextProvider> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<ICategory>();
  const [parent, setParent] = useState<ICategory>();
  const [reload, setReload] = useState<{ parentId?: string; date?: Date }>();
  const [selected, setSelected] = useState<ICategory>({});

  let value: ICategoryContext = {
    isOpen,
    setIsOpen,
    category,
    setCategory,
    parent,
    setParent,
    reload,
    setReload,
    selected,
    setSelected,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
export const useCategoryContext = (): ICategoryContext => {
  const context: ICategoryContext | any = useContext(CategoryContext);
  return context;
};
export default CategoryContextProvider;
