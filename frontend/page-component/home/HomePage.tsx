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
import SocialMediaComponent from "../../global-component/SocialMedia.c";
import IconComponent from "../../global-component/Icon.c";
import { ReactSVG } from "react-svg";

const HomePage = () => {
  const [hover, setHoever] = useState<string>();
  const HomeCategoryItemContainer: any = styled.span`
    border-radius: 20px;
    outline: ${(props: any) =>
      props.blockId === hover ? "4px solid" + ORANGE_COLOR : "2px solid #fff"};
    display: flex;
    flex-direction: column;
    height: 240px;
    width: 190px;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    cursor: pointer;
  `;
  return (
    <HomePageBackgroundStyled>
      <LogoContainer>
        <img src={"./logo.png"} width={240} />
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
                <ReactSVG
                  src="/icons/shop-svg.svg"
                  style={{ fill: "red !important" }}
                  beforeInjection={(svg: any) => {
                    svg.setAttribute(
                      "style",
                      `fill: ${"store" === hover ? ORANGE_COLOR : "#fff"}`
                    );
                  }}
                />
                <SpaceStyled top={30}>
                  <CenterStyled>
                    <SpaceStyled bottom={20}>
                      <Typography
                        fontWeight="bold"
                        textColor={"store" === hover ? ORANGE_COLOR : "#fff"}
                      >
                        فروشگاه
                      </Typography>
                    </SpaceStyled>
                    <Typography
                      fontWeight="bold"
                      textColor={"store" === hover ? ORANGE_COLOR : "#fff"}
                    >
                      محصولات ساختمانی
                    </Typography>
                  </CenterStyled>
                </SpaceStyled>
              </HomeCategoryItemContainer>
            </Link>
          </Grid>
          <Grid>
            <Link href={"comming"}>
              <HomeCategoryItemContainer
                blockId="group"
                onMouseLeave={() => setHoever("")}
                onMouseEnter={() => setHoever("group")}
              >
                <img src="./icons/user-home.png" width={80} />
                <ReactSVG
                  src="/icons/group-svg.svg"
                  style={{ fill: "red !important" }}
                  beforeInjection={(svg: any) => {
                    svg.setAttribute(
                      "style",
                      `fill: ${"store" === hover ? ORANGE_COLOR : "#fff"}`
                    );
                  }}
                />
                <SpaceStyled top={30}>
                  <CenterStyled>
                    <SpaceStyled bottom={20}>
                      <Typography
                        fontWeight="bold"
                        textColor={"group" === hover ? ORANGE_COLOR : "#fff"}
                      >
                        گروه
                      </Typography>
                    </SpaceStyled>
                    <Typography
                      fontWeight="bold"
                      textColor={"group" === hover ? ORANGE_COLOR : "#fff"}
                    >
                      خدمات ساختمانی
                    </Typography>
                  </CenterStyled>
                </SpaceStyled>
              </HomeCategoryItemContainer>
            </Link>
          </Grid>
          <Grid>
            <Link href={"comming"}>
              <HomeCategoryItemContainer
                blockId="groups"
                onMouseLeave={() => setHoever("")}
                onMouseEnter={() => setHoever("groups")}
              >
                <img src="./icons/information.png" width={80} />
                <SpaceStyled top={30}>
                  <CenterStyled>
                    <SpaceStyled bottom={20}>
                      <Typography
                        fontWeight="bold"
                        textColor={"groups" === hover ? ORANGE_COLOR : "#fff"}
                      >
                        گروه
                      </Typography>
                    </SpaceStyled>
                    <Typography
                      fontWeight="bold"
                      textColor={"groups" === hover ? ORANGE_COLOR : "#fff"}
                    >
                      اطلاعات ساختمانی
                    </Typography>
                  </CenterStyled>
                </SpaceStyled>
              </HomeCategoryItemContainer>
            </Link>
          </Grid>
        </Grid>
      </HomeCategoryContainer>
      <SocialMediaComponent />
    </HomePageBackgroundStyled>
  );
};
export default HomePage;
