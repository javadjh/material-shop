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
            <div onClick={() => setDepartment("general")}>
              <ActionBorderComponent
                isSelected={department == "general"}
                padding={size.height > 660 ? 15 : 5}
                border={"2"}
              >
                قوانین کلی سایت
              </ActionBorderComponent>
            </div>
            <div onClick={() => setDepartment("privacy")}>
              <ActionBorderComponent
                border={"2"}
                isSelected={department == "privacy"}
                padding={size.height > 660 ? 15 : 5}
              >
                قوانین حریم خصوصی
              </ActionBorderComponent>
            </div>

            <div onClick={() => setDepartment("store")}>
              <ActionBorderComponent
                border={"2"}
                isSelected={department == "store"}
                padding={size.height > 660 ? 15 : 5}
              >
                قوانین بخش فروشگاه
              </ActionBorderComponent>
            </div>

            <div onClick={() => setDepartment("service")}>
              <ActionBorderComponent
                border={"2"}
                isSelected={department == "service"}
                padding={size.height > 660 ? 15 : 5}
                fontSize={13}
              >
                قوانین بخش خدمات ساختمانی
              </ActionBorderComponent>
            </div>
            <div onClick={() => setDepartment("information")}>
              <ActionBorderComponent
                border={"2"}
                isSelected={department == "information"}
                padding={size.height > 660 ? 15 : 5}
                fontSize={13}
              >
                قوانین بخش اطلاعات ساختمانی
              </ActionBorderComponent>
            </div>
          </Grid>
          <Grid lg={10}>
            <RuleTextContainer></RuleTextContainer>
          </Grid>
        </Grid>
      </PaddingStyled>
    </MainLayout>
  );
};
export default RulesPage;
const RuleTextContainer = styled.div`
  background-color: ${LIGHT_GRAY_COLOR};
  border-radius: 10px;
  margin-top: 60px;
  margin-right: 30px;
  width: 100%-30;
  height: 80vh;
`;
