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
          <PaddingStyled top={20}>
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
            <SpaceStyled top={80} right={60}>
              <Grid container spacing={5}>
                {teams?.map((team) => (
                  <Grid lg={3}>
                    <TeamContainer>
                      <CenterStyled>
                        <ImageServerComponent
                          image={team?.image}
                          height={100}
                          width={100}
                          border={20}
                        />
                        <WhiteContainer>
                          <CenterStyled>
                            <Typography fontSize={SMALL_FONT}>
                              {team?.fullName}
                            </Typography>
                          </CenterStyled>
                        </WhiteContainer>
                        <WhiteContainer>
                          <CenterStyled>
                            <Typography fontSize={SMALL_FONT}>
                              {team?.position}
                            </Typography>
                          </CenterStyled>
                        </WhiteContainer>

                        <SpaceStyled top={20}>
                          <Grid container spacing={3}>
                            <Grid lg={2.2}>
                              <Link href={team?.twitter || "/"}>
                                <img src="/icons/twitter.png" />
                              </Link>
                            </Grid>
                            <Grid lg={2.2}>
                              <Link href={team?.telegram || "/"}>
                                <img src="/icons/telegram.png" />
                              </Link>
                            </Grid>
                            <Grid lg={2.2}>
                              <Link href={team?.whatsapp || "/"}>
                                <img src="/icons/whatsapp.png" />
                              </Link>
                            </Grid>
                            <Grid lg={2.2}>
                              <Link href={team?.instagram || "/"}>
                                <img src="/icons/instagram.png" />
                              </Link>
                            </Grid>
                            <Grid lg={2.2}>
                              <Link href={team?.linkedin || "/"}>
                                <img src="/icons/linkedin.png" />
                              </Link>
                            </Grid>
                          </Grid>
                        </SpaceStyled>
                      </CenterStyled>
                    </TeamContainer>
                  </Grid>
                ))}
              </Grid>
            </SpaceStyled>
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
const WhiteContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 100%;
  padding: 5px;
  margin-top: 20px;
`;

const TeamContainer = styled.div`
  border: 2px solid white;
  border-radius: 20px;

  padding: 20px;
`;
