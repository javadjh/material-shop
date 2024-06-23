import { FC } from "react";
import styled from "styled-components";

const SimpleInputComponent: FC<any> = (props) => {
  return (
    <>
      {props.isArea ? (
        <TextAreaStyled {...props} />
      ) : (
        <InputStyled {...props} />
      )}
    </>
  );
};
export default SimpleInputComponent;
const InputStyled = styled.input`
  width: 100%;
  background-color: transparent;
  border-radius: 10px;
  margin: 10px 0px;
  border: 2px solid white;
  padding: 10px;
`;
const TextAreaStyled = styled.textarea`
  width: 100%;
  background-color: transparent;
  border-radius: 10px;
  margin: 10px 0px;
  border: 2px solid white;
  padding: 10px;
`;
