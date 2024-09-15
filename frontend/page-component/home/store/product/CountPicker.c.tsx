import styled from "styled-components";
import { ORANGE_COLOR } from "../../../../config/colors";
import IconComponent from "../../../../global-component/Icon.c";
import { Typography } from "@mui/joy";
import { WhiteText } from "../../../../global-component/Typography/WhiteText.t";
import { FC, useState } from "react";

const CountPickerComponent: FC<any> = ({ onChange, maxValue }) => {
  const [value, setValue] = useState<number>(1);
  const onChanageValue = (isAdd: boolean) => {
    console.log("tap");

    if (isAdd) {
      if (value < maxValue) {
        setValue(value + 1);
        onChange(value + 1);
      }
    } else {
      if (value != 0) {
        setValue(value - 1);
        onChange(value - 1);
      }
    }
  };
  return (
    <OrangeBorder>
      <div onClick={() => onChanageValue(true)}>
        <CircleOrange>+</CircleOrange>
      </div>
      <WhiteText>{value}</WhiteText>
      <div onClick={() => onChanageValue(false)}>
        <CircleOrange>-</CircleOrange>
      </div>
    </OrangeBorder>
  );
};
export default CountPickerComponent;
export const OrangeBorder = styled.div`
  border: 2px solid ${ORANGE_COLOR};
  border-radius: 10px;
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CircleOrange = styled.div`
  border: 2px solid ${ORANGE_COLOR};
  border-radius: 100px;
  width: 20px;
  height: 20px;
  aspect-ratio: 1/1;
  padding: 5px;
  justify-content: center;
  align-items: center;
`;
