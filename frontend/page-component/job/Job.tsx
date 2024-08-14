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
                <div>
                  <Grid container spacing={10}>
                    <Grid lg={6}>
                      <SpaceStyled right={80}>
                        <WhiteBlockStyled
                          style={{ height: "85vh", overflow: "auto" }}
                        >
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
                      </SpaceStyled>
                    </Grid>
                    <Grid lg={6}>
                      <SpaceStyled left={80}>
                        <WhiteBlockStyled
                          style={{ height: "85vh", overflow: "auto" }}
                        >
                          <BlockTitle>
                            برای استخدام در این شغل فرم زیر را پر کنید
                          </BlockTitle>
                          <SpaceStyled top={10}>
                            <Grid container spacing={1}>
                              <Grid lg={6}>
                                <InputComponent
                                  name="fullName"
                                  isError={
                                    formik.touched.fullName &&
                                    formik.errors.fullName
                                  }
                                  placeholder="نام و نام خانوادگی"
                                  onChange={formik.handleChange}
                                  value={formik.values.fullName}
                                />
                              </Grid>
                              <Grid lg={6}>
                                <InputComponent
                                  isError={
                                    formik.touched.mellicode &&
                                    formik.errors.mellicode
                                  }
                                  name="mellicode"
                                  placeholder="کد ملی"
                                  onChange={formik.handleChange}
                                  value={formik.values.mellicode}
                                />
                              </Grid>
                              <Grid lg={6}>
                                <InputComponent
                                  name="fatherName"
                                  placeholder="نام پدر"
                                  isError={
                                    formik.touched.fatherName &&
                                    formik.errors.fatherName
                                  }
                                  onChange={formik.handleChange}
                                  value={formik.values.fatherName}
                                />
                              </Grid>
                              <Grid lg={6}>
                                <InputComponent
                                  name="age"
                                  isError={
                                    formik.touched.age && formik.errors.age
                                  }
                                  placeholder="سن"
                                  onChange={formik.handleChange}
                                  value={formik.values.age}
                                />
                              </Grid>
                              <Grid lg={6}>
                                <InputComponent
                                  name="bithday"
                                  placeholder="تاریخ تولد"
                                  isError={
                                    formik.touched.bithday &&
                                    formik.errors.bithday
                                  }
                                  onChange={formik.handleChange}
                                  value={formik.values.bithday}
                                />
                              </Grid>

                              <Grid lg={6}>
                                <InputComponent
                                  name="isMarried"
                                  placeholder="وضعیت تاهل"
                                  isError={
                                    formik.touched.isMarried &&
                                    formik.errors.isMarried
                                  }
                                  onChange={formik.handleChange}
                                  value={formik.values.isMarried}
                                />
                              </Grid>
                              <Grid lg={6}>
                                <InputComponent
                                  name="address"
                                  placeholder="آدرس"
                                  isError={
                                    formik.touched.address &&
                                    formik.errors.address
                                  }
                                  onChange={formik.handleChange}
                                  value={formik.values.address}
                                />
                              </Grid>
                              <Grid lg={6}>
                                <InputComponent
                                  name="firstNumber"
                                  placeholder="شماره تماس اول"
                                  isError={
                                    formik.touched.firstNumber &&
                                    formik.errors.firstNumber
                                  }
                                  onChange={formik.handleChange}
                                  value={formik.values.firstNumber}
                                />
                              </Grid>
                              <Grid lg={6}>
                                <InputComponent
                                  name="secondNumber"
                                  placeholder="شماره تماس دوم"
                                  onChange={formik.handleChange}
                                  value={formik.values.secondNumber}
                                  isError={
                                    formik.touched.secondNumber &&
                                    formik.errors.secondNumber
                                  }
                                />
                              </Grid>
                              <Grid lg={6}>
                                <InputComponent
                                  name="degree"
                                  placeholder="مدرک تحصیلی"
                                  onChange={formik.handleChange}
                                  value={formik.values.degree}
                                  isError={
                                    formik.touched.degree &&
                                    formik.errors.degree
                                  }
                                />
                              </Grid>
                              <Grid lg={6}>
                                <InputComponent
                                  name="universityName"
                                  placeholder="نام دانشگاه"
                                  onChange={formik.handleChange}
                                  isError={
                                    formik.touched.universityName &&
                                    formik.errors.universityName
                                  }
                                  value={formik.values.universityName}
                                />
                              </Grid>
                              <Grid lg={6}>
                                <InputComponent
                                  name="jobHistory"
                                  placeholder="سابقه کاری"
                                  onChange={formik.handleChange}
                                  value={formik.values.jobHistory}
                                  isError={
                                    formik.touched.jobHistory &&
                                    formik.errors.jobHistory
                                  }
                                />
                              </Grid>
                              <Grid lg={6}>
                                <InputComponent
                                  name="LastCompanyName"
                                  placeholder="آخرین شرکت کار کرد"
                                  onChange={formik.handleChange}
                                  value={formik.values.LastCompanyName}
                                  isError={
                                    formik.touched.LastCompanyName &&
                                    formik.errors.LastCompanyName
                                  }
                                />
                              </Grid>
                              <Grid lg={6}>
                                <InputComponent
                                  name="LastCompanyTel"
                                  placeholder="شماره آخرین شرکت"
                                  onChange={formik.handleChange}
                                  value={formik.values.LastCompanyTel}
                                  isError={
                                    formik.touched.LastCompanyTel &&
                                    formik.errors.LastCompanyTel
                                  }
                                />
                              </Grid>
                              <Grid lg={12}>
                                <InputComponent
                                  name="resume"
                                  placeholder="رزومه کاری"
                                  onChange={formik.handleChange}
                                  value={formik.values.resume}
                                  isError={
                                    formik.touched.resume &&
                                    formik.errors.resume
                                  }
                                />
                              </Grid>
                              <Grid lg={12}>
                                <TextareaComponent
                                  name="description"
                                  rows={"3"}
                                  placeholder="توضیحات"
                                  isError={
                                    formik.touched.description &&
                                    formik.errors.description
                                  }
                                  onChange={formik.handleChange}
                                  value={formik.values.description}
                                />
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
                      </SpaceStyled>
                    </Grid>
                  </Grid>
                </div>
              </>
            )}
          </SpaceStyled>
        </Grid>
      </Grid>
    </MainLayout>
  );
};
export default JobPage;
const jobContainer = styled.div`
  height: 80vh;
`;

const BlockTitle = styled.div`
  background-color: #4a5f62;
  border-radius: 5px;
  text-align: center;
  color: white;
  padding: 15px;
`;
const ValueTitle = styled.div`
  background-color: ${LIGHT_GRAY_COLOR};
  border-radius: 5px;
  text-align: center;
  color: white;
  padding: 15px;
`;
const InputComponent: any = styled.input`
  background-color: ${LIGHT_GRAY_COLOR};
  border: none !important;
  border-radius: 8px;
  border: ${(props: any) =>
    props.isError
      ? "1.5px solid red !important"
      : "1px solid orange !important"};
  width: 100%;
  padding: 15px;
  color: white;
`;
const TextareaComponent: any = styled.textarea`
  background-color: ${LIGHT_GRAY_COLOR};
  border: none !important;
  border-radius: 8px;
  width: 100%;
  padding: 8px;
  color: white;
  border: ${(props: any) =>
    props.isError
      ? "1.5px solid red !important"
      : "1px solid orange !important"};
`;
