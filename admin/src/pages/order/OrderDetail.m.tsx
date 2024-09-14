import { Col, Grid, Modal, Row } from "antd";
import { FC } from "react";
import { SpaceStyled } from "../../global-style/global.s";
import ImageServerComponent from "../../components/ImageServer.c";
import { priceFormat } from "../../utility/utility";

const OrderDetailModal: FC<{
  isOpen?: boolean;
  setIsOpen?: any;
  order?: any;
}> = ({ isOpen, setIsOpen, order }) => {
  return (
    <Modal
      open={isOpen}
      footer={null}
      width={"60%"}
      onCancel={() => setIsOpen(false)}
    >
      <SpaceStyled top={40} horizontal={20}>
        <div dir="rtl">
          {order?.isPayed && order?.payment?._id && (
            <div className="card mb-5 p-3">
              <Row justify={"space-between"}>
                <Col>
                  <SpaceStyled>
                    <span>تاریخ پرداخت : {order?.payment?.createdAt}</span>
                  </SpaceStyled>
                </Col>
                <Col>
                  <SpaceStyled>
                    <span>
                      مبلغ پرداختی : {priceFormat(order?.payment?.payedPrice)}
                    </span>
                  </SpaceStyled>
                </Col>
                <Col>
                  <SpaceStyled>
                    <span>شناسه پرداخت : {order?.payment?.paymentCode}</span>
                  </SpaceStyled>
                </Col>
              </Row>
            </div>
          )}
          <Row>
            {order?.orderList?.map((item: any) => (
              <Col span={12}>
                <div className="card mb-2 me-3">
                  <Row align={"middle"}>
                    <Col>
                      <SpaceStyled left={10}>
                        <ImageServerComponent
                          image={item?.product?.image}
                          width={120}
                          aspectRatio={1 / 1}
                        />
                      </SpaceStyled>
                    </Col>
                    <Col>
                      <SpaceStyled left={10}>
                        <span>{item?.product?.title}</span>
                        <br />
                        <span>قیمت واحد: {priceFormat(item?.price)}</span>
                        <br />
                        <span>تعداد: {item?.count}</span>
                        <br />
                        <span>
                          قیمت کل: {priceFormat(item?.price * item?.count)}
                        </span>
                      </SpaceStyled>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </SpaceStyled>
    </Modal>
  );
};
export default OrderDetailModal;
