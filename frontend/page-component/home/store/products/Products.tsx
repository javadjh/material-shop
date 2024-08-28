import { Grid, Input, MenuItem, Option, Select, Typography } from "@mui/joy";
import MainLayout from "../../../../layout/MainLayout";
import { FC, useState } from "react";
import {
  ProductsSideContainerStyled,
  CategoryItemContainer,
  MainCategorySelectStyled,
  ProductContainerStyled,
  SimpleInput,
  ProductsWideSideContainerStyled,
} from "./products.s";
import LogoComponent from "../../../../global-component/Logo.c";
import {
  CenterStyled,
  LeftStyled,
  PaddingStyled,
  SpaceStyled,
  WhiteBorderStyled,
} from "../../../../global-style/global.s";
import { ICategory } from "../../../../types/category.type";
import { useRouter } from "next/router";
import ImageServerComponent from "../../../../global-component/ImageServer.c";
import { IProduct } from "../../../../types/product.type";
import { WhiteText } from "../../../../global-component/Typography/WhiteText.t";
import { GrayContainerComponent } from "../../../../global-component/container/GrayContainer.c";
import FilterSelectBoxComponent from "./FilterSelectBox.c";
import { IBrand } from "../../../../types/brand.type";
import { ISeller } from "../../../../types/seller.type";
import { SMALL_FONT, X_SMALL_FONT } from "../../../../config/font";
import { WHITE_COLOR } from "../../../../config/colors";
import Link from "next/link";
import { useWindowSize } from "../../../../global-component/ScreenBridge.c";

const Products: FC<{
  products: any;
  mainCategories: Array<ICategory>;
  categories: Array<ICategory>;
  brands: Array<IBrand>;
  sellers: Array<ISeller>;
}> = ({ mainCategories, products, categories, brands, sellers }) => {
  const router = useRouter();
  const size = useWindowSize();
  const [brandValue, setBrandsValue] = useState<string>();
  const [sellerValue, setSellersValue] = useState<string>();

  const onChangeMainCategoryListener = (e: any) => {
    router.replace("/store/products", { query: { id: e.target.id } });
    setTimeout(() => {
      router.reload();
    }, 500);
  };
  return (
    <MainLayout>
      <Grid container>
        <Grid lg={2.5}>
          <SpaceStyled horizontal={20}>
            <ProductsWideSideContainerStyled>
              <Typography></Typography>
              <SpaceStyled top={10}>
                <CenterStyled>
                  <LogoComponent width={size?.height > 650 ? 200 : 120} />
                  <MainCategorySelectStyled
                    onChange={onChangeMainCategoryListener}
                    placeholder="دسته بندی"
                  >
                    {mainCategories?.map((item) => (
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
                  {categories?.map((item) => (
                    <CategoryItemContainer>{item?.title}</CategoryItemContainer>
                  ))}
                </CenterStyled>
              </SpaceStyled>
            </ProductsWideSideContainerStyled>
          </SpaceStyled>
        </Grid>
        <Grid lg={7.5}>
          <PaddingStyled top={100}>
            <Grid
              container
              columnSpacing={3}
              rowSpacing={2}
              justifyContent={"center"}
            >
              {products?.list?.map((item: IProduct) => (
                <Link
                  href={{
                    pathname: "/store/product",
                    query: { id: item?._id },
                  }}
                >
                  <Grid>
                    <ProductContainerStyled>
                      <ImageServerComponent
                        border={8}
                        image={item.image}
                        width={"100%"}
                      />

                      <SpaceStyled top={10} bottom={10}>
                        <WhiteText>{item?.title}</WhiteText>
                        <WhiteText>{item?.brandName}</WhiteText>
                      </SpaceStyled>
                      <Grid
                        container
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Grid lg={4}>
                          <Typography
                            textColor={WHITE_COLOR}
                            fontSize={X_SMALL_FONT}
                          >
                            {item?.remainingCount} عدد
                          </Typography>
                        </Grid>
                        <Grid lg={8}>
                          <LeftStyled>
                            <Typography
                              textColor={WHITE_COLOR}
                              fontSize={SMALL_FONT}
                            >
                              {item?.price} تومان
                            </Typography>
                          </LeftStyled>
                        </Grid>
                      </Grid>
                    </ProductContainerStyled>
                  </Grid>
                </Link>
              ))}
            </Grid>
          </PaddingStyled>
        </Grid>
        <Grid lg={2}>
          <PaddingStyled top={70} right={20}>
            <ProductsSideContainerStyled>
              <SpaceStyled bottom={10}>
                <WhiteText>فیلتر ها</WhiteText>
              </SpaceStyled>
              <GrayContainerComponent>
                <Grid
                  alignContent={"center"}
                  alignItems={"center"}
                  container
                  justifyContent={"space-between"}
                >
                  <Grid>
                    <WhiteText>قیمت از </WhiteText>
                  </Grid>
                  <Grid lg={8}>
                    <SimpleInput
                      defaultValue={products?.minPrice}
                      placeholder={products?.minPrice}
                      type="number"
                    />
                  </Grid>
                </Grid>
              </GrayContainerComponent>
              <GrayContainerComponent>
                <Grid
                  alignContent={"center"}
                  alignItems={"center"}
                  container
                  justifyContent={"space-between"}
                >
                  <Grid>
                    <WhiteText>قیمت تا </WhiteText>
                  </Grid>
                  <Grid lg={8}>
                    <SimpleInput
                      defaultValue={products?.maxPrice}
                      placeholder={products?.maxPrice}
                      type="number"
                    />
                  </Grid>
                </Grid>
              </GrayContainerComponent>
              <SpaceStyled bottom={10}>
                <FilterSelectBoxComponent
                  title="برند"
                  list={brands}
                  setValue={setBrandsValue}
                  value={brandValue}
                />
              </SpaceStyled>
              <FilterSelectBoxComponent
                title="فروشندگان"
                list={sellers}
                setValue={setSellersValue}
                value={sellerValue}
              />
            </ProductsSideContainerStyled>
          </PaddingStyled>
        </Grid>
      </Grid>
    </MainLayout>
  );
};
export default Products;
