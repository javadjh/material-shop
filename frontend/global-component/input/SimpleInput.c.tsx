import { FC } from "react";
import styled from "styled-components";
import { ORANGE_COLOR, WHITE_COLOR } from "../../config/colors";
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
const InputStyled = styled.input`
  width: 100%;
  background-color: transparent !important;
  border-radius: 5px;
  color: ${WHITE_COLOR} !important;
  ::placeholder {
    color: ${WHITE_COLOR} !important;
    opacity: 1 !important;
    font-weight: bold;
  }
  margin: 10px 0px;
  padding: 10px;
  border: ${(props: any) =>
    props.isError
      ? "1.5px solid red !important"
      : "1px solid orange !important"};
`;
const TextAreaStyled = styled.textarea`
  width: 100%;
  background-color: transparent !important;
  border-radius: 5px;
  color: ${WHITE_COLOR} !important;
  margin: 10px 0px;

  border: 2px solid white;
  ::placeholder {
    color: ${WHITE_COLOR} !important;
    opacity: 1 !important;
    font-weight: bold;
  }
  padding: 10px;
  border: ${(props: any) =>
    props.isError
      ? "1.5px solid red !important"
      : "1px solid orange !important"};
`;
