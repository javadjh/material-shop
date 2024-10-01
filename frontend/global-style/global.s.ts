import styled from "styled-components";
import {
  DERTY_ORANGE_COLOR,
  LIGHT_GRAY_COLOR,
  ORANGE_COLOR,
  WHITE_COLOR,
} from "../config/colors";
import { MEDIUM_FONT, SMALL_FONT } from "../config/font";

export const CenterStyled = styled.div`
  justify-content: center;
  display: flex;
  align-content: center;
  width: 100%;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;
export const LeftStyled = styled.div`
  justify-content: left;
  display: flex;
  align-content: flex-end;
  width: 100%;
  flex-direction: column;
  justify-items: flex-end;
  align-items: end;
`;
export const RightStyled = styled.div`
  justify-content: right;
  display: flex;
  align-content: flex-start;
  width: 100%;
  flex-direction: column;
  justify-items: flex-start;
  align-items: start;
`;
export const MarginStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenterVerticalStyled = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
export const SpaceStyled: any = styled.div`
  margin-top: ${(props: any) => props.top || props.vertical || 0}px;
  margin-bottom: ${(props: any) => props.bottom || props.vertical || 0}px;

  margin-right: ${(props: any) => props.right || props.horizontal || 0}px;
  margin-left: ${(props: any) => props.left || props.horizontal || 0}px;
`;
export const PaddingStyled: any = styled.div`
  padding-top: ${(props: any) => props.top || props.vertical || 0}px;
  padding-bottom: ${(props: any) => props.bottom || props.vertical || 0}px;

  padding-right: ${(props: any) => props.right || props.horizontal || 0}px;
  padding-left: ${(props: any) => props.left || props.horizontal || 0}px;
`;
export const Pointer = styled.span`
  cursor: pointer;
`;
export const WhiteBorderStyled = styled.div`
  background-color: transparent;
  border: 1px solid white;
  display: block;
  border-radius: 5px;
  width: 100%;
`;

export const OrangeHR = styled.div`
  border-bottom: 2px solid ${ORANGE_COLOR};
  width: 100%;
  margin: 10px 0px;
`;
export const GrayBlockStyled = styled.div`
  background-color: ${LIGHT_GRAY_COLOR};
  padding: 10px 20px;
  color: black;
  width: 100%;
  font-size: ${SMALL_FONT};
  border-radius: 8px;
  font-weight: bold;
`;
export const OrangeBlockStyled = styled.div`
  background-color: ${ORANGE_COLOR};
  padding: 10px 20px;
  color: black;
  width: 100%;
  font-size: ${SMALL_FONT};
  border-radius: 8px;
  font-weight: bold;
`;
export const DertyOrangeBlockStyled = styled.div`
  background-color: ${DERTY_ORANGE_COLOR};
  padding: 10px 20px;
  color: black;
  width: 100%;
  font-size: ${SMALL_FONT};
  border-radius: 8px;
  font-weight: bold;
`;
export const OrangeBlockNonePaddingStyled = styled.div`
  background-color: ${ORANGE_COLOR};
  padding: 0px;
  color: black;
  width: 100%;
  font-size: ${SMALL_FONT};
  border-radius: 8px;
  font-weight: bold;
`;
export const WhiteBlockStyled = styled.div`
  background-color: ${WHITE_COLOR};
  padding: 10px 20px;
  color: black;
  width: 100%;
  font-size: ${SMALL_FONT};
  border-radius: 8px;
  font-weight: bold;
`;
export const OrangeBorderBlock = styled.div`
  border: 2px solid ${ORANGE_COLOR};
  padding: 10px;
  display: flex;
  height: 140px;

  width: 100%;
  flex-direction: column;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
`;
export const SimpleOrangeBorderBlock: any = styled.div`
  border: 2px solid ${ORANGE_COLOR};
  display: flex;

  border-radius: 10px;
`;
export const Abs = styled.div`
  position: absolute;
`;
export const SelectContainer = styled.div`
  position: relative;
`;
export const SelectButton = styled.div`
  background-color: transparent;
  border-radius: 10px;
  padding: 20px;
  border: 2px solid white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 100%;
  cursor: pointer;
`;
export const SelectFloatingContainer = styled.div`
  position: absolute;
  background-color: white;
  width: 95%;
  right: 5px;
  left: 5px;
  top: 48px;
  padding: 5px;
  border-radius: 10px;
`;
export const SelectItemContainer = styled.div`
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
