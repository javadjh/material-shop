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
  const [isCodeWrong, setIsCodeWrong] = useState<boolean>(false);
  const [isRepeatRequest, setIsRepeatRequest] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const router = useRouter();

  const onEditPhone = async () => {
    setPhone("");
    setIsStepTwo(false);
  };

  const loginStepOne = async () => {
    try {
      if (phone.length == 11) {
        const {
          data: { state },
        } = await registerOneService(phone);
        setIsStepTwo(state);
      }
    } catch (error) {
      setIsRepeatRequest(true);
    }
  };

  const loginStepTwo = async () => {
    if (phone.length == 11 && code.length == 4) {
      try {
        const data = await registerTwoService({
          code: Number(code),
          phone,
        });
        let token = data?.data?.data?.data;
        if (token) {
          // setIsStepTwo(false);
          // setIsStepThree(true);
          setCookie("token", token);
          setCookie("phone", phone);
          router.replace("/store/choice?reload=true");
        }
      } catch (error) {
        setIsCodeWrong(true);
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
              isRepeatRequest={isRepeatRequest}
            />
          )}
          {isStepTwo && (
            <RegisterUserStepTwo
              loginStepTwo={loginStepTwo}
              setCode={setCode}
              loginStepOne={loginStepOne}
              setPhone={setPhone}
              phone={phone}
              onEditPhone={onEditPhone}
              isCodeWrong={isCodeWrong}
            />
          )}
        </WhiteBorderStyled>
      </HomeCategoryContainer>
      <SocialMediaComponent />
    </HomePageBackgroundStyled>
  );
};
export default RegisterPage;
