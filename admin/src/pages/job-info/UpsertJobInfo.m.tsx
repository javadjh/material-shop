import { Button, Col, Form, Input, Modal, Row, Select, message } from "antd";
import { FC, useEffect } from "react";
import { IJobInfo } from "../../types/job-info.type";
import { CenterStyled, SpaceStyled } from "../../global-style/global.s";
import {
  insertJobInfoService,
  updateJobInfoService,
} from "../../service/job-info.service";

const UpsertJobInfoModal: FC<{
  data: IJobInfo;
  isOpen: boolean;
  setIsOpen: any;
  refreshData: any;
}> = ({ data, isOpen, setIsOpen, refreshData }) => {
  const [form] = Form.useForm();
  const upsertJobInfoHandler = async (formData: IJobInfo) => {
    formData = {
      ...formData,
      ...{ remainingEmployeeCount: Number(formData?.remainingEmployeeCount) },
    };

    if (data?._id) {
      const response = await updateJobInfoService(formData, data?.department);
      if (response.data?.state) message.success("ثبت شد");
    } else {
      const response = await insertJobInfoService(formData);
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
        <Form layout="vertical" onFinish={upsertJobInfoHandler} form={form}>
          <SpaceStyled vertical={20}>
            <Row>
              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="عنوان بخش" name={"department"}>
                    <input
                      className="form-control"
                      placeholder="عنوان بخش را وارد کنید "
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item
                    label="تعداد باقی مانده"
                    name={"remainingEmployeeCount"}
                  >
                    <input
                      className="form-control"
                      type="number"
                      placeholder="تعداد باقی مانده بخش را وارد کنید..."
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="جنسیت" name={"gender"}>
                    <Select>
                      <Select.Option key={"men"}>آقا</Select.Option>
                      <Select.Option key={"women"}>خانم</Select.Option>
                      <Select.Option key={"both"}>فرقی ندارد</Select.Option>
                    </Select>
                  </Form.Item>
                </SpaceStyled>
              </Col>
              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="شهر" name={"city"}>
                    <input
                      className="form-control"
                      placeholder="شهر را وارد کنید..."
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="آدرس" name={"location"}>
                    <input
                      className="form-control"
                      placeholder="آدرس را وارد کنید..."
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="بازه سنی" name={"ageRange"}>
                    <input
                      className="form-control"
                      placeholder="بازه سنی را وارد کنید..."
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item name={"minDegree"} label="حداقل مدرک تحصیلی">
                    <input
                      className="form-control"
                      placeholder="حداقل مدرک تحصیلی را وارد کنید..."
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item
                    label="مدرک تحصیلی مورد نیاز"
                    name={"requiredDegree"}
                  >
                    <input
                      className="form-control"
                      placeholder=" مدرک تحصیلی مورد نیاز را وارد کنید..."
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="سابقه کاری" name={"jobHistory"}>
                    <input
                      className="form-control"
                      placeholder=" سابقه کاری را وارد کنید..."
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="ساعت کاری" name={"clock"}>
                    <input
                      className="form-control"
                      placeholder=" ساعت کاری را وارد کنید..."
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="حقوق" name={"salary"}>
                    <input
                      className="form-control"
                      placeholder=" حقوق مورد نظر را وارد کنید..."
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="وظایف" name={"mission"}>
                    <input
                      className="form-control"
                      placeholder=" وظایف را وارد کنید..."
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
              <Col span={24}>
                <SpaceStyled horizontal={5}>
                  <Form.Item label="توضیحات" name={"description"}>
                    <textarea
                      className="form-control"
                      placeholder=" توضیحات را وارد کنید..."
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>
            </Row>
            <button
              className="btn btn-success px-5"
              onClick={(e) => {
                e.preventDefault();
                form.submit();
              }}
            >
              ثبت
            </button>
          </SpaceStyled>
        </Form>
      </div>
    </Modal>
  );
};
export default UpsertJobInfoModal;
