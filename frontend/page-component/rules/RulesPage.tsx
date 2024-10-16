import { Grid, Typography } from "@mui/joy";
import MainLayout from "../../layout/MainLayout";
import { HomePageBackgroundStyled } from "../home/home.s";
import LogoComponent from "../../global-component/Logo.c";
import {
  CenterStyled,
  PaddingStyled,
  SimpleOrangeBorderBlock,
  SpaceStyled,
} from "../../global-style/global.s";
import ActionBorderComponent from "../../global-component/ActionBorder.c";
import { LIGHT_GRAY_COLOR, ORANGE_COLOR } from "../../config/colors";
import { useState } from "react";
import styled from "styled-components";
import SocialMediaComponent from "../../global-component/SocialMedia.c";
import { useWindowSize } from "../../global-component/ScreenBridge.c";
import SubCategoryItemComponent from "../home/store/category/SubCategoryItem.c";
import Link from "next/link";
import { ReactSVG } from "react-svg";

const RulesPage = () => {
  const [department, setDepartment] = useState<string>("general");
  const size = useWindowSize();
  return (
    <MainLayout>
      <SocialMediaComponent />
      <PaddingStyled vertical={20} horizontal={10}>
        <Grid container>
          <Grid lg={2}>
            <SpaceStyled bottom={10}>
              <LogoComponent width={130} />
              <SpaceStyled bottom={10} top={10}>
                <CenterStyled>
                  <img src="./google-font.png" width={200} />
                </CenterStyled>
              </SpaceStyled>
            </SpaceStyled>
            <SpaceStyled bottom={20}>
              <div onClick={() => setDepartment("general")}>
                <ActionBorderComponent
                  isBold={true}
                  isSelected={department == "general"}
                  padding={size.height > 660 ? 15 : 5}
                  border={"2"}
                >
                  قوانین کلی سایت
                </ActionBorderComponent>
              </div>
            </SpaceStyled>
            <SpaceStyled bottom={20}>
              <div onClick={() => setDepartment("privacy")}>
                <ActionBorderComponent
                  isBold={true}
                  border={"2"}
                  isSelected={department == "privacy"}
                  padding={size.height > 660 ? 15 : 5}
                >
                  قوانین حریم خصوصی
                </ActionBorderComponent>
              </div>
            </SpaceStyled>

            <SpaceStyled bottom={20}>
              <div onClick={() => setDepartment("store")}>
                <ActionBorderComponent
                  isBold={true}
                  border={"2"}
                  isSelected={department == "store"}
                  padding={size.height > 660 ? 15 : 5}
                >
                  قوانین بخش فروشگاه
                </ActionBorderComponent>
              </div>
            </SpaceStyled>

            <SpaceStyled bottom={20}>
              <div onClick={() => setDepartment("service")}>
                <ActionBorderComponent
                  isBold={true}
                  border={"2"}
                  isSelected={department == "service"}
                  padding={size.height > 660 ? 15 : 5}
                  fontSize={13}
                >
                  قوانین بخش خدمات ساختمانی
                </ActionBorderComponent>
              </div>
            </SpaceStyled>
            <SpaceStyled bottom={20}>
              <div onClick={() => setDepartment("information")}>
                <ActionBorderComponent
                  isBold={true}
                  border={"2"}
                  isSelected={department == "information"}
                  padding={size.height > 660 ? 15 : 5}
                  fontSize={13}
                >
                  قوانین بخش اطلاعات ساختمانی
                </ActionBorderComponent>
              </div>
            </SpaceStyled>
          </Grid>
          <Grid lg={10}>
            {department == "service" || department == "information" ? (
              <>
                <SpaceStyled top={80} bottom={-50} right={40}>
                  <Grid container spacing={3}>
                    <Grid lg={1.7}>
                      <Link href={"/rules"}>
                        <ItemContainer className="outline-hover">
                          <SpaceStyled bottom={20}>
                            <div style={{ width: 40, height: 40 }}>
                              <ReactSVG src="/icons/usable.svg" />
                            </div>
                          </SpaceStyled>
                          <Typography>بازسازی</Typography>
                        </ItemContainer>
                      </Link>
                    </Grid>
                    <Grid lg={1.7}>
                      <Link href={"/rules"}>
                        <ItemContainer className="outline-hover">
                          <SpaceStyled bottom={20}>
                            <div style={{ width: 40, height: 40 }}>
                              <ReactSVG src="/icons/home-building.svg" />
                            </div>
                          </SpaceStyled>
                          <Typography>ساخت ویلا</Typography>
                        </ItemContainer>
                      </Link>
                    </Grid>
                    <Grid lg={1.7}>
                      <Link href={"/rules"}>
                        <ItemContainer className="outline-hover">
                          <SpaceStyled bottom={20}>
                            <div style={{ width: 40, height: 40 }}>
                              <ReactSVG src="/icons/support.svg" />
                            </div>
                          </SpaceStyled>
                          <Typography>خدمات مهندسی</Typography>
                        </ItemContainer>
                      </Link>
                    </Grid>
                    <Grid lg={1.7}>
                      <Link href={"/rules"}>
                        <ItemContainer className="outline-hover">
                          <SpaceStyled bottom={20}>
                            <div style={{ width: 40, height: 40 }}>
                              <ReactSVG src="/icons/rent.svg" />
                            </div>
                          </SpaceStyled>
                          <Typography>اجاره ابزار</Typography>
                        </ItemContainer>
                      </Link>
                    </Grid>
                    <Grid lg={1.7}>
                      <Link href={"/rules"}>
                        <ItemContainer className="outline-hover">
                          <SpaceStyled bottom={20}>
                            <div style={{ width: 40, height: 40 }}>
                              <ReactSVG src="/icons/admin.svg" />
                            </div>
                          </SpaceStyled>
                          <Typography>مدیر ساختمان</Typography>
                        </ItemContainer>
                      </Link>
                    </Grid>
                  </Grid>
                </SpaceStyled>
                <RuleTextContainer hasMenu={true}></RuleTextContainer>
              </>
            ) : (
              <RuleTextContainer hasMenu={false}></RuleTextContainer>
            )}
          </Grid>
        </Grid>
      </PaddingStyled>
    </MainLayout>
  );
};
export default RulesPage;
const RuleTextContainer: any = styled.div`
  background-color: ${LIGHT_GRAY_COLOR};
  border-radius: 10px;
  margin-top: 60px;
  margin-right: 30px;
  width: 100%-30;
  height: ${(props: any) => (props.hasMenu ? "55vh" : "80vh")};
`;
const ItemContainer = styled.div`
  aspect-ratio: 1/1;
  width: 100%;
  outline-width: 4px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  flex-direction: column;
`;
