import { Grid, Input, Typography } from "@mui/joy";
import { PaddingStyled, SpaceStyled } from "../../global-style/global.s";

import { ORANGE_COLOR, WHITE_COLOR } from "../../config/colors";
import styled from "styled-components";
import { FC, useState } from "react";
import { SMALL_FONT } from "../../config/font";

const RegisterUserStepTwo: FC<{
  setPhone: any;
  loginStepTwo: any;
  setPassword: any;
  setCode: any;
}> = ({ loginStepTwo, setCode, setPassword }) => {
  const [isBTNHovered, setIsBTNHovered] = useState(false);

  return (
    <PaddingStyled vertical={20} horizontal={30}>
      <SpaceStyled vertical={15}>
        <Typography fontSize={SMALL_FONT} textColor={ORANGE_COLOR}>
          لطفا کد ارسال شده را وارد کنید
        </Typography>
      </SpaceStyled>
      <Grid container spacing={1}>
        <Grid sm={4}>
          <Input
            placeholder="کد ارسال شده"
            onChange={(e) => setCode(e.target.value)}
          />
        </Grid>
        <Grid sm={8}>
          <Input
            placeholder="تعیین کلمه عبور"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
      </Grid>
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
                <SpaceStyled top={-2}>ثبت اولیه</SpaceStyled>
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
  width: 100px;
  display: flex;
  border-radius: 10px;
  height: 30px;
  justify-content: center;
  border: 1px solid white;
  align-items: center;
  text-align: center;
`;
