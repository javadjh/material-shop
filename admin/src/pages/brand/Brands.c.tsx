import { Card, Col, Row, Typography } from "antd";
import { IBrand } from "../../types/brand.type";
import { FC } from "react";
import {
  CenterStyled,
  Pointer,
  SpaceStyled,
  WhiteP,
} from "../../global-style/global.s";
import ImageServerComponent from "../../components/ImageServer.c";
import { BrandItemContainerStyled } from "./brand.styles";

const BrandsComponent: FC<{
  setIsOpen: any;
  setBrandData: any;
  brands: Array<IBrand>;
}> = ({ brands, setBrandData, setIsOpen }) => {
  const onClickHandler = (brand: IBrand) => {
    setIsOpen(true);
    setBrandData(brand);
  };
  return (
    <Row>
      {brands?.map((brand: IBrand) => (
        <Col onClick={() => onClickHandler(brand)} span={4}>
          <Pointer>
            <BrandItemContainerStyled>
              <SpaceStyled horizontal={5} vertical={5}>
                <div className="card">
                  <ImageServerComponent
                    image={brand?.logo}
                    aspectRatio={1 / 1}
                    objectFit={"cover"}
                  />
                  <SpaceStyled top={10}>
                    <CenterStyled>
                      <WhiteP>{brand?.title}</WhiteP>
                    </CenterStyled>
                  </SpaceStyled>
                </div>
              </SpaceStyled>
            </BrandItemContainerStyled>
          </Pointer>
        </Col>
      ))}
    </Row>
  );
};
export default BrandsComponent;
