import { Grid, Typography } from "@mui/joy";
import {
  CenterStyled,
  PaddingStyled,
  RightStyled,
  SpaceStyled,
} from "../../global-style/global.s";
import MainLayout from "../../layout/MainLayout";
import LogoComponent from "../../global-component/Logo.c";
import { ORANGE_COLOR, WHITE_COLOR } from "../../config/colors";
import { LARGE_FONT } from "../../config/font";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageServerComponent from "../../global-component/ImageServer.c";
import { WhiteText } from "../../global-component/Typography/WhiteText.t";

const BrandPage: FC<any> = ({ brands }) => {
  return (
    <MainLayout>
      <PaddingStyled top={10}>
        <Grid container>
          <Grid>
            <RightStyled>
              <LogoComponent />
              <img src="./google-font.png" width={200} />
            </RightStyled>
          </Grid>
          <Grid>
            <SpaceStyled top={200} right={30}>
              <Typography
                fontWeight={"bold"}
                textColor={WHITE_COLOR}
                fontSize={LARGE_FONT}
              >
                همکار گرامی در صورتی که به عرضه محصولات خود در ساازه کمک تمایل
                دارید به ما{" "}
                <Typography textColor={ORANGE_COLOR}>بپیوندید</Typography> .
              </Typography>
            </SpaceStyled>
          </Grid>
        </Grid>
      </PaddingStyled>
      <SpaceStyled top={40} bottom={20}>
        <CenterStyled>
          <img src="/brand-bg.png" width={"70%"} />
        </CenterStyled>
      </SpaceStyled>
      <Swiper
        spaceBetween={10}
        scrollbar={{ draggable: true }}
        slidesPerView={"auto"}
      >
        {brands?.map((item: any) => (
          <SwiperSlide
            style={{
              width: 250,
            }}
          >
            <ImageServerComponent
              image={item?.logo}
              width={230}
              height={230}
              border={5}
            />
            <SpaceStyled top={10}>
              <CenterStyled>
                <WhiteText>{item?.title}</WhiteText>
              </CenterStyled>
            </SpaceStyled>
          </SwiperSlide>
        ))}
      </Swiper>
    </MainLayout>
  );
};
export default BrandPage;
