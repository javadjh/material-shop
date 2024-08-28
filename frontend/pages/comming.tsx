import { Grid } from "@mui/joy";
import MainLayout from "../layout/MainLayout";
import { CenterVerticalStyled } from "../global-style/global.s";
import LogoComponent from "../global-component/Logo.c";
import { SocialMediaBlock } from "../page-component/home/home.s";
import SocialMediaComponent from "../global-component/SocialMedia.c";
import { useWindowSize } from "../global-component/ScreenBridge.c";

const Comming = () => {
  const size = useWindowSize();
  return (
    <MainLayout>
      <div style={{ position: "absolute", top: 30, right: 30 }}>
        <LogoComponent />
      </div>
      <div
        style={{
          position: "absolute",
          left: "10%",
          top: "50%",
          transform: "translate(-0%, -50%)",
        }}
      >
        <Grid container>
          <Grid>
            <CenterVerticalStyled>
              <img src="/comming-text.png" width={500} />
            </CenterVerticalStyled>
          </Grid>
          <Grid>
            <img
              src="/comming-vector.png"
              width={size.height > 650 ? 700 : 500}
            />
          </Grid>
        </Grid>
      </div>
      <SocialMediaComponent />
    </MainLayout>
  );
};
export default Comming;
