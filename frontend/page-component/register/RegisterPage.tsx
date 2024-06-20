import { Grid, Input, Typography } from "@mui/joy";
import {
  CenterStyled,
  LeftStyled,
  Pointer,
  SpaceStyled,
  WhiteBorderStyled,
} from "../../global-style/global.s";
import HomeMenuComponent from "../home/HomeMenu.c";
import {
  HomeCategoryContainer,
  HomeMenuContainer,
  HomePageBackgroundStyled,
  LogoContainer,
  SocialMediaBlock,
} from "../home/home.s";

import { useState } from "react";
import {
  registerOneService,
  registerTwoService,
} from "../../service/user.service";
import RegisterUserStepOne from "./StepOne.c";
import RegisterUserStepTwo from "./StepTwo.c";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import SocialMediaComponent from "../../global-component/SocialMedia.c";
import IconComponent from "../../global-component/Icon.c";

const RegisterPage = () => {
  const [isStepTwo, setIsStepTwo] = useState<boolean>(false);
  const [isStepThree, setIsStepThree] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const loginStepOne = async () => {
    if (phone.length == 11) {
      const {
        data: { state },
      } = await registerOneService(phone);
      setIsStepTwo(state);
    }
  };

  const loginStepTwo = async () => {
    if (phone.length == 11 && password?.length > 6 && code.length == 4) {
      const data = await registerTwoService({
        code: Number(code),
        password,
        phone,
      });
      let token = data?.data?.data?.data;
      if (token) {
        // setIsStepTwo(false);
        // setIsStepThree(true);
        setCookie("token", token);
        router.replace("/store/choice");
      }
    }
  };
  return (
    <HomePageBackgroundStyled>
      <LogoContainer>
        <img src={"./logo.png"} width={240} />
      </LogoContainer>
      <HomeMenuContainer>
        <HomeMenuComponent />
      </HomeMenuContainer>
      <HomeCategoryContainer>
        <SpaceStyled bottom={40}>
          <CenterStyled>
            <img src="./google-font.png" width={500} />
          </CenterStyled>
        </SpaceStyled>
        <WhiteBorderStyled style={{ borderRadius: 15, width: 610 }}>
          <SpaceStyled top={10} left={10} bottom={-20}>
            <LeftStyled>
              <Pointer onClick={() => router.replace("/")}>
                <IconComponent icon="close" width={15} height={15} />
              </Pointer>
            </LeftStyled>
          </SpaceStyled>
          {!isStepTwo && !isStepThree && (
            <RegisterUserStepOne
              loginStepOne={loginStepOne}
              setPhone={setPhone}
            />
          )}
          {isStepTwo && (
            <RegisterUserStepTwo
              loginStepTwo={loginStepTwo}
              setCode={setCode}
              setPassword={setPassword}
              setPhone={setPhone}
            />
          )}
        </WhiteBorderStyled>
      </HomeCategoryContainer>
      <SocialMediaComponent />
    </HomePageBackgroundStyled>
  );
};
export default RegisterPage;
