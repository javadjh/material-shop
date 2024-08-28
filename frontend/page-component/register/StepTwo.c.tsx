import { Grid, Input, Typography } from "@mui/joy";
import {
  CenterStyled,
  PaddingStyled,
  Pointer,
  SpaceStyled,
  WhiteBorderStyled,
} from "../../global-style/global.s";
import { ORANGE_COLOR, WHITE_COLOR } from "../../config/colors";
import styled from "styled-components";
import { FC, useEffect, useRef, useState } from "react";
import { EditNotifications, EditOutlined } from "@mui/icons-material";
import { useTimer } from "react-timer-hook";
import { SMALL_FONT } from "../../config/font";
import OTPInput from "react-otp-input";
import CreateIcon from "@mui/icons-material/Create";
import { WhiteText } from "../../global-component/Typography/WhiteText.t";

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
  const [codeNumber, setCodeNumber] = useState<string>("");
  const [isBTNHovered, setIsBTNHovered] = useState(false);

  let expiryTimestamp = new Date(Date.now() + 120 * 1000);
  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp,
  });

  useEffect(() => {
    if (codeNumber?.length == 4) {
      setCode(codeNumber);
    }
  }, [codeNumber]);

  const onKeyPressHandler = () => {
    if (codeNumber?.length == 4) {
      loginStepTwo();
    }
  };

  const onResendCode = async () => {
    loginStepOne();
    restart(expiryTimestamp);
  };

  return (
    <div
      style={{
        maxHeight: 240,
        minHeight: 240,
      }}
    >
      <PaddingStyled horizontal={30} top={15}>
        <SpaceStyled>
          <CenterStyled>
            <Grid
              container
              spacing={1}
              style={{
                backgroundColor: "transparent",
                border: "1px solid white",
                borderRadius: 5,
                marginBottom: 5,
              }}
            >
              <Grid>
                <CenterStyled>
                  <Typography textColor={WHITE_COLOR}>{phone}</Typography>
                </CenterStyled>
              </Grid>
              <Grid>
                <Pointer onClick={onEditPhone}>
                  <EditOutlined
                    style={{ color: "white", fontSize: 20, marginBottom: -5 }}
                  />
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
            <OTPInput
              value={codeNumber}
              onChange={setCodeNumber}
              numInputs={4}
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
                    onKeyPress={onKeyPressHandler}
                    {...props}
                    className="input-class"
                  />
                </div>
              )}
            />
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
    </div>
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
