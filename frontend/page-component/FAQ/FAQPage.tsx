import { useEffect, useState } from "react";
import { useWindowSize } from "../../global-component/ScreenBridge.c";
import MainLayout from "../../layout/MainLayout";
import SocialMediaComponent from "../../global-component/SocialMedia.c";
import { PaddingStyled, SpaceStyled } from "../../global-style/global.s";
import { Grid } from "@mui/joy";
import LogoComponent from "../../global-component/Logo.c";
import ActionBorderComponent from "../../global-component/ActionBorder.c";
import { LIGHT_GRAY_COLOR } from "../../config/colors";
import styled from "styled-components";
import ChatComponent from "./Chat.c";

const FAQPage = () => {
  const [department, setDepartment] = useState<string>("");
  const size = useWindowSize();
  useEffect(() => {
    console.log(department);
  }, [department]);
  return (
    <MainLayout>
      <SocialMediaComponent />
      <PaddingStyled vertical={20} horizontal={10}>
        <Grid container>
          <Grid lg={2}>
            <SpaceStyled bottom={10}>
              <LogoComponent width={200} />
            </SpaceStyled>
            <div onClick={() => setDepartment("general")}>
              <ActionBorderComponent padding={size.height > 660 ? 15 : 5}>
                سوالات متداول کلی سایت
              </ActionBorderComponent>
            </div>

            <div onClick={() => setDepartment("store")}>
              <ActionBorderComponent padding={size.height > 660 ? 15 : 5}>
                سوالات متداول بخش فروشگاه
              </ActionBorderComponent>
            </div>

            <div onClick={() => setDepartment("service")}>
              <ActionBorderComponent
                padding={size.height > 660 ? 15 : 5}
                fontSize={13}
              >
                سوالات بخش خدمات ساختمانی
              </ActionBorderComponent>
            </div>
            <div onClick={() => setDepartment("information")}>
              <ActionBorderComponent
                padding={size.height > 660 ? 15 : 5}
                fontSize={13}
              >
                سوالات بخش اطلاعات ساختمانی
              </ActionBorderComponent>
            </div>

            <div onClick={() => setDepartment("chat")}>
              <ActionBorderComponent padding={size.height > 660 ? 15 : 5}>
                گفتگو
              </ActionBorderComponent>
            </div>
          </Grid>
          <Grid lg={10}>
            {department == "chat" ? (
              <ChatComponent />
            ) : (
              <FAQTextContainer></FAQTextContainer>
            )}
          </Grid>
        </Grid>
      </PaddingStyled>
    </MainLayout>
  );
};
export default FAQPage;
const FAQTextContainer = styled.div`
  background-color: ${LIGHT_GRAY_COLOR};
  border-radius: 10px;
  margin-top: 60px;
  margin-right: 30px;
  width: 100%-30;
  height: 80vh;
`;
const ChatContainer = styled.div`
  background-color: #495e63;
  margin-top: 80px;
  margin-right: 50px;
  height: calc(100vh - 130px);
  border-radius: 20px;
  color: #fff;
`;
