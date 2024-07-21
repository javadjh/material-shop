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
import SubCategoryItemComponent from "./SubCategoryItem.c";

const CategoryPage: FC<{
  mainCategories: Array<ICategory>;
  categories: Array<ICategory>;
  id?: string;
}> = ({ mainCategories, categories, id }) => {
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
              <SpaceStyled top={10}>
                <CenterStyled>
                  <LogoComponent width={110} />
                  <CenterStyled>
                    <img src="/google-font.png" width={"80%"} />
                  </CenterStyled>
                  <br />
                  {mainCategories?.map((item) => (
                    <Link
                      href={{
                        pathname: "/store/category",
                        query: { id: item?._id },
                      }}
                      style={{ width: "100%" }}
                    >
                      <ActionBorderComponent
                        border={"2"}
                        isSelected={item?._id == id}
                        isFill={true}
                      >
                        {item.title}
                      </ActionBorderComponent>
                    </Link>
                  ))}
                </CenterStyled>
              </SpaceStyled>
            </ProductsSideContainerStyled>
          </SpaceStyled>
        </Grid>
        <Grid lg={9.5}>
          <PaddingStyled top={80} bottom={20}>
            <ImageServerComponent
              image={media?.banner}
              width={"100%"}
              border={20}
              height={"20vh"}
            />
          </PaddingStyled>
          <div style={{ width: "100%" }}>
            <Grid spacing={5} container alignContent={"space-between"}>
              {categories?.map((item) => (
                <Grid lg={4}>
                  <Link
                    href={{
                      pathname: "/store/products",
                      query: { id: item?._id },
                    }}
                  >
                    <SubCategoryItemComponent
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
