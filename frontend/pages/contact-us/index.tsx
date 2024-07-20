import { Grid, Typography } from "@mui/joy";
import MainLayout from "../../layout/MainLayout";
import LogoComponent from "../../global-component/Logo.c";
import {
  CenterStyled,
  CenterVerticalStyled,
  LeftStyled,
  PaddingStyled,
  SpaceStyled,
} from "../../global-style/global.s";
import styled from "styled-components";
import ActionBorderComponent from "../../global-component/ActionBorder.c";
import SimpleInputComponent from "../../global-component/input/SimpleInput.c";
import { WHITE_COLOR } from "../../config/colors";
import SocialMediaComponent from "../../global-component/SocialMedia.c";
import Joi from "joi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { insertReport } from "../../service/report.service";
import { useState } from "react";
import { useWindowSize } from "../../global-component/ScreenBridge.c";
import { getCookie } from "cookies-next";

const ContactUs = () => {
  const [isSubmited, setIsSubmited] = useState(false);
  const size = useWindowSize();
  const formik = useFormik({
    initialValues: {
      phoneNumber: getCookie("phone"),
      fullName: "",
      description: "",
    },
    onSubmit: async (e: any) => {
      await insertReport(e);
      formik?.resetForm();
      setIsSubmited(true);
    },

    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .length(11, "شماره را به درستی وارد کنید")
        .required("اجباری میباشد"),
      fullName: Yup.string()
        .min(5, "نام و نام خانوادگی را به درستی وارد کنید")
        .max(50, "نام و نام خانوادگی را به درستی وارد کنید")
        .required("اجباری میباشد"),
      description: Yup.string().required("اجباری میباشد"),
    }),
  });
  return (
    <MainLayout>
      <PaddingStyled top={20}>
        <Grid container spacing={3}>
          <Grid lg={3}>
            <LogoComponent width={size.height > 660 ? 250 : 90} />
            <SpaceStyled vertical={10}>
              <CenterStyled>
                <img
                  src="./google-font.png"
                  width={size.height > 660 ? 300 : 200}
                />
              </CenterStyled>
            </SpaceStyled>
            <FormContainer>
              <ActionBorderComponent border={"2"} isSelected={true}>
                گزارش اشکال و شکایت
              </ActionBorderComponent>
              <PaddingStyled>
                <form onSubmit={formik.handleSubmit}>
                  {isSubmited ? (
                    <PaddingStyled vertical={100}>
                      <CenterVerticalStyled>
                        <CenterStyled>
                          <Typography textColor={WHITE_COLOR}>
                            با تشکر از شما
                          </Typography>
                          <Typography textColor={WHITE_COLOR}>
                            در اولین فرصت درخواست شما پیگیری خواهد شد
                          </Typography>
                        </CenterStyled>
                      </CenterVerticalStyled>
                    </PaddingStyled>
                  ) : (
                    <>
                      <SimpleInputComponent
                        name="fullName"
                        placeholder="نام و نام خانوادگی"
                        onChange={formik.handleChange}
                        value={formik.values.fullName}
                      />
                      {formik.touched.fullName && formik.errors.fullName ? (
                        <div>{formik.errors.fullName + ""}</div>
                      ) : null}
                      <SimpleInputComponent
                        name="phoneNumber"
                        placeholder="شماره تماس"
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                      />
                      {formik.touched.phoneNumber &&
                      formik.errors.phoneNumber ? (
                        <div>{formik.errors.phoneNumber + ""}</div>
                      ) : null}
                      <SimpleInputComponent
                        rows="4"
                        isArea={true}
                        placeholder="شرح"
                        name="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                      />
                      {formik.touched.description &&
                      formik.errors.description ? (
                        <div>{formik.errors.description + ""}</div>
                      ) : null}
                    </>
                  )}
                  <LeftStyled>
                    <div
                      onClick={() => {
                        setIsSubmited(false);
                        formik?.submitForm();
                      }}
                      style={{ width: 100 }}
                    >
                      <ActionBorderComponent border={"2"}>
                        ثبت
                      </ActionBorderComponent>
                    </div>
                  </LeftStyled>
                </form>
              </PaddingStyled>
            </FormContainer>
          </Grid>
          <Grid lg={9}>
            <PaddingStyled top={60}>
              <CenterStyled>
                <img src="/map.png" width={"100%"} />
              </CenterStyled>

              <PaddingStyled top={20}>
                <Grid container justifyContent={"space-between"}>
                  <Grid>
                    <Typography
                      style={{ fontWeight: "bold" }}
                      textColor={WHITE_COLOR}
                    >
                      دفتر مرکزی : تهران نیاوران بعد از مژده پلاک 408
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography
                      style={{ fontWeight: "bold" }}
                      textColor={WHITE_COLOR}
                    >
                      22754634-021
                    </Typography>
                  </Grid>
                </Grid>
              </PaddingStyled>

              <PaddingStyled top={10}>
                <Grid container justifyContent={"space-between"}>
                  <Grid>
                    <Typography
                      style={{ fontWeight: "bold" }}
                      textColor={WHITE_COLOR}
                    >
                      دفتر مرکزی : تهران نیاوران بعد از مژده پلاک 408
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography
                      style={{ fontWeight: "bold" }}
                      textColor={WHITE_COLOR}
                    >
                      22754634-021
                    </Typography>
                  </Grid>
                </Grid>
              </PaddingStyled>

              <PaddingStyled top={10}>
                <Grid container justifyContent={"space-between"}>
                  <Grid>
                    <Typography
                      style={{ fontWeight: "bold" }}
                      textColor={WHITE_COLOR}
                    >
                      دفتر مرکزی : تهران نیاوران بعد از مژده پلاک 408
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography
                      style={{ fontWeight: "bold" }}
                      textColor={WHITE_COLOR}
                    >
                      22754634-021
                    </Typography>
                  </Grid>
                </Grid>
              </PaddingStyled>
            </PaddingStyled>
          </Grid>
        </Grid>
      </PaddingStyled>
      <SocialMediaComponent />
    </MainLayout>
  );
};
export default ContactUs;
const FormContainer = styled.div`
  border: 2px solid white;
  border-radius: 15px;
  padding: 10px;
`;
