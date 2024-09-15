import { FC } from "react";
import { ICar } from "../../../types/car.type";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import {
  CenterStyled,
  PaddingStyled,
  SpaceStyled,
} from "../../../global-style/global.s";

const CarsComponent: FC<{
  cars: Array<ICar>;
  setCars: any;
}> = ({ cars, setCars }) => {
  const [form] = Form.useForm();
  const onAddOption = async (formData: any) => {
    setCars([...cars, ...[formData]]);
    form?.resetFields();
  };
  const removeOption = async (record: any) => {
    let carsCopy: Array<ICar> = [...cars];
    carsCopy = carsCopy.filter((o) => o.carType != record.carType);
    setCars(carsCopy);
  };
  return (
    <>
      <Form form={form} onFinish={onAddOption}>
        <Row align={"bottom"}>
          <Col span={9}>
            <Form.Item name={"carType"} label="نام ماشین">
              <input
                className="form-control"
                placeholder="نام ماشین را وارد کنید"
              />
            </Form.Item>
          </Col>
          <Col span={9} offset={1}>
            <Form.Item name={"count"} label="تعداد">
              <input
                className="form-control"
                type="number"
                placeholder="تعداد را وارد کنید"
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
        {cars?.map((car, index) => (
          <PaddingStyled
            style={{ backgroundColor: index % 2 == 0 && "#4b5466" }}
            vertical={10}
            horizontal={10}
          >
            <Row align={"middle"}>
              <Col span={9}>{car.carType}</Col>
              <Col span={9} offset={1}>
                {car.count}
              </Col>
              <Col span={4} offset={1}>
                <CenterStyled>
                  <Typography.Link
                    onClick={() => removeOption(car)}
                    style={{ color: "red" }}
                  >
                    حذف
                  </Typography.Link>
                </CenterStyled>
              </Col>
            </Row>
          </PaddingStyled>
        ))}
      </SpaceStyled>
    </>
  );
};
export default CarsComponent;
