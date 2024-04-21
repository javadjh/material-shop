import { Button, Card, Col, Form, Input, Row } from "antd";
import { CenterStyled, SpaceStyled } from "../../global-style/global.s";
import { FC } from "react";

const LoginBoxComponent: FC<{ login: any }> = ({ login }) => {
  return (
    <Col span={8}>
      <Card>
        <SpaceStyled vertical={20}>
          <SpaceStyled bottom={20}>
            <CenterStyled>
              <h2>فرم ورود </h2>
            </CenterStyled>
          </SpaceStyled>
          <Form onFinish={login} layout="vertical">
            <Form.Item name="phone" label="شماره تماس">
              <Input placeholder="شماره تماس را وارد کنید..." />
            </Form.Item>
            <Form.Item name="password" label="کلمه عبور">
              <Input.Password
                type="password"
                placeholder="کلمه عبور را وارد کنید..."
              />
            </Form.Item>
            <Button htmlType="submit" type="primary">
              ورود
            </Button>
          </Form>
        </SpaceStyled>
      </Card>
    </Col>
  );
};
export default LoginBoxComponent;
