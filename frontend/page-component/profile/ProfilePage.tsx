import { Grid } from "@mui/joy";
import { PaddingStyled, SpaceStyled } from "../../global-style/global.s";
import RightMenu from "../../layout/RightMenu";
import { useEffect, useState } from "react";
import { profileService, updateUserService } from "../../service/user.service";
import SimpleInputComponent from "../../global-component/input/SimpleInput.c";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { LIGHT_GRAY_COLOR } from "../../config/colors";
import LocationPickerComponent from "../employment/LocationPicker.c";
import { getCookie } from "cookies-next";
import ActionBorderComponent from "../../global-component/ActionBorder.c";

const ProfilePage = () => {
  const [user, setUser] = useState<any>();
  const [city, setCity] = useState<number>();
  const [initialValues, setInitialValues] = useState<any>({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    melliCode: user?.melliCode || "",
    postalCode: user?.postalCode || "",
    companyName: user?.companyName || "",
    phone: getCookie("phone"),
    address: user?.address || "",
  });
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (e: any) => {
      console.log(e);

      await updateUserService({
        ...e,
        ...{
          city,
          postalCode: e?.postalCode ? String(e?.postalCode) : undefined,
        },
      });
      formik?.resetForm();
      // setIsSubmited(true);
    },
  });
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (user?._id) setValue();
  }, [user]);

  const setValue = () => {
    setInitialValues({
      firstName: user?.firstName || undefined,
      lastName: user?.lastName || undefined,
      email: user?.email || undefined,
      melliCode: user?.melliCode || undefined,
      postalCode: user?.postalCode || undefined,
      companyName: user?.companyName || undefined,
      phone: getCookie("phone"),
      address: user?.address || undefined,
    });
  };

  const getData = async () => {
    const {
      data: { data: res },
    } = await profileService();

    setUser(res);
  };
  return (
    <PaddingStyled top={80}>
      <Grid container>
        <Grid lg={3}>
          <RightMenu />
        </Grid>
        <Grid lg={9}>
          <SpaceStyled right={10}>
            <Grid container spacing={2}>
              <Grid lg={6}>
                <InputComponent
                  name="firstName"
                  placeholder="نام"
                  isError={formik.touched.firstName && formik.errors.firstName}
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
              </Grid>
              <Grid lg={6}>
                <InputComponent
                  name="lastName"
                  placeholder="نام و نام خانوادگی"
                  isError={formik.touched.lastName && formik.errors.lastName}
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
              </Grid>
              <Grid lg={6}>
                <InputComponent
                  name="email"
                  placeholder="ایمیل"
                  isError={formik.touched.email && formik.errors.email}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </Grid>
              <Grid lg={6}>
                <InputComponent
                  name="melliCode"
                  placeholder="کد ملی"
                  type="number"
                  isError={formik.touched.melliCode && formik.errors.melliCode}
                  onChange={formik.handleChange}
                  value={formik.values.melliCode}
                />
              </Grid>
              <Grid lg={12}>
                <LocationPickerComponent
                  leftSelect={0}
                  secondLeftSelect={0}
                  secondRightSelect={0}
                  spacing={2}
                  onCitySelected={(city) => {
                    setCity(city);
                  }}
                />
              </Grid>
              <Grid lg={6}>
                <InputComponent
                  name="phone"
                  disabled
                  placeholder="شماره تماس"
                  isError={formik.touched.phone && formik.errors.phone}
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
              </Grid>
              <Grid lg={6}>
                <InputComponent
                  name="postalCode"
                  type="number"
                  placeholder="کد پستی"
                  isError={
                    formik.touched.postalCode && formik.errors.postalCode
                  }
                  onChange={formik.handleChange}
                  value={formik.values.postalCode}
                />
              </Grid>
              <Grid lg={12}>
                <InputComponent
                  name="companyName"
                  placeholder="نام شرکت"
                  isError={
                    formik.touched.companyName && formik.errors.companyName
                  }
                  onChange={formik.handleChange}
                  value={formik.values.companyName}
                />
              </Grid>
              <Grid lg={12}>
                <InputComponent
                  name="address"
                  placeholder="آدرس"
                  isError={formik.touched.address && formik.errors.address}
                  onChange={formik.handleChange}
                  value={formik.values.address}
                />
              </Grid>
              <Grid lg={2}>
                <ActionBorderComponent
                  isFill={true}
                  isSelected={true}
                  onClick={() => formik?.submitForm()}
                >
                  ثبت
                </ActionBorderComponent>
              </Grid>
            </Grid>
          </SpaceStyled>
        </Grid>
      </Grid>
    </PaddingStyled>
  );
};
export default ProfilePage;
const InputComponent: any = styled.input`
  background-color: ${LIGHT_GRAY_COLOR};
  border: none !important;
  border-radius: 8px;
  border: ${(props: any) =>
    props.isError ? "1.5px solid red !important" : "none !important"};
  width: 100%;
  padding: 15px;
  color: #000000;
`;
