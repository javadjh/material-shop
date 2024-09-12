import { Grid } from "@mui/joy";
import { PaddingStyled, SpaceStyled } from "../../global-style/global.s";
import RightMenu from "../../layout/RightMenu";
import ChatComponent from "../FAQ/Chat.c";

const OnlinePage = () => {
  return (
    <PaddingStyled top={80}>
      <Grid container>
        <Grid lg={3}>
          <RightMenu />
        </Grid>
        <Grid lg={9}>
          <SpaceStyled right={10}>
            <ChatComponent
              widthMessageBox={"69%"}
              height={"calc(100vh - 165px)"}
              top={0}
            />
          </SpaceStyled>
        </Grid>
      </Grid>
    </PaddingStyled>
  );
};
export default OnlinePage;
