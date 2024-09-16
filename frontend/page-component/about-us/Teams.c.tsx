import { Grid, Typography } from "@mui/joy";
import Tooltip from "@mui/joy/Tooltip";
import { CenterStyled, SpaceStyled } from "../../global-style/global.s";
import ImageServerComponent from "../../global-component/ImageServer.c";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import { SMALL_FONT } from "../../config/font";
import { ITeam } from "../../types/team.type";
import { FC } from "react";

const TeamsComponent: FC<{ teams: Array<ITeam> }> = ({ teams }) => {
  return (
    <SpaceStyled top={150} right={60}>
      <Grid container spacing={5}>
        {teams?.map((team: ITeam) => (
          <Grid lg={3}>
            <TeamContainer className="outline-hover">
              <CenterStyled>
                <ImageServerComponent
                  image={team?.image}
                  height={100}
                  width={100}
                  border={20}
                />
                <WhiteContainer>
                  <CenterStyled>
                    <Typography
                      style={{ color: "black" }}
                      fontSize={SMALL_FONT}
                    >
                      {team?.fullName}
                    </Typography>
                  </CenterStyled>
                </WhiteContainer>
                <WhiteContainer>
                  <CenterStyled>
                    <Typography
                      style={{ color: "black" }}
                      fontSize={SMALL_FONT}
                    >
                      {team?.position}
                    </Typography>
                  </CenterStyled>
                </WhiteContainer>

                <SpaceStyled top={20}>
                  <Grid container spacing={3}>
                    <Grid lg={2.2}>
                      <Link href={team?.twitter || "/"}>
                        <SpaceStyled horizontal={5}>
                          <Tooltip title={team?.twitter || "ثبت نشده"}>
                            <div style={{ width: 25, height: 25 }}>
                              <ReactSVG
                                src="/icons/twitter.svg"
                                style={{ color: "red" }}
                                beforeInjection={(svg) => {
                                  svg.classList.add("so-svg-class");
                                }}
                              />
                            </div>
                          </Tooltip>
                        </SpaceStyled>
                      </Link>
                    </Grid>
                    <Grid lg={2.2}>
                      <Link href={team?.telegram || "/"}>
                        <SpaceStyled horizontal={5}>
                          <Tooltip title={team?.telegram || "ثبت نشده"}>
                            <div style={{ width: 25, height: 25 }}>
                              <ReactSVG
                                src="/icons/telegram.svg"
                                style={{ color: "red" }}
                                beforeInjection={(svg) => {
                                  svg.classList.add("so-svg-class");
                                }}
                              />
                            </div>
                          </Tooltip>
                        </SpaceStyled>
                      </Link>
                    </Grid>
                    <Grid lg={2.2}>
                      <Link href={team?.whatsapp || "/"}>
                        <SpaceStyled horizontal={5}>
                          <Tooltip title={team?.whatsapp || "ثبت نشده"}>
                            <div style={{ width: 25, height: 25 }}>
                              <ReactSVG
                                src="/icons/whatsapp.svg"
                                style={{ color: "red" }}
                                beforeInjection={(svg) => {
                                  svg.classList.add("so-svg-class");
                                }}
                              />
                            </div>
                          </Tooltip>
                        </SpaceStyled>
                      </Link>
                    </Grid>
                    <Grid lg={2.2}>
                      <Link href={team?.instagram || "/"}>
                        <SpaceStyled horizontal={5}>
                          <Tooltip title={team?.instagram || "ثبت نشده"}>
                            <div style={{ width: 25, height: 25 }}>
                              <ReactSVG
                                src="/icons/instagram.svg"
                                style={{ color: "red" }}
                                beforeInjection={(svg) => {
                                  svg.classList.add("so-svg-class");
                                }}
                              />
                            </div>
                          </Tooltip>
                        </SpaceStyled>
                      </Link>
                    </Grid>
                    <Grid lg={2.2}>
                      <Link href={team?.linkedin || "/"}>
                        <SpaceStyled horizontal={5}>
                          <Tooltip title={team?.linkedin || "ثبت نشده"}>
                            <div style={{ width: 25, height: 25 }}>
                              <ReactSVG
                                src="/icons/linkedin.svg"
                                style={{ color: "red" }}
                                beforeInjection={(svg) => {
                                  svg.classList.add("so-svg-class");
                                }}
                              />
                            </div>
                          </Tooltip>
                        </SpaceStyled>
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
  );
};
export default TeamsComponent;
const WhiteContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 100%;
  padding: 5px;
  margin-top: 20px;
`;

const TeamContainer = styled.div`
  border-radius: 20px;
  color: black !important;
  padding: 20px;
`;
