import { Col, Popconfirm, Row, Space, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import { ICategory } from "../../types/category.type";
import {
  CenterVerticalStyled,
  Pointer,
  SpaceStyled,
} from "../../global-style/global.s";
import { CategoryEditTextStyled, RedTextStyled } from "./category.style";
import { useCategoryContext } from "./category.context";
import {
  deleteCategoriesService,
  getCategoriesService,
} from "../../service/category.service";
import CategoriesComponent from "./Categories.c";

const CategoryItemComponent: FC<{ category: ICategory; justView: boolean }> = ({
  category,
  justView,
}) => {
  const {
    setCategory,
    setIsOpen,
    setParent,
    reload,
    setReload,
    setSelected,
    selected,
    setMap,
    map,
    parent,
    setCategories,
  } = useCategoryContext();
  const [hasChild, setHasChild] = useState<boolean>(false);
  const onEditCategoryListener = () => {
    setCategory(category);
    setIsOpen(true);
  };
  const onDeleteCategoryListener = async () => {
    await deleteCategoriesService(category?._id + "");
    setReload({ parent: "", date: Date.now() });
  };
  const enteryToParentListener = () => {
    if (justView) setSelected(category);
    setParent(category);
    setHasChild(true);
    getChildCategories();
  };

  useEffect(() => {
    if (hasChild) getChildCategories();
  }, [reload]);
  const getChildCategories = async () => {
    console.log("parent?.parentId");
    console.log(category?.parentId);
    const {
      data: { data: response },
    } = await getCategoriesService(category?._id);
    console.log(response.list);

    setCategories(response?.list);
    setMap([...map, category?.title]);
  };

  return (
    <Pointer className="card m-3 p-3 " onClick={enteryToParentListener}>
      <Row justify={"space-between"}>
        <Col>
          <Pointer>
            <span
              style={{
                color:
                  selected?._id == category?._id && justView ? "red" : "white",
              }}
            >
              {category.title}
            </span>
          </Pointer>
        </Col>
        <Col>
          <SpaceStyled right={10}>
            <SpaceStyled right={justView && 30}>
              {!justView && (
                <Row>
                  <Col>
                    <CategoryEditTextStyled onClick={onEditCategoryListener}>
                      ویرایش
                    </CategoryEditTextStyled>
                  </Col>
                  <Col>
                    <SpaceStyled right={15} top={3}>
                      <Popconfirm
                        title="حذف دسته بندی"
                        description="آیا از حذف دسته اطمینان دارید؟"
                        onConfirm={onDeleteCategoryListener}
                        okText="آره"
                        cancelText="نه"
                      >
                        <RedTextStyled> حذف</RedTextStyled>
                      </Popconfirm>
                    </SpaceStyled>
                  </Col>
                </Row>
              )}
            </SpaceStyled>
          </SpaceStyled>
        </Col>
        {/* {hasChild && (
          <SpaceStyled right={10}>
            <CategoriesComponent categories={categories} justView={justView} />
          </SpaceStyled>
        )} */}
      </Row>
    </Pointer>
  );
};
export default CategoryItemComponent;
