import { Grid, Typography } from "@mui/joy";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import MainLayout from "../../layout/MainLayout";
import LogoComponent from "../../global-component/Logo.c";
import { CenterStyled, SpaceStyled } from "../../global-style/global.s";
import { LIGHT_GRAY_COLOR, WHITE_COLOR } from "../../config/colors";
import { LARGE_FONT, MEDIUM_FONT, X_LARGE_FONT } from "../../config/font";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import styled from "styled-components";
import LocationPickerComponent from "./LocationPicker.c";
import ActionBorderComponent from "../../global-component/ActionBorder.c";
import { insertEmployment } from "../../service/employee.service";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

const EmployementPage = () => {
  const [isSubmited, setIsSubmited] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: getCookie("phone")?.substring(1),
      activity: "",
      description: "",
      cityId: undefined,
    },
    onSubmit: async (e: any) => {
      console.log(e);

      await insertEmployment({ ...e, ...{ phoneNumber: "0" + e.phoneNumber } });
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
      description: Yup.string(),
      cityId: Yup.number().required("اجباری میباشد"),
    }),
  });
  return (
    <MainLayout>
      <Grid container>
        <Grid lg={2}>
          <SpaceStyled top={20}>
            <LogoComponent />
            <SpaceStyled bottom={10} top={10}>
              <CenterStyled>
                <img src="./google-font.png" width={200} />
              </CenterStyled>
            </SpaceStyled>
          </SpaceStyled>
        </Grid>
        <Grid lg={10}>
          <SpaceStyled top={140}>
            <CenterStyled>
              <Typography
                fontWeight={"bold"}
                textColor={WHITE_COLOR}
                fontSize={LARGE_FONT}
              >
                کاربر گرامی در صورتی که در حوزه صنعت ساختمان فعالیت دارید برای
                ارتباط بیشتر با مجموعه ما فرم زیر را تکمیل نمایید.
              </Typography>
            </CenterStyled>
            {!isSubmited && (
              <>
                <Grid container spacing={5}>
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
                  <Grid lg={4}>
                    <SpaceStyled top={20}>
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
                <Grid container>
                  <Grid lg={8}>
                    <LocationPickerComponent
                      isError={formik.touched.cityId && formik?.errors?.cityId}
                      onCitySelected={(city) => {
                        formik.setFieldValue("cityId", city);
                      }}
                    />
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
              <Grid lg={8}>
                {!isSubmited && (
                  <SpaceStyled left={15}>
                    <TextAreaComponent
                      rows={4}
                      name="description"
                      placeholder="توضیحات"
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
              <Grid lg={4}>
                <SpaceStyled
                  onClick={() => {
                    if (isSubmited) {
                      router.replace("/");
                    } else {
                      formik?.submitForm();
                    }
                  }}
                  right={30}
                  top={85}
                >
                  <ActionBorderComponent border="2" isSelected={true}>
                    <SpaceStyled vertical={10}>ثبت</SpaceStyled>
                  </ActionBorderComponent>
                </SpaceStyled>
              </Grid>
            </Grid>
          </SpaceStyled>
        </Grid>
      </Grid>
    </MainLayout>
  );
};
export default EmployementPage;
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
