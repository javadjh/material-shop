import { Button, Col, Row, Typography } from "antd";
import {
  CenterStyled,
  CenterVerticalStyled,
  SpaceStyled,
} from "../../global-style/global.s";
import { Link } from "react-router-dom";
import ProductsComponent from "./Products.c";

const Product = () => {
  return (
    <SpaceStyled>
      <SpaceStyled horizontal={30} vertical={10}>
        <Row align={"middle"} justify={"space-between"}>
          <Col>
            <h4 className="mt-2">محصولات</h4>
          </Col>
          <Col>
            <Link to={"/upsert-product"}>
              <button type="button" className="btn btn-success">
                افزودن محصول جدید
              </button>
            </Link>
          </Col>
        </Row>
      </SpaceStyled>
      <ProductsComponent />
    </SpaceStyled>
  );
};
export default Product;
