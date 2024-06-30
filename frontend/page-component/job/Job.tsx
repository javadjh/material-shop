import { Grid, Typography } from "@mui/joy";
import MainLayout from "../../layout/MainLayout";
import LogoComponent from "../../global-component/Logo.c";
import {
  CenterStyled,
  LeftStyled,
  OrangeBlockStyled,
  Pointer,
  SpaceStyled,
  WhiteBlockStyled,
} from "../../global-style/global.s";
import ActionBorderComponent from "../../global-component/ActionBorder.c";
import { LIGHT_GRAY_COLOR, WHITE_COLOR } from "../../config/colors";
import { useEffect, useState } from "react";
import { IJob } from "../../types/job.type";
import { jobsService } from "../../service/job.service";
import styled from "styled-components";
import { IJobInfo } from "../../types/jobInfos.type";
import { jobInfosService } from "../../service/job-info.service";
import { useFormik } from "formik";
import * as Yup from "yup";

const JobPage = () => {
  const [jobInfos, setJobInfos] = useState<Array<IJobInfo>>([]);
  const [jobInfo, setJobInfo] = useState<IJobInfo>({});
  const [isSubmited, setIsSubmited] = useState(false);

  const formik = useFormik({
    initialValues: {
      department: "",
      fullName: "",
      mellicode: "",
      fatherName: "",
      age: "",
      bithday: "",
      isMarried: "",
      address: "",
      firstNumber: "",
      secondNumber: "",
      degree: "",
      universityName: "",
      jobHistory: "",
      LastCompanyName: "",
      LastCompanyTel: "",
      resume: "",
      description: "",
    },
    onSubmit: async (e: any) => {
      console.log(e);

      // await insertReport(e);
      formik?.resetForm();
      setIsSubmited(true);
    },

    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "نام و نام خانوادگی را به درستی وارد کنید")
        .max(50, "نام و نام خانوادگی را به درستی وارد کنید")
        .required("اجباری میباشد"),
      department: Yup.string().required("اجباری میباشد"),
      mellicode: Yup.string().required("اجباری میباشد"),
      fatherName: Yup.string().required("اجباری میباشد"),
      age: Yup.string().required("اجباری میباشد"),
      bithday: Yup.string().required("اجباری میباشد"),
      isMarried: Yup.string().required("اجباری میباشد"),
      address: Yup.string().required("اجباری میباشد"),
      firstNumber: Yup.string().required("اجباری میباشد"),
      secondNumber: Yup.string().required("اجباری میباشد"),
      degree: Yup.string().required("اجباری میباشد"),
      universityName: Yup.string().required("اجباری میباشد"),
      jobHistory: Yup.string().required("اجباری میباشد"),
      LastCompanyName: Yup.string().required("اجباری میباشد"),
      LastCompanyTel: Yup.string().required("اجباری میباشد"),
      resume: Yup.string().required("اجباری میباشد"),
      description: Yup.string().required("اجباری میباشد"),
    }),
  });
  useEffect(() => {
    getJobInfos();
  }, []);
  const getJobInfos = async () => {
    const {
      data: { data: res },
    } = await jobInfosService();

    setJobInfos(res);
  };
  useEffect(() => {
    console.log(jobInfo);
  }, [jobInfo]);
  return (
    <MainLayout>
      <Grid container>
        <Grid lg={2}>
          <SpaceStyled top={10}>
            <LogoComponent />
            <SpaceStyled top={10}>
              <OrangeBlockStyled>
                <CenterStyled>
                  <Typography textColor={WHITE_COLOR}>
                    عناوین شغلی مورد نیاز
                  </Typography>
                </CenterStyled>
              </OrangeBlockStyled>
              <SpaceStyled top={10}>
                <Grid container spacing={1}>
                  {jobInfos?.map((jobInfo) => (
                    <Grid lg={6} onClick={() => setJobInfo(jobInfo)}>
                      <ActionBorderComponent>
                        {jobInfo?.department}
                      </ActionBorderComponent>
                    </Grid>
                  ))}
                </Grid>
              </SpaceStyled>
            </SpaceStyled>
          </SpaceStyled>
        </Grid>
        <Grid lg={10}>
          <SpaceStyled top={80} right={40}>
            {jobInfo?.department && (
              <>
                <Grid container spacing={10}>
                  <Grid lg={6}>
                    <WhiteBlockStyled>
                      <BlockTitle>شرایط لازم برای این شغل</BlockTitle>
                      <SpaceStyled top={10}>
                        <Grid container spacing={1}>
                          <Grid lg={6}>
                            <BlockTitle>تعداد نیروی لازم</BlockTitle>
                          </Grid>
                          <Grid lg={6}>
                            <ValueTitle>
                              {jobInfo?.remainingEmployeeCount}
                            </ValueTitle>
                          </Grid>

                          <Grid lg={6}>
                            <BlockTitle>جنسیت</BlockTitle>
                          </Grid>
                          <Grid lg={6}>
                            <ValueTitle>{jobInfo?.gender}</ValueTitle>
                          </Grid>

                          <Grid lg={6}>
                            <BlockTitle>محل خدمت</BlockTitle>
                          </Grid>
                          <Grid lg={6}>
                            <ValueTitle>{jobInfo?.city}</ValueTitle>
                          </Grid>

                          <Grid lg={6}>
                            <BlockTitle>موقعیت مکانی</BlockTitle>
                          </Grid>
                          <Grid lg={6}>
                            <ValueTitle>{jobInfo?.location}</ValueTitle>
                          </Grid>

                          <Grid lg={6}>
                            <BlockTitle>محدوده سنی داوطلب</BlockTitle>
                          </Grid>
                          <Grid lg={6}>
                            <ValueTitle>{jobInfo?.ageRange}</ValueTitle>
                          </Grid>

                          <Grid lg={6}>
                            <BlockTitle>حداقل مدرک تحصیلی</BlockTitle>
                          </Grid>
                          <Grid lg={6}>
                            <ValueTitle>{jobInfo?.minDegree}</ValueTitle>
                          </Grid>

                          <Grid lg={6}>
                            <BlockTitle>سابقه کار</BlockTitle>
                          </Grid>
                          <Grid lg={6}>
                            <ValueTitle>{jobInfo?.jobHistory}</ValueTitle>
                          </Grid>

                          <Grid lg={6}>
                            <BlockTitle>ساعت کاری</BlockTitle>
                          </Grid>
                          <Grid lg={6}>
                            <ValueTitle>{jobInfo?.clock}</ValueTitle>
                          </Grid>

                          <Grid lg={6}>
                            <BlockTitle>حقوق</BlockTitle>
                          </Grid>
                          <Grid lg={6}>
                            <ValueTitle>{jobInfo?.salary}</ValueTitle>
                          </Grid>

                          <Grid lg={6}>
                            <BlockTitle>ماموریت</BlockTitle>
                          </Grid>
                          <Grid lg={6}>
                            <ValueTitle>{jobInfo?.mission}</ValueTitle>
                          </Grid>

                          <Grid lg={6}>
                            <BlockTitle>توضیحات متفرقه</BlockTitle>
                          </Grid>
                          <Grid lg={6}>
                            <ValueTitle>{jobInfo?.description}</ValueTitle>
                          </Grid>
                        </Grid>
                      </SpaceStyled>
                    </WhiteBlockStyled>
                  </Grid>
                  <Grid lg={6}>
                    <WhiteBlockStyled>
                      <BlockTitle>
                        برای استخدام در این شغل فرم زیر را پر کنید
                      </BlockTitle>
                      <SpaceStyled top={10}>
                        <Grid container spacing={1}>
                          <Grid lg={6}>
                            <InputComponent
                              name="fullName"
                              placeholder="نام و نام خانوادگی"
                              onChange={formik.handleChange}
                              value={formik.values.fullName}
                            />
                            {formik.touched.fullName &&
                            formik.errors.fullName ? (
                              <div>{formik.errors.fullName + ""}</div>
                            ) : null}
                          </Grid>
                          <Grid lg={6}>
                            <InputComponent
                              name="mellicode"
                              placeholder="کد ملی"
                              onChange={formik.handleChange}
                              value={formik.values.mellicode}
                            />
                            {formik.touched.mellicode &&
                            formik.errors.mellicode ? (
                              <div>{formik.errors.mellicode + ""}</div>
                            ) : null}
                          </Grid>
                          <Grid lg={6}>
                            <InputComponent
                              name="fatherName"
                              placeholder="نام پدر"
                              onChange={formik.handleChange}
                              value={formik.values.fatherName}
                            />
                            {formik.touched.fatherName &&
                            formik.errors.fatherName ? (
                              <div>{formik.errors.fatherName + ""}</div>
                            ) : null}
                          </Grid>
                          <Grid lg={6}>
                            <InputComponent
                              name="age"
                              placeholder="سن"
                              onChange={formik.handleChange}
                              value={formik.values.age}
                            />
                            {formik.touched.age && formik.errors.age ? (
                              <div>{formik.errors.age + ""}</div>
                            ) : null}
                          </Grid>
                          <Grid lg={6}>
                            <InputComponent
                              name="bithday"
                              placeholder="تاریخ تولد"
                              onChange={formik.handleChange}
                              value={formik.values.bithday}
                            />
                            {formik.touched.bithday && formik.errors.bithday ? (
                              <div>{formik.errors.bithday + ""}</div>
                            ) : null}
                          </Grid>

                          <Grid lg={6}>
                            <InputComponent
                              name="isMarried"
                              placeholder="وضعیت تاهل"
                              onChange={formik.handleChange}
                              value={formik.values.isMarried}
                            />
                            {formik.touched.isMarried &&
                            formik.errors.isMarried ? (
                              <div>{formik.errors.isMarried + ""}</div>
                            ) : null}
                          </Grid>
                          <Grid lg={6}>
                            <InputComponent
                              name="address"
                              placeholder="آدرس"
                              onChange={formik.handleChange}
                              value={formik.values.address}
                            />
                            {formik.touched.address && formik.errors.address ? (
                              <div>{formik.errors.address + ""}</div>
                            ) : null}
                          </Grid>
                          <Grid lg={6}>
                            <InputComponent
                              name="firstNumber"
                              placeholder="شماره تماس اول"
                              onChange={formik.handleChange}
                              value={formik.values.firstNumber}
                            />
                            {formik.touched.firstNumber &&
                            formik.errors.firstNumber ? (
                              <div>{formik.errors.firstNumber + ""}</div>
                            ) : null}
                          </Grid>
                          <Grid lg={6}>
                            <InputComponent
                              name="secondNumber"
                              placeholder="شماره تماس دوم"
                              onChange={formik.handleChange}
                              value={formik.values.secondNumber}
                            />
                            {formik.touched.secondNumber &&
                            formik.errors.secondNumber ? (
                              <div>{formik.errors.secondNumber + ""}</div>
                            ) : null}
                          </Grid>
                          <Grid lg={6}>
                            <InputComponent
                              name="degree"
                              placeholder="مدرک تحصیلی"
                              onChange={formik.handleChange}
                              value={formik.values.degree}
                            />
                            {formik.touched.degree && formik.errors.degree ? (
                              <div>{formik.errors.degree + ""}</div>
                            ) : null}
                          </Grid>
                          <Grid lg={6}>
                            <InputComponent
                              name="universityName"
                              placeholder="نام دانشگاه"
                              onChange={formik.handleChange}
                              value={formik.values.universityName}
                            />
                            {formik.touched.universityName &&
                            formik.errors.universityName ? (
                              <div>{formik.errors.universityName + ""}</div>
                            ) : null}
                          </Grid>
                          <Grid lg={6}>
                            <InputComponent
                              name="jobHistory"
                              placeholder="سابقه کاری"
                              onChange={formik.handleChange}
                              value={formik.values.jobHistory}
                            />
                            {formik.touched.jobHistory &&
                            formik.errors.jobHistory ? (
                              <div>{formik.errors.jobHistory + ""}</div>
                            ) : null}
                          </Grid>
                          <Grid lg={6}>
                            <InputComponent
                              name="LastCompanyName"
                              placeholder="آخرین شرکت کار کرد"
                              onChange={formik.handleChange}
                              value={formik.values.LastCompanyName}
                            />
                            {formik.touched.LastCompanyName &&
                            formik.errors.LastCompanyName ? (
                              <div>{formik.errors.LastCompanyName + ""}</div>
                            ) : null}
                          </Grid>
                          <Grid lg={6}>
                            <InputComponent
                              name="LastCompanyTel"
                              placeholder="شماره آخرین شرکت"
                              onChange={formik.handleChange}
                              value={formik.values.LastCompanyTel}
                            />
                            {formik.touched.LastCompanyTel &&
                            formik.errors.LastCompanyTel ? (
                              <div>{formik.errors.LastCompanyTel + ""}</div>
                            ) : null}
                          </Grid>
                          <Grid lg={12}>
                            <InputComponent
                              name="resume"
                              placeholder="رزومه کاری"
                              onChange={formik.handleChange}
                              value={formik.values.resume}
                            />
                            {formik.touched.resume && formik.errors.resume ? (
                              <div>{formik.errors.resume + ""}</div>
                            ) : null}
                          </Grid>
                          <Grid lg={12}>
                            <TextareaComponent
                              name="description"
                              rows={"3"}
                              placeholder="توضیحات"
                              onChange={formik.handleChange}
                              value={formik.values.description}
                            />
                            {formik.touched.description &&
                            formik.errors.description ? (
                              <div>{formik.errors.description + ""}</div>
                            ) : null}
                          </Grid>
                        </Grid>
                        <SpaceStyled top={10}>
                          <LeftStyled>
                            <Pointer>
                              <div
                                onClick={() => {
                                  setIsSubmited(false);
                                  formik?.submitForm();
                                }}
                                style={{ width: 100 }}
                              >
                                <BlockTitle>ثبت اطلاعات</BlockTitle>
                              </div>
                            </Pointer>
                          </LeftStyled>
                        </SpaceStyled>
                      </SpaceStyled>
                    </WhiteBlockStyled>
                  </Grid>
                </Grid>
              </>
            )}
          </SpaceStyled>
        </Grid>
      </Grid>
    </MainLayout>
  );
};
export default JobPage;
const BlockTitle = styled.div`
  background-color: #4a5f62;
  border-radius: 5px;
  text-align: center;
  color: white;
  padding: 10px;
`;
const ValueTitle = styled.div`
  background-color: ${LIGHT_GRAY_COLOR};
  border-radius: 5px;
  text-align: center;
  color: white;
  padding: 10px;
`;
const InputComponent = styled.input`
  background-color: ${LIGHT_GRAY_COLOR};
  border: none !important;
  border-radius: 8px;
  width: 100%;
  padding: 8px;
  color: white;
`;
const TextareaComponent: any = styled.textarea`
  background-color: ${LIGHT_GRAY_COLOR};
  border: none !important;
  border-radius: 8px;
  width: 100%;
  padding: 8px;
  color: white;
`;
