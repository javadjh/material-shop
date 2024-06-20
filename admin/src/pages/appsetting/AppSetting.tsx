import { Button, Col, Divider, Form, Input, Row, message } from "antd";
import {
  getAppSettingService,
  updateAppSettingService,
} from "../../service/app-setting";
import { useEffect } from "react";
import { SpaceStyled } from "../../global-style/global.s";
import { UploadFileComponent } from "../../components/UploadFile.c";

const AppSetting = () => {
  const [form] = Form.useForm();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const {
      data: { data: res },
    } = await getAppSettingService();
    form.setFieldsValue(res.data);
  };
  const onUpdateAppSetting = async (formData: any) => {
    await updateAppSettingService(formData);
    message.success("ثبت شد");
  };
  return (
    <Form form={form} onFinish={onUpdateAppSetting} layout="vertical">
      <Row>
        <Divider>شبکه های اجتماعی</Divider>
        <Col span={11} offset={1}>
          <Form.Item name={"instagram"} label="آدرس اینستاگرام ">
            <Input />
          </Form.Item>
        </Col>
        <Col span={11} offset={1}>
          <Form.Item name="twitter" label="آدرس توییتر ">
            <Input />
          </Form.Item>
        </Col>
        <Col span={11} offset={1}>
          <Form.Item name="whatsapp" label="آدرس واتس اپ ">
            <Input />
          </Form.Item>
        </Col>
        <Col span={11} offset={1}>
          <Form.Item name="pinterest" label="آدرس پینترس ">
            <Input />
          </Form.Item>
        </Col>
        <Col span={11} offset={1}>
          <Form.Item name="linkedin" label="آدرس لینکدین ">
            <Input />
          </Form.Item>
        </Col>
        <Col span={11} offset={1}>
          <Form.Item name="telegram" label="آدرس تلگرام ">
            <Input />
          </Form.Item>
        </Col>
        <Col span={11} offset={1}>
          <Form.Item name="youtube" label="آدرس یوتوب ">
            <Input />
          </Form.Item>
        </Col>
        <Divider>اپ</Divider>
        <Col span={11} offset={1}>
          <Form.Item name="bazazr" label="آدرس اپ کافه بازار ">
            <Input />
          </Form.Item>
        </Col>
        <Col span={11} offset={1}>
          <Form.Item name="myket" label="آدرس اپ مایکت ">
            <Input />
          </Form.Item>
        </Col>
        <Col span={11} offset={1}>
          <Form.Item name="link" label="آدرس لینک مستقیم ">
            <Input />
          </Form.Item>
        </Col>
        <Col span={11} offset={1}>
          <Form.Item name="sibche" label="آدرس سیبچه ">
            <Input />
          </Form.Item>
        </Col>
        <Col span={11} offset={1}>
          <Form.Item name="sibapp" label="آدرس سیب اپ ">
            <Input />
          </Form.Item>
        </Col>
        <Col span={11} offset={1}>
          <Form.Item name="webapp" label="آدرس وب اپلیکیشن ">
            <Input />
          </Form.Item>
        </Col>
        <Divider>بنر</Divider>
        <SpaceStyled vertical={20} right={50}>
          <UploadFileComponent
            fileHandler={(e: any) => {
              console.log(e.filename);

              form.setFieldValue("banner", e.filename);
            }}
          >
            آپلود بنر
          </UploadFileComponent>
        </SpaceStyled>
      </Row>
      <Form.Item name="banner" />
      <SpaceStyled right={60}>
        <Button type="primary" htmlType="submit">
          بروزرسانی
        </Button>
      </SpaceStyled>
    </Form>
  );
};
export default AppSetting;
