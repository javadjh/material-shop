import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Typography,
  message,
} from "antd";
import { FC, useEffect, useState } from "react";
import { CenterStyled, SpaceStyled } from "../../global-style/global.s";
import { ITeam } from "../../types/team.type";
import {
  insertTeamService,
  updateTeamService,
} from "../../service/team.service";
import LocationPickerComponent from "../../components/LocationPicker.c";
import { UploadFileComponent } from "../../components/UploadFile.c";
import ImageServerComponent from "../../components/ImageServer.c";

const UpsertTeamModal: FC<{
  isOpen: boolean;
  setIsOpen: any;
  data: ITeam;
  refreshData: any;
}> = ({ isOpen, setIsOpen, data, refreshData }) => {
  const [image, setImage] = useState<number | undefined>();
  const [form] = Form.useForm();
  const upsertTeamHandler = async (formData: any) => {
    if (!image) return message.warning("تصویر را انتخاب کنید");
    if (data?._id) {
      const response = await updateTeamService(
        { ...formData, ...{ image } },
        data?._id
      );
      if (response.data?.state) message.success("ثبت شد");
    } else {
      const response = await insertTeamService({
        ...formData,
        ...{ image },
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
        <Form layout="vertical" onFinish={upsertTeamHandler} form={form}>
          <SpaceStyled vertical={20}>
            <CenterStyled>
              <UploadFileComponent
                size="256*256"
                fileHandler={(file: any) => setImage(file?.filename)}
              >
                {image ? (
                  <ImageServerComponent image={image} />
                ) : (
                  <Typography.Text>آپلود تصویر</Typography.Text>
                )}
              </UploadFileComponent>
            </CenterStyled>
            <Row>
              <Col span={24}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="نام و نام خانوادگی" name={"fullName"}>
                    <input
                      className="form-control"
                      placeholder="نام و نام خانوادگی را وارد کنید "
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
                  <Form.Item label="توییتر" name={"twitter"}>
                    <input
                      className="form-control"
                      placeholder="توییتر را وارد کنید "
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>

              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="واتس اپ" name={"whatsapp"}>
                    <input
                      className="form-control"
                      placeholder="واتس اپ را وارد کنید "
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>

              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="لیندکدین" name={"linkedin"}>
                    <input
                      className="form-control"
                      placeholder="لیندکدین را وارد کنید "
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>

              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="سمت" name={"position"}>
                    <input
                      className="form-control"
                      placeholder="سمت را وارد کنید "
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
            </Row>
            <button className="btn btn-success">ثبت</button>
          </SpaceStyled>
        </Form>
      </div>
    </Modal>
  );
};
export default UpsertTeamModal;
