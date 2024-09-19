import { Grid } from "@mui/joy";
import LogoComponent from "../../../../global-component/Logo.c";
import {
  CenterStyled,
  PaddingStyled,
  SpaceStyled,
} from "../../../../global-style/global.s";
import MainLayout from "../../../../layout/MainLayout";
import StoreItemComponent from "./StoreItem.s";
import CategoryItemComponent from "./CategoryItem.c";
import { getCategoriesService } from "../../../../service/category.service";
import { NextPage } from "next";
import { ICategory } from "../../../../types/category.type";
import Link from "next/link";
import ImageServerComponent from "../../../../global-component/ImageServer.c";
import { useEffect, useState } from "react";
import { getAppSettingService } from "../../../../service/appsetting.service";
import { useWindowSize } from "../../../../global-component/ScreenBridge.c";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

const ChoicePage: NextPage<{ categories: Array<ICategory> }> = ({
  categories,
}) => {
  const router = useRouter();
  const [media, setMedia] = useState<any>({});
  const size = useWindowSize();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await getAppSettingService();
    let links = res?.data?.data?.data;
    setMedia(links);
  };
  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid lg={9.8}>
          <PaddingStyled top={20}>
            <Grid container>
              <Grid lg={4}>
                <SpaceStyled top={10}>
                  <LogoComponent width={size?.height > 650 ? 190 : 150} />
                  <CenterStyled>
                    <img src="/google-font.png" width={"65%"} />
                  </CenterStyled>
                </SpaceStyled>
              </Grid>
              <Grid lg={8}>
                <PaddingStyled top={70} right={10} bottom={20}>
                  <ImageServerComponent
                    image={media?.banner}
                    border={10}
                    width={"100%"}
                    height={"19vh"}
                  />
                </PaddingStyled>
              </Grid>
            </Grid>
            <SpaceStyled top={-20}>
              <Grid spacing={2.5} rowSpacing={2.5} container>
                {categories?.map((item) => (
                  <Grid lg={4}>
                    <Link
                      href={{
                        pathname: "/store/category",
                        query: { id: item?._id },
                      }}
                    >
                      <CategoryItemComponent
                        iconName={item.icon}
                        title={item.title}
                        id={item?._id}
                      />
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </SpaceStyled>
          </PaddingStyled>
        </Grid>
        <Grid lg={2.2}>
          <PaddingStyled top={90}>
            <Grid container spacing={2}>
              <Grid lg={6}>
                <StoreItemComponent
                  link="/employment"
                  iconName="employment"
                  title={"همکاری با ما"}
                  key={"job"}
                />
              </Grid>
              <Grid lg={6}>
                <StoreItemComponent
                  iconName="request"
                  title={"درخواست استعلام"}
                  key={"job"}
                  link="/inquiry"
                />
              </Grid>
              <Grid lg={6}>
                <StoreItemComponent
                  iconName="usable"
                  title={"مصالح پر کاربرد"}
                  key={"top-materials"}
                  link="/top-materials"
                />
              </Grid>
              <Grid lg={6}>
                <StoreItemComponent
                  iconName="provider"
                  link="/sellers"
                  title={"تامین کنندگان"}
                  key={"job"}
                />
              </Grid>
              <Grid lg={6}>
                <StoreItemComponent
                  iconName="taator"
                  title={"تهاتر"}
                  link="/swap"
                  key={"job"}
                />
              </Grid>
              <Grid lg={6}>
                <StoreItemComponent
                  iconName="provincee-seller"
                  link="/sellers"
                  title={"فروشندگان استان ها"}
                  font={"9px"}
                  key={"job"}
                />
              </Grid>
              <Grid lg={6}>
                <StoreItemComponent
                  iconName="material-provider"
                  link="/sellers"
                  title={"تامین مصالح پروژه ها"}
                  font={"9px"}
                  key={"job"}
                />
              </Grid>
              <Grid lg={6}>
                <StoreItemComponent
                  iconName="support"
                  title={"پشتیبانی آنلاین"}
                  key={"job"}
                  link="/faq?isSupport=true"
                />
              </Grid>
            </Grid>
          </PaddingStyled>
        </Grid>
      </Grid>
    </MainLayout>
  );
};
export default ChoicePage;
