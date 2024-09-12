import { Grid, Option, Select, Typography } from "@mui/joy";
import MainLayout from "../../../../layout/MainLayout";
import {
  CenterStyled,
  DertyOrangeBlockStyled,
  GrayBlockStyled,
  LeftStyled,
  OrangeBlockNonePaddingStyled,
  OrangeBlockStyled,
  OrangeBorderBlock,
  OrangeHR,
  PaddingStyled,
  Pointer,
  SimpleOrangeBorderBlock,
  SpaceStyled,
  WhiteBlockStyled,
  WhiteBorderStyled,
} from "../../../../global-style/global.s";
import {
  CategoryItemContainer,
  MainCategorySelectStyled,
  ProductContainerStyled,
  ProductsSideContainerStyled,
} from "../products/products.s";
import LogoComponent from "../../../../global-component/Logo.c";
import Link from "next/link";
import ImageServerComponent from "../../../../global-component/ImageServer.c";
import { WhiteText } from "../../../../global-component/Typography/WhiteText.t";
import {
  SMALL_FONT,
  X_LARGE_FONT,
  X_SMALL_FONT,
} from "../../../../config/font";
import { ORANGE_COLOR, WHITE_COLOR } from "../../../../config/colors";
import { IProduct } from "../../../../types/product.type";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { ICategory } from "../../../../types/category.type";
import IconComponent from "../../../../global-component/Icon.c";
import {
  DarkGrayBlockStyled,
  OptionItemStyledLeft,
  OptionItemStyledRight,
  SelectCarStyle,
} from "./product.s";
import CountPickerComponent from "./CountPicker.c";
import SuggestionComponent from "./Suggestion.c";
import { insertBasket } from "../../../../service/basket.service";

