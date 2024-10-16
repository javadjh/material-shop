import { getCookie } from "cookies-next";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import * as Yup from "yup";
import MainLayout from "../../layout/MainLayout";
import { Grid, Option, Select, Typography } from "@mui/joy";
import {
  CenterStyled,
  LeftStyled,
  PaddingStyled,
  RightStyled,
  SpaceStyled,
} from "../../global-style/global.s";
import LogoComponent from "../../global-component/Logo.c";
import { WHITE_COLOR } from "../../config/colors";
import { LARGE_FONT, MEDIUM_FONT } from "../../config/font";
import styled from "styled-components";
import LocationPickerComponent from "../../page-component/employment/LocationPicker.c";
import ActionBorderComponent from "../../global-component/ActionBorder.c";
import { insertSwapService } from "../../service/swap.service";
import { useWindowSize } from "../../global-component/ScreenBridge.c";

const SwapPage = () => {
  const [isSubmited, setIsSubmited] = useState<boolean>(false);
  const router = useRouter();
  const size = useWindowSize();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: getCookie("phone")?.substring(1),
      activity: "",
      description: "",
      cityId: undefined,
    },
    onSubmit: async (e: any) => {
      await insertSwapService({
        ...e,
        ...{ phoneNumber: "0" + e.phoneNumber },
      });
      formik?.resetForm();
      setIsSubmited(true);
    },

    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "نام و نام خانوادگی را به درستی وارد کنید")
        .max(50, "نام و نام خانوادگی را به درستی وارد کنید")
        .required("اجباری میباشد"),
      phoneNumber: Yup.string().required("اجباری میباشد").length(10),
      activity: Yup.string().required("اجباری میباشد"),
      description: Yup.string().required("اجباری میباشد"),
      cityId: Yup.number().required("اجباری میباشد"),
    }),
  });
  return (
    <MainLayout>
      <PaddingStyled top={10}>
        <Grid container>
          <Grid>
            <RightStyled>
              <LogoComponent />
              <img src="./google-font.png" width={200} />
            </RightStyled>
          </Grid>
          <Grid>
            <SpaceStyled top={200} right={30}>
              <Typography
                fontWeight={"bold"}
                textColor={WHITE_COLOR}
                fontSize={LARGE_FONT}
              >
                کاربر گرامی در صورتی که مایل به همکاری به صورت تهاتر با مجموعه
                ما هستید فرم زیر را تکمیل نمایید .
              </Typography>
            </SpaceStyled>
          </Grid>
        </Grid>
      </PaddingStyled>
      <Grid container>
        <Grid lg={5}>
          <SpaceStyled top={10}>
            <RightStyled>
              <img src="./swap-image.png" height={size.height - 320} />
            </RightStyled>
          </SpaceStyled>
        </Grid>
        <Grid lg={5.7}>
          <SpaceStyled top={10}>
            {!isSubmited && (
              <>
                <Grid container spacing={3}>
                  <Grid lg={4}>
                    <InputComponent
                      name="fullName"
                      placeholder="نام و نام خانوادگی"
                      onChange={formik.handleChange}
                      value={formik.values.fullName}
                      isError={
                        formik.touched.fullName && formik.errors.fullName
                      }
                    />
                  </Grid>

                  <Grid lg={4}>
                    <InputComponent
                      name="phoneNumber"
                      placeholder="شماره تماس"
                      disabled={getCookie("phone")}
                      onChange={formik.handleChange}
                      type="number"
                      value={formik.values.phoneNumber}
                      isError={
                        formik.touched.phoneNumber && formik.errors.phoneNumber
                      }
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid lg={8}>
                    <LocationPickerComponent
                      spacing={3}
                      isError={formik.touched.cityId && formik?.errors?.cityId}
                      onCitySelected={(city) => {
                        formik.setFieldValue("cityId", city);
                      }}
                    />
                  </Grid>
                  <Grid lg={4}>
                    <SpaceStyled top={0}>
                      <Select
                        style={{
                          padding: 14,
                          border:
                            formik?.errors?.phoneNumber &&
                            formik.touched.phoneNumber
                              ? "1.5px solid red"
                              : "1.5px solid orange ",
                        }}
                        name="activity"
                        placeholder="نوع فعالیت"
                        onChange={(e, value) => {
                          formik.setFieldValue("activity", value);
                        }}
                      >
                        <Option value={"producer"} key={"producer"}>
                          <Typography>تولید کننده</Typography>
                        </Option>
                        <Option value={"provider"} key={"provider"}>
                          عرضه کننده
                        </Option>
                        <Option value={"creator"} key={"creator"}>
                          سازنده
                        </Option>
                        <Option value={"businessman"} key={"businessman"}>
                          بازرگان
                        </Option>
                        <Option value={"other"} key={"other"}>
                          متفرقه
                        </Option>
                      </Select>
                    </SpaceStyled>
                  </Grid>
                </Grid>
              </>
            )}
            {isSubmited && (
              <SpaceStyled top={150}>
                <CenterStyled>
                  <Typography fontWeight={"bold"} textColor={WHITE_COLOR}>
                    با تشکر از شما همکاران ما در اسرع وقت با شما تماس خواهند
                    گرفت{"."}
                  </Typography>
                </CenterStyled>
              </SpaceStyled>
            )}
            <Grid container>
              <Grid lg={12}>
                {!isSubmited && (
                  <SpaceStyled>
                    <TextAreaComponent
                      rows={4}
                      name="description"
                      placeholder="توضیحات بیشتر"
                      wrap={"hard"}
                      onChange={formik.handleChange}
                      value={formik.values.description}
                      isError={
                        formik.touched.description && formik.errors.description
                      }
                    />
                  </SpaceStyled>
                )}
              </Grid>
            </Grid>
            <LeftStyled>
              <SpaceStyled
                onClick={() => {
                  if (isSubmited) {
                    router.replace("/");
                  } else {
                    formik?.submitForm();
                  }
                }}
                left={0}
              >
                <ActionBorderComponent isSelected={true}>
                  <SpaceStyled vertical={0} horizontal={70}>
                    ثبت
                  </SpaceStyled>
                </ActionBorderComponent>
              </SpaceStyled>
            </LeftStyled>
          </SpaceStyled>
        </Grid>
      </Grid>
    </MainLayout>
  );
};
export default SwapPage;

const InputComponent: any = styled.input`
  background-color: white;
  border: none !important;
  border-radius: 8px;
  width: 100%;
  border: ${(props: any) =>
    props.isError
      ? "1.5px solid red !important"
      : "1px solid orange !important"};
  padding: 15px;
  margin: 20px 0px;
  font-size: ${MEDIUM_FONT};
  color: black;
`;
const TextAreaComponent: any = styled.textarea`
  background-color: white;
  border: none !important;
  border-radius: 8px;
  width: 100%;
  resize: none;
  padding: 15px;
  border: ${(props: any) =>
    props.isError
      ? "1.5px solid red !important"
      : "1px solid orange !important"};
  font-size: ${MEDIUM_FONT};
  margin: 20px 0px;
  color: black;
`;
