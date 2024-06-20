import { Input } from "@mui/joy";
import styled from "styled-components";
import { ORANGE_COLOR, WHITE_COLOR } from "../config/colors";

export const MainLayoutContainer = styled.div`
  min-height: 100vh;
  background-image: url("/main-bg.jpg");
`;
export const HeaderLayoutStyled = styled.div`
  position: absolute;
  top: 20px;
  left: 3%;
`;
export const SearchHeaderStyled: any = styled(Input)`
  background-color: transparent !important;
  border: 3px solid ${ORANGE_COLOR};
  width: 400px;
  border-radius: 40px !important;
  color: ${WHITE_COLOR};
`;
export const MakeBoxContainer: any = styled.div`
  padding-left: 30px;
  padding-right: 30px;
`;
