import { Grid } from "@mui/joy";
import {
  CenterStyled,
  PaddingStyled,
  SpaceStyled,
} from "../../../../global-style/global.s";
import MainLayout from "../../../../layout/MainLayout";
import { ProductsSideContainerStyled } from "../products/products.s";
import LogoComponent from "../../../../global-component/Logo.c";
import { ICategory } from "../../../../types/category.type";
import { FC, useEffect, useState } from "react";
import ActionBorderComponent from "../../../../global-component/ActionBorder.c";
import CategoryItemComponent from "../choice/CategoryItem.c";
import Link from "next/link";
import { getAppSettingService } from "../../../../service/appsetting.service";
import ImageServerComponent from "../../../../global-component/ImageServer.c";

const CategoryPage: FC<{
  mainCategories: Array<ICategory>;
  categories: Array<ICategory>;
}> = ({ mainCategories, categories }) => {
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
      <Grid container>
        <Grid lg={2.5}>
          <SpaceStyled horizontal={20}>
            <ProductsSideContainerStyled>
              <SpaceStyled top={20}>
                <CenterStyled>
                  <LogoComponent width={"90%"} />
                  <br />
                  {mainCategories?.map((item) => (
                    <div style={{ width: "100%" }}>
                      <ActionBorderComponent>
                        {item.title}
                      </ActionBorderComponent>
                    </div>
                  ))}
                </CenterStyled>
              </SpaceStyled>
            </ProductsSideContainerStyled>
          </SpaceStyled>
        </Grid>
        <Grid lg={9.5}>
          <PaddingStyled top={80} right={30} bottom={20}>
            <ImageServerComponent
              image={media?.banner}
              width={"100%"}
              border={20}
              height={150}
            />
          </PaddingStyled>
          <div style={{ width: "100%" }}>
            <Grid spacing={5} rowSpacing={2} container>
              {categories?.map((item) => (
                <Grid lg={4}>
                  <Link
                    href={{
                      pathname: "/store/products",
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
          </div>
        </Grid>
      </Grid>
    </MainLayout>
  );
};
export default CategoryPage;
