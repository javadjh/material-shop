import { Grid, Typography } from "@mui/joy";
import ImageServerComponent from "../../../../global-component/ImageServer.c";
import { WhiteText } from "../../../../global-component/Typography/WhiteText.t";
import { LeftStyled, SpaceStyled } from "../../../../global-style/global.s";
import { ProductContainerStyled } from "./products.s";
import { WHITE_COLOR } from "../../../../config/colors";
import { SMALL_FONT, X_SMALL_FONT } from "../../../../config/font";
import { FC } from "react";
import { IProduct } from "../../../../types/product.type";

const ProductItem: FC<{ item: IProduct }> = ({ item }) => {
  return (
    <ProductContainerStyled>
      <ImageServerComponent border={8} image={item.image} width={"100%"} />

      <SpaceStyled top={10} bottom={10}>
        <WhiteText>{item?.title}</WhiteText>
        <WhiteText>{item?.brandName}</WhiteText>
      </SpaceStyled>
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Grid lg={4}>
          <Typography textColor={WHITE_COLOR} fontSize={X_SMALL_FONT}>
            {item?.remainingCount} عدد
          </Typography>
        </Grid>
        <Grid lg={8}>
          <LeftStyled>
            <Typography textColor={WHITE_COLOR} fontSize={SMALL_FONT}>
              {item?.price} تومان
            </Typography>
          </LeftStyled>
        </Grid>
      </Grid>
    </ProductContainerStyled>
  );
};
export default ProductItem;
