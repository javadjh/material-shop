import { Card, Col, Row, Typography } from "antd";
import {
  CenterStyled,
  Pointer,
  SpaceStyled,
  WhiteP,
} from "../../global-style/global.s";
import { FC } from "react";
import { IJobInfo } from "../../types/job-info.type";

const JobInfosComponent: FC<{
  jobInfos: Array<IJobInfo>;
  setIsOpen: any;
  setJobInfoData: any;
}> = ({ jobInfos, setIsOpen, setJobInfoData }) => {
  const onEditHandler = async (jobInfo: IJobInfo) => {
    setIsOpen(true);
    setJobInfoData(jobInfo);
  };
  return (
    <Row>
      {jobInfos?.map((jobInfo) => (
        <Col span={6}>
          <Pointer onClick={() => onEditHandler(jobInfo)}>
            <SpaceStyled vertical={5} horizontal={5}>
              <div className="card p-4">
                <SpaceStyled>
                  <CenterStyled>
                    <WhiteP>بخش : {jobInfo.department}</WhiteP>
                    <WhiteP>
                      مورد نیاز : {jobInfo.remainingEmployeeCount}
                    </WhiteP>
                    <WhiteP>
                      جنسیت :{" "}
                      {jobInfo.gender == "men"
                        ? "آقا"
                        : jobInfo.gender == "both"
                        ? "فرقی ندارد"
                        : "خانم"}
                    </WhiteP>
                    <WhiteP>شهر : {jobInfo.city}</WhiteP>
                  </CenterStyled>
                </SpaceStyled>
              </div>
            </SpaceStyled>
          </Pointer>
        </Col>
      ))}
    </Row>
  );
};
export default JobInfosComponent;
