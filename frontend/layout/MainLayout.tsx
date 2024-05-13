import { FC } from "react";
import {
  HeaderLayoutStyled,
  MainLayoutContainer,
  MakeBoxContainer,
  SearchHeaderStyled,
} from "./MainLayout.s";
import { Grid, Typography } from "@mui/joy";
import { CenterStyled } from "../global-style/global.s";
import { ORANGE_COLOR } from "../config/colors";

const MainLayout: FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <MainLayoutContainer>
        <HeaderLayoutStyled>
          <Grid
            container
            spacing={1.5}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid>
              <SearchHeaderStyled />
            </Grid>
            <Grid>
              <CenterStyled>
                <img src="/favlogo.png" width={30} />
              </CenterStyled>
            </Grid>
            <Grid>
              <CenterStyled>
                <img src="/icons/menu.png" width={30} />
              </CenterStyled>
            </Grid>
            <Grid>
              <CenterStyled>
                <Typography textColor={ORANGE_COLOR}>ورود / عضویت</Typography>
              </CenterStyled>
            </Grid>
            <Grid>
              <CenterStyled>
                <img src="/icons/user-icon.png" width={20} />
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
