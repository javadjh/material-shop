import { Button, Col, Divider, Form, Input, Row, message } from "antd";
import {
  getAppSettingService,
  updateAppSettingService,
} from "../../service/app-setting";
import { useEffect, useState } from "react";
import {
  CenterStyled,
  Pointer,
  SpaceStyled,
  WhiteP,
} from "../../global-style/global.s";
import { UploadFileComponent } from "../../components/UploadFile.c";
import ImageServerComponent from "../../components/ImageServer.c";

const AppSetting = () => {
  const [form] = Form.useForm();
  const [banner, setBanner] = useState<string>();
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
      <Row justify={"space-between"}>
        <Col></Col>
        <Col>
          <button className="btn btn-success">بروزرسانی</button>
        </Col>
      </Row>
      <CenterStyled>
        <WhiteP>شبکه های اجتماعی</WhiteP>
      </CenterStyled>
      <Row>
        <Col span={11}>
          <Form.Item name={"instagram"} label="آدرس اینستاگرام ">
            <input className="form-control" />
          </Form.Item>
        </Col>
        <Col span={11} offset={1}>
          <Form.Item name="twitter" label="آدرس توییتر ">
            <input className="form-control" />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item name="whatsapp" label="آدرس واتس اپ ">
            <input className="form-control" />
          </Form.Item>
        </Col>
        <Col span={11} offset={1}>
          <Form.Item name="pinterest" label="آدرس پینترس ">
            <input className="form-control" />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item name="linkedin" label="آدرس لینکدین ">
            <input className="form-control" />
          </Form.Item>
        </Col>
        <Col span={11} offset={1}>
          <Form.Item name="telegram" label="آدرس تلگرام ">
            <input className="form-control" />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item name="youtube" label="آدرس یوتوب ">
            <input className="form-control" />
          </Form.Item>
        </Col>
      </Row>
      <CenterStyled>
        <WhiteP>اپ</WhiteP>
      </CenterStyled>
      <Row>
        <Col span={11}>
          <Form.Item name="bazazr" label="آدرس اپ کافه بازار ">
            <input className="form-control" />
          </Form.Item>
        </Col>
        <Col span={11} offset={1}>
          <Form.Item name="myket" label="آدرس اپ مایکت ">
            <input className="form-control" />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item name="link" label="آدرس لینک مستقیم ">
            <input className="form-control" />
          </Form.Item>
        </Col>
        <Col span={11} offset={1}>
          <Form.Item name="sibche" label="آدرس سیبچه ">
            <input className="form-control" />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item name="sibapp" label="آدرس سیب اپ ">
            <input className="form-control" />
          </Form.Item>
        </Col>
        <Col span={11} offset={1}>
          <Form.Item name="webapp" label="آدرس وب اپلیکیشن ">
            <input className="form-control" />
          </Form.Item>
        </Col>
      </Row>
      <CenterStyled>
        <WhiteP>تماس با ما</WhiteP>
      </CenterStyled>

      <Row>
        <Col span={11}>
          <Form.Item name="firstAddress" label="آدرس اول">
            <input className="form-control" />
          </Form.Item>
        </Col>

        <Col span={11} offset={1}>
          <Form.Item name="firstTell" label="شماره تماس اول ">
            <input className="form-control" />
          </Form.Item>
        </Col>

        <Col span={11}>
          <Form.Item name="secondAddress" label="آدرس دوم">
            <input className="form-control" />
          </Form.Item>
        </Col>

        <Col span={11} offset={1}>
          <Form.Item name="secondTell" label="شماره تماس دوم ">
            <input className="form-control" />
          </Form.Item>
        </Col>

        <Col span={11}>
          <Form.Item name="thirdAddress" label="آدرس سوم ">
            <input className="form-control" />
          </Form.Item>
        </Col>

        <Col span={11} offset={1}>
          <Form.Item name="thirdTell" label="شماره تماس سوم">
            <input className="form-control" />
          </Form.Item>
        </Col>
      </Row>

      <CenterStyled>
        <WhiteP>بنر</WhiteP>
      </CenterStyled>

      <UploadFileComponent
        size={"1920*90"}
        fileHandler={(e: any) => {
          console.log(e.filename);

          form.setFieldValue("banner", e.filename);
          setBanner(e.filename);
          console.log(form?.getFieldValue("banner"));
        }}
      >
        {banner ? (
          <CenterStyled>
            <ImageServerComponent
              image={form?.getFieldValue("banner")}
              width={"100%"}
            />
          </CenterStyled>
        ) : (
          <CenterStyled>
            <Pointer>
              <img src="/banner-placeholder.jpg" width={"100%"} />
            </Pointer>
          </CenterStyled>
        )}
      </UploadFileComponent>
      <Form.Item name="bannerLink" label="لینک بنر">
        <input className="form-control" />
      </Form.Item>
      <Form.Item name="location" label="لینک گوگل مپ">
        <input className="form-control" />
      </Form.Item>
      <Form.Item name="banner" />
    </Form>
  );
};
export default AppSetting;