const ProductPage: FC<{
  mainCategories: Array<ICategory>;
  categories: Array<ICategory>;
  product: IProduct;
  suggestion: Array<IProduct>;
}> = ({ mainCategories, product, suggestion }) => {
  const router = useRouter();

  const [carType, setCarType] = useState<string>();
  const [basketCount, setBasketCount] = useState<number>(0);

  const onChangeMainCategoryListener = (id?: string) => {
    router.push("/store/products", { query: { id } });
  };

  const addToBasket = async () => {
    await insertBasket({
      productId: product?._id,
      count: basketCount,
    });
    router.push("/profile/basket");
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
                    <CategoryItemContainer
                      onClick={() => onChangeMainCategoryListener(item?._id)}
                    >
                      {item?.title}
                    </CategoryItemContainer>
                  ))}
                </CenterStyled>
              </SpaceStyled>
            </ProductsSideContainerStyled>
          </SpaceStyled>
        </Grid>
        <Grid lg={9.5}>
          <PaddingStyled top={100}>
            <Grid spacing={2} container>
              <Grid lg={3}>
                <ImageServerComponent
                  border={10}
                  width={"100%"}
                  image={product?.image}
                />
              </Grid>
              <Grid lg={6.5}>
                <Grid container justifyContent={"space-between"}>
                  <Grid>
                    <Pointer>
                      <WhiteText>
                        محصولات / دسته{" "}
                        <Typography
                          onClick={() =>
                            onChangeMainCategoryListener(product?.categoryId)
                          }
                          textColor={ORANGE_COLOR}
                        >
                          {product?.categoryName}
                        </Typography>
                      </WhiteText>
                    </Pointer>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid>
                      <IconComponent icon="store" width={16} />
                    </Grid>
                    <Grid>
                      <IconComponent icon="store" width={16} />
                    </Grid>
                    <Grid>
                      <IconComponent icon="store" width={16} />
                    </Grid>
                  </Grid>
                </Grid>
                <OrangeHR />
                <Grid container justifyContent={"space-between"}>
                  <Grid lg={6} rowSpacing={5}>
                    <Typography textColor={WHITE_COLOR}>
                      {product?.title}
                    </Typography>
                    <SpaceStyled vertical={10}>
                      <Typography textColor={WHITE_COLOR}>
                        {product?.brandName}
                      </Typography>
                    </SpaceStyled>
                    <Typography textColor={WHITE_COLOR}>
                      رنگ : {product?.colors?.join(" , ")}
                    </Typography>
                  </Grid>
                  <Grid lg={6}>
                    <Typography textColor={WHITE_COLOR}>
                      کد کالا : {product?.code}
                    </Typography>
                    <SpaceStyled vertical={10}>
                      <Typography textColor={WHITE_COLOR}>
                        واحد : {product?.unit}
                      </Typography>
                    </SpaceStyled>
                    <Typography textColor={WHITE_COLOR}>
                      سایز : {product?.size}
                    </Typography>
                    <SpaceStyled top={10}>
                      <Typography textColor={WHITE_COLOR}>
                        تعداد در کارتن : {product?.packCount}
                      </Typography>
                    </SpaceStyled>
                  </Grid>
                </Grid>
              </Grid>

              <Grid lg={2.5}>
                <CenterStyled>
                  <OrangeBorderBlock>
                    <Typography textColor={ORANGE_COLOR}>
                      {product?.remainingCount > 0
                        ? "موجودی" + product?.remainingCount
                        : "عدم موجودی"}
                    </Typography>
                    <div>
                      <Typography
                        fontSize={X_LARGE_FONT}
                        textColor={WHITE_COLOR}
                      >
                        {product?.price}
                      </Typography>
                      <Typography
                        fontSize={SMALL_FONT}
                        textAlign={"left"}
                        textColor={WHITE_COLOR}
                      >
                        تومان
                      </Typography>
                    </div>
                    <Typography
                      fontSize={X_LARGE_FONT}
                      textColor={WHITE_COLOR}
                    ></Typography>
                  </OrangeBorderBlock>
                </CenterStyled>
                <SpaceStyled top={10}>
                  <Grid
                    container
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Grid>
                      <WhiteText>تعداد خرید</WhiteText>
                    </Grid>
                    <Grid lg={12} style={{ width: "60%" }}>
                      <CountPickerComponent
                        onChange={(val: number) => setBasketCount(val)}
                        maxValue={10}
                      />
                    </Grid>
                  </Grid>
                </SpaceStyled>
              </Grid>
            </Grid>
            <Grid container>
              <Grid lg={9} container spacing={2}>
                <Grid lg={6}>
                  <SpaceStyled top={8}>
                    <GrayBlockStyled>
                      محل ارسال : {product?.cities}
                    </GrayBlockStyled>
                  </SpaceStyled>
                </Grid>
                <Grid lg={6}>
                  <SpaceStyled top={8}>
                    <GrayBlockStyled>
                      هزینه ارسال : با خریدار هماهنگ خواهد شد
                    </GrayBlockStyled>
                  </SpaceStyled>
                </Grid>
              </Grid>
              <Grid lg={3}>
                <SpaceStyled right={50} top={10}>
                  <SimpleOrangeBorderBlock>
                    <Grid
                      container
                      style={{ width: "100%" }}
                      justifyContent={"space-between"}
                    >
                      <Grid>
                        <SpaceStyled horizontal={10} vertical={5}>
                          <WhiteText>مبلغ کل </WhiteText>
                        </SpaceStyled>
                      </Grid>
                      <Grid>
                        <SpaceStyled horizontal={10} vertical={5}>
                          <WhiteText>{product?.price * basketCount}</WhiteText>
                        </SpaceStyled>
                      </Grid>
                    </Grid>
                  </SimpleOrangeBorderBlock>
                </SpaceStyled>
              </Grid>
            </Grid>
            <SpaceStyled top={10}>
              <Grid container>
                <Grid lg={12} container spacing={2}>
                  <Grid lg={2.4}>
                    <OrangeBlockStyled>حداقل تعداد خرید جزئی</OrangeBlockStyled>
                  </Grid>
                  <Grid lg={2.4}>
                    <OrangeBlockStyled>حداقل تعداد خرید عمده</OrangeBlockStyled>
                  </Grid>
                  <Grid lg={2.4}>
                    <OrangeBlockStyled>درصد تخفیف خریده عمده</OrangeBlockStyled>
                  </Grid>
                  <Grid lg={2.4}>
                    <OrangeBlockNonePaddingStyled>
                      <PaddingStyled vertical={1.5}>
                        <SelectCarStyle
                          placeholder="انتخاب خودرو"
                          onChange={(e: any) => {
                            setCarType(e?.target?.id);
                          }}
                        >
                          {product?.car?.map((item) => (
                            <Option
                              value={`${item?.count}`}
                              id={`${item?.count}`}
                            >
                              {item?.carType}
                            </Option>
                          ))}
                        </SelectCarStyle>
                      </PaddingStyled>
                    </OrangeBlockNonePaddingStyled>
                  </Grid>
                  <Grid lg={2.4}>
                    <Pointer onClick={addToBasket}>
                      <DertyOrangeBlockStyled>
                        اضافه کردن به لیست خرید
                      </DertyOrangeBlockStyled>
                    </Pointer>
                  </Grid>
                </Grid>
              </Grid>
            </SpaceStyled>
            <SpaceStyled top={10}>
              <Grid container>
                <Grid lg={12} container spacing={2}>
                  <Grid lg={2.4}>
                    <WhiteBlockStyled>
                      {product?.minOrderCountForRetail} {product?.unit}
                    </WhiteBlockStyled>
                  </Grid>
                  <Grid lg={2.4}>
                    <WhiteBlockStyled>
                      {product?.minOrderCountForWholesale} {product?.unit}
                    </WhiteBlockStyled>
                  </Grid>
                  <Grid lg={2.4}>
                    <WhiteBlockStyled>
                      {product?.offForWholesalePercent} درصد
                    </WhiteBlockStyled>
                  </Grid>
                  <Grid lg={2.4}>
                    <WhiteBlockStyled>{carType || "-"}</WhiteBlockStyled>
                  </Grid>
                  <Grid lg={2.4}>
                    <DertyOrangeBlockStyled>
                      اضافه کردن به لیست استعلام
                    </DertyOrangeBlockStyled>
                  </Grid>
                </Grid>
              </Grid>
            </SpaceStyled>
          </PaddingStyled>
          <SpaceStyled top={20}>
            <DarkGrayBlockStyled>
              <Grid container rowSpacing={2}>
                {product?.options?.map((item) => (
                  <Grid lg={6} container>
                    <Grid lg={2}>
                      <OptionItemStyledRight>{item?.key}</OptionItemStyledRight>
                    </Grid>
                    <Grid lg={10}>
                      <OptionItemStyledLeft>{item?.value}</OptionItemStyledLeft>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </DarkGrayBlockStyled>
          </SpaceStyled>
          <SuggestionComponent products={suggestion} />
        </Grid>
      </Grid>
    </MainLayout>
  );
};
export default ProductPage;
