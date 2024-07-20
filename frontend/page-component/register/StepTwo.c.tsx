import { Grid, Input, Typography } from "@mui/joy";
import {
  CenterStyled,
  PaddingStyled,
  Pointer,
  SpaceStyled,
} from "../../global-style/global.s";
import { ORANGE_COLOR, WHITE_COLOR } from "../../config/colors";
import styled from "styled-components";
import { FC, useRef, useState } from "react";
import { EditNotifications } from "@mui/icons-material";
import { useTimer } from "react-timer-hook";
import { SMALL_FONT } from "../../config/font";

const RegisterUserStepTwo: FC<{
  setPhone: any;
  loginStepTwo: any;
  setCode: any;
  isCodeWrong: boolean;
  onEditPhone: any;
  loginStepOne: any;
  phone: string;
}> = ({
  loginStepTwo,
  setCode,
  phone,
  onEditPhone,
  loginStepOne,
  isCodeWrong,
}) => {
  const [isBTNHovered, setIsBTNHovered] = useState(false);
  const inputRef1: any = useRef<HTMLInputElement>(null);
  const inputRef2: any = useRef<HTMLInputElement>(null);
  const inputRef3: any = useRef<HTMLInputElement>(null);
  const inputRef4: any = useRef<HTMLInputElement>(null);
  let expiryTimestamp = new Date(Date.now() + 300 * 1000);
  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp,
  });

  const onResendCode = async () => {
    loginStepOne();
    restart(expiryTimestamp);
  };

  const onChnageInput = (targetRef: any, preRef: any, e: any, ref: any) => {
    let val: any = e.target.value;
    if (val?.length > 1) {
      ref.current.value = val?.substr(0, 1);
    }

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
        <CenterStyled>
          <Grid container spacing={1}>
            <Grid>
              <CenterStyled>{phone}</CenterStyled>
            </Grid>
            <Grid>
              <Pointer onClick={onEditPhone}>
                <EditNotifications style={{ color: "white", fontSize: 20 }} />
              </Pointer>
            </Grid>
          </Grid>
          <Typography textColor={WHITE_COLOR}>
            {minutes}:{seconds}
          </Typography>
        </CenterStyled>
        <Typography textColor={ORANGE_COLOR}>
          لطفا کد ارسال شده را وارد کنید
        </Typography>
      </SpaceStyled>
      <div dir="ltr">
        <CenterStyled>
          <Grid container alignContent={"center"}>
            <Grid>
              <InputNumber
                className="input-class"
                ref={inputRef1}
                type="number"
                onChange={(e) =>
                  onChnageInput(inputRef2, undefined, e, inputRef1)
                }
              />
            </Grid>
            <Grid>
              <InputNumber
                className="input-class"
                ref={inputRef2}
                onChange={(e) =>
                  onChnageInput(inputRef3, inputRef1, e, inputRef2)
                }
                type="number"
              />
            </Grid>
            <Grid>
              <InputNumber
                className="input-class"
                ref={inputRef3}
                onChange={(e) =>
                  onChnageInput(inputRef4, inputRef2, e, inputRef3)
                }
                type="number"
              />
            </Grid>
            <Grid>
              <InputNumber
                className="input-class"
                ref={inputRef4}
                onChange={(e) =>
                  onChnageInput(undefined, inputRef3, e, inputRef4)
                }
                type="number"
              />
            </Grid>
          </Grid>
          {minutes == 0 && seconds == 0 && (
            <Pointer onClick={onResendCode}>
              <Typography textColor={ORANGE_COLOR} fontSize={SMALL_FONT}>
                ارسال مجدد کد
              </Typography>
            </Pointer>
          )}
        </CenterStyled>
      </div>
      <SpaceStyled top={15}>
        <SpaceStyled top={20}>
          <Grid container justifyContent={"space-between"}>
            <Grid>
              {isCodeWrong && (
                <Typography textColor={WHITE_COLOR}>
                  لطفا کد ارسال شده را به دقت وارد کنید
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
                onClick={loginStepTwo}
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
  font-weight: bold;
  color: black;
  text-align: center;
  font-size: 15px;
  margin: 3px;
`;
