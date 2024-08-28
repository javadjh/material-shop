import { Grid, Option, Typography } from "@mui/joy";
import MainLayout from "../../../../layout/MainLayout";
import {
  CenterStyled,
  Pointer,
  SpaceStyled,
} from "../../../../global-style/global.s";
import {
  CategoryItemContainer,
  MainCategorySelectStyled,
  ProductsSideContainerStyled,
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
            <ProductsSideContainerStyled>
              <Typography></Typography>
              <SpaceStyled top={20}>
                <CenterStyled>
                  <LogoComponent width={size?.height > 650 ? 200 : 120} />
                  <MainCategorySelectStyled
                    onChange={onChangeMainCategoryListener}
                    placeholder="دسته بندی"
                  >
                    {mainCategories?.map((item: any) => (
                      <Option
                        style={{ backgroundColor: "transparent !important" }}
                        id={item._id}
                        key={item._id}
                        value={item._id}
                      >
                        {item.title}
                      </Option>
                    ))}
                  </MainCategorySelectStyled>
                  {categories?.map((item: any) => (
                    <CategoryItemContainer>{item?.title}</CategoryItemContainer>
                  ))}
                </CenterStyled>
              </SpaceStyled>
            </ProductsSideContainerStyled>
          </SpaceStyled>
        </Grid>

        <Grid lg={9.5}>
          <SpaceStyled top={80}>
            <Swiper
              spaceBetween={10}
              scrollbar={{ draggable: true }}
              slidesPerView={"auto"}
            >
              {parentCategories?.map((item: any, index: number) => (
                <SwiperSlide
                  style={{
                    width: activeCategory == item?._id ? 236 : 120,
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
              <Grid container justifyContent={"space-between"} rowSpacing={2}>
                {categoriesData?.map((item) => (
                  <Grid>
                    <Pointer className="outline-hover">
                      <Link
                        href={{
                          pathname: "/store/products",
                          query: { id: item?._id },
                        }}
                      >
                        <SpaceStyled bottom={20}>
                          <CenterStyled>
                            <ImageServerComponent
                              image={item?.icon}
                              width={237}
                              height={119}
                              // style={{ border: `2px solid ${ORANGE_COLOR}` }}
                              className="outline-hover"
                              border={10}
                            />
                            <SpaceStyled top={8}>
                              <Typography textColor={WHITE_COLOR}>
                                {item?.title}
                              </Typography>
                            </SpaceStyled>
                          </CenterStyled>
                        </SpaceStyled>
                      </Link>
                    </Pointer>
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
