import { Grid, Input, Typography } from "@mui/joy";
import {
  CenterStyled,
  PaddingStyled,
  SpaceStyled,
} from "../../global-style/global.s";

import { ORANGE_COLOR, WHITE_COLOR } from "../../config/colors";
import styled from "styled-components";
import { FC, useRef, useState } from "react";
import { SMALL_FONT } from "../../config/font";

const RegisterUserStepTwo: FC<{
  setPhone: any;
  loginStepTwo: any;
  setCode: any;
}> = ({ loginStepTwo, setCode }) => {
  const [isBTNHovered, setIsBTNHovered] = useState(false);
  const inputRef1: any = useRef<HTMLInputElement>(null);
  const inputRef2: any = useRef<HTMLInputElement>(null);
  const inputRef3: any = useRef<HTMLInputElement>(null);
  const inputRef4: any = useRef<HTMLInputElement>(null);

  const onChnageInput = (targetRef: any, preRef: any, e: any) => {
    if (e?.target.value?.length >= 1) {
      targetRef?.current?.focus();
    }

    console.log(e?.target.value?.length);

    if (e?.target.value?.length == 0) {
      preRef?.current?.focus();
      preRef?.current?.select();
    }
    let one: string = inputRef1?.current?.value;
    let two: string = inputRef2?.current?.value;
    let three: string = inputRef3?.current?.value;
    let four: string = inputRef4?.current?.value;

    let code = one + two + three + four;
    if (code?.length == 4) {
      console.log(code);

      setCode(code);
    }
  };
  return (
    <PaddingStyled vertical={20} horizontal={30}>
      <SpaceStyled vertical={15}>
        <Typography fontSize={SMALL_FONT} textColor={ORANGE_COLOR}>
          لطفا کد ارسال شده را وارد کنید
        </Typography>
      </SpaceStyled>
      <div dir="ltr">
        <CenterStyled>
          <Grid container alignContent={"center"}>
            <Grid>
              <InputNumber
                ref={inputRef1}
                type="number"
                onChange={(e) => onChnageInput(inputRef2, undefined, e)}
              />
            </Grid>
            <Grid>
              <InputNumber
                ref={inputRef2}
                onChange={(e) => onChnageInput(inputRef3, inputRef1, e)}
                type="number"
              />
            </Grid>
            <Grid>
              <InputNumber
                ref={inputRef3}
                onChange={(e) => onChnageInput(inputRef4, inputRef2, e)}
                type="number"
              />
            </Grid>
            <Grid>
              <InputNumber
                ref={inputRef4}
                onChange={(e) => onChnageInput(undefined, inputRef3, e)}
                type="number"
              />
            </Grid>
          </Grid>
        </CenterStyled>
      </div>
      <SpaceStyled top={15}>
        <SpaceStyled top={20}>
          <Grid container justifyContent={"space-between"}>
            <Grid>
              <Typography fontSize={SMALL_FONT} textColor={WHITE_COLOR}>
                لطفا کد ارسال شده را به دقت وارد کنید
              </Typography>
            </Grid>
            <Grid>
              <LoginButton
                onMouseEnter={() => {
                  setIsBTNHovered(true);
                }}
                onMouseLeave={() => {
                  setIsBTNHovered(false);
                }}
                style={{
                  border: isBTNHovered
                    ? `1.5px solid ${ORANGE_COLOR} `
                    : undefined,
                  color: isBTNHovered ? ORANGE_COLOR : WHITE_COLOR,
                }}
                onClick={loginStepTwo}
              >
                <SpaceStyled top={-2}>ثبت</SpaceStyled>
              </LoginButton>
            </Grid>
          </Grid>
        </SpaceStyled>
      </SpaceStyled>
    </PaddingStyled>
  );
};
export default RegisterUserStepTwo;

const LoginButton = styled.span`
  background-color: transparent;
  width: 120px;
  display: flex;
  border-radius: 10px;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  border: 1.5px solid white;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;
const InputNumber = styled.input`
  background-color: white;
  border-radius: 10px;
  border: none !important;
  aspect-ratio: 1/1;
  width: 40px;
  color: black;
  text-align: center;
  font-size: 15px;
  margin: 3px;
`;
