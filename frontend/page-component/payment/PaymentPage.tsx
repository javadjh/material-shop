import { Grid } from "@mui/joy";
import { PaddingStyled, SpaceStyled } from "../../global-style/global.s";
import RightMenu from "../../layout/RightMenu";
import PaymentComponent from "./payments.c";

const OrderPage = () => {
  return (
    <PaddingStyled top={80}>
      <Grid container>
        <Grid lg={3}>
          <RightMenu />
        </Grid>
        <Grid lg={9}>
          <SpaceStyled right={10}>
            <PaymentComponent />
          </SpaceStyled>
        </Grid>
      </Grid>
    </PaddingStyled>
  );
};
export default OrderPage;
