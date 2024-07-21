import { FC } from "react";
import styled from "styled-components";
import { ORANGE_COLOR } from "../../config/colors";
import { Input, Textarea } from "@mui/joy";
import { SMALL_FONT } from "../../config/font";

const SimpleInputComponent: FC<any> = (props) => {
  return (
    <>
      {props.isArea ? (
        <TextAreaStyled minRows={3} {...props} />
      ) : (
        <InputStyled {...props} />
      )}
    </>
  );
};
export default SimpleInputComponent;
const InputStyled = styled(Input)`
  width: 100%;
  background-color: transparent !important;
  border-radius: 10px;
  font-size: ${SMALL_FONT};
  color: ${ORANGE_COLOR} !important;
  ::placeholder {
    color: ${ORANGE_COLOR} !important;
    opacity: 1 !important;
    font-weight: bold;
  }
  margin: 10px 0px;
  border: 2px solid white;
  padding: 10px;
`;
const TextAreaStyled = styled(Textarea)`
  width: 100%;
  background-color: transparent !important;
  border-radius: 10px;
  color: ${ORANGE_COLOR} !important;
  margin: 10px 0px;
  font-size: ${SMALL_FONT};

  border: 2px solid white;
  ::placeholder {
    color: ${ORANGE_COLOR} !important;
    opacity: 1 !important;
    font-weight: bold;
  }
  padding: 10px;
`;
