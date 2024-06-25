import { Grid, Input, Typography } from "@mui/joy";
import {
  CenterStyled,
  CenterVerticalStyled,
  PaddingStyled,
  SpaceStyled,
} from "../../global-style/global.s";

import { ORANGE_COLOR, WHITE_COLOR } from "../../config/colors";
import styled from "styled-components";
import { FC, useRef, useState } from "react";
import { SMALL_FONT } from "../../config/font";
import { registerOneService } from "../../service/user.service";
import Link from "next/link";

const RegisterUserStepOne: FC<{
  setPhone: any;
  loginStepOne: any;
}> = ({ loginStepOne, setPhone }) => {
  let [isValid, setIsValid] = useState<boolean>(false);
  const inputRef1: any = useRef<HTMLInputElement>(null);
  const inputRef2: any = useRef<HTMLInputElement>(null);
  const inputRef3: any = useRef<HTMLInputElement>(null);
  const inputRef4: any = useRef<HTMLInputElement>(null);
  const inputRef5: any = useRef<HTMLInputElement>(null);
  const inputRef6: any = useRef<HTMLInputElement>(null);
  const inputRef7: any = useRef<HTMLInputElement>(null);
  const inputRef8: any = useRef<HTMLInputElement>(null);
  const inputRef9: any = useRef<HTMLInputElement>(null);
  const inputRef10: any = useRef<HTMLInputElement>(null);
  const inputRef11: any = useRef<HTMLInputElement>(null);
  const btn: any = useRef<any>(null);
  const [isBTNHovered, setIsBTNHovered] = useState(false);

  const onChnageInput = (targetRef: any, preRef: any, e: any) => {
    if (e?.target.value?.length == 1) {
      targetRef?.current?.focus();
    }

    console.log(e?.target.value?.length);

    if (e?.target.value?.length == 0) {
      console.log("eeeeeeeeee");

      preRef?.current?.focus();
      preRef?.current?.select();
    }
    let one: string = inputRef1?.current?.value;
    let two: string = inputRef2?.current?.value;
    let three: string = inputRef3?.current?.value;
    let four: string = inputRef4?.current?.value;
    let five: string = inputRef5?.current?.value;
    let six: string = inputRef6?.current?.value;
    let seven: string = inputRef7?.current?.value;
    let eight: string = inputRef8?.current?.value;
    let nine: string = inputRef9?.current?.value;
    let ten: string = inputRef10?.current?.value;
    let eleven: string = inputRef11?.current?.value;
    let phoneNumber =
      one +
      two +
      three +
      four +
      five +
      six +
      seven +
      eight +
      nine +
      ten +
      eleven;
    if (phoneNumber?.length == 11) {
      console.log(phoneNumber);

      setPhone(phoneNumber);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return (
    <PaddingStyled vertical={20} horizontal={30}>
      <SpaceStyled vertical={15}>
        <Typography fontSize={SMALL_FONT} textColor={ORANGE_COLOR}>
          لطفا شماره تلفن همراه خود را وارد کنید
        </Typography>
      </SpaceStyled>
      {/* <Input
        placeholder="شماره تماس خود را وارد کنید"
        onChange={(e) => setPhone(e.target.value)}
      /> */}
      <CenterStyled>
        <div dir="ltr">
          <InputNumber
            ref={inputRef1}
            type="number"
            onChange={(e) => onChnageInput(inputRef2, undefined, e)}
          />
          <InputNumber
            ref={inputRef2}
            onChange={(e) => onChnageInput(inputRef3, inputRef1, e)}
            type="number"
          />
          <InputNumber
            ref={inputRef3}
            onChange={(e) => onChnageInput(inputRef4, inputRef2, e)}
            type="number"
          />
          <InputNumber
            ref={inputRef4}
            onChange={(e) => onChnageInput(inputRef5, inputRef3, e)}
            type="number"
          />
          <InputNumber
            ref={inputRef5}
            onChange={(e) => onChnageInput(inputRef6, inputRef4, e)}
            type="number"
          />
          <InputNumber
            ref={inputRef6}
            onChange={(e) => onChnageInput(inputRef7, inputRef5, e)}
            type="number"
          />
          <InputNumber
            ref={inputRef7}
            onChange={(e) => onChnageInput(inputRef8, inputRef6, e)}
            type="number"
          />
          <InputNumber
            ref={inputRef8}
            onChange={(e) => onChnageInput(inputRef9, inputRef7, e)}
            type="number"
          />
          <InputNumber
            ref={inputRef9}
            onChange={(e) => onChnageInput(inputRef10, inputRef8, e)}
            type="number"
          />
          <InputNumber
            ref={inputRef10}
            onChange={(e) => onChnageInput(inputRef11, inputRef9, e)}
            type="number"
          />
          <InputNumber
            ref={inputRef11}
            onChange={(e) => onChnageInput(undefined, inputRef10, e)}
            type="number"
          />
        </div>
      </CenterStyled>
      <SpaceStyled top={15}>
        <Grid container spacing={1}>
          <Grid>
            <Typography fontSize={SMALL_FONT} textColor={WHITE_COLOR}>
              با عضویت در سازه کمک تمام
            </Typography>
          </Grid>

          <Grid>
            <Link href={"/rules"}>
              <Typography fontSize={SMALL_FONT} textColor={ORANGE_COLOR}>
                شرایط و قوانین
              </Typography>
            </Link>
          </Grid>

          <Grid>
            <Typography fontSize={SMALL_FONT} textColor={WHITE_COLOR}>
              را میپذیرم
            </Typography>
          </Grid>
        </Grid>
        <SpaceStyled top={20}>
          <Grid container justifyContent={"space-between"}>
            <Grid>
              {!isValid && (
                <Typography fontSize={SMALL_FONT} textColor={WHITE_COLOR}>
                  لطفا اطلاعات خواسته شده را به دقت وارد کنید
                </Typography>
              )}
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
                ref={btn}
                onClick={loginStepOne}
              >
                <SpaceStyled top={-2}>ورود</SpaceStyled>
              </LoginButton>
            </Grid>
          </Grid>
        </SpaceStyled>
      </SpaceStyled>
    </PaddingStyled>
  );
};
export default RegisterUserStepOne;

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
