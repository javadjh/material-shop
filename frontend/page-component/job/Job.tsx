import { Grid, Option, Select, Typography } from "@mui/joy";
import MainLayout from "../../layout/MainLayout";
import LogoComponent from "../../global-component/Logo.c";
import {
  CenterStyled,
  CenterVerticalStyled,
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
import { insertService, jobsService } from "../../service/job.service";
import styled from "styled-components";
import { IJobInfo } from "../../types/jobInfos.type";
import { jobInfosService } from "../../service/job-info.service";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UploadFileComponent } from "../../global-component/UploadFile.c";
import { insertReport } from "../../service/report.service";
import Link from "next/link";

const JobPage = () => {
  const [jobInfos, setJobInfos] = useState<Array<IJobInfo>>([]);
  const [jobInfo, setJobInfo] = useState<IJobInfo | any>({});
  const [jobSelected, setJobSelected] = useState<string>();
  const [isSubmited, setIsSubmited] = useState(false);

  const formik = useFormik({
    initialValues: {
      department: "",
      fullName: "",
      mellicode: "",
      age: "",

      firstNumber: "",
    },

    onSubmit: async (e: any) => {
      console.log(jobInfo);

      await insertService({
        ...e,
        ...{
          department: jobInfo?.department,
          firstNumber: e?.firstNumber ? "0" + e.firstNumber : undefined,
          secondNumber: e?.secondNumber ? "0" + e?.secondNumber : undefined,
          lastCompanyTel: e?.lastCompanyTel
            ? "0" + e?.lastCompanyTel
            : undefined,
          mellicode: e?.mellicode?.toString(),
          age: e?.age?.toString(),
        },
      });
      formik?.resetForm();
      setIsSubmited(true);
    },

    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "نام و نام خانوادگی را به درستی وارد کنید")
        .max(50, "نام و نام خانوادگی را به درستی وارد کنید")
        .required("اجباری میباشد"),

      mellicode: Yup.string().min(10).max(10).required("اجباری میباشد"),

      fatherName: Yup.string().optional().min(2),

      bithday: Yup.string().optional().min(7),

      age: Yup.string().required("اجباری میباشد"),

      firstNumber: Yup.string().length(10).required("اجباری میباشد"),
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
                  {jobInfos?.map((item: any) => (
                    <Grid lg={6}>
                      <div
                        onClick={() => {
                          setJobInfo(item);
                          setJobSelected(item?.title);
                          setIsSubmited(false);
                        }}
                      >
                        <ActionBorderComponent
                          isSelected={jobSelected == item?.title}
                        >
                          {item?.department}
                        </ActionBorderComponent>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </SpaceStyled>
            </SpaceStyled>
          </SpaceStyled>
        </Grid>
        <Grid lg={10}>
          <SpaceStyled top={80} right={40}>
            {jobInfo?.department && !isSubmited ? (
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
                                <ValueTitle>
                                  {jobInfo?.gender == "men"
                                    ? "مرد"
                                    : jobInfo?.gender == "women"
                                    ? "زن"
                                    : "فرقی ندارد" || "-"}
                                </ValueTitle>
                              </Grid>

                              <Grid lg={6}>
                                <BlockTitle>محل خدمت</BlockTitle>
                              </Grid>
                              <Grid lg={6}>
                                <ValueTitle>{jobInfo?.city || "-"}</ValueTitle>
                              </Grid>

                              <Grid lg={6}>
                                <BlockTitle>موقعیت مکانی</BlockTitle>
                              </Grid>
                              <Grid lg={6}>
                                <ValueTitle>
                                  {jobInfo?.location || "-"}
                                </ValueTitle>
                              </Grid>

                              <Grid lg={6}>
                                <BlockTitle>محدوده سنی داوطلب</BlockTitle>
                              </Grid>
                              <Grid lg={6}>
                                <ValueTitle>
                                  {jobInfo?.ageRange || "-"}
                                </ValueTitle>
                              </Grid>

                              <Grid lg={6}>
                                <BlockTitle>حداقل مدرک تحصیلی</BlockTitle>
                              </Grid>
                              <Grid lg={6}>
                                <ValueTitle>
                                  {jobInfo?.minDegree || "-"}
                                </ValueTitle>
                              </Grid>

                              <Grid lg={6}>
                                <BlockTitle>سابقه کار</BlockTitle>
                              </Grid>
                              <Grid lg={6}>
                                <ValueTitle>
                                  {jobInfo?.jobHistory || "-"}
                                </ValueTitle>
                              </Grid>

                              <Grid lg={6}>
                                <BlockTitle>ساعت کاری</BlockTitle>
                              </Grid>
                              <Grid lg={6}>
                                <ValueTitle>{jobInfo?.clock || "-"}</ValueTitle>
                              </Grid>

                              <Grid lg={6}>
                                <BlockTitle>حقوق</BlockTitle>
                              </Grid>
                              <Grid lg={6}>
                                <ValueTitle>
                                  {jobInfo?.salary || "-"}
                                </ValueTitle>
                              </Grid>

                              <Grid lg={6}>
                                <BlockTitle>ماموریت</BlockTitle>
                              </Grid>
                              <Grid lg={6}>
                                <ValueTitle>
                                  {jobInfo?.mission || "-"}
                                </ValueTitle>
                              </Grid>

                              <Grid lg={6}>
                                <BlockTitle>توضیحات متفرقه</BlockTitle>
                              </Grid>
                              <Grid lg={6}>
                                <ValueTitle>
                                  {jobInfo?.description || "-"}
                                </ValueTitle>
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
                                  type="number"
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
                                  type="number"
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
                                <SelectComponent
                                  style={{
                                    padding: 14,
                                    border:
                                      formik?.errors?.phoneNumber &&
                                      formik.touched.phoneNumber
                                        ? "1.5px solid red"
                                        : "1.5px solid orange ",
                                  }}
                                  name="activity"
                                  placeholder="وضعیت تاهل"
                                  onChange={(e: any, value: any) => {
                                    formik.setFieldValue(
                                      "isMarried",
                                      Boolean(value)
                                    );
                                  }}
                                >
                                  <Option value={"true"} key={"true"}>
                                    <Typography>متاهل</Typography>
                                  </Option>
                                  <Option value={"false"} key={"false"}>
                                    مجرد
                                  </Option>
                                </SelectComponent>
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
                                  type="number"
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
                                  type="number"
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
                                  name="lastCompanyName"
                                  placeholder="آخرین محل خدمت"
                                  onChange={formik.handleChange}
                                  value={formik.values.lastCompanyName}
                                  isError={
                                    formik.touched.lastCompanyName &&
                                    formik.errors.lastCompanyName
                                  }
                                />
                              </Grid>
                              <Grid lg={6}>
                                <InputComponent
                                  name="lastCompanyTel"
                                  placeholder="شماره تماس آخرین محل خدمت"
                                  type="number"
                                  onChange={formik.handleChange}
                                  value={formik.values.lastCompanyTel}
                                  isError={
                                    formik.touched.lastCompanyTel &&
                                    formik.errors.lastCompanyTel
                                  }
                                />
                              </Grid>
                              <Grid lg={12}>
                                <UploadFileComponent
                                  fileHandler={(e: any) => {
                                    console.log(e.filename);

                                    formik.setFieldValue("resume", e.filename);
                                  }}
                                >
                                  <ValueTitle>بارگزاری رزومه</ValueTitle>
                                </UploadFileComponent>
                              </Grid>
                              <Grid lg={12}>
                                <SpaceStyled top={-20}>
                                  <TextareaComponent
                                    name="description"
                                    rows={"3"}
                                    placeholder="توضیحات تکمیلی"
                                    isError={
                                      formik.touched.description &&
                                      formik.errors.description
                                    }
                                    onChange={formik.handleChange}
                                    value={formik.values.description}
                                  />
                                </SpaceStyled>
                              </Grid>
                            </Grid>
                            <SpaceStyled top={10}>
                              <LeftStyled>
                                <Pointer>
                                  <div
                                    onClick={() => {
                                      console.log(formik?.errors);
                                      console.log("sdddddddddd");

                                      setIsSubmited(false);
                                      formik?.submitForm();
                                    }}
                                    style={{ width: 100 }}
                                  >
                                    <ActionBorderComponent
                                      isSelected={true}
                                      isFill={true}
                                    >
                                      ثبت اطلاعات
                                    </ActionBorderComponent>
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
            ) : (
              <>
                <SpaceStyled top={300}>
                  <CenterStyled>
                    {isSubmited ? (
                      <>
                        <Typography textColor={WHITE_COLOR}>
                          درخواست شما با موفقیت ثبت شد . در صورت نیاز با شما
                          تماس میگیریم
                        </Typography>
                        <SpaceStyled top={10}>
                          <Link href={"/"}>
                            <ActionBorderComponent
                              isSelected={true}
                              isFill={true}
                              padding={"0px 10px"}
                            >
                              بازشگت به صفحه اصلی
                            </ActionBorderComponent>
                          </Link>
                        </SpaceStyled>
                      </>
                    ) : (
                      <Typography textColor={WHITE_COLOR}>
                        کاربر گرامی در صورت تمایل به همکاری با شرکت سازه کمک یکی
                        از شغل های سمت راست را انتخاب بفرمایید
                      </Typography>
                    )}
                  </CenterStyled>
                </SpaceStyled>
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
  color: dark;
  padding: 15px;
`;
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
const TextareaComponent: any = styled.textarea`
  background-color: ${LIGHT_GRAY_COLOR};
  border: none !important;
  border-radius: 8px;
  width: 100%;
  padding: 8px;
  color: #000000;
  border: ${(props: any) =>
    props.isError ? "1.5px solid red !important" : "none !important"};
`;
const SelectComponent: any = styled(Select)`
  background-color: ${LIGHT_GRAY_COLOR} !important;
  border: none !important;
  border-radius: 8px;
  width: 100%;
  padding: 8px;
  color: #000000 !important;
  border: ${(props: any) =>
    props.isError ? "1.5px solid red !important" : "none !important"};
`;
