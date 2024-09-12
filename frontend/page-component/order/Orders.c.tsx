import { FC, useEffect, useState } from "react";
import { ordersService } from "../../service/order.service";
import {
  GrayBlockStyled,
  PaddingStyled,
  SpaceStyled,
} from "../../global-style/global.s";
import { Grid, Typography } from "@mui/joy";
import ImageServerComponent from "../../global-component/ImageServer.c";
import { WHITE_COLOR } from "../../config/colors";
import { WhiteText } from "../../global-component/Typography/WhiteText.t";
import { priceFormat } from "../../config/utility";
import ActionBorderComponent from "../../global-component/ActionBorder.c";
import { insertPaymentService } from "../../service/payment.service";

const OrdersComponent = () => {
  const [orders, setOrders] = useState<any>({ pageId: 1, eachPerPage: 12 });
  const [paging, setPaging] = useState<any>({ pageId: 1, eachPerPage: 12 });

  useEffect(() => {
    getDate();
  }, [paging]);

  const getDate = async () => {
    const {
      data: { data: res },
    } = await ordersService(paging);

    setOrders(res);
  };

  const insertPayment = async (order: any) => {
    await insertPaymentService({
      orderId: order?._id,
      paymentCode: Date.now().toString(),
      payedPrice: order?.totalPrice,
    });
    getDate();
  };

  return (
    <>
      {orders?.orders?.map((item: any) => (
        <SpaceStyled bottom={10}>
          <ActionBorderComponent isCenter={false}>
            <PaddingStyled right={10}>
              <Grid container justifyContent={"space-between"}>
                <Grid>
                  <p>جمع کل سفارش : {priceFormat(item?.totalPrice)}</p>
                  <Grid container>
                    <Grid container spacing={2}>
                      {item?.orderList?.map((order: any) => (
                        <Grid container spacing={2} alignItems={"center"}>
                          <Grid>
                            <ImageServerComponent
                              border={10}
                              image={order?.product?.image}
                              width={50}
                            />
                          </Grid>
                          <Grid>
                            <WhiteText>{order?.product?.title}</WhiteText>
                            <br />
                            <WhiteText>
                              قیمت : {priceFormat(order?.count * order?.price)}
                            </WhiteText>
                          </Grid>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid>
                  <SpaceStyled left={10} top={10}>
                    {!item?.isPayed ? (
                      <div onClick={() => insertPayment(item)}>
                        <ActionBorderComponent isFill={true} isSelected={true}>
                          <SpaceStyled horizontal={20}>پرداخت</SpaceStyled>
                        </ActionBorderComponent>
                      </div>
                    ) : (
                      <Typography>پرداخت شد</Typography>
                    )}
                  </SpaceStyled>
                </Grid>
              </Grid>
            </PaddingStyled>
          </ActionBorderComponent>
        </SpaceStyled>
      ))}
    </>
  );
};
export default OrdersComponent;
