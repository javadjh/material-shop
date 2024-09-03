import { FC } from "react";
import { ICategory } from "../../types/category.type";
import { Col, Modal, Row } from "antd";
import { IJob } from "../../types/job.type";
import { BACKEND_URL } from "../../service/APIRoutes";
import { SpaceStyled, WhiteP } from "../../global-style/global.s";

const ShowJobInfoModal: FC<{ isOpen: boolean; setIsOpen: any; job: IJob }> = ({
  isOpen,
  setIsOpen,
  job,
}) => {
  return (
    <Modal
      open={isOpen}
      footer={null}
      width={"60%"}
      onCancel={() => setIsOpen(false)}
    >
      <SpaceStyled top={40} horizontal={20}>
        <div dir="rtl">
          <Row>
            <Col span={12}>
              <WhiteP>نام و نام خانوادگی : {job.fullName || "-"}</WhiteP>
            </Col>
            <Col span={12}>
              <WhiteP>بخش : {job.department || "-"}</WhiteP>
            </Col>
            <Col span={12}>
              <WhiteP>کد ملی : {job.mellicode || "-"}</WhiteP>
            </Col>
            <Col span={12}>
              <WhiteP>نام پدر : {job.fatherName || "-"}</WhiteP>
            </Col>
            <Col span={12}>
              <WhiteP>سن : {job.age || "-"}</WhiteP>
            </Col>
            <Col span={12}>
              <WhiteP>تاریخ تولد : {job.bithday || "-"}</WhiteP>
            </Col>
            <Col span={12}>
              <WhiteP>آدرس : {job.address || "-"}</WhiteP>
            </Col>
            <Col span={12}>
              <WhiteP>شماره اول : {job.firstNumber || "-"}</WhiteP>
            </Col>
            <Col span={12}>
              <WhiteP>شماره دوم : {job.secondNumber || "-"}</WhiteP>
            </Col>
            <Col span={12}>
              <WhiteP>مدرک تحصیلی : {job.degree || "-"}</WhiteP>
            </Col>
            <Col span={12}>
              <WhiteP>نام دانشگاه : {job.universityName || "-"}</WhiteP>
            </Col>
            <Col span={12}>
              <WhiteP>سابقه کاری : {job.jobHistory || "-"}</WhiteP>
            </Col>
            <Col span={12}>
              <WhiteP>آخرین شرکت : {job.lastCompanyName || "-"}</WhiteP>
            </Col>
            <Col span={12}>
              <WhiteP>شماره شرکت قبلی : {job.lastCompanyTel || "-"}</WhiteP>
            </Col>
            <Col span={12}>
              <a
                target="_blank"
                href={`${BACKEND_URL}public/${job.resume || "-"}`}
              >
                دانلود رزومه
              </a>
            </Col>
            <Col span={24}>
              <WhiteP>توضیحات : {job.description || "-"}</WhiteP>
            </Col>
          </Row>
        </div>
      </SpaceStyled>
    </Modal>
  );
};
export default ShowJobInfoModal;
