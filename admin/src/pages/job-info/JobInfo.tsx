import UpsertJobInfoModal from "./UpsertJobInfo.m";
import { useEffect, useState } from "react";
import { IJobInfo } from "../../types/job-info.type";
import { jobInfosService } from "../../service/job-info.service";
import { Button, Card, Col, Row, Typography } from "antd";
import {
  CenterStyled,
  Pointer,
  SpaceStyled,
} from "../../global-style/global.s";
import JobInfosComponent from "./JobInfors.c";

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
      <Button onClick={onOpenModalHandler}>افزودن بخش جدید</Button>
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
