import { Grid, Typography } from "@mui/joy";
import {
  HomeCategoryContainer,
  HomeMenuContainer,
  HomePageBackgroundStyled,
  LogoContainer,
  SocialMediaBlock,
  WhiteAndYellowText,
} from "./home.s";
import HomeMenuComponent from "./HomeMenu.c";
import { CenterStyled, SpaceStyled } from "../../global-style/global.s";
import { ORANGE_COLOR, WHITE_COLOR } from "../../config/colors";
import { MEDIUM_FONT } from "../../config/font";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";

const HomePage = () => {
  const [hover, setHoever] = useState<string>();
  const HomeCategoryItemContainer: any = styled.span`
    border-radius: 20px;
    outline: ${(props: any) =>
      props.blockId === hover ? "4px solid" + ORANGE_COLOR : "2px solid #fff"};
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 190px;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    cursor: pointer;
  `;
  return (
    <HomePageBackgroundStyled>
      <LogoContainer>
        <img src={"./logo.png"} width={350} />
      </LogoContainer>
      <HomeMenuContainer>
        <HomeMenuComponent />
      </HomeMenuContainer>
      <HomeCategoryContainer>
        <SpaceStyled bottom={40}>
          <CenterStyled>
            <img src="./google-font.png" width={500} />
          </CenterStyled>
        </SpaceStyled>
        <Grid container spacing={2.5}>
          <Grid>
            <Link href={"/store/choice"}>
              <HomeCategoryItemContainer
                blockId="store"
                onMouseLeave={() => setHoever("")}
                onMouseEnter={() => setHoever("store")}
              >
                <img src="./icons/store.png" width={60} />
                <SpaceStyled top={30}>
                  <CenterStyled>
                    <Typography
                      fontWeight="bold"
                      textColor={"store" === hover ? ORANGE_COLOR : "#fff"}
                      fontSize={MEDIUM_FONT}
                    >
                      فروشگاه
                    </Typography>
                    <Typography
                      textColor={"store" === hover ? ORANGE_COLOR : "#fff"}
                      fontSize={MEDIUM_FONT}
                    >
                      محصولات ساختمانی
                    </Typography>
                  </CenterStyled>
                </SpaceStyled>
              </HomeCategoryItemContainer>
            </Link>
          </Grid>
          <Grid>
            <HomeCategoryItemContainer
              blockId="group"
              onMouseLeave={() => setHoever("")}
              onMouseEnter={() => setHoever("group")}
            >
              <img src="./icons/user-home.png" width={60} />
              <SpaceStyled top={30}>
                <CenterStyled>
                  <Typography
                    fontWeight="bold"
                    textColor={"group" === hover ? ORANGE_COLOR : "#fff"}
                    fontSize={MEDIUM_FONT}
                  >
                    گروه
                  </Typography>
                  <Typography
                    textColor={"group" === hover ? ORANGE_COLOR : "#fff"}
                    fontSize={MEDIUM_FONT}
                  >
                    خدمات ساختمانی
                  </Typography>
                </CenterStyled>
              </SpaceStyled>
            </HomeCategoryItemContainer>
          </Grid>
          <Grid>
            <HomeCategoryItemContainer
              blockId="groups"
              onMouseLeave={() => setHoever("")}
              onMouseEnter={() => setHoever("groups")}
            >
              <img src="./icons/information.png" width={60} />
              <SpaceStyled top={30}>
                <CenterStyled>
                  <Typography
                    fontWeight="bold"
                    textColor={"groups" === hover ? ORANGE_COLOR : "#fff"}
                    fontSize={MEDIUM_FONT}
                  >
                    گروه
                  </Typography>
                  <Typography
                    textColor={"groups" === hover ? ORANGE_COLOR : "#fff"}
                    fontSize={MEDIUM_FONT}
                  >
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
