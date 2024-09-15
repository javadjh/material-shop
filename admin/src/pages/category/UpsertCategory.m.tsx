import { FC, useEffect, useState } from "react";
import { ICategory, IInsertCategory } from "../../types/category.type";
import { Button, Col, Form, Input, Modal, Row, Typography } from "antd";
import {
  getCategoriesService,
  insertCategoriesService,
  upsertCategoriesService,
} from "../../service/category.service";
import { useCategoryContext } from "./category.context";
import { UploadFileComponent } from "../../components/UploadFile.c";
import { ReactSVG } from "react-svg";
import { BACKEND_URL } from "../../service/APIRoutes";
import {
  CenterStyled,
  Pointer,
  SpaceStyled,
} from "../../global-style/global.s";

const UpsertCategoryModal: FC<{
  category?: ICategory;
  parent?: ICategory;
}> = ({ category, parent }) => {
  const [form] = Form.useForm();
  const { setIsOpen, isOpen, setParent, setCategories } = useCategoryContext();
  let [icon, setIcon] = useState<string | any>("");
  const upsertCategory = async (formData: IInsertCategory) => {
    let state = false;
    if (category?._id) {
      const { data } = await upsertCategoriesService(
        category?._id,
        formData.title,
        icon,
        Number(formData.index)
      );
      state = data.state;
    } else {
      const { data } = await insertCategoriesService({
        ...formData,
        ...{ parentId: parent?._id, icon, index: Number(formData.index) },
      });
      state = data.state;
    }
    if (state) {
      // setReload({ parent: parent?._id, date: Date.now() });
      setIsOpen(false);
      const {
        data: { data: response },
      } = await getCategoriesService(parent?._id);
      console.log(response.list);

      setCategories(response?.list);
      // setParent(parent?._id);
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
      <div dir="rtl">
        <UploadFileComponent
          size="128*128"
          fileHandler={(file: any) => {
            console.log(`${BACKEND_URL}public/${icon}`);

            setIcon(file?.filename);
          }}
        >
          {icon ? (
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
          ) : (
            <CenterStyled>
              <Pointer>
                <img src="placeholder.jpg" width={200} />
              </Pointer>
            </CenterStyled>
          )}
        </UploadFileComponent>
        <Form form={form} onFinish={upsertCategory} layout="vertical">
          <Row>
            <Col span={4}>
              <Form.Item label="ردیف" name={"index"}>
                <input
                  className="form-control"
                  type="number"
                  placeholder="ردیف دسته را وارد کنید..."
                />
              </Form.Item>
            </Col>
            <Col offset={1} span={19}>
              <Form.Item label="عنوان" name={"title"}>
                <input
                  className="form-control"
                  placeholder="عنوان دسته را وارد کنید..."
                />
              </Form.Item>
            </Col>
          </Row>
          <button className="btn btn-success">ثبت</button>
        </Form>
      </div>
    </Modal>
  );
};
export default UpsertCategoryModal;
