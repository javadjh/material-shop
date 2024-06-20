import { Grid, Typography } from "@mui/joy";
import styled from "styled-components";
import {
  DERTY_ORANGE_COLOR,
  GRAY_COLOR,
  WHITE_COLOR,
} from "../../../../config/colors";
import { CenterStyled, SpaceStyled } from "../../../../global-style/global.s";
import { FC } from "react";
import { IProduct } from "../../../../types/product.type";
import ImageServerComponent from "../../../../global-component/ImageServer.c";
import { SMALL_FONT } from "../../../../config/font";
import Link from "next/link";

const SuggestionComponent: FC<{ products: Array<IProduct> }> = ({
  products,
}) => {
  return (
    <SpaceStyled top={20}>
      <SpaceStyled bottom={10}>
        <Typography textColor={WHITE_COLOR}>محصولات مشابه</Typography>
      </SpaceStyled>
      <SuggestionProductCoontainer>
        <Grid container spacing={3}>
          {products?.map((item) => (
            <Grid lg={1.5}>
              <Link
                href={{ pathname: "/store/product", query: { id: item?._id } }}
              >
                <ProductItemContainer>
                  <SpaceStyled top={15}>
                    <CenterStyled>
                      <ImageServerComponent
                        width={"80%"}
                        border={10}
                        image={item?.image}
                      />
                    </CenterStyled>
                  </SpaceStyled>
                  <SpaceStyled top={10} bottom={15}>
                    <CenterStyled>
                      <Typography fontSize={SMALL_FONT}>
                        {item?.title}
                      </Typography>
                      <Typography fontSize={SMALL_FONT}>
                        {item?.brandName}
                      </Typography>
                      <Typography fontSize={SMALL_FONT}>
                        {item?.price} تومان
                      </Typography>
                    </CenterStyled>
                  </SpaceStyled>
                </ProductItemContainer>
              </Link>
            </Grid>
          ))}
        </Grid>
      </SuggestionProductCoontainer>
    </SpaceStyled>
  );
};
export default SuggestionComponent;
const SuggestionProductCoontainer = styled.div`
  background-color: ${GRAY_COLOR};
  border-radius: 10px;
  padding: 15px;
`;
const ProductItemContainer = styled.div`
  background-color: ${DERTY_ORANGE_COLOR};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
