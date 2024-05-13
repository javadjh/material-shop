import { useEffect, useState } from "react";
import { ISeller } from "../../types/seller.type";
import { SpaceStyled } from "../../global-style/global.s";
import { Button, Col, Row, Typography } from "antd";
import SellersComponent from "./Sellers.c";
import { sellersService } from "../../service/seller.service";
import UpsertSellerModal from "./UpsertSeller.m";

export const Seller = () => {
  const [sellers, setSellers] = useState<{
    sellers: Array<ISeller>;
    totla: number;
  }>();
  const [sellersData, setSellersData] = useState<ISeller>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [paging, setPaging] = useState<{ pageId: number; eachPerPage: number }>(
    {
      pageId: 1,
      eachPerPage: 2,
    }
  );
  useEffect(() => {
    getSellers();
  }, [paging]);

  const getSellers = async () => {
    const { data } = await sellersService(paging);

    setSellers(data.data);
  };
  const onOpenModalHandler = () => {
    setSellersData({});
    setIsOpen(true);
  };
  const onClickEditListener = (seller: ISeller) => {
    setSellersData(seller);
    setIsOpen(true);
  };
  return (
    <>
      <UpsertSellerModal
        data={sellersData}
        isOpen={isOpen}
        refreshData={getSellers}
        setIsOpen={setIsOpen}
      />
      <SpaceStyled horizontal={5} vertical={10}>
        <Row align={"middle"} justify={"space-between"}>
          <Col>
            <SpaceStyled horizontal={5}>
              <Typography.Text>فروشندگان</Typography.Text>
            </SpaceStyled>
          </Col>
          <Col>
            <Button type="primary" onClick={onOpenModalHandler}>
              افزودن فروشند جدید
            </Button>
          </Col>
        </Row>
      </SpaceStyled>
      <SellersComponent
        paging={paging}
        sellers={sellers}
        setPaging={setPaging}
        onClickEditListener={onClickEditListener}
      />
    </>
  );
};
export default Seller;
