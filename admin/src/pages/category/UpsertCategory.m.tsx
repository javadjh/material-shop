import { FC, useEffect } from "react";
import { ICategory, IInsertCategory } from "../../types/category.type";
import { Form, Input, Modal } from "antd";
import {
  insertCategoriesService,
  upsertCategoriesService,
} from "../../service/category.service";
import { useCategoryContext } from "./category.context";

const UpsertCategoryModal: FC<{
  category?: ICategory;
  parent?: ICategory;
}> = ({ category, parent }) => {
  const [form] = Form.useForm();
  const { setReload, setIsOpen, isOpen } = useCategoryContext();
  const upsertCategory = async (formData: IInsertCategory) => {
    let state = false;
    if (category?._id) {
      const { data } = await upsertCategoriesService(
        category?._id,
        formData.title
      );
      state = data.state;
    } else {
      const { data } = await insertCategoriesService({
        ...formData,
        ...{ parentId: parent?._id },
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
    } else {
      form.resetFields();
    }
  }, [category]);
  return (
    <Modal open={isOpen} footer={null} onCancel={() => setIsOpen(false)}>
      <Form form={form} onFinish={upsertCategory} layout="vertical">
        <Form.Item label="عنوان" name={"title"}>
          <Input placeholder="عنوان دسته را وارد کنید..." />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default UpsertCategoryModal;
