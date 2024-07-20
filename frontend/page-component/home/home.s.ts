import { Typography } from "@mui/joy";
import styled from "styled-components";
import { ORANGE_COLOR, WHITE_COLOR } from "../../config/colors";

export const HomePageBackgroundStyled = styled.div`
  height: 100vh;
  background-image: url("/background.jpg");
  width: 100%;
  background-position: center;
  background-size: cover;
`;
export const LogoContainer = styled.div`
  position: absolute;
  top: 25px;
  right: 35px;
`;
export const SocialMediaBlock = styled.div`
  position: absolute;
  right: 35px;
  display: flex;
  bottom: 10px;
  img {
    margin-left: 10px;
  }
`;

export const HomeMenuContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 50px;
`;

export const HomeCategoryContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50px;
`;
export const WhiteAndYellowText: any = styled(Typography)`
  color: ${WHITE_COLOR};
  cursor: pointer;
  :hover {
    color: ${ORANGE_COLOR} !important;
  }
`;
