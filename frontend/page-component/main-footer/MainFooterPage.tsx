import { Grid, Typography } from "@mui/joy";
import MainLayout from "../../layout/MainLayout";
import {
  CenterStyled,
  FixBottomLeft,
  LeftStyled,
  PaddingStyled,
  SpaceStyled,
} from "../../global-style/global.s";
import LogoComponent from "../../global-component/Logo.c";
import { useWindowSize } from "../../global-component/ScreenBridge.c";
import ImageServerComponent from "../../global-component/ImageServer.c";
import { FC } from "react";
import Link from "next/link";
import CategoryItemComponent from "../home/store/choice/CategoryItem.c";
import { WideSideContainerStyled } from "../home/store/products/products.s";
import ActionBorderComponent from "../../global-component/ActionBorder.c";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { X_LARGE_FONT } from "../../config/font";
import { WHITE_COLOR } from "../../config/colors";
import SocialMediaComponent from "../../global-component/SocialMedia.c";

const MainFooterPage: FC<{ categories: Array<any> }> = ({ categories }) => {
  const size = useWindowSize();
  return (
    <MainLayout>
      <SocialMediaComponent />
      <Grid container>
        <Grid lg={2.5}>
          <SpaceStyled horizontal={20}>
            <WideSideContainerStyled style={{ height: "calc(100vh - 60px)" }}>
              <SpaceStyled top={10}>
                <CenterStyled>
                  <LogoComponent width={110} />
                  <CenterStyled>
                    <img src="/google-font.png" width={"80%"} />
                  </CenterStyled>
                  <br />
                  {categories?.map((item) => (
                    <a
                      href={"/store/category?id=" + item?._id}
                      style={{ width: "100%" }}
                    >
                      <ActionBorderComponent border={"2"} isFill={true}>
                        {item.title}
                      </ActionBorderComponent>
                    </a>
                  ))}
                </CenterStyled>
              </SpaceStyled>
            </WideSideContainerStyled>
          </SpaceStyled>
        </Grid>
        <Grid lg={9.5}>
          <PaddingStyled top={80} bottom={20} horizontal={30}>
            <Typography fontSize={X_LARGE_FONT} textColor={WHITE_COLOR}>
              پاورقی
            </Typography>
            <SpaceStyled top={size.height > 700 ? 80 : 10}>
              <Grid container spacing={5} justifyContent={"space-between"}>
                <Grid lg={2.1}>
                  <Link href={"/rules"}>
                    <ItemContainer className="outline-hover">
                      <SpaceStyled bottom={20}>
                        <div style={{ width: 60, height: 60 }}>
                          <ReactSVG src="/icons/rules.svg" />
                        </div>
                      </SpaceStyled>
                      <Typography>قوانین و مقررات</Typography>
                    </ItemContainer>
                  </Link>
                </Grid>
                <Grid lg={2.1}>
                  <Link href={"/employment"}>
                    <ItemContainer className="outline-hover">
                      <SpaceStyled bottom={20}>
                        <div style={{ width: 60, height: 60 }}>
                          <ReactSVG src="/icons/employment.svg" />
                        </div>
                      </SpaceStyled>
                      <Typography>همکاری با ما</Typography>
                    </ItemContainer>
                  </Link>
                </Grid>
                <Grid lg={2.1}>
                  <Link href={"/faq"}>
                    <ItemContainer className="outline-hover">
                      <SpaceStyled bottom={20}>
                        <div style={{ width: 60, height: 60 }}>
                          <ReactSVG src="/icons/faq.svg" />
                        </div>
                      </SpaceStyled>
                      <Typography>سوالات متداول</Typography>
                    </ItemContainer>
                  </Link>
                </Grid>
                <Grid lg={2.1}>
                  <Link href={"/about-us"}>
                    <ItemContainer className="outline-hover">
                      <SpaceStyled bottom={20}>
                        <div style={{ width: 60, height: 60 }}>
                          <ReactSVG src="/icons/about-us.svg" />
                        </div>
                      </SpaceStyled>
                      <Typography>درباره ما</Typography>
                    </ItemContainer>
                  </Link>
                </Grid>
                <Grid lg={2.1}>
                  <Link href={"/contact-us"}>
                    <ItemContainer className="outline-hover">
                      <SpaceStyled bottom={20}>
                        <div style={{ width: 60, height: 60 }}>
                          <ReactSVG src="/icons/contact-us.svg" />
                        </div>
                      </SpaceStyled>
                      <Typography>تماس با ما</Typography>
                    </ItemContainer>
                  </Link>
                </Grid>
                <Grid lg={2.1}>
                  <Link href={"/brand"}>
                    <ItemContainer className="outline-hover">
                      <SpaceStyled bottom={20}>
                        <div style={{ width: 60, height: 60 }}>
                          <ReactSVG src="/icons/support.svg" />
                        </div>
                      </SpaceStyled>
                      <Typography>مشاوره فنی</Typography>
                      {/* <Typography>برندها</Typography> */}
                    </ItemContainer>
                  </Link>
                </Grid>
                <Grid lg={2.1}>
                  <Link href={"#"}>
                    <ItemContainer className="outline-hover">
                      <SpaceStyled bottom={20}>
                        <div style={{ width: 60, height: 60 }}>
                          <ReactSVG src="/icons/walet.svg" />
                        </div>
                      </SpaceStyled>
                      <Typography>روش های پرداخت</Typography>
                    </ItemContainer>
                  </Link>
                </Grid>
                <Grid lg={2.1}>
                  <Link href={"#"}>
                    <ItemContainer className="outline-hover">
                      <SpaceStyled bottom={20}>
                        <div style={{ width: 60, height: 60 }}>
                          <ReactSVG src="/icons/post.svg" />
                        </div>
                      </SpaceStyled>
                      <Typography>ارسال بار</Typography>
                    </ItemContainer>
                  </Link>
                </Grid>
                <Grid lg={2.1}>
                  <Link href={"#"}>
                    <ItemContainer className="outline-hover">
                      <SpaceStyled bottom={20}>
                        <div style={{ width: 60, height: 60 }}>
                          <ReactSVG src="/icons/return.svg" />
                        </div>
                      </SpaceStyled>
                      <Typography>شرایط برگشت کالا</Typography>
                    </ItemContainer>
                  </Link>
                </Grid>
                <Grid lg={2.1}>
                  <Link href={"#"}>
                    <ItemContainer className="outline-hover">
                      <SpaceStyled bottom={20}>
                        <div style={{ width: 60, height: 60 }}>
                          <ReactSVG src="/icons/privacy.svg" />
                        </div>
                      </SpaceStyled>
                      <Typography>حریم خصوصی</Typography>
                    </ItemContainer>
                  </Link>
                </Grid>
              </Grid>
              <FixBottomLeft>
                <LeftStyled style={{ flexDirection: "row", marginTop: 10 }}>
                  <img src="/majazi.png" width={128} height={128} />
                  <img src="/namad.png" width={128} height={128} />
                  <img src="/sanat.png" width={128} height={128} />
                  <img src="/sazman.png" width={128} height={128} />
                </LeftStyled>
              </FixBottomLeft>
            </SpaceStyled>
          </PaddingStyled>
        </Grid>
      </Grid>
    </MainLayout>
  );
};
export default MainFooterPage;
const ItemContainer = styled.div`
  aspect-ratio: 1/1;
  width: 100%;
  outline-width: 4px !important;
  display: flex;
  left: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  flex-direction: column;
`;
