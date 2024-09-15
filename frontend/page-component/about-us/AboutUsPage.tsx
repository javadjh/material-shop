import { Grid, Typography } from "@mui/joy";
import MainLayout from "../../layout/MainLayout";
import LogoComponent from "../../global-component/Logo.c";
import {
  CenterStyled,
  PaddingStyled,
  SpaceStyled,
  WhiteBorderStyled,
} from "../../global-style/global.s";
import AboutUsItemComponent from "./AboutUsItem.c";
import SocialMediaComponent from "../../global-component/SocialMedia.c";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { LIGHT_GRAY_COLOR } from "../../config/colors";
import { ITeam } from "../../types/team.type";
import { teamsService } from "../../service/team.service";
import ImageServerComponent from "../../global-component/ImageServer.c";
import { SMALL_FONT } from "../../config/font";
import Link from "next/link";
import { useWindowSize } from "../../global-component/ScreenBridge.c";
import { ReactSVG } from "react-svg";
import TeamsComponent from "./Teams.c";

const AboutUsPage = () => {
  const [select, setSelect] = useState<string>("");
  const [teams, setTeams] = useState<Array<ITeam>>([]);
  const size = useWindowSize();
  useEffect(() => {
    getTeams();
  }, []);
  const getTeams = async () => {
    const {
      data: { data: res },
    } = await teamsService();
    setTeams(res);
  };
  return (
    <MainLayout>
      <SocialMediaComponent />
      <Grid container>
        <Grid lg={2}>
          <PaddingStyled style={{ position: "fixed" }} top={20}>
            <LogoComponent width={size.height > 650 ? 200 : 120} />
            <SpaceStyled bottom={10} top={10}>
              <CenterStyled>
                <img src="./google-font.png" width={200} />
              </CenterStyled>
            </SpaceStyled>
            <AboutUsItemComponent
              setSelect={setSelect}
              select={select}
              title="سازه کمک چیست"
            />
            <AboutUsItemComponent
              setSelect={setSelect}
              select={select}
              title="درباره سازه کمک"
            />
            <AboutUsItemComponent
              setSelect={setSelect}
              select={select}
              title="همکاران ما در سازه کمک"
            />
          </PaddingStyled>
        </Grid>
        <Grid lg={10}>
          {select == "سازه کمک چیست" || select == "درباره سازه کمک" ? (
            <AboutUsTextContainer></AboutUsTextContainer>
          ) : (
            <TeamsComponent teams={teams} />
          )}
        </Grid>
      </Grid>
    </MainLayout>
  );
};
export default AboutUsPage;
const AboutUsTextContainer = styled.div`
  background-color: ${LIGHT_GRAY_COLOR};
  border-radius: 10px;
  margin-top: 90px;
  margin-right: 30px;
  width: 100%-30;
  height: 80vh;
`;
