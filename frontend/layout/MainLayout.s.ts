import { Input, Select } from "@mui/joy";
import styled from "styled-components";
import { ORANGE_COLOR, WHITE_COLOR } from "../config/colors";

export const MainLayoutContainer = styled.div`
  min-height: 100vh;
  background-image: url("/main-bg.jpg");
`;

export const MobileLayoutContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: url("/mobile-bg.jpg");
`;
export const HeaderLayoutStyled = styled.div`
  position: fixed;
  top: 20px;

  left: 3%;
`;

export const MakeBoxContainer: any = styled.div`
  padding-left: 30px;
  padding-right: 30px;
`;
export const DepartmentSelect = styled(Select)`
  background-color: ${ORANGE_COLOR} !important;
  border: none !important;
  min-width: 150px !important;
  border-radius: 40px !important;
  ::placeholder {
    color: black;
  }
`;

export const OrangeMainLayoutBTN = styled.div`
  border-radius: 40px;
  background-color: ${ORANGE_COLOR};
  cursor: pointer;
  color: black;
  padding: 5px 30px;
`;
export const SearchBox = styled.div`
  position: absolute;
  top: 40px;
  border-radius: 10px;
  left: 5px;
  right: 5px;
  background-color: white;
  width: 340px;
`;
