import { Select } from "@mui/joy";
import styled from "styled-components";
import {
  GRAY_COLOR,
  SECOND_GRAY_COLOR,
  WHITE_COLOR,
} from "../../../../config/colors";
import { SMALL_FONT } from "../../../../config/font";

export const SelectCarStyle = styled(Select)`
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
`;
export const DarkGrayBlockStyled = styled.div`
  background-color: ${SECOND_GRAY_COLOR};
  border-radius: 15px;
  padding: 10px;
`;
export const OptionItemStyledRight = styled.div`
  background-color: #535353;
  padding: 10px;
  color: white;
  border-radius: 0px 10px 10px 0px;
  font-size: ${SMALL_FONT};
`;
export const OptionItemStyledLeft = styled.div`
  background-color: #fff;
  margin-left: 10px;
  padding: 10px;
  color: black;
  border-radius: 10px 0px 0px 10px;
  font-size: ${SMALL_FONT};
`;
