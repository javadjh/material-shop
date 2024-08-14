import { Grid, Input, Typography } from "@mui/joy";
import {
  CenterStyled,
  CenterVerticalStyled,
  PaddingStyled,
  SpaceStyled,
} from "../../global-style/global.s";

import { ORANGE_COLOR, WHITE_COLOR } from "../../config/colors";
import styled from "styled-components";
import { FC, useEffect, useRef, useState } from "react";
import { SMALL_FONT } from "../../config/font";
import { registerOneService } from "../../service/user.service";
import Link from "next/link";
import OTPInput from "react-otp-input";

const RegisterUserStepOne: FC<{
  setPhone: any;
  loginStepOne: any;
  isRepeatRequest: boolean;
}> = ({ loginStepOne, setPhone, isRepeatRequest }) => {
  let [phoneNumber, setPhoneNumber] = useState<string>();

  const btn: any = useRef<any>(null);
  const [isBTNHovered, setIsBTNHovered] = useState(false);

  useEffect(() => {
    console.log(phoneNumber?.length);

    if (phoneNumber?.length == 9) {
      setPhone(`09${phoneNumber}`);
    }
  }, [phoneNumber]);

  useEffect(() => {
    const listener = (event: any) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        if (phoneNumber?.length == 9) {
          loginStepOne();
        }
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <PaddingStyled vertical={20} horizontal={30}>
      <SpaceStyled vertical={15}>
        <Typography fontSize={SMALL_FONT} textColor={ORANGE_COLOR}>
          لطفا شماره تلفن همراه خود را وارد کنید
        </Typography>
      </SpaceStyled>

      <CenterStyled>
        <div dir="ltr">
          <Grid container>
            <Grid>
              <InputNumber disabled value={"0"} max={1} type="number" />
            </Grid>
            <Grid>
              <InputNumber disabled value={"9"} max={1} type="number" />
            </Grid>
            <Grid>
              <OTPInput
                value={phoneNumber}
                onChange={setPhoneNumber}
                numInputs={9}
                inputStyle={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  border: "none !important",
                  aspectRatio: 1 / 1,
                  width: "40px",
                  fontWeight: "bold",
                  color: "black !important",
                  textAlign: "center",
                  fontSize: "15px",
                  margin: "3px",
                }}
                renderInput={(props) => (
                  <div>
                    <InputNumber
                      {...props}
                      className="input-class"
                      type="number"
                    />
                  </div>
                )}
              />
            </Grid>
          </Grid>
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
              {isRepeatRequest && (
                <Typography fontSize={SMALL_FONT} textColor={WHITE_COLOR}>
                  بیش از حد تلاش کردید ، دقایقی دیگر امتحان کنید
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
                <SpaceStyled top={-2}>ارسال کد</SpaceStyled>
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
  font-weight: bold;
  color: black !important;
  text-align: center;
  font-size: 15px;
  margin: 3px;
`;
