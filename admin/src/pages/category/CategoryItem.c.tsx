import { Col, Popconfirm, Row, Space, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import { ICategory } from "../../types/category.type";
import { Pointer, SpaceStyled } from "../../global-style/global.s";
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
  } = useCategoryContext();
  const [hasChild, setHasChild] = useState<boolean>(false);
  const [categories, setCategories] = useState<Array<ICategory>>([]);
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
  };

  useEffect(() => {
    if (hasChild) getChildCategories();
  }, [hasChild, reload]);
  const getChildCategories = async () => {
    const {
      data: { data: response },
    } = await getCategoriesService(category?._id);
    console.log(response.list);

    setCategories(response?.list);
  };

  return (
    <Row>
      <Col>
        <Pointer>
          <Typography.Paragraph
            style={{
              color:
                selected?._id == category?._id && justView ? "red" : undefined,
            }}
            onClick={enteryToParentListener}
          >
            {category.title}
          </Typography.Paragraph>
        </Pointer>
      </Col>
      <Col>
        <SpaceStyled right={10}>
          <SpaceStyled right={justView && 30}>
            {!justView && (
              <>
                <CategoryEditTextStyled onClick={onEditCategoryListener}>
                  ویرایش
                </CategoryEditTextStyled>

                <Popconfirm
                  title="حذف دسته بندی"
                  description="آیا از حذف دسته اطمینان دارید؟"
                  onConfirm={onDeleteCategoryListener}
                  okText="آره"
                  cancelText="نه"
                >
                  <RedTextStyled> حذف</RedTextStyled>
                </Popconfirm>
              </>
            )}
          </SpaceStyled>
        </SpaceStyled>
      </Col>
      {hasChild && (
        <SpaceStyled right={10}>
          <CategoriesComponent categories={categories} justView={justView} />
        </SpaceStyled>
      )}
    </Row>
  );
};
export default CategoryItemComponent;
