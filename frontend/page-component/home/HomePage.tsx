import { Grid, Typography } from "@mui/joy";
import {
  HomeCategoryContainer,
  HomeCategoryItemContainer,
  HomeMenuContainer,
  HomePageBackgroundStyled,
  LogoContainer,
  SocialMediaBlock,
  WhiteAndYellowText,
} from "./home.s";
import HomeMenuComponent from "./HomeMenu.c";
import { CenterStyled, SpaceStyled } from "../../global-style/global.s";
import { ORANGE_COLOR, WHITE_COLOR } from "../../config/colors";
import { SMALL_FONT } from "../../config/font";
import Link from "next/link";

const HomePage = () => {
  return (
    <HomePageBackgroundStyled>
      <LogoContainer>
        <img src={"./logo.png"} width={250} />
      </LogoContainer>
      <HomeMenuContainer>
        <HomeMenuComponent />
      </HomeMenuContainer>
      <HomeCategoryContainer>
        <SpaceStyled bottom={40}>
          <CenterStyled>
            <img src="./google-font.png" width={400} />
          </CenterStyled>
        </SpaceStyled>
        <Grid container spacing={2.5}>
          <Grid>
            <Link href={"/store/choice"}>
              <HomeCategoryItemContainer>
                <img src="./icons/store.png" width={60} />
                <SpaceStyled top={30}>
                  <CenterStyled>
                    <Typography
                      fontWeight="bold"
                      textColor={WHITE_COLOR}
                      fontSize={SMALL_FONT}
                    >
                      فروشگاه
                    </Typography>
                    <Typography textColor={WHITE_COLOR} fontSize={SMALL_FONT}>
                      محصولات ساختمانی
                    </Typography>
                  </CenterStyled>
                </SpaceStyled>
              </HomeCategoryItemContainer>
            </Link>
          </Grid>
          <Grid>
            <HomeCategoryItemContainer>
              <img src="./icons/user-home.png" width={60} />
              <SpaceStyled top={30}>
                <CenterStyled>
                  <Typography
                    fontWeight="bold"
                    textColor={WHITE_COLOR}
                    fontSize={SMALL_FONT}
                  >
                    گروه
                  </Typography>
                  <Typography textColor={WHITE_COLOR} fontSize={SMALL_FONT}>
                    خدمات ساختمانی
                  </Typography>
                </CenterStyled>
              </SpaceStyled>
            </HomeCategoryItemContainer>
          </Grid>
          <Grid>
            <HomeCategoryItemContainer>
              <img src="./icons/information.png" width={60} />
              <SpaceStyled top={30}>
                <CenterStyled>
                  <Typography
                    fontWeight="bold"
                    textColor={WHITE_COLOR}
                    fontSize={SMALL_FONT}
                  >
                    گروه
                  </Typography>
                  <Typography textColor={WHITE_COLOR} fontSize={SMALL_FONT}>
                    اطلاعات ساختمانی
                  </Typography>
                </CenterStyled>
              </SpaceStyled>
            </HomeCategoryItemContainer>
          </Grid>
        </Grid>
      </HomeCategoryContainer>
      <SocialMediaBlock>
        <img src="./icons/instagram.png" width={20} />
        <img src="./icons/twitter.png" width={20} />
        <img src="./icons/wa.png" width={20} />
        <img src="./icons/linkedin.png" width={20} />
      </SocialMediaBlock>
    </HomePageBackgroundStyled>
  );
};
export default HomePage;
