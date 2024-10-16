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
import { UploadFileComponent } from "../../global-component/UploadFile.c";
import { insertInquiryService } from "../../service/inquiry.service";
import { useWindowSize } from "../../global-component/ScreenBridge.c";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { WhiteText } from "../../global-component/Typography/WhiteText.t";

const InquiryPage = () => {
  const [isSubmited, setIsSubmited] = useState<boolean>(false);
  const router = useRouter();
  const size = useWindowSize();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: getCookie("phone")?.substring(1),
      items: "",
      file: undefined,
    },
    onSubmit: async (e: any) => {
      console.log(e);

      await insertInquiryService({
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
      items: Yup.string().required("اجباری میباشد"),
      file: Yup.string().optional(),
    }),
  });
  return (
    <MainLayout>
      <PaddingStyled top={10}>
        <Grid container>
          <Grid lg={2}>
            <RightStyled>
              <LogoComponent />
              <img src="./google-font.png" width={200} />
            </RightStyled>
          </Grid>
          <Grid lg={10}>
            <SpaceStyled top={165} right={30}>
              <Typography
                fontWeight={"bold"}
                textColor={WHITE_COLOR}
                fontSize={LARGE_FONT}
              >
                کاربر گرامی شما میتوانید لیست مصالح مورد نیاز خود را در این قسمت
                بارگذاری کنید و در کمترین زمان ممکن پیش فاکتور خود را دریافت
                نمایید .
              </Typography>
            </SpaceStyled>
          </Grid>
        </Grid>
      </PaddingStyled>
      <Grid container>
        <Grid lg={7}>
          <SpaceStyled top={0} right={80}>
            {!isSubmited && (
              <>
                <Grid container spacing={3}>
                  <Grid lg={6}>
                    <InputComponent
                      name="fullName"
                      placeholder="نام و نام خانوادگی"
                      onChange={formik.handleChange}
                      value={formik.values.fullName}
                      isError={
                        formik.touched.fullName && formik.errors.fullName
                      }
                    />
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
                    <UploadFileComponent
                      accept="application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword"
                      fileHandler={(file: any) => {
                        formik.setFieldValue("file", file?.filename);
                      }}
                    >
                      <SpaceStyled>
                        <InputBlockComponent>
                          {formik?.values.file || "انتخاب فایل PDF و WORD"}
                        </InputBlockComponent>
                      </SpaceStyled>
                    </UploadFileComponent>
                    <WhiteText>ارسال فایل از طریق</WhiteText>
                    <Grid container justifyContent={"end"}>
                      <Grid>
                        <Link href={"/"}>
                          <SpaceStyled horizontal={5}>
                            <div style={{ width: 25, height: 25 }}>
                              <ReactSVG
                                src="/icons/instagram.svg"
                                style={{ color: "red" }}
                                beforeInjection={(svg) => {
                                  svg.classList.add("so-svg-class");
                                }}
                              />
                            </div>
                          </SpaceStyled>
                        </Link>
                      </Grid>
                      <Grid>
                        <Link href={"/"}>
                          <SpaceStyled horizontal={5}>
                            <div style={{ width: 25, height: 25 }}>
                              <ReactSVG
                                src="/icons/twitter.svg"
                                style={{ color: "red" }}
                                beforeInjection={(svg) => {
                                  svg.classList.add("so-svg-class");
                                }}
                              />
                            </div>
                          </SpaceStyled>
                        </Link>
                      </Grid>
                      <Grid>
                        <Link href={"/"}>
                          <SpaceStyled horizontal={5}>
                            <div style={{ width: 25, height: 25 }}>
                              <ReactSVG
                                src="/icons/whatsapp.svg"
                                style={{ color: "red" }}
                                beforeInjection={(svg) => {
                                  svg.classList.add("so-svg-class");
                                }}
                              />
                            </div>
                          </SpaceStyled>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid lg={6}>
                    <TextAreaComponent
                      rows={9}
                      name="items"
                      placeholder="لطفا لیست اقلام را بنویسید"
                      wrap={"hard"}
                      onChange={formik.handleChange}
                      value={formik.values.items}
                      isError={formik.touched.items && formik.errors.items}
                    />
                    <SpaceStyled
                      onClick={() => {
                        if (isSubmited) {
                          router.replace("/");
                        } else {
                          formik?.submitForm();
                        }
                      }}
                    >
                      <ActionBorderComponent border="2" isSelected={true}>
                        <SpaceStyled vertical={10}>ثبت</SpaceStyled>
                      </ActionBorderComponent>
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
          </SpaceStyled>
        </Grid>
        <Grid lg={5}>
          <LeftStyled>
            <img src="./inquries-image.png" height={size.height - 300} />
          </LeftStyled>
        </Grid>
      </Grid>
    </MainLayout>
  );
};
export default InquiryPage;

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
  margin: 10px 0px;
  font-size: ${MEDIUM_FONT};
  color: black;
`;

const InputBlockComponent: any = styled.div`
  background-color: white;
  border: none !important;
  border-radius: 8px;
  width: 100%;
  border: ${(props: any) =>
    props.isError
      ? "1.5px solid red !important"
      : "1px solid orange !important"};
  padding: 15px;
  margin: 10px 0px;
  font-size: ${MEDIUM_FONT};
  color: black;
`;
const TextAreaComponent: any = styled.textarea`
  background-color: white;
  border: none !important;
  height: 40vh;
  border-radius: 8px;
  width: 100%;
  resize: none;
  padding: 15px;
  border: ${(props: any) =>
    props.isError
      ? "1.5px solid red !important"
      : "1px solid orange !important"};
  font-size: ${MEDIUM_FONT};
  margin: 10px 0px;
  color: black;
`;
