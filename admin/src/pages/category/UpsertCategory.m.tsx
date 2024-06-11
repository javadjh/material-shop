import { FC, useEffect, useState } from "react";
import { ICategory, IInsertCategory } from "../../types/category.type";
import { Form, Input, Modal, Typography } from "antd";
import {
  insertCategoriesService,
  upsertCategoriesService,
} from "../../service/category.service";
import { useCategoryContext } from "./category.context";
import { UploadFileComponent } from "../../components/UploadFile.c";
import { ReactSVG } from "react-svg";
import { BACKEND_URL } from "../../service/APIRoutes";
import { CenterStyled, SpaceStyled } from "../../global-style/global.s";

const UpsertCategoryModal: FC<{
  category?: ICategory;
  parent?: ICategory;
}> = ({ category, parent }) => {
  const [form] = Form.useForm();
  const { setReload, setIsOpen, isOpen } = useCategoryContext();
  let [icon, setIcon] = useState<string | any>("");
  const upsertCategory = async (formData: IInsertCategory) => {
    let state = false;
    if (category?._id) {
      const { data } = await upsertCategoriesService(
        category?._id,
        formData.title,
        icon
      );
      state = data.state;
    } else {
      const { data } = await insertCategoriesService({
        ...formData,
        ...{ parentId: parent?._id, icon },
      });
      state = data.state;
    }
    if (state) {
      setReload({ parent: parent?._id, date: Date.now() });
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (category?._id) {
      form.setFieldsValue(category);
      setIcon(category?.icon);
    } else {
      form.resetFields();
      setIcon(undefined);
    }
  }, [category]);
  return (
    <Modal open={isOpen} footer={null} onCancel={() => setIsOpen(false)}>
      <UploadFileComponent
        fileHandler={(file: any) => {
          console.log(`${BACKEND_URL}public/${icon}`);

          setIcon(file?.filename);
        }}
      >
        <Typography>انتخاب </Typography>
        {icon && (
          <SpaceStyled top={20}>
            <CenterStyled>
              <ReactSVG
                width={100}
                height={100}
                beforeInjection={(svg: any) => {
                  svg.classList.add("svg-class-name");
                  svg.setAttribute(
                    "style",
                    `width: 100% px ; margin-bottom:-5px`
                  );
                }}
                src={`${BACKEND_URL}public/${icon}`}
              />
            </CenterStyled>
          </SpaceStyled>
        )}
      </UploadFileComponent>
      <Form form={form} onFinish={upsertCategory} layout="vertical">
        <Form.Item label="عنوان" name={"title"}>
          <Input placeholder="عنوان دسته را وارد کنید..." />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default UpsertCategoryModal;
