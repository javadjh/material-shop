import { Grid, Typography } from "@mui/joy";
import {
  CenterStyled,
  LeftStyled,
  MarginStyled,
  PaddingStyled,
  Pointer,
  SpaceStyled,
  WhiteBorderStyled,
} from "../../global-style/global.s";
import HomeMenuComponent from "../home/HomeMenu.c";
import {
  HomeCategoryContainer,
  HomeMenuContainer,
  HomePageBackgroundStyled,
  LogoContainer,
  SocialMediaBlock,
} from "../home/home.s";
import { ORANGE_COLOR, WHITE_COLOR } from "../../config/colors";
import { FC, useState } from "react";
import styled from "styled-components";
import IconComponent from "../../global-component/Icon.c";
import { useRouter } from "next/router";
import SocialMediaComponent from "../../global-component/SocialMedia.c";

const HomeLayoutMenuComponent: FC<{
  list: Array<{ title: string; link?: string }>;
}> = ({ list }) => {
  const router = useRouter();
  const [hover, setHover] = useState<any>("unknow");
  const MainLayoutItemMenuContainer = styled.div`
    border: 1px solid #fff;
    border-radius: 15px;
    padding: 40px 20px;
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
        <MainLayoutItemMenuContainer>
          <SpaceStyled top={-30} bottom={30}>
            <LeftStyled>
              <Pointer onClick={() => router.replace("/")}>
                <IconComponent icon="close" width={15} height={15} />
              </Pointer>
            </LeftStyled>
          </SpaceStyled>
          <Grid container spacing={2.5}>
            {list?.map((item) => (
              <Grid
                lg={4}
                onMouseEnter={() => setHover(item.link)}
                onMouseLeave={() => setHover(null)}
              >
                <div
                  style={{
                    border:
                      item.link == hover
                        ? "1px solid" + ORANGE_COLOR
                        : "1px solid #fff",
                    borderRadius: 10,
                    cursor: "pointer",
                  }}
                >
                  <CenterStyled>
                    <PaddingStyled vertical={10}>
                      <Typography textColor={WHITE_COLOR}>
                        {item.title}
                      </Typography>
                    </PaddingStyled>
                  </CenterStyled>
                </div>
              </Grid>
            ))}
          </Grid>
        </MainLayoutItemMenuContainer>
      </HomeCategoryContainer>
      <SocialMediaComponent />
    </HomePageBackgroundStyled>
  );
};
export default HomeLayoutMenuComponent;
