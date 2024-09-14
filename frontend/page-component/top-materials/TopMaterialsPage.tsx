import { FC } from "react";
import { IProduct } from "../../types/product.type";
import { Grid } from "@mui/joy";
import Link from "next/link";
import ProductItem from "../home/store/products/ProductItem";
import {
  CenterStyled,
  PaddingStyled,
  SpaceStyled,
} from "../../global-style/global.s";
import LogoComponent from "../../global-component/Logo.c";

const TopMaterialsPage: FC<{ products: Array<IProduct> }> = ({ products }) => {
  return (
    <Grid container>
      <Grid lg={2}>
        <SpaceStyled top={10}>
          <LogoComponent />
          <CenterStyled>
            <img src="/google-font.png" width={"65%"} />
          </CenterStyled>
        </SpaceStyled>
      </Grid>
      <Grid lg={9}>
        <PaddingStyled top={80}>
          <Grid
            container
            columnSpacing={3}
            rowSpacing={2}
            justifyContent={"center"}
          >
            {products?.map((item: IProduct) => (
              <Link
                href={{
                  pathname: "/store/product",
                  query: { id: item?._id },
                }}
              >
                <Grid>
                  <ProductItem item={item} />
                </Grid>
              </Link>
            ))}
          </Grid>
        </PaddingStyled>
      </Grid>
    </Grid>
  );
};
export default TopMaterialsPage;
