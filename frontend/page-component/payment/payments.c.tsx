import { FC, useEffect, useState } from "react";
import { paymentsService } from "../../service/payment.service";
import { PaddingStyled, SpaceStyled } from "../../global-style/global.s";
import { Grid, Typography } from "@mui/joy";
import ImageServerComponent from "../../global-component/ImageServer.c";
import { WhiteText } from "../../global-component/Typography/WhiteText.t";
import { priceFormat } from "../../config/utility";
import { insertPaymentService } from "../../service/payment.service";
import ActionBorderComponent from "../../global-component/ActionBorder.c";

const PaymentsComponent = () => {
  const [payments, setPayments] = useState<any>({ pageId: 1, eachPerPage: 12 });
  const [paging, setPaging] = useState<any>({ pageId: 1, eachPerPage: 12 });

  useEffect(() => {
    getDate();
  }, [paging]);

  const getDate = async () => {
    const {
      data: { data: res },
    } = await paymentsService(paging);

    setPayments(res);
  };

  const insertPayment = async (payment: any) => {
    await insertPaymentService({
      paymentId: payment?._id,
      paymentCode: Date.now().toString(),
      payedPrice: payment?.totalPrice,
    });
    getDate();
  };

  return (
    <>
      {payments?.payments?.map((item: any) => (
        <SpaceStyled bottom={10}>
          <ActionBorderComponent isCenter={false}>
            <PaddingStyled right={10}>
              <Grid container justifyContent={"space-between"}>
                <Grid>
                  <span>تاریخ پرداختی : {item?.createdAt}</span>

                  <p>اقلام : </p>
                  <Grid container>
                    <Grid container spacing={2}>
                      {item?.order?.orderList?.map((order: any) => (
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
                    <span>
                      جمع کل پرداختی : {priceFormat(item?.payedPrice)}
                    </span>
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
export default PaymentsComponent;
