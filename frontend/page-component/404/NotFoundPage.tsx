import styled from "styled-components";
import {
  HomeMenuContainer,
  LogoContainer,
  SocialMediaBlock,
} from "../home/home.s";
import HomeMenuComponent from "../home/HomeMenu.c";
import { HeaderLayoutStyled } from "../../layout/MainLayout.s";
import MainLayout from "../../layout/MainLayout";
import SocialMediaComponent from "../../global-component/SocialMedia.c";

const NotFoundPage = () => {
  return (
    <MainLayout>
      <LogoContainer>
        <img src={"/logo.png"} width={350} />
      </LogoContainer>
      <NotFoundPageContainer>
        <SocialMediaComponent />
      </NotFoundPageContainer>
    </MainLayout>
  );
};
export default NotFoundPage;
const NotFoundPageContainer = styled.div`
  height: 100vh;
  background-image: url("/404.jpg");
  width: 100%;
`;
