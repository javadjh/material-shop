import { Button, Col, Form, Input, Modal, Row, Select, message } from "antd";
import { FC, useEffect, useState } from "react";
import { SpaceStyled } from "../../global-style/global.s";
import { ISeller } from "../../types/seller.type";
import {
  insertSellerService,
  updateSellerService,
} from "../../service/seller.service";
import LocationPickerComponent from "../../components/LocationPicker.c";

const UpsertSellerModal: FC<{
  isOpen: boolean;
  setIsOpen: any;
  data: ISeller;
  refreshData: any;
}> = ({ isOpen, setIsOpen, data, refreshData }) => {
  const [cityId, setCityId] = useState<number | undefined>();
  const [form] = Form.useForm();
  const upsertSellerHandler = async (formData: ISeller) => {
    if (!cityId) return message.warning("شهر را انتخاب کنید");
    if (data?._id) {
      const response = await updateSellerService(
        { ...formData, ...{ cityId } },
        data?._id
      );
      if (response.data?.state) message.success("ثبت شد");
    } else {
      const response = await insertSellerService({
        ...formData,
        ...{ cityId },
      });
      if (response.data?.state) message.success("بروز شد");
    }
    setIsOpen(false);
    refreshData();
  };
  useEffect(() => {
    if (data?._id) {
      form.setFieldsValue(data);
    } else {
      form.resetFields();
    }
  }, [data]);
  return (
    <Modal
      open={isOpen}
      footer={null}
      onCancel={() => setIsOpen(false)}
      width={"40%"}
    >
      <div dir="rtl">
        <Form layout="vertical" onFinish={upsertSellerHandler} form={form}>
          <SpaceStyled vertical={20}>
            <Row>
              <Col span={24}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="عنوان" name={"title"}>
                    <input
                      className="form-control"
                      placeholder="عنوان را وارد کنید "
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="شماره اول" name={"firstNumber"}>
                    <input
                      className="form-control"
                      placeholder="شماره اول را وارد کنید "
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="شماره دوم" name={"secondNumber"}>
                    <input
                      className="form-control"
                      placeholder="شماره دوم را وارد کنید "
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="وب سایت" name={"website"}>
                    <input
                      className="form-control"
                      placeholder="وب سایت را وارد کنید "
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="اینستاگرام" name={"instagram"}>
                    <input
                      className="form-control"
                      placeholder="اینستاگرام را وارد کنید "
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="تلگرام" name={"telegram"}>
                    <input
                      className="form-control"
                      placeholder="تلگرام را وارد کنید "
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="بخش" name={"sellerDepartment"}>
                    <select className="form-select">
                      <option key={"material"}>material</option>
                      <option key={"tool"}>tool</option>
                      <option key={"iron-wood"}>iron-wood</option>
                      <option key={"stone-ceramic"}>stone-ceramic</option>
                      <option key={"electrical-water-facilities"}>
                        electrical-water-facilities
                      </option>
                    </select>
                  </Form.Item>
                </SpaceStyled>
              </Col>
              <Col span={24}>
                <SpaceStyled bottom={20}>
                  <LocationPickerComponent
                    onCitySelected={(cityId) => setCityId(cityId)}
                  />
                </SpaceStyled>
              </Col>
              <Col span={24}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="آدرس" name={"address"}>
                    <input
                      className="form-control"
                      placeholder="آدرس را وارد کنید "
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
            </Row>
            <Button htmlType="submit" type="primary">
              ثبت
            </Button>
          </SpaceStyled>
        </Form>
      </div>
    </Modal>
  );
};
export default UpsertSellerModal;
