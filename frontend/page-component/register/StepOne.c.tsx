import { Grid, Input, Typography } from "@mui/joy";
import {
  CenterVerticalStyled,
  PaddingStyled,
  SpaceStyled,
} from "../../global-style/global.s";

import { ORANGE_COLOR, WHITE_COLOR } from "../../config/colors";
import styled from "styled-components";
import { FC, useState } from "react";
import { SMALL_FONT } from "../../config/font";
import { registerOneService } from "../../service/user.service";
import Link from "next/link";

const RegisterUserStepOne: FC<{
  setPhone: any;
  loginStepOne: any;
}> = ({ loginStepOne, setPhone }) => {
  const [isBTNHovered, setIsBTNHovered] = useState(false);
  return (
    <PaddingStyled vertical={20} horizontal={30}>
      <SpaceStyled vertical={15}>
        <Typography fontSize={SMALL_FONT} textColor={ORANGE_COLOR}>
          لطفا شماره تلفن همراه خود را وارد کنید
        </Typography>
      </SpaceStyled>
      <Input
        placeholder="شماره تماس خود را وارد کنید"
        onChange={(e) => setPhone(e.target.value)}
      />
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
              <Typography fontSize={SMALL_FONT} textColor={WHITE_COLOR}>
                لطفا اطلاعات خواسته شده را به دقت وارد کنید
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
