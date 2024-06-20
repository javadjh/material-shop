import { FC } from "react";
import {
  HeaderLayoutStyled,
  MainLayoutContainer,
  MakeBoxContainer,
  SearchHeaderStyled,
} from "./MainLayout.s";
import { Grid, Typography } from "@mui/joy";
import { CenterStyled, SpaceStyled } from "../global-style/global.s";
import { ORANGE_COLOR } from "../config/colors";
import IconComponent from "../global-component/Icon.c";
import Link from "next/link";

const MainLayout: FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <MainLayoutContainer>
        <HeaderLayoutStyled>
          <Grid
            container
            spacing={3}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid>
              <SearchHeaderStyled placeholder={"Search"} />
            </Grid>
            <Grid>
              <CenterStyled>
                <img src="/favlogo.png" width={37} />
              </CenterStyled>
            </Grid>
            <Grid>
              <CenterStyled>
                <IconComponent icon={"basket"} width={37} />
              </CenterStyled>
            </Grid>
            <Grid>
              <CenterStyled>
                <img src="/favlogo.png" width={37} />
              </CenterStyled>
            </Grid>
            <Grid>
              <CenterStyled>
                <img src="/icons/menu.png" width={37} />
              </CenterStyled>
            </Grid>
            <Grid>
              <Link href={"/register"}>
                <CenterStyled>
                  <SpaceStyled left={5}>
                    <Typography textColor={ORANGE_COLOR}>
                      ورود / عضویت
                    </Typography>
                  </SpaceStyled>
                </CenterStyled>
              </Link>
            </Grid>
            <Grid>
              <CenterStyled>
                <Link href={"/register"}>
                  <img src="/icons/user-icon.png" width={35} />
                </Link>
              </CenterStyled>
            </Grid>
          </Grid>
        </HeaderLayoutStyled>
        <MakeBoxContainer>{children}</MakeBoxContainer>
      </MainLayoutContainer>
    </>
  );
};
export default MainLayout;
