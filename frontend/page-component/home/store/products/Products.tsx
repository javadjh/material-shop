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
  WideSideContainerStyled,
  FilterContainer,
} from "./products.s";
import LogoComponent from "../../../../global-component/Logo.c";
import {
  CenterStyled,
  LeftStyled,
  PaddingStyled,
  Pointer,
  SelectButton,
  SelectContainer,
  SelectFloatingContainer,
  SelectItemContainer,
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
import { BLUE_COLOR, WHITE_COLOR } from "../../../../config/colors";
import Link from "next/link";
import { useWindowSize } from "../../../../global-component/ScreenBridge.c";
import ProductItem from "./ProductItem";
import ActionBorderComponent from "../../../../global-component/ActionBorder.c";
import { ReactSVG } from "react-svg";
import BrandFilterComponent from "./BrandFilter.c";

const Products: FC<{
  products: any;
  mainCategories: Array<ICategory>;
  categories: Array<ICategory>;
  brands: Array<IBrand>;
  sellers: Array<ISeller>;
}> = ({ mainCategories, products, categories, brands, sellers }) => {
  const router = useRouter();
  const size = useWindowSize();
  const [selectHover, setSelectHover] = useState<boolean>(false);
  const [filterSelect, setFilterSelect] = useState<string | undefined>();
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
                      <ActionBorderComponent border={"2"} isFill={true}>
                        {item.title}
                      </ActionBorderComponent>
                    </a>
                  ))}
                </CenterStyled>
              </SpaceStyled>
            </WideSideContainerStyled>
          </SpaceStyled>
        </Grid>
        <Grid lg={7.6}>
          <PaddingStyled top={100}>
            <Grid container spacing={1}>
              <Grid>
                <ActionBorderComponent
                  isCenter={false}
                  border="2"
                  padding="0px 20px"
                >
                  {products?.categoryMap}
                </ActionBorderComponent>
              </Grid>
              <Grid>
                <SelectContainer
                  onMouseEnter={() => setSelectHover(true)}
                  onMouseLeave={() => setSelectHover(false)}
                >
                  <SelectButton>
                    <Grid
                      container
                      justifyContent={"space-between"}
                      spacing={2}
                    >
                      <Grid>مرتب سازی</Grid>
                      <Grid>
                        <div style={{ width: 25, height: 25 }}>
                          <ReactSVG
                            src="/icons/bottomarrow.svg"
                            style={{ color: "red" }}
                            beforeInjection={(svg) => {
                              svg.classList.add("so-svg-class");
                            }}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </SelectButton>

                  {selectHover && (
                    <SelectFloatingContainer>
                      <SelectItemContainer
                        onClick={() => {
                          router.push("/store/choice");
                        }}
                        className="fill-outline-hover"
                      >
                        بخش محصولات
                      </SelectItemContainer>
                    </SelectFloatingContainer>
                  )}
                </SelectContainer>
              </Grid>
              <Grid>
                <ActionBorderComponent padding="0px 20px" border="2">
                  {products?.total} محصول
                </ActionBorderComponent>
              </Grid>
              <Grid onClick={() => setFilterSelect("brand")}>
                <ActionBorderComponent padding="0px 20px" border="2">
                  برند های موجود محصول
                </ActionBorderComponent>
              </Grid>
              <Grid>
                <ActionBorderComponent padding="0px 20px" border="2">
                  فروشندگان محصول
                </ActionBorderComponent>
              </Grid>
            </Grid>
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
                    <ProductItem item={item} />
                  </Grid>
                </Link>
              ))}
            </Grid>
          </PaddingStyled>
        </Grid>
        <Grid lg={1.9}>
          <PaddingStyled top={70} right={20}>
            {filterSelect && (
              <>
                <FilterContainer>
                  <LeftStyled onClick={() => setFilterSelect(undefined)}>
                    <Pointer>
                      <img src="/icons/close.png" width={15} />
                    </Pointer>
                  </LeftStyled>
                  {filterSelect == "brand" && (
                    <CenterStyled>
                      <BrandFilterComponent brands={brands} />
                    </CenterStyled>
                  )}
                  <CenterStyled>
                    <Typography textColor={BLUE_COLOR}>
                      به ما بپیوندید...
                    </Typography>
                  </CenterStyled>
                </FilterContainer>
              </>
            )}
          </PaddingStyled>
        </Grid>
      </Grid>
    </MainLayout>
  );
};
export default Products;
{
  /* <ProductsSideContainerStyled>
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
            </ProductsSideContainerStyled> */
}
