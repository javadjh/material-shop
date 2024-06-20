import { Grid } from "@mui/joy";
import LogoComponent from "../../../../global-component/Logo.c";
import { PaddingStyled, SpaceStyled } from "../../../../global-style/global.s";
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

const ChoicePage: NextPage<{ categories: Array<ICategory> }> = ({
  categories,
}) => {
  const [media, setMedia] = useState<any>({});
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
        <Grid lg={9.5}>
          <PaddingStyled top={20}>
            <Grid container>
              <Grid lg={4}>
                <LogoComponent />
              </Grid>
              <Grid lg={8}>
                <PaddingStyled top={70} right={30} bottom={20}>
                  <ImageServerComponent
                    image={media?.banner}
                    width={"100%"}
                    border={20}
                    height={170}
                  />
                </PaddingStyled>
              </Grid>
            </Grid>
            <Grid spacing={5} rowSpacing={2} container>
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
          </PaddingStyled>
        </Grid>
        <Grid lg={2.5}>
          <PaddingStyled top={90}>
            <Grid container spacing={2}>
              <Grid lg={6}>
                <StoreItemComponent
                  iconName="store"
                  title={"همکاری با ما"}
                  key={"job"}
                />
              </Grid>
              <Grid lg={6}>
                <StoreItemComponent
                  iconName="store"
                  title={"درخواست استعلام"}
                  key={"job"}
                />
              </Grid>
              <Grid lg={6}>
                <StoreItemComponent
                  iconName="store"
                  title={"مصالح پر کاربرد"}
                  key={"job"}
                />
              </Grid>
              <Grid lg={6}>
                <StoreItemComponent
                  iconName="store"
                  title={"تامین کنندگان"}
                  key={"job"}
                />
              </Grid>
              <Grid lg={6}>
                <StoreItemComponent
                  iconName="store"
                  title={"تهاتر"}
                  key={"job"}
                />
              </Grid>
              <Grid lg={6}>
                <StoreItemComponent
                  iconName="store"
                  title={"فروشندگان استان ها"}
                  key={"job"}
                />
              </Grid>
              <Grid lg={6}>
                <StoreItemComponent
                  iconName="store"
                  title={"تامین مصالح پروژه ها"}
                  key={"job"}
                />
              </Grid>
              <Grid lg={6}>
                <StoreItemComponent
                  iconName="store"
                  title={"پشتیبانی آنلاین"}
                  key={"job"}
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
