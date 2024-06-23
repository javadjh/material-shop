import { Grid } from "@mui/joy";
import MainLayout from "../../layout/MainLayout";
import LogoComponent from "../../global-component/Logo.c";
import { PaddingStyled } from "../../global-style/global.s";

const AboutUsPage = () => {
  return (
    <MainLayout>
      <Grid container>
        <Grid lg={3}>
          <PaddingStyled top={20}>
            <LogoComponent />
          </PaddingStyled>
        </Grid>
        <Grid lg={9}></Grid>
      </Grid>
    </MainLayout>
  );
};
export default AboutUsPage;
