import { Input, Select } from "@mui/joy";
import styled from "styled-components";
import {
  GRAY_COLOR,
  LIGHT_GRAY_COLOR,
  ORANGE_COLOR,
  WHITE_COLOR,
} from "../config/colors";
import { MEDIUM_FONT } from "../config/font";

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
  position: absolute;
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
export const SelectDepartmentContainer = styled.div`
  position: relative;
`;
export const SelectDepartmentButton = styled.div`
  background-color: ${ORANGE_COLOR};
  border-radius: 100px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  width: 170px;
  cursor: pointer;
`;
export const SelectFloatingDepartmentContainer = styled.div`
  position: absolute;
  background-color: white;
  width: 160px;
  right: 5px;
  left: 5px;
  top: 32px;
  padding: 5px;
  border-radius: 10px;
`;
export const SelectItemDepartmentContainer = styled.div`
  background-color: ${LIGHT_GRAY_COLOR};
  color: black;
  border-radius: 10px;
  font-size: ${MEDIUM_FONT};
  cursor: pointer;
  margin-bottom: 5px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
