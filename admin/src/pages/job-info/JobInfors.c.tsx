import { Card, Col, Row, Typography } from "antd";
import {
  CenterStyled,
  Pointer,
  SpaceStyled,
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
              <Card>
                <SpaceStyled>
                  <CenterStyled>
                    <Typography.Paragraph>
                      بخش : {jobInfo.department}
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                      مورد نیاز : {jobInfo.remainingEmployeeCount}
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                      جنسیت :{" "}
                      {jobInfo.gender == "men"
                        ? "آقا"
                        : jobInfo.gender == "both"
                        ? "فرقی ندارد"
                        : "خانم"}
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                      شهر : {jobInfo.city}
                    </Typography.Paragraph>
                  </CenterStyled>
                </SpaceStyled>
              </Card>
            </SpaceStyled>
          </Pointer>
        </Col>
      ))}
    </Row>
  );
};
export default JobInfosComponent;
