import { FC, useEffect, useState } from "react";
import MobileLayout from "../../../../layout/MobileLayout";
import { ICategory } from "../../../../types/category.type";
import { getAppSettingService } from "../../../../service/appsetting.service";
import {
  CenterStyled,
  PaddingStyled,
  SpaceStyled,
} from "../../../../global-style/global.s";
import ImageServerComponent from "../../../../global-component/ImageServer.c";
import { Grid } from "@mui/joy";
import StoreItemComponent from "./StoreItem.s";

const ChoiceMobile: FC<{ categories: Array<ICategory> }> = ({ categories }) => {
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
    <MobileLayout isShowTopMenu={true}>
      <PaddingStyled top={20} bottom={80}>
        <CenterStyled>
          <ImageServerComponent
            image={media?.banner}
            width={"90%"}
            border={20}
            height={170}
          />
          <SpaceStyled top={20} right={10} left={10}>
            <Grid container>
              <Grid xs={4}>
                <PaddingStyled left={15} right={15} bottom={15}>
                  <StoreItemComponent
                    iconName="store"
                    title={"همکاری با ما"}
                    key={"job"}
                  />
                </PaddingStyled>
              </Grid>
              <Grid xs={4}>
                <PaddingStyled left={10} right={10} bottom={15}>
                  <StoreItemComponent
                    iconName="store"
                    title={"درخواست استعلام"}
                    key={"job"}
                  />
                </PaddingStyled>
              </Grid>
              <Grid xs={4}>
                <PaddingStyled left={10} right={10} bottom={15}>
                  <StoreItemComponent
                    iconName="store"
                    title={"مصالح پر کاربرد"}
                    key={"top-materials"}
                  />
                </PaddingStyled>
              </Grid>
              <Grid xs={4}>
                <PaddingStyled left={10} right={10} bottom={15}>
                  <StoreItemComponent
                    iconName="store"
                    title={"تامین کنندگان"}
                    key={"job"}
                  />
                </PaddingStyled>
              </Grid>
              <Grid xs={4}>
                <PaddingStyled left={10} right={10} bottom={15}>
                  <StoreItemComponent
                    iconName="store"
                    title={"تهاتر"}
                    key={"job"}
                  />
                </PaddingStyled>
              </Grid>
              <Grid xs={4}>
                <PaddingStyled left={10} right={10} bottom={15}>
                  <StoreItemComponent
                    iconName="store"
                    title={"فروشندگان استان ها"}
                    key={"job"}
                  />
                </PaddingStyled>
              </Grid>
              <Grid xs={4}>
                <PaddingStyled left={10} right={10} bottom={15}>
                  <StoreItemComponent
                    iconName="store"
                    title={"تامین مصالح پروژه ها"}
                    key={"job"}
                  />
                </PaddingStyled>
              </Grid>
              <Grid xs={4}>
                <PaddingStyled left={10} right={10} bottom={15}>
                  <StoreItemComponent
                    iconName="store"
                    title={"پشتیبانی آنلاین"}
                    key={"job"}
                  />
                </PaddingStyled>
              </Grid>
            </Grid>
          </SpaceStyled>
        </CenterStyled>
      </PaddingStyled>
    </MobileLayout>
  );
};
export default ChoiceMobile;
