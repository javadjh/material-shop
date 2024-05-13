import { Button, Col, Row, Typography } from "antd";
import { SpaceStyled } from "../../global-style/global.s";
import { Link } from "react-router-dom";
import ProductsComponent from "./Products.c";

const Product = () => {
  return (
    <SpaceStyled>
      <Row align={"middle"} justify={"space-between"}>
        <Col>
          <Typography.Text>محصولات</Typography.Text>
        </Col>
        <Col>
          <Link to={"/upsert-product"}>
            <Button type="primary">افزودن محصول جدید</Button>
          </Link>
        </Col>
      </Row>
      <ProductsComponent />
    </SpaceStyled>
  );
};
export default Product;
