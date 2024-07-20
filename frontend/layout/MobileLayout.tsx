import { FC } from "react";
import { MobileLayoutContainer } from "./MainLayout.s";
import {
  CenterStyled,
  PaddingStyled,
  SpaceStyled,
} from "../global-style/global.s";
import IconComponent from "../global-component/Icon.c";
import styled from "styled-components";
import { DARK_BLUE_COLOR } from "../config/colors";
import { Grid } from "@mui/joy";

const MobileLayout: FC<{ children: any; isShowTopMenu: boolean }> = ({
  children,
  isShowTopMenu = false,
}) => {
  return (
    <MobileLayoutContainer>
      {isShowTopMenu && (
        <PaddingStyled top={20}>
          <CenterStyled>
            <img src="/google-font.png" width={"65%"} />
          </CenterStyled>
          <div style={{ position: "absolute", top: 20, right: 20 }}>
            <IconComponent icon="humber" width={30} />
          </div>
        </PaddingStyled>
      )}
      {children}
      <BottomMenu>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Grid xs={3}>
            <CenterStyled>
              <IconComponent icon="user" width={30} />
            </CenterStyled>
          </Grid>
          <Grid xs={3}>
            <CenterStyled>
              <IconComponent icon="message" width={25} />
            </CenterStyled>
          </Grid>
          <Grid xs={3}>
            <CenterStyled>
              <IconComponent icon="information" width={30} />
            </CenterStyled>
          </Grid>
          <Grid xs={3}>
            <CenterStyled>
              <IconComponent icon="favlogo" width={30} />
            </CenterStyled>
          </Grid>
        </Grid>
      </BottomMenu>
    </MobileLayoutContainer>
  );
};
export default MobileLayout;
const BottomMenu = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  right: 10px;
  margin: auto;
  border-radius: 12px;
  background-color: ${DARK_BLUE_COLOR};
  padding: 10px;
  opacity: 0.9;
  border: 2px solid #fff;
`;
