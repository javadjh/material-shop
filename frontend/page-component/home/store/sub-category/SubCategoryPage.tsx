import { Grid, Option, Typography } from "@mui/joy";
import MainLayout from "../../../../layout/MainLayout";
import {
  CenterStyled,
  PaddingStyled,
  Pointer,
  SpaceStyled,
} from "../../../../global-style/global.s";
import {
  CategoryItemContainer,
  MainCategorySelectStyled,
  ProductsSideContainerStyled,
  WideSideContainerStyled,
} from "../products/products.s";
import LogoComponent from "../../../../global-component/Logo.c";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import SubMainCategoryItemComponent from "./SubMainCategoryItem.c";
import { Swiper, SwiperSlide } from "swiper/react";
import { getCategoriesService } from "../../../../service/category.service";
import { ICategory } from "../../../../types/category.type";
import ImageServerComponent from "../../../../global-component/ImageServer.c";
import { ORANGE_COLOR, WHITE_COLOR } from "../../../../config/colors";
import Link from "next/link";
import { useWindowSize } from "../../../../global-component/ScreenBridge.c";
import ActionBorderComponent from "../../../../global-component/ActionBorder.c";
import { Padding } from "@mui/icons-material";
import SubCategoryItemComponent from "../category/SubCategoryItem.c";

const SubCategoryPage: FC<any> = ({
  mainCategories,
  categories,
  parentCategories,
  parentCategoryId,
}) => {
  const [activeCategory, setActiveCategory] =
    useState<string>(parentCategoryId);
  const [categoriesData, setCategoriesData] = useState<Array<ICategory>>([]);
  const router = useRouter();
  const size = useWindowSize();
  const onChangeMainCategoryListener = (e: any) => {
    router.replace("/store/products", { query: { id: e.target.id } });
    setTimeout(() => {
      router.reload();
    }, 500);
  };

  useEffect(() => {
    getCategories();
  }, [activeCategory]);

  const getCategories = async () => {
    const {
      data: { data: categories },
    } = await getCategoriesService(activeCategory);
    setCategoriesData(categories?.list);
  };
  return (
    <MainLayout>
      <Grid container>
        <Grid lg={2.5}>
          <SpaceStyled horizontal={20}>
            <WideSideContainerStyled>
              <SpaceStyled top={10}>
                <CenterStyled>
                  <LogoComponent width={110} />
                  <CenterStyled>
                    <img src="/google-font.png" width={"80%"} />
                  </CenterStyled>
                  <br />
                  {mainCategories?.map((item: any) => (
                    <a
                      href={"/store/category?id=" + item?._id}
                      style={{ width: "100%" }}
                    >
                      <ActionBorderComponent
                        isBold={true}
                        border={"2"}
                        isSelected={item?._id == parentCategoryId}
                        isFill={true}
                      >
                        {item.title}
                      </ActionBorderComponent>
                    </a>
                  ))}
                </CenterStyled>
              </SpaceStyled>
            </WideSideContainerStyled>
          </SpaceStyled>
        </Grid>

        <Grid lg={9.5}>
          <SpaceStyled top={80}>
            <Swiper scrollbar={{ draggable: true }} slidesPerView={8.8}>
              {parentCategories?.map((item: any) => (
                <SwiperSlide
                  style={{
                    width: 130,
                  }}
                  onClick={() => setActiveCategory(item?._id)}
                >
                  <SubMainCategoryItemComponent
                    isActive={activeCategory == item?._id}
                    item={item}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <SpaceStyled top={20}>
              <div className="orange-hr"></div>
            </SpaceStyled>
            <SpaceStyled top={20}>
              <Grid
                container
                justifyContent={"space-between"}
                rowSpacing={5}
                columnSpacing={5}
              >
                {categoriesData?.map((item) => (
                  <Grid lg={3}>
                    <PaddingStyled left={10}>
                      <Pointer className="outline-hover">
                        <Link
                          href={{
                            pathname: "/store/products",
                            query: { id: item?._id },
                          }}
                        >
                          <SubCategoryItemComponent
                            whiteMode={true}
                            iconName={item.icon}
                            title={item.title}
                            id={item?._id}
                          />
                        </Link>
                      </Pointer>
                    </PaddingStyled>
                  </Grid>
                ))}
              </Grid>
            </SpaceStyled>
          </SpaceStyled>
        </Grid>
      </Grid>
    </MainLayout>
  );
};
export default SubCategoryPage;
