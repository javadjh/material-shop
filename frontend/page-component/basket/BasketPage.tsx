import { Grid } from "@mui/joy";
import { PaddingStyled, SpaceStyled } from "../../global-style/global.s";
import RightMenu from "../../layout/RightMenu";
import Baskets from "./Baskets";
import styled from "styled-components";
import { GRAY_COLOR } from "../../config/colors";
import { WhiteText } from "../../global-component/Typography/WhiteText.t";
import { useEffect, useState } from "react";
import { deleteBasket, getBaskets } from "../../service/basket.service";
import { priceFormat } from "../../config/utility";
import ActionBorderComponent from "../../global-component/ActionBorder.c";
import { insertOrderService } from "../../service/order.service";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

const BasketPage = () => {
  const router = useRouter();
  const [baskets, setBaskets] = useState<any>();
  useEffect(() => {
    if (getCookie("token")) getData();
  }, []);

  const getData = async () => {
    try {
      const {
        data: { data: res },
      } = await getBaskets();
      setBaskets(res);
    } catch {
      router.reload();
    }
  };
  const deleteProduct = async (basket: any) => {
    let data = {
      basketId: basket?._id,
      productId: basket.product._id,
    };
    console.log(data);

    await deleteBasket(data);
    getData();
  };

  const insertOrder = async () => {
    await insertOrderService();
    await getData();
    router.push("/profile/order");
  };
  return (
    <PaddingStyled top={80}>
      <Grid container>
        <Grid lg={3}>
          <RightMenu />
        </Grid>
        <Grid lg={9}>
          <SpaceStyled right={10}>
            <Grid container>
              <Grid lg={8}>
                <Baskets deleteProduct={deleteProduct} baskets={baskets} />
              </Grid>
              <Grid lg={4}>
                <SpaceStyled right={10}>
                  <BasketSummaryContainer>
                    <WhiteText>خلاصه سفارش</WhiteText>
                    <br />
                    {baskets?.baskets?.map((item: any) => (
                      <>
                        <Grid justifyContent={"space-between"} container>
                          <Grid>
                            <WhiteText>{item?.product?.title}</WhiteText>
                          </Grid>
                          <Grid>
                            <WhiteText>
                              قیمت :{priceFormat(item?.product?.totalPrice)}
                            </WhiteText>
                          </Grid>
                        </Grid>
                        <hr />
                      </>
                    ))}
                    <br />

                    <Grid container justifyContent={"space-between"}>
                      <Grid>
                        <WhiteText>کل : </WhiteText>
                      </Grid>
                      <Grid>{priceFormat(baskets?.totalPrice)}</Grid>
                    </Grid>
                  </BasketSummaryContainer>
                  {baskets?.baskets?.length > 0 && (
                    <SpaceStyled top={10}>
                      <div onClick={insertOrder}>
                        <ActionBorderComponent isSelected={true} isFill={true}>
                          ثبت نهایی سفارش
                        </ActionBorderComponent>
                      </div>
                    </SpaceStyled>
                  )}
                </SpaceStyled>
              </Grid>
            </Grid>
          </SpaceStyled>
        </Grid>
      </Grid>
    </PaddingStyled>
  );
};
export default BasketPage;
const BasketSummaryContainer = styled.div`
  background-color: ${GRAY_COLOR};
  padding: 15px;
  border-radius: 15px;
`;
