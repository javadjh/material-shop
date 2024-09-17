import { Input, Select } from "@mui/joy";
import styled from "styled-components";
import {
  GRAY_COLOR,
  ORANGE_COLOR,
  WHITE_COLOR,
} from "../../../../config/colors";
import { SMALL_FONT } from "../../../../config/font";

export const ProductsSideContainerStyled = styled.div`
  background-color: transparent;
  border: 2px solid #fff;
  padding: 10px;
  border-radius: 20px;
  height: calc(85vh);
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-top: 10px;
`;
export const WideSideContainerStyled = styled.div`
  background-color: transparent;
  border: 2px solid #fff;
  padding: 10px;
  border-radius: 20px;
  height: calc(100vh - 20px);
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-top: 10px;
`;
export const ProductsWideSideContainerStyled = styled.div`
  background-color: transparent;
  border: 2px solid #fff;
  padding: 10px;
  border-radius: 20px;
  height: calc(95vh);
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-top: 10px;
`;
export const MainCategorySelectStyled = styled(Select)`
  width: 100%;
  background-color: ${GRAY_COLOR} !important;
  border: none !important;
  margin-top: 10px;
  color: #fff;
`;
export const CategoryItemContainer = styled.div`
  cursor: pointer;
  background-color: transparent;
  padding: 10px;
  width: 100%;
  border: 2px solid #fff;
  display: flex;
  font-size: ${SMALL_FONT};
  border-radius: 10px;
  margin: 5px 0px;
  justify-content: center;
  align-items: center;
  text-align: center;
  :hover {
    border: 2px solid ${ORANGE_COLOR};
  }
`;
export const ProductContainerStyled = styled.div`
  cursor: pointer;
  background-color: ${GRAY_COLOR};
  padding: 15px;
  width: 175px;
  color: ${WHITE_COLOR};
  border-radius: 15px;
`;
export const SimpleInput = styled(Input)`
  background-color: transparent !important;
  border: none !important;
  margin: 0px !important;
  font-size: ${SMALL_FONT};
  direction: ltr !important;
  color: ${WHITE_COLOR} !important;
  padding: 0px !important;
`;
export const SelectBoxContainer = styled.div`
  background-color: ${GRAY_COLOR};
  padding: 10px;
  border-radius: 5px;
`;
export const FilterContainer = styled.div`
  background-color: rgba(153, 153, 153, 1);
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  height: calc(100vh - 80px);
  overflow-y: auto;
`;
