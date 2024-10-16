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
              <LogoComponent width={100} />
              <img src="./google-font.png" width={100} />
            </RightStyled>
          </Grid>
          <Grid>
            <SpaceStyled top={90} right={30}>
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
          <img src="/brand-bg.png" width={"90%"} />
        </CenterStyled>
      </SpaceStyled>
      <CenterStyled>
        <div style={{ width: "89%" }}>
          <Swiper
            spaceBetween={21}
            scrollbar={{ draggable: true }}
            slidesPerView={"auto"}
          >
            {brands?.map((item: any) => (
              <SwiperSlide
                style={{
                  width: 190,
                }}
              >
                <ImageServerComponent
                  image={item?.logo}
                  width={190}
                  height={190}
                  border={5}
                />
                <SpaceStyled top={10}>
                  <CenterStyled>
                    <Typography textColor={WHITE_COLOR}>
                      {item?.title}
                    </Typography>
                  </CenterStyled>
                </SpaceStyled>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </CenterStyled>
    </MainLayout>
  );
};
export default BrandPage;
