import { Col, Row } from "antd";
import { SpaceStyled } from "../../global-style/global.s";
import { Link } from "react-router-dom";
import OrdersComponent from "./Orders.c";
import { useState } from "react";
import OrderDetailModal from "./OrderDetail.m";

const Order = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [order, setOrder] = useState<any>({});

  const showModal = (orderItem: any) => {
    setOrder(orderItem);
    setIsOpen(true);
  };
  return (
    <SpaceStyled>
      <OrderDetailModal isOpen={isOpen} setIsOpen={setIsOpen} order={order} />
      <SpaceStyled horizontal={30} vertical={10}>
        <Row align={"middle"} justify={"space-between"}>
          <Col>
            <h4 className="mt-2">محصولات</h4>
          </Col>
          <Col></Col>
        </Row>
      </SpaceStyled>
      <OrdersComponent showModal={showModal} />
    </SpaceStyled>
  );
};
export default Order;
