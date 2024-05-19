import { Typography } from "@mui/joy";
import styled from "styled-components";
import { ORANGE_COLOR, WHITE_COLOR } from "../../config/colors";

export const HomePageBackgroundStyled = styled.div`
  height: 100vh;
  background-image: url("./background.jpg");
  width: 100%;
  background-position: center;
  background-size: cover;
`;
export const LogoContainer = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
`;
export const SocialMediaBlock = styled.div`
  position: absolute;
  right: 35px;
  bottom: 10px;
  img {
    margin-left: 10px;
  }
`;

export const HomeMenuContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 35px;
`;
export const HomeCategoryItemContainer = styled.div`
  border-radius: 20px;
  border: 2px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  cursor: pointer;

  p {
    &:hover {
      z-index: 100;
      color: ${ORANGE_COLOR};
    }
  }
`;
export const HomeCategoryContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 35px;
`;
export const WhiteAndYellowText: any = styled(Typography)`
  color: ${WHITE_COLOR};
  cursor: pointer;
  :hover {
    color: ${ORANGE_COLOR} !important;
  }
`;