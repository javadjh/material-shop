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

const RulesPage = () => {
  const [department, setDepartment] = useState<string>("");
  return (
    <MainLayout>
      <PaddingStyled vertical={20} horizontal={10}>
        <Grid container>
          <Grid lg={2}>
            <SpaceStyled bottom={10}>
              <LogoComponent width={200} />
            </SpaceStyled>
            <ActionBorderComponent onClick={() => setDepartment("general")}>
              قوانین کلی سایت
            </ActionBorderComponent>
            <ActionBorderComponent onClick={() => setDepartment("privacy")}>
              قوانین حریم خصوصی
            </ActionBorderComponent>
            <ActionBorderComponent onClick={() => setDepartment("store")}>
              قوانین فروشگاه
            </ActionBorderComponent>
            <ActionBorderComponent onClick={() => setDepartment("service")}>
              قوانین بخش خدمات ساختمانی
            </ActionBorderComponent>
            <ActionBorderComponent onClick={() => setDepartment("information")}>
              قوانین بخش اطلاعات ساختمانی
            </ActionBorderComponent>
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
