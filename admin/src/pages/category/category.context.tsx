import { FC, createContext, useContext, useEffect, useState } from "react";
import { ICategory } from "../../types/category.type";
import { getCategoriesService } from "../../service/category.service";
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
  categories?: Array<ICategory>;
  setCategories?: any;
  map: Array<string>;
  setMap: any;
  backPress: any;
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
  const [categories, setCategories] = useState<Array<ICategory>>();
  const [parent, setParent] = useState<ICategory>();
  const [reload, setReload] = useState<{ parentId?: string; date?: Date }>();
  const [selected, setSelected] = useState<ICategory>({});
  const [map, setMap] = useState<Array<string>>(["دسته اصلی"]);

  const backPress = async () => {
    const {
      data: { data: response },
    } = await getCategoriesService(
      map?.length == 2 ? undefined : parent?.parentId
    );
    setCategories(response?.list);

    setMap(map.slice(0, -1));
  };

  useEffect(() => {
    console.log("parent?.parentId");
    console.log(parent?.parentId);
  }, [parent]);

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
    categories,
    setCategories,
    map,
    setMap,
    backPress,
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
