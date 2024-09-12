import { Grid } from "@mui/joy";
import { PaddingStyled, SpaceStyled } from "../../global-style/global.s";
import RightMenu from "../../layout/RightMenu";
import OrdersComponent from "./Orders.c";

const OrderPage = () => {
  return (
    <PaddingStyled top={80}>
      <Grid container>
        <Grid lg={3}>
          <RightMenu />
        </Grid>
        <Grid lg={9}>
          <SpaceStyled right={10}>
            <OrdersComponent />
          </SpaceStyled>
        </Grid>
      </Grid>
    </PaddingStyled>
  );
};
export default OrderPage;
