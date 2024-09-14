import { Col, Row } from "antd";
import { SpaceStyled } from "../../global-style/global.s";
import { Link } from "react-router-dom";
import PaymentsComponent from "./Payments.c";
import { useState } from "react";
import PaymentDetailModal from "./PaymentDetail.m";

const Payment = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [payment, setPayment] = useState<any>({});

  const showModal = (paymentItem: any) => {
    setPayment(paymentItem);
    setIsOpen(true);
  };
  return (
    <SpaceStyled>
      <PaymentDetailModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        payment={payment}
      />
      <SpaceStyled horizontal={30} vertical={10}>
        <Row align={"middle"} justify={"space-between"}>
          <Col>
            <h4 className="mt-2">محصولات</h4>
          </Col>
          <Col></Col>
        </Row>
      </SpaceStyled>
      <PaymentsComponent showModal={showModal} />
    </SpaceStyled>
  );
};
export default Payment;
