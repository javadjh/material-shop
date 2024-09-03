import UpsertJobInfoModal from "./UpsertJobInfo.m";
import { useEffect, useState } from "react";
import { IJobInfo } from "../../types/job-info.type";
import { jobInfosService } from "../../service/job-info.service";
import { Button, Col, Row } from "antd";
import JobInfosComponent from "./JobInfors.c";
import { SpaceStyled } from "../../global-style/global.s";

const JobInfo = () => {
  const [jobInfos, setJobInfos] = useState<Array<IJobInfo>>([]);
  const [jobInfoData, setJobInfoData] = useState<IJobInfo>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    getJobInfos();
  }, []);

  const getJobInfos = async () => {
    const {
      data: { data: response },
    } = await jobInfosService();
    setJobInfos(response);
  };
  const onOpenModalHandler = () => {
    setJobInfoData({});
    setIsOpen(true);
  };
  return (
    <div>
      <SpaceStyled bottom={20}>
        <Row justify={"space-between"}>
          <Col>
            <h4>بخش های فرصت های شغلی</h4>
          </Col>
          <Col>
            <button
              className="btn btn-success"
              onClick={(e) => {
                e.preventDefault();
                onOpenModalHandler();
              }}
            >
              افزودن بخش جدید
            </button>
          </Col>
        </Row>
      </SpaceStyled>
      <UpsertJobInfoModal
        data={jobInfoData}
        isOpen={isOpen}
        refreshData={getJobInfos}
        setIsOpen={setIsOpen}
      />
      <JobInfosComponent
        jobInfos={jobInfos}
        setIsOpen={setIsOpen}
        setJobInfoData={setJobInfoData}
      />
    </div>
  );
};
export default JobInfo;
