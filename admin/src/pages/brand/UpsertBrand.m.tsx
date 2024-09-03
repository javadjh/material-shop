import { Button, Form, Input, Modal, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import { IBrand } from "../../types/brand.type";
import { CenterStyled, SpaceStyled } from "../../global-style/global.s";
import { UploadFileComponent } from "../../components/UploadFile.c";
import ImageServerComponent from "../../components/ImageServer.c";
import {
  insertBrandService,
  updateBrandService,
} from "../../service/brand.service";

const UpsertBrandModal: FC<{
  data: IBrand;
  isOpen: boolean;
  setIsOpen: any;
  refreshData: any;
}> = ({ data, isOpen, setIsOpen, refreshData }) => {
  const [form] = Form.useForm();
  const [logo, setLogo] = useState<string | any>(data?.logo);
  useEffect(() => {
    if (data?._id) {
      form.setFieldsValue(data);
      setLogo(data?.logo);
    } else {
      form.resetFields();
      setLogo(undefined);
    }
  }, [data]);
  const upsertBrandHandler = async (formData: IBrand) => {
    if (logo) {
      if (data._id) {
        const res = await updateBrandService(data?._id, { ...formData, logo });
        console.log(res);
      } else {
        const res = await insertBrandService({ ...formData, logo });
        console.log(res);
      }
      form.resetFields();
      setLogo(undefined);
      setIsOpen(false);
      refreshData();
    }
  };
  return (
    <Modal open={isOpen} footer={null} onCancel={() => setIsOpen(false)}>
      <Form onFinish={upsertBrandHandler} form={form}>
        <SpaceStyled vertical={20}>
          <CenterStyled>
            <UploadFileComponent
              fileHandler={(file: any) => {
                setLogo(file?.filename);
              }}
            >
              {logo ? (
                <ImageServerComponent point image={logo} />
              ) : (
                <Button>تصویر انتخاب </Button>
              )}
            </UploadFileComponent>
            <Form.Item name={"title"}>
              <input
                className="form-control"
                placeholder="عنوان برند را وارد کنید"
              />
            </Form.Item>
            <button
              className="btn btn-success"
              onClick={(e) => {
                e.preventDefault();
                form.submit();
              }}
            >
              ثبت
            </button>
          </CenterStyled>
        </SpaceStyled>
      </Form>
    </Modal>
  );
};
export default UpsertBrandModal;
