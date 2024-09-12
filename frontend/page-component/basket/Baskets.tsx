import { FC, useEffect, useState } from "react";
import { deleteBasket, getBaskets } from "../../service/basket.service";
import styled from "styled-components";
import { GRAY_COLOR, WHITE_COLOR } from "../../config/colors";
import { Grid, Typography } from "@mui/joy";
import ImageServerComponent from "../../global-component/ImageServer.c";
import { WhiteText } from "../../global-component/Typography/WhiteText.t";
import { SpaceStyled } from "../../global-style/global.s";
import { priceFormat } from "../../config/utility";
import ActionBorderComponent from "../../global-component/ActionBorder.c";

const Baskets: FC<{ baskets: any; deleteProduct: any }> = ({
  baskets,
  deleteProduct,
}) => {
  return (
    <>
      <div>
        {baskets?.baskets?.map((item: any) => (
          <>
            <BasketContainer>
              <Grid container spacing={2}>
                <Grid lg={3}>
                  <ImageServerComponent
                    border={10}
                    image={item.product?.image}
                    width={"100%"}
                  />
                </Grid>
                <Grid lg={9}>
                  <SpaceStyled bottom={10}>
                    <Typography textColor={WHITE_COLOR}>
                      {item?.product?.title}
                    </Typography>
                  </SpaceStyled>

                  <SpaceStyled bottom={10}>
                    <Typography textColor={WHITE_COLOR}>
                      دسته :{item?.product?.categoryName}
                    </Typography>
                  </SpaceStyled>

                  <SpaceStyled bottom={10}>
                    <Typography textColor={WHITE_COLOR}>
                      برند :{item?.product?.brandName}
                    </Typography>
                  </SpaceStyled>

                  <SpaceStyled bottom={10}>
                    <Typography textColor={WHITE_COLOR}>
                      کد :{item?.product?.code}
                    </Typography>
                  </SpaceStyled>
                </Grid>
              </Grid>
              <SpaceStyled top={5}>
                <Grid container justifyContent={"space-between"}>
                  <Grid>
                    <Typography textColor={WHITE_COLOR}>
                      تعداد :{item?.count} {item?.product?.unit}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography textColor={WHITE_COLOR}>
                      قیمت واحد :{priceFormat(item?.product?.price)}
                    </Typography>
                  </Grid>

                  <Grid>
                    <Typography textColor={WHITE_COLOR}>
                      کل :{priceFormat(item?.product?.totalPrice)}
                    </Typography>
                  </Grid>
                </Grid>
              </SpaceStyled>
            </BasketContainer>
            <div onClick={() => deleteProduct(item)}>
              <ActionBorderComponent isFill={true}>
                حذف محصول
              </ActionBorderComponent>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default Baskets;
const BasketContainer = styled.div`
  background-color: ${GRAY_COLOR};
  padding: 15px;
  border-radius: 15px;
  margin-bottom: 10px;
`;
