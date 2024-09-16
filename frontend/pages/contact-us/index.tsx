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
import { ORANGE_COLOR, WHITE_COLOR } from "../../config/colors";
import SocialMediaComponent from "../../global-component/SocialMedia.c";
import Joi from "joi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { insertReport } from "../../service/report.service";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../global-component/ScreenBridge.c";
import { getCookie } from "cookies-next";
import { getAppSettingService } from "../../service/appsetting.service";

const ContactUs = () => {
  const [isSubmited, setIsSubmited] = useState(false);
  const [appsetting, setAppSetting] = useState<any>({});
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await getAppSettingService();
    let setting = res?.data?.data?.data;
    setAppSetting(setting);
  };
  const size = useWindowSize();
  const formik = useFormik({
    initialValues: {
      phoneNumber: getCookie("phone"),
      fullName: "",
      description: "",
    },
    onSubmit: async (e: any) => {
      await insertReport({
        ...e,
        ...{ phoneNumber: String("0" + e.phoneNumber) },
      });
      formik?.resetForm();
      setIsSubmited(true);
    },

    validationSchema: Yup.object({
      phoneNumber: Yup.number().required("اجباری میباشد"),
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
            <LogoComponent width={size.height > 660 ? 180 : 90} />
            <SpaceStyled vertical={10}>
              <CenterStyled>
                <img
                  src="./google-font.png"
                  width={size.height > 660 ? 300 : 100}
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
                    <SpaceStyled top={40}>
                      <SimpleInputComponent
                        name="fullName"
                        isError={
                          formik.touched.fullName && formik.errors.fullName
                        }
                        placeholder="نام و نام خانوادگی"
                        onChange={formik.handleChange}
                        value={formik.values.fullName}
                      />

                      <SimpleInputComponent
                        name="phoneNumber"
                        disabled={getCookie("phone")}
                        placeholder="شماره تماس"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                        isError={
                          formik.touched.phoneNumber &&
                          formik.errors.phoneNumber
                        }
                      />

                      <SimpleInputComponent
                        rows="4"
                        isArea={true}
                        placeholder="شرح"
                        name="description"
                        onChange={formik.handleChange}
                        isError={
                          formik.touched.description &&
                          formik.errors.description
                        }
                        value={formik.values.description}
                      />
                    </SpaceStyled>
                  )}
                  <LeftStyled>
                    <div
                      onClick={() => {
                        if (isSubmited) {
                          setIsSubmited(false);
                          formik?.resetForm();
                        } else {
                          formik?.submitForm();
                        }
                      }}
                      style={{ width: 100 }}
                    >
                      <ActionBorderComponent
                        isFill={true}
                        border={"3"}
                        isSelected={true}
                      >
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
                <img
                  src="/map.png"
                  style={{ objectFit: "fill" }}
                  width={"100%"}
                  height={size.height - 220}
                />
              </CenterStyled>

              {appsetting?.firstAddress && (
                <PaddingStyled top={20}>
                  <Grid container justifyContent={"space-between"}>
                    <Grid>
                      <Typography
                        style={{ fontWeight: "bold" }}
                        textColor={WHITE_COLOR}
                      >
                        {appsetting?.firstAddress}
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography
                        style={{ fontWeight: "bold" }}
                        textColor={WHITE_COLOR}
                      >
                        {appsetting?.firstTell}
                      </Typography>
                    </Grid>
                  </Grid>
                </PaddingStyled>
              )}

              {appsetting?.secondAddress && (
                <PaddingStyled top={20}>
                  <Grid container justifyContent={"space-between"}>
                    <Grid>
                      <Typography
                        style={{ fontWeight: "bold" }}
                        textColor={WHITE_COLOR}
                      >
                        {appsetting?.secondAddress}
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography
                        style={{ fontWeight: "bold" }}
                        textColor={WHITE_COLOR}
                      >
                        {appsetting?.secondTell}
                      </Typography>
                    </Grid>
                  </Grid>
                </PaddingStyled>
              )}

              {appsetting?.thirdAddress && (
                <PaddingStyled top={20}>
                  <Grid container justifyContent={"space-between"}>
                    <Grid>
                      <Typography
                        style={{ fontWeight: "bold" }}
                        textColor={WHITE_COLOR}
                      >
                        {appsetting?.thirdAddress}
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography
                        style={{ fontWeight: "bold" }}
                        textColor={WHITE_COLOR}
                      >
                        {appsetting?.thirdTell}
                      </Typography>
                    </Grid>
                  </Grid>
                </PaddingStyled>
              )}
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
  border: 2px solid ${ORANGE_COLOR};
  border-radius: 15px;
  padding: 10px;
`;
