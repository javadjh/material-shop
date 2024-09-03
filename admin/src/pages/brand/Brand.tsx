import { useEffect, useState } from "react";
import { brandsService } from "../../service/brand.service";
import { IBrand } from "../../types/brand.type";
import BrandsComponent from "./Brands.c";
import { Button, Col, Row, Typography } from "antd";
import { SpaceStyled } from "../../global-style/global.s";
import UpsertBrandModal from "./UpsertBrand.m";

const Brand = () => {
  const [brands, setBrands] = useState<Array<IBrand>>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [brandData, setBrandData] = useState<IBrand>({});
  const getBrands = async () => {
    const {
      data: { data: response },
    } = await brandsService();
    setBrands(response);
  };
  useEffect(() => {
    getBrands();
  }, []);
  const onOpenInsertBrand = () => {
    setBrandData({});
    setIsOpen(true);
  };
  return (
    <>
      <UpsertBrandModal
        refreshData={getBrands}
        data={brandData}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <SpaceStyled horizontal={5}>
        <Row align={"middle"} justify={"space-between"}>
          <Col>
            <h4>برند ها</h4>
          </Col>
          <Col>
            <SpaceStyled top={-10}>
              <button
                className="btn btn-success"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenInsertBrand();
                }}
              >
                افزودن برند جدید
              </button>
            </SpaceStyled>
          </Col>
        </Row>
      </SpaceStyled>
      <BrandsComponent
        setIsOpen={setIsOpen}
        setBrandData={setBrandData}
        brands={brands}
      />
    </>
  );
};
export default Brand;
