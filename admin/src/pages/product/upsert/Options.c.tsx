import { FC } from "react";
import { IOption } from "../../../types/option.type";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import {
  CenterStyled,
  PaddingStyled,
  SpaceStyled,
} from "../../../global-style/global.s";

const OptionsComponent: FC<{
  options: Array<IOption>;
  setOptions: any;
}> = ({ options, setOptions }) => {
  const [form] = Form.useForm();
  const onAddOption = async (formData: any) => {
    setOptions([...options, ...[formData]]);
    form?.resetFields();
  };
  const removeOption = async (record: any) => {
    let optionsCopy: Array<IOption> = [...options];
    optionsCopy = optionsCopy.filter((o) => o.key != record.key);
    setOptions(optionsCopy);
  };
  return (
    <>
      <Form form={form} onFinish={onAddOption}>
        <Row align={"bottom"}>
          <Col span={9}>
            <Form.Item name={"key"} label="عنوان">
              <input
                className="form-control"
                placeholder="عنوان را وارد کنید"
              />
            </Form.Item>
          </Col>
          <Col span={9} offset={1}>
            <Form.Item name={"value"} label="مقدار">
              <input
                className="form-control"
                placeholder="مقدار را وارد کنید"
              />
            </Form.Item>
          </Col>
          <Col span={4} offset={1}>
            <CenterStyled>
              <SpaceStyled bottom={-10}>
                <button
                  className="btn btn-light "
                  onClick={(e) => {
                    e.preventDefault();
                    form.submit();
                  }}
                >
                  افزودن
                </button>
              </SpaceStyled>
            </CenterStyled>
          </Col>
        </Row>
      </Form>
      <SpaceStyled top={20}>
        {options?.map((option, index) => (
          <PaddingStyled
            style={{ backgroundColor: index % 2 == 0 && "#4b5466" }}
            vertical={10}
            horizontal={10}
          >
            <Row align={"middle"}>
              <Col span={9}>
                <span>{option.key}</span>
              </Col>
              <Col span={9} offset={1}>
                {option.value}
              </Col>
              <Col span={4} offset={1}>
                <CenterStyled>
                  <a
                    onClick={() => removeOption(option)}
                    style={{ color: "red" }}
                  >
                    حذف
                  </a>
                </CenterStyled>
              </Col>
            </Row>
          </PaddingStyled>
        ))}
      </SpaceStyled>
    </>
  );
};
export default OptionsComponent;
